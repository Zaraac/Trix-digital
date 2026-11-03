import type { CollectionEntry } from "astro:content";

export type PortfolioEntry = CollectionEntry<"portfolio">;
export type PortfolioCategory = PortfolioEntry["data"]["category"];
export type PortfolioEntryType = PortfolioEntry["data"]["entryType"];

export const categoryLabels: Record<PortfolioCategory, string> = {
  site: "Site",
  system: "Sistema",
};

export const entryTypeLabels: Record<PortfolioEntryType, string> = {
  project: "Projeto real",
  concept: "Modelo conceitual",
};

export const sortPortfolio = (entries: PortfolioEntry[]) =>
  entries.toSorted((first, second) => first.data.order - second.data.order);

export const getPublishedPortfolio = (entries: PortfolioEntry[]) =>
  sortPortfolio(entries.filter((entry) => !entry.data.draft));
