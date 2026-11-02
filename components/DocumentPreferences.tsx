"use client";

import { useEffect } from "react";
import { directionOf } from "@/lib/i18n";
import { languagePreference, PENDING_ATTRIBUTE } from "@/lib/preferences";
import { useLanguage } from "@/lib/usePreferences";

// Keeps <html lang dir> in step with the selected language and reveals content
// held back by the boot script once hydration has applied the stored preferences.
export function DocumentPreferences() {
  const { language } = useLanguage();

  useEffect(() => {
    // Read from the store: the first render still holds the server snapshot.
    const current = languagePreference.get();
    const root = document.documentElement;
    root.lang = current;
    root.dir = directionOf(current);
    const frame = requestAnimationFrame(() => root.removeAttribute(PENDING_ATTRIBUTE));
    return () => cancelAnimationFrame(frame);
  }, [language]);

  return null;
}
