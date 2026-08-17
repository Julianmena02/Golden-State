import type { MetadataRoute } from "next";

// ponytail: hand-listed because the site is five static routes. Generate from
// the filesystem only if routes start coming from a CMS.
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/investments", "/contact"].map((path) => ({
    url: `https://temetsei.com${path}`,
  }));
}
