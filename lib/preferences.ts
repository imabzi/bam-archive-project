import { defaultLanguage, languages, type Language } from "./i18n";

export const viewModes = ["visual", "index"] as const;
export type ViewMode = (typeof viewModes)[number];

const LANGUAGE_KEY = "bam-language";
const VIEW_KEY = "bam-view";
export const PENDING_ATTRIBUTE = "data-preferences-pending";

// A small external store over localStorage. The server always renders the
// fallback value; the client switches to the stored value during hydration.
function createPreference<T extends string>(key: string, values: readonly T[], fallback: T) {
  let current: T | null = null;
  const listeners = new Set<() => void>();

  const read = (): T => {
    try {
      const stored = window.localStorage.getItem(key);
      return values.includes(stored as T) ? (stored as T) : fallback;
    } catch {
      return fallback;
    }
  };

  const onStorage = (event: StorageEvent) => {
    if (event.key !== key) return;
    current = read();
    listeners.forEach((listener) => listener());
  };

  return {
    get: () => (current ??= read()),
    getServer: () => fallback,
    set: (value: T) => {
      current = value;
      try {
        window.localStorage.setItem(key, value);
      } catch {
        // Storage can be blocked; the choice still applies for this visit.
      }
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener: () => void) => {
      if (listeners.size === 0) window.addEventListener("storage", onStorage);
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
        if (listeners.size === 0) window.removeEventListener("storage", onStorage);
      };
    },
  };
}

export const languagePreference = createPreference<Language>(LANGUAGE_KEY, languages, defaultLanguage);
export const viewPreference = createPreference<ViewMode>(VIEW_KEY, viewModes, "visual");

// Runs before first paint so returning visitors never see the default language
// or view flash. Content that would change stays hidden until hydration, and the
// timeout keeps the page visible even if the JavaScript bundle fails to load.
export const preferenceBootScript = `(function(){try{
var d=document.documentElement,p=null;
if(localStorage.getItem(${JSON.stringify(LANGUAGE_KEY)})==="fa"){d.lang="fa";d.dir="rtl";p="language"}
else if(localStorage.getItem(${JSON.stringify(VIEW_KEY)})==="index"){p="view"}
if(p){d.setAttribute(${JSON.stringify(PENDING_ATTRIBUTE)},p);setTimeout(function(){d.removeAttribute(${JSON.stringify(PENDING_ATTRIBUTE)})},3000)}
}catch(e){}})();`;
