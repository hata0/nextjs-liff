"use client";
import type { Profile } from "@liff/get-profile";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useLiffContext } from "@/providers/LiffProvider";
import { Top } from "@/features/top/components/Top";
import { useProfile } from "@/hooks/useProfile";

export default function TopPage() {
  const { liff } = useLiffContext();
  const { profile } = useProfile(liff);

  return <Top liff={liff} profile={profile} />;
}
