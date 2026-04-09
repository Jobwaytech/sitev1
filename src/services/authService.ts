import { database } from "@/services/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { get, push, ref, set, update } from "firebase/database";

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  user_type: string;
}

export interface LoginPayload {
  username?: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    username: string;
    email: string;
    user_type: string;
  };
}

const auth = getAuth();

const getStorageTokenKey = () => "authToken";
const getStorageUserKey = () => "user";
const getCurrentMonthKey = () => new Date().toISOString().slice(0, 7);
const getCurrentDateTimeKey = () => new Date().getDate();

const saveSession = (token: string, user: AuthResponse["user"]) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(getStorageTokenKey(), token);
  localStorage.setItem(getStorageUserKey(), JSON.stringify(user));
};

const clearSession = () => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(getStorageTokenKey());
  localStorage.removeItem(getStorageUserKey());
};

const parseFirebaseError = (error: unknown, fallback: string): string => {
  if (typeof error === "object" && error !== null && "message" in error) {
    const message = (error as { message?: string }).message;
    if (typeof message === "string" && message.trim().length > 0) {
      return message;
    }
  }
  return fallback;
};

interface DeviceLocation {
  latitude: number;
  longitude: number;
  accuracy?: number;
  landmark?: string;
}

const fetchPublicIp = async (): Promise<string | null> => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
      return null;
    }
    const data = (await response.json()) as { ip?: string };
    return data.ip ?? null;
  } catch {
    return null;
  }
};

async function getLandmark(lat: number, lng: number) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=14.059520811587985&lon=78.77064712939915`,
    );

    const json = await res.json();
    return json.display_name || "No landmark found";
  } catch (e) {
    return "Error fetching landmark";
  }
}

const getGeolocationErrorMessage = (
  error: GeolocationPositionError,
): string => {
  if (error.code === error.PERMISSION_DENIED) {
    return "Location permission denied";
  }
  if (error.code === error.POSITION_UNAVAILABLE) {
    return "Location position unavailable";
  }
  if (error.code === error.TIMEOUT) {
    return "Location request timed out";
  }
  return error.message || "Unable to retrieve location";
};

const getBrowserLocation = async (): Promise<
  DeviceLocation | { error: string } | null
> => {
  if (typeof window === "undefined" || !("geolocation" in navigator)) {
    return null;
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        const landmark = await getLandmark(latitude, longitude);

        resolve({
          longitude,
          latitude,
          accuracy,
          landmark,
        });
      },
      (err) => {
        resolve({ error: getGeolocationErrorMessage(err) });
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      },
    );
  });
};

const saveLoginDeviceDetails = async (uid: string) => {
  if (typeof window === "undefined") {
    return;
  }

  const [ipAddress, location] = await Promise.all([
    fetchPublicIp(),
    getBrowserLocation(),
  ]);

  const eventPayload: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    ipAddress,
    location,
    userAgent: navigator.userAgent,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  const monthKey = getCurrentMonthKey();
  const dateTimeKey = getCurrentDateTimeKey();

  await push(
    ref(database, `users/${uid}/login_events/${monthKey}/${dateTimeKey}`),
    eventPayload,
  );
  await update(ref(database, `users/${uid}`), {
    lastLoginAt: eventPayload.timestamp,
    lastLoginIp: ipAddress,
    lastLoginLocation: location,
  });
};

const saveLogoutDeviceDetails = async (uid: string) => {
  if (typeof window === "undefined") {
    return;
  }

  const [ipAddress, location] = await Promise.all([
    fetchPublicIp(),
    getBrowserLocation(),
  ]);

  const eventPayload: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    ipAddress,
    location,
    userAgent: navigator.userAgent,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  const monthKey = getCurrentMonthKey();

  const dateTimeKey = getCurrentDateTimeKey();

  await push(
    ref(database, `users/${uid}/logout_events/${monthKey}/${dateTimeKey}`),
    eventPayload,
  );
  await update(ref(database, `users/${uid}`), {
    lastLogoutAt: eventPayload.timestamp,
    lastLogoutIp: ipAddress,
    lastLogoutLocation: location,
  });
};

export const authService = {
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password,
      );
      const uid = credential.user.uid;
      const userData = {
        username: payload.username,
        email: payload.email,
        user_type: payload.user_type,
      };

      await set(ref(database, `users/${uid}`), userData);
      const token = await credential.user.getIdToken();
      saveSession(token, userData);

      return {
        message: "User registered successfully",
        success: true,
        user: userData,
        token,
      };
    } catch (error) {
      return {
        success: false,
        message: parseFirebaseError(error, "Error registering user"),
      };
    }
  },

  async login(payload: LoginPayload): Promise<AuthResponse> {
    try {
      const loginEmail = payload.email ?? payload.username;
      if (!loginEmail) {
        return {
          success: false,
          message: "Email is required to login",
        };
      }

      const credential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        payload.password,
      );
      const uid = credential.user.uid;
      const token = await credential.user.getIdToken();

      const userSnapshot = await get(ref(database, `users/${uid}`));
      const profile = userSnapshot.exists()
        ? (userSnapshot.val() as AuthResponse["user"])
        : {
            username:
              credential.user.displayName ?? loginEmail.split("@")[0] ?? "user",
            email: credential.user.email ?? loginEmail,
            user_type: "user",
          };

      saveSession(token, profile);

      try {
        await saveLoginDeviceDetails(uid);
      } catch {
        // Login should not fail if device metadata cannot be captured.
      }

      return {
        success: true,
        message: "Login successful",
        user: profile,
        token,
      };
    } catch (error) {
      return {
        success: false,
        message: parseFirebaseError(error, "Error logging in"),
      };
    }
  },

  logout() {
    clearSession();
    void signOut(auth);
  },

  async logoutWithDeviceTracking() {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      clearSession();
      void signOut(auth);
      return;
    }

    const uid = currentUser.uid;

    try {
      await saveLogoutDeviceDetails(uid);
    } catch {
      // Logout should not fail if device metadata cannot be captured.
    }

    clearSession();
    void signOut(auth);
  },

  getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(getStorageTokenKey());
    }
    return null;
  },

  getUser() {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem(getStorageUserKey());
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  isAuthenticated(): boolean {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem(getStorageTokenKey());
    }
    return false;
  },
};
