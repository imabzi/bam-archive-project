"use client";

import { Fragment } from "react";
import { languages } from "@/lib/i18n";
import { useLanguage } from "@/lib/usePreferences";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  // dir="ltr": EN / FA keeps its reading order in both languages.
  return (
    <div className="language-switcher" role="group" aria-label={t.languageLabel} dir="ltr">
      {languages.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && <span className="language-divider" aria-hidden="true">/</span>}
          <button
            type="button"
            className={item === language ? "language-option active" : "language-option"}
            lang={item}
            aria-pressed={item === language}
            onClick={() => setLanguage(item)}
          >
            {item.toUpperCase()}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
