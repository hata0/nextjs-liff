import type { Profile } from "@liff/get-profile";
import { Liff } from "@line/liff";
import Image from "next/image";

type Props = {
  liff?: Liff;
  profile?: Profile;
};

export const Top = ({ liff, profile }: Props) => {
  return (
    <div>
      {profile && (
        <div>
          <Image alt="profile" height={80} src={profile.pictureUrl ?? ""} width={80} />
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
    </div>
  );
};
