"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { useDocumentTitle, useLanguage } from "@/lib/usePreferences";
import { ArrowIcon } from "./ArrowIcon";
import { Header } from "./Header";
import { LocationButton } from "./LocationButton";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectHeroSlider } from "./ProjectHeroSlider";
import { ProjectInformation } from "./ProjectInformation";
import { SiteFooter } from "./SiteFooter";

export function ProjectDetail({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const title = project.title[language];
  useDocumentTitle(`${title} — ${t.brand}`);

  return (
    <main className="detail-page">
      <Header />
      <section className="detail-intro">
        <Link href="/" className="back-link">
          <ArrowIcon />
          <span>{t.archiveTitle}</span>
        </Link>
        <div className="detail-title-row">
          <div className="detail-title-copy">
            <span className="eyebrow">{project.category[language]}</span>
            <h1 className="detail-title">{title}</h1>
          </div>
          <LocationButton location={project.location} projectTitle={title} />
        </div>
      </section>

      <ProjectHeroSlider images={project.images.exterior} title={title} />
      <ProjectInformation project={project} />
      <ProjectGallery images={project.images.interior} title={title} />

      <section className="project-end">
        <Link href="/">{t.browseAllProjects}</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
