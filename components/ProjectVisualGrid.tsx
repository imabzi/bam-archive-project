"use client";

import Link from "next/link";
import { getCoverImage, type Project } from "@/data/projects";
import { useLanguage } from "@/lib/usePreferences";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectVisualGrid({ projects }: { projects: Project[] }) {
  const { language } = useLanguage();

  return (
    <div className="project-grid">
      {projects.map((project) => {
        const cover = getCoverImage(project);
        return (
          <Link href={`/projects/${project.slug}`} className="project-card" key={project.code}>
            <div className="project-image-wrap">
              {cover && <img src={cover} alt="" className="project-image" loading="lazy" />}
            </div>
            <div className="project-card-meta">
              <div>
                <h2>{project.title[language]}</h2>
                <p>{project.category[language]}</p>
              </div>
              <span className="card-arrow"><ArrowIcon /></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
