"use client";

import { formatNumber } from "@/lib/i18n";
import { useLanguage } from "@/lib/usePreferences";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const { language, t } = useLanguage();

  if (images.length === 0) return null;

  return (
    <section className="gallery-section">
      <span className="section-kicker">{t.interiors}</span>
      <div className="project-gallery">
        {images.map((src, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={src}
              alt={t.interiorAlt(title, formatNumber(index + 1, language))}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
