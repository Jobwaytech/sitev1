import type { NextApiRequest, NextApiResponse } from "next";
import { get, ref } from "firebase/database";

import { database } from "@/services/firebase";

type location = {
  accuracy: number;
  landmark: string;
  latitude: number;
  longitude: number;
};

type UserDetails = {
  uid: string;
  username?: string;
  email?: string;
  user_type?: string;
  lastLoginAt?: string;
  lastLoginIp?: string | null;
  lastLoginLocation?: location;
  lastLogoutAt?: string;
  lastLogoutIp?: string | null;
  lastLogoutLocation?: location;
};

type UserApiResponse = {
  success: boolean;
  user?: UserDetails;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserApiResponse>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const uidParam = req.query.uid;
  const uid = Array.isArray(uidParam) ? uidParam[0] : uidParam;

  if (!uid) {
    return res.status(400).json({
      success: false,
      message: "User uid is required",
    });
  }

  try {
    const snapshot = await get(ref(database, `users/${uid}`));

    if (!snapshot.exists()) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const userDetails = snapshot.val() as Omit<UserDetails, "uid">;

    return res.status(200).json({
      success: true,
      user: {
        uid,
        ...userDetails,
      },
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user details",
    });
  }
}
