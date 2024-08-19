import { Liff } from "@line/liff";
import { useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { getNearbyPlaces, PlacesData } from "@/services/backend/places/nearby";

type Props = {
  liff?: Liff;
};

export const Map = ({ liff }: Props) => {
  const [placesData, setPlacesData] = useState<PlacesData>([]);

  const handleNearbyRestaurants = async () => {
    const idToken = liff?.getIDToken() ?? "";
    const { res } = await getNearbyPlaces(idToken);
    const placesData = (await res?.json()) as PlacesData;
    setPlacesData(placesData);
  };

  return (
    <div>
      <Button onClick={() => void handleNearbyRestaurants()}>近くのレストランを取得</Button>
      {placesData.map((placeData, index) => (
        <div key={index}>
          <a>詳細を表示</a>
          <a>ルートを表示</a>
        </div>
      ))}
    </div>
  );
};
