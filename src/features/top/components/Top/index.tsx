import Image from "next/image";
import { Profile } from "@liff/get-profile";
import { Liff } from "@line/liff";

type Props = {
  liff: Liff | null;
  profile: Profile | null;
};

export const Top = ({ liff, profile }: Props) => {
  return (
    <div>
      {profile && (
        <div>
          <Image alt="profile" height={80} src={profile.pictureUrl ?? ""} width={80} />
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
};
