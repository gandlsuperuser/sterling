import { posts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sterlingwellhead.com";

export default function sitemap() {
  return [
    { url: siteUrl, lastModified: "2026-10-05", changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: "2026-10-05", changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/faq`, lastModified: "2026-11-17", changeFrequency: "monthly", priority: 0.8 },
    ...posts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: post.updated, changeFrequency: "monthly", priority: 0.8 })),
  ];
}
