"use client";

import { useState } from "react";
import type { ProjectLocation } from "@/data/projects";
import { useLanguage } from "@/lib/usePreferences";
import { LocationIcon } from "./LocationIcon";
import { LocationModal } from "./LocationModal";

export function LocationButton({ location, projectTitle }: { location?: ProjectLocation; projectTitle: string }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="location-button" onClick={() => setOpen(true)} aria-label={t.showLocation}>
        <LocationIcon />
        <span>{t.location}</span>
      </button>
      {open && <LocationModal location={location} projectTitle={projectTitle} onClose={() => setOpen(false)} />}
    </>
  );
}
