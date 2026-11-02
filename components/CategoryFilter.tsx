"use client";

import { projectCategories, type CategoryId } from "@/data/projects";
import { useLanguage } from "@/lib/usePreferences";

export type CategorySelection = "all" | CategoryId;

const categoryIds = Object.keys(projectCategories) as CategoryId[];

export function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: CategorySelection;
  onSelect: (selection: CategorySelection) => void;
}) {
  const { language, t } = useLanguage();

  const options: Array<{ id: CategorySelection; label: string }> = [
    { id: "all", label: t.categoryAll },
    ...categoryIds.map((id) => ({ id, label: projectCategories[id][language] })),
  ];

  return (
    <div className="category-filter" role="group" aria-label={t.categoriesLabel}>
      {options.map(({ id, label }) => (
        <button
          type="button"
          key={id}
          className={id === selected ? "category active" : "category"}
          aria-pressed={id === selected}
          onClick={(event) => {
            // On narrow screens the row scrolls, so bring a part-hidden choice fully into view.
            event.currentTarget.scrollIntoView({ inline: "nearest", block: "nearest" });
            onSelect(id);
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
