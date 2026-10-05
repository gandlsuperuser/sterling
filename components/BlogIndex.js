"use client";

import { useState } from "react";
import { categories, posts } from "@/lib/posts";

export default function BlogIndex() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? posts : posts.filter((post) => post.category === active);
  return <>
    <div className="blog-filters" aria-label="Article categories">{categories.map((category) => <button key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}</div>
    <div className="article-grid">{visible.map((post, index) => <article className={index === 0 && active === "All" ? "article-card featured" : "article-card"} key={post.slug}><a className="article-card-visual" href={`/blog/${post.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><div className="article-symbol">{post.category === "Field Notes" ? "↗" : post.category === "Buyer Resources" ? "✓" : "◎"}</div></a><div className="article-card-copy"><div className="article-meta"><span>{post.category}</span><time dateTime={post.date}>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time><span>{post.readTime}</span></div><h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2><p>{post.excerpt}</p><a className="article-link" href={`/blog/${post.slug}`}>Read article <b>↗</b></a></div></article>)}</div>
  </>;
}
