"use client";

import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { useDocumentTitle, useLanguage } from "@/lib/usePreferences";

export default function NotFound() {
  const { t } = useLanguage();
  useDocumentTitle(`${t.notFoundTitle} — ${t.brand}`);

  return (
    <main className="detail-page">
      <Header />
      <section className="detail-intro not-found">
        <Link href="/" className="back-link">
          <ArrowIcon />
          <span>{t.archiveTitle}</span>
        </Link>
        <h1 className="detail-title">{t.notFoundTitle}</h1>
      </section>
      <SiteFooter />
    </main>
  );
}
