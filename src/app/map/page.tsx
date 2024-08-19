"use client";

import { Map } from "@/features/map/components/Map";
import { useLiffContext } from "@/providers/LiffProvider";

// 詳細表示
// https://www.google.com/maps/search/?api=1&query=駅弁屋 祭 グランスタ東京&query_place_id=ChIJtxODuv6LGGARA0RL4wD9Ggg
// ルート表示
// https://www.google.com/maps/dir/?api=1&origin=35.68105651609583,139.76714872052918&destination=駅弁屋 祭 グランスタ東京&destination_place_id=ChIJtxODuv6LGGARA0RL4wD9Ggg

// name placeId photoReference

export default function MapPage() {
  const { liff } = useLiffContext();

  return <Map liff={liff} />;
}
