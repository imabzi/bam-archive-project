"use client";

import type { PartialLocalizedText, Project } from "@/data/projects";
import { formatNumber, type Dictionary, type Language } from "@/lib/i18n";
import { useLanguage } from "@/lib/usePreferences";

// Placeholder values that must never reach the page, even if entered in the data.
const EMPTY_VALUE = /^(n\/?a|unknown|none|null|tbd|-+|–|—|0|۰|نامشخص)$/i;

function text(value: PartialLocalizedText | undefined, language: Language) {
  const content = value?.[language]?.trim();
  return content && !EMPTY_VALUE.test(content) ? content : undefined;
}

function count(value: number | undefined, language: Language) {
  return value !== undefined && Number.isFinite(value) && value > 0 ? formatNumber(value, language) : undefined;
}

function factsFor(project: Project, language: Language, t: Dictionary) {
  const { facts, location, category } = project;
  const area = (value: number | undefined) => {
    const amount = count(value, language);
    return amount && `${amount} ${t.squareMeters}`;
  };
  const place = [text(location?.district, language), text(location?.city, language), text(location?.country, language)]
    .filter(Boolean)
    .join(t.listSeparator);

  return [
    { label: t.factProjectType, value: category[language] },
    { label: t.factLocation, value: place },
    { label: t.factCompletionYear, value: text(facts.completionYear, language) },
    { label: t.factSiteArea, value: area(facts.siteArea) },
    { label: t.factBuiltUpArea, value: area(facts.builtUpArea) },
    { label: t.factGrossFloorArea, value: area(facts.grossFloorArea) },
    { label: t.factFloors, value: count(facts.floors, language) },
    { label: t.factUnits, value: count(facts.units, language) },
    { label: t.factBuildings, value: count(facts.buildings, language) },
    { label: t.factParking, value: count(facts.parking, language) },
    { label: t.factStructure, value: text(facts.structure, language) },
    { label: t.factFacade, value: text(facts.facade, language) },
    { label: t.factArchitect, value: text(facts.architect, language) },
    { label: t.factDeveloper, value: text(facts.developer, language) },
    { label: t.factContractor, value: text(facts.contractor, language) },
    { label: t.factStatus, value: text(facts.status, language) },
  ].filter((fact) => fact.value);
}

export function ProjectInformation({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const description = text(project.description, language);

  return (
    <section className="project-overview">
      <div>
        <span className="section-kicker">{t.projectInformation}</span>
        {description && <p className="overview-copy">{description}</p>}
      </div>
      <dl className="facts-grid">
        {factsFor(project, language, t).map((fact) => (
          <div className="fact" key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
