"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import { formatNumber } from "@/lib/i18n";
import { useLanguage } from "@/lib/usePreferences";

const SLIDE_DURATION = 5500;
const SWIPE_DISTANCE = 40;

export function ProjectHeroSlider({ images, title }: { images: string[]; title: string }) {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = images.length;
  const holding = paused || hovering || focused || touching;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (count < 2 || holding) return;
    const timer = setTimeout(() => setActive((current) => (current + 1) % count), SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [active, count, holding]);

  if (count === 0) return null;

  function onTouchStart(event: TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
    setTouching(true);
  }

  function onTouchEnd(event: TouchEvent) {
    setTouching(false);
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < SWIPE_DISTANCE) return;
    // Swiping against the reading direction moves forward.
    const forward = language === "fa" ? distance > 0 : distance < 0;
    setActive((current) => (current + (forward ? 1 : -1) + count) % count);
  }

  return (
    <section
      className="detail-hero-media"
      aria-roledescription="carousel"
      aria-label={t.exteriorPhotographs}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovering(true); }}
      onPointerLeave={() => setHovering(false)}
      onFocus={(event) => { if (event.target.matches(":focus-visible")) setFocused(true); }}
      onBlur={() => setFocused(false)}
    >
      <div
        className="hero-slider-stage"
        onTouchStart={count > 1 ? onTouchStart : undefined}
        onTouchEnd={count > 1 ? onTouchEnd : undefined}
        onTouchCancel={() => setTouching(false)}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={t.exteriorAlt(title, formatNumber(index + 1, language))}
            className={index === active ? "hero-slide active" : "hero-slide"}
            aria-hidden={index !== active}
            decoding="async"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {count > 1 && (
        <div className="hero-slider-controls">
          <div className="hero-indicators">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                className={index === active ? "hero-indicator active" : "hero-indicator"}
                aria-label={t.slideLabel(formatNumber(index + 1, language))}
                aria-current={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-playback"
            aria-label={paused ? t.playSlideshow : t.pauseSlideshow}
            onClick={() => setPaused((current) => !current)}
          >
            <svg viewBox="0 0 12 12" aria-hidden="true">
              {paused
                ? <path d="M3.5 2v8l6-4z" fill="currentColor" />
                : <path d="M4 2.5v7M8 2.5v7" fill="none" stroke="currentColor" strokeWidth="1.2" />}
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
