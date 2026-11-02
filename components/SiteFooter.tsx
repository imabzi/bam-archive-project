"use client";

import { useLanguage } from "@/lib/usePreferences";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <span>{t.brand}</span>
      <span>{t.footerNote}</span>
    </footer>
  );
}
