"use client";

import { useEffect, useSyncExternalStore } from "react";
import { dictionary } from "./i18n";
import { languagePreference, viewPreference } from "./preferences";

export function useLanguage() {
  const language = useSyncExternalStore(
    languagePreference.subscribe,
    languagePreference.get,
    languagePreference.getServer
  );
  return { language, t: dictionary[language], setLanguage: languagePreference.set };
}

export function useViewMode() {
  const view = useSyncExternalStore(viewPreference.subscribe, viewPreference.get, viewPreference.getServer);
  return { view, setView: viewPreference.set };
}

// Next.js writes the English metadata title on its own schedule, which can land
// after this effect, so the title is re-applied whenever <head> changes.
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const apply = () => {
      if (document.title !== title) document.title = title;
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { subtree: true, childList: true, characterData: true });
    return () => observer.disconnect();
  }, [title]);
}
