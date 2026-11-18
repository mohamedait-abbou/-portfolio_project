/**
 * Prefix a public asset path with the deploy base path.
 *
 * `next/image` does not always apply `basePath` to string `src` values on a
 * static export, so project screenshots and the portrait go through here.
 * The value is inlined at build time through `next.config.ts`.
 */
const prefix = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function asset(path: string) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  return `${prefix}${path.startsWith("/") ? path : `/${path}`}`;
}
