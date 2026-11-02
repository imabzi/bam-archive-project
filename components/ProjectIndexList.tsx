"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/usePreferences";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectIndexList({ projects }: { projects: Project[] }) {
  const { language } = useLanguage();

  return (
    <ul className="project-index">
      {projects.map((project) => {
        const meta = [
          project.category[language],
          project.location?.city?.[language],
          project.facts.completionYear?.[language],
        ].filter(Boolean);

        return (
          <li key={project.code}>
            <Link href={`/projects/${project.slug}`} className="project-index-link">
              <span className="project-index-title">{project.title[language]}</span>
              <span className="project-index-meta">
                {meta.map((item) => <span key={item}>{item}</span>)}
              </span>
              <span className="project-index-arrow"><ArrowIcon /></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
