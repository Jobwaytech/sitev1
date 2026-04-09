import type { NextApiRequest, NextApiResponse } from "next";
import { get, ref } from "firebase/database";

import { database } from "@/services/firebase";

type UserDetails = {
  uid: string;
  username?: string;
  email?: string;
  user_type?: string;
  lastLoginAt?: string;
  lastLoginIp?: string | null;
  lastLoginLocation?: unknown;
  lastLogoutAt?: string;
  lastLogoutIp?: string | null;
  lastLogoutLocation?: unknown;
};

type UsersApiResponse = {
  success: boolean;
  count?: number;
  users?: UserDetails[];
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersApiResponse>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const snapshot = await get(ref(database, "users"));

    if (!snapshot.exists()) {
      return res.status(200).json({
        success: true,
        count: 0,
        users: [],
      });
    }

    const usersObject = snapshot.val() as Record<
      string,
      Omit<UserDetails, "uid">
    >;
    const users = Object.entries(usersObject).map(([uid, details]) => ({
      uid,
      ...details,
    }));

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
}
