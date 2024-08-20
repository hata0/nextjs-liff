import { Liff } from "@line/liff";
import { useEffect, useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { getNearbyPlaces, PlaceData } from "@/services/backend/places/nearby";
import { createPlaceDetailUrl } from "@/utils/google-map/createPlaceDetailUrl";
import { createPlaceDirectionUrl } from "@/utils/google-map/createPlaceDirectionUrl";

type Props = {
  liff?: Liff;
};

type Position = {
  latitude: number;
  longitude: number;
};

export const Map = ({ liff }: Props) => {
  const [placesData, setPlacesData] = useState<PlaceData[] | undefined>();

  const [position, setPosition] = useState<Position | undefined>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  }, []);

  const handleNearbyRestaurants = async () => {
    const idToken = liff?.getIDToken() ?? "";
    const { res } = await getNearbyPlaces(idToken);
    if (res?.ok) {
      const placesData = (await res?.json()) as PlaceData[];
      setPlacesData(placesData);
    }
  };

  return (
    <div>
      <Button onClick={() => void handleNearbyRestaurants()}>近くのレストランを取得</Button>
      {placesData &&
        placesData.map((placeData, index) => (
          <div key={index}>
            <a
              href={createPlaceDetailUrl({
                name: placeData.name ?? "",
                placeId: placeData.placeId ?? "",
              })}
            >
              詳細を表示
            </a>
            <a
              href={
                position
                  ? createPlaceDirectionUrl({
                      destination: {
                        name: placeData.name ?? "",
                        placeId: placeData.placeId ?? "",
                      },
                      origin: position,
                    })
                  : ""
              }
            >
              ルートを表示
            </a>
          </div>
        ))}
    </div>
  );
};
