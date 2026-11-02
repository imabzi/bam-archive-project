"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/usePreferences";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label={t.brandLabel}>
        <img src="/brand/bam-logo.svg" alt="" width={632} height={237} className="brand-logo" />
      </Link>
      <div className="header-end">
        <nav className="top-nav" aria-label={t.primaryNavigation}>
          <Link href="/">
            <span className="nav-full">{t.archiveTitle}</span>
            <span className="nav-short">{t.archiveShort}</span>
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
