import { BACKEND_URL } from "@/constants/backend-url";
import { fetcher } from "@/utils/fetcher";

export * from "./type";

export const createPath = () => `${BACKEND_URL}/places/nearby`;

export const getNearbyPlaces = (idToken: string) =>
  fetcher(createPath(), {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
