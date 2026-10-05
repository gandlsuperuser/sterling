import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { getPost, posts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sterlingwellhead.com";

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, publishedTime: post.date, modifiedTime: post.updated, authors: ["Sterling Wellhead"] },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.date, dateModified: post.updated, mainEntityOfPage: `${siteUrl}/blog/${post.slug}`, author: { "@type": "Organization", name: "Sterling Wellhead" }, publisher: { "@type": "Organization", name: "Sterling Wellhead" }, keywords: post.keywords.join(", ") };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return <main className="article-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, "\\u003c") }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} /><SiteHeader /><article><header className="article-hero"><a className="back-link" href="/blog">← All insights</a><div className="article-meta"><span>{post.category}</span><time dateTime={post.date}>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time><span>{post.readTime}</span></div><h1>{post.title}</h1><p>{post.excerpt}</p></header><div className="article-layout"><aside><b>IN THIS ARTICLE</b>{post.sections.map((section, i) => <a key={section.heading} href={`#section-${i + 1}`}>{String(i + 1).padStart(2, "0")} {section.heading}</a>)}<a href="#faq">FAQ</a></aside><div className="article-body"><section className="quick-answer"><span>QUICK ANSWER</span><p>{post.answer}</p></section>{post.sections.map((section, i) => <section id={`section-${i + 1}`} key={section.heading}><span className="body-index">{String(i + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section className="faq" id="faq"><span className="body-index">FAQ</span><h2>Frequently asked questions</h2>{post.faqs.map(({ q, a }) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section><div className="article-cta"><div><small>NEED EQUIPMENT?</small><h2>Turn the spec into a quote.</h2></div><a href="/#inventory">View inventory ↗</a></div></div></div></article><section className="related"><p>KEEP READING</p><div>{related.map((item) => <a href={`/blog/${item.slug}`} key={item.slug}><small>{item.category}</small><h3>{item.title}</h3><span>Read article ↗</span></a>)}</div></section></main>;
}
