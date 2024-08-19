import { HttpResponse } from "msw";

import { createPath } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";

const path = createPath();

export const getNearbyPlacesHandler = httpHandlerFactory("get", path, ({ request }) => {
  request.headers.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  return HttpResponse.json([
    {
      name: "カレー",
      photoReference:
        "AelY_Cua_jUI0ac2FgkoQC8Hp85KFsxiEmjVUrPGlshHB41R0kDNKhbP_J1dbAoAxbHydp-H4-dJZCm9NCc0NKXFVe2JOhv3EeFnUQOA2vUpLM0CaKtz2oxjNg1gZH7p8g7U-4mGTCRfZuXYOq-jJzu0GXwkKf_PhvMSLTWReXRzwjezk-0v",
      placeId: "aaaa",
    },
    {
      name: "ピザ",
      photoReference:
        "AelY_CuWdvsPdcSfEiXyX3b_QFzxnSAoR78amB199jIp7k-7p8JfHFNlfpjhxbfjDNHebzwxTSSLkUvV7uO5LHVTlZdm2tWOlRy88NcHjgo0QCOoTO7QaKep8E8Y_c80137WSl_c-CDX7FokpUy6ef_LNw6YtN7Fu2m0OfcvRiD4pghMt8AL",
      placeId: "aaaa",
    },
  ]);
});
