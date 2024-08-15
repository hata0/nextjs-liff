import type { Profile } from "@liff/get-profile";
import { Liff } from "@line/liff";
import { useEffect, useState } from "react";

export const useProfile = (liff: Liff | null) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    void (async () => {
      if (liff?.isLoggedIn()) {
        const profile = await liff.getProfile();
        setProfile(profile);
      }
    })();
  }, [liff]);

  return { profile };
};
