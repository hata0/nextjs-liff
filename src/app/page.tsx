"use client";
import type { Profile } from "@liff/get-profile";
import { useEffect, useState } from "react";

import { useLiffContext } from "@/providers/LiffProvider";

export default function TopPage() {
  const { liff } = useLiffContext();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    void (async () => {
      if (liff?.isLoggedIn()) {
        const profile = await liff.getProfile();
        setProfile(profile);
      }
    })();
  }, [liff]);

  return (
    <div>
      {profile && (
        <div>
          {/* <Image
            src={profile.pictureUrl}
            alt='profile'
            className='rounded-full w-20 h-20 mx-auto mb-4'
          /> */}
          <p className="text-center text-xl font-bold">userId: {profile.userId}</p>
          <p className="text-center text-gray-500">displayName: {profile.displayName}</p>
        </div>
      )}
      {profile ? (
        <button
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          onClick={() => {
            liff?.logout();
            location.reload();
          }}
        >
          logout
        </button>
      ) : (
        <button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => liff?.login()}
        >
          login
        </button>
      )}
    </div>
  );
}
