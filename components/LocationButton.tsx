"use client";

import { useLanguage } from "@/lib/usePreferences";
import { LocationIcon } from "./LocationIcon";

export function LocationButton({ url }: { url?: string }) {
  const { t } = useLanguage();

  if (!url) return null;

  return (
    <a className="location-button" href={url} target="_blank" rel="noopener noreferrer" aria-label={t.showLocation}>
      <LocationIcon />
      <span>{t.location}</span>
    </a>
  );
}
