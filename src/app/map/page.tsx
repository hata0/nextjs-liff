"use client";

import { Map } from "@/features/map/components/Map";
import { useLiffContext } from "@/providers/LiffProvider";

export default function MapPage() {
  const { liff } = useLiffContext();

  return <Map liff={liff} />;
}
