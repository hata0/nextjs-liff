"use client";

import { Top } from "@/features/top/components/Top";
import { useProfile } from "@/hooks/useProfile";
import { useLiffContext } from "@/providers/LiffProvider";

export default function TopPage() {
  const { liff } = useLiffContext();
  const { profile } = useProfile(liff);

  return <Top liff={liff} profile={profile} />;
}
