"use client";

import { useEffect, useRef } from "react";
import type { ProjectLocation } from "@/data/projects";
import { useLanguage } from "@/lib/usePreferences";
import { LocationIcon } from "./LocationIcon";

const DEFAULT_MAP_SPAN = 0.005; // About a kilometre either side: enough to read the building's streets.

export function LocationModal({
  location,
  projectTitle,
  onClose,
}: {
  location?: ProjectLocation;
  projectTitle: string;
  onClose: () => void;
}) {
  const { language, t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Closing natively returns focus to the Location button, then fires onClose.
  const close = () => dialogRef.current?.close();

  const place = [location?.address?.[language], location?.district?.[language], location?.city?.[language], location?.country?.[language]]
    .filter(Boolean)
    .join(t.listSeparator);

  const latitude = location?.latitude;
  const longitude = location?.longitude;
  const hasCoordinates = typeof latitude === "number" && typeof longitude === "number";
  const span = location?.mapSpan ?? DEFAULT_MAP_SPAN;

  return (
    <dialog
      ref={dialogRef}
      className="map-modal"
      aria-label={t.projectLocation}
      onClose={onClose}
      onClick={(event) => { if (event.target === dialogRef.current) close(); }}
    >
      <div className="map-modal-body">
        <div className="map-modal-head">
          <div>
            <span className="eyebrow">{t.projectLocation}</span>
            <strong>{place || projectTitle}</strong>
          </div>
          <button type="button" className="modal-close" onClick={close} aria-label={t.close}>×</button>
        </div>
        {hasCoordinates ? (
          <>
            <iframe
              title={t.mapTitle}
              className="map-frame"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - span}%2C${latitude - span}%2C${longitude + span}%2C${latitude + span}&layer=mapnik&marker=${latitude}%2C${longitude}`}
            />
            <a
              className="map-link"
              href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.openInMaps}
            </a>
          </>
        ) : (
          <div className="map-empty">
            <LocationIcon />
            <p>{t.mapUnavailable}</p>
          </div>
        )}
      </div>
    </dialog>
  );
}
