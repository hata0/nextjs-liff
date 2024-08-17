import { BACKEND_URL } from "@/constants/backend-url";
import { fetcher } from "@/utils/fetcher";

export const createPath = () => `${BACKEND_URL}/count-up`;

export const putCountUp = (idToken: string) =>
  fetcher(createPath(), {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    method: "PUT",
  });
