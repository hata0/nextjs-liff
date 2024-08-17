import type { Profile } from "@liff/get-profile";
import { Liff } from "@line/liff";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { putCountUp } from "@/services/backend/count-up";

type Props = {
  liff?: Liff;
  profile?: Profile;
};

type Position = {
  latitude: number;
  longitude: number;
};

export const Top = ({ liff, profile }: Props) => {
  const [position, setPosition] = useState<Position | undefined>();

  const handleGetCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

  const handleCountUp = async () => {
    // const idToken = liff?.getIDToken() ?? "";
    const idToken = "test-id-token";
    await putCountUp(idToken);
  };

  return (
    <div className="inline-flex flex-col">
      {profile && (
        <div>
          <Image priority alt="profile" height={80} src={profile.pictureUrl ?? ""} width={80} />
          <div>userId: {profile.userId}</div>
          <div>displayName: {profile.displayName}</div>
          <div>statusMessage: {profile.statusMessage}</div>
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
      <Button onClick={handleGetCurrentPosition}>現在地を取得</Button>
      {position && (
        <div>
          <div>{position.latitude}</div>
          <div>{position.longitude}</div>
        </div>
      )}
      <Button onClick={() => void handleCountUp()}>カウントアップ</Button>
    </div>
  );
};
