const base = import.meta.env.BASE_URL;
const normalizedBase = base.endsWith("/") ? base : `${base}/`;

export const withBase = (path: string) => {
  if (/^(?:https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${normalizedBase}${path.replace(/^\/+/, "")}`;
};
