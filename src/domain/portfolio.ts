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

/**
 * Separa o item em destaque dos demais. Usa o primeiro com `featured: true`;
 * sem nenhum marcado, recorre ao primeiro da ordem.
 */
export const splitFeatured = (entries: PortfolioEntry[]) => {
  const featured = entries.find((entry) => entry.data.featured) ?? entries[0];
  return {
    featured,
    others: entries.filter((entry) => entry !== featured),
  };
};

/** Vizinhos para a navegação entre trabalhos; vazio quando não há outro item. */
export const getNeighbours = (entries: PortfolioEntry[], index: number) => {
  if (entries.length < 2) return { previous: undefined, next: undefined };
  const previous = entries.at(index - 1);
  const next = entries[(index + 1) % entries.length];
  return {
    previous,
    // Com apenas dois itens, anterior e próximo seriam o mesmo: mostra só um.
    next: next === previous ? undefined : next,
  };
};
