import SiteHeader from "@/components/SiteHeader";
import BlogIndex from "@/components/BlogIndex";

export const metadata = {
  title: "Wellhead & Flowline Insights",
  description: "Practical guides for selecting high-pressure wellhead, flowline, plug valve, union pipe, and swivel-joint equipment.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Wellhead & Flowline Insights", description: "Practical pressure-control equipment guidance from Sterling Wellhead.", url: "/blog" },
};

export default function BlogPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Blog", name: "Sterling Wellhead Insights", description: metadata.description, url: "https://sterlingwellhead.com/blog", publisher: { "@type": "Organization", name: "Sterling Wellhead" } };
  return <main className="blog-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><SiteHeader /><section className="blog-hero"><div className="section-kicker light"><span>INSIGHTS</span><p>FIELD KNOWLEDGE / BUYER RESOURCES</p></div><h1>Better specs.<br /><em>Better decisions.</em></h1><p>Clear, practical guidance for sourcing and operating high-pressure wellhead and flowline equipment.</p></section><section className="blog-index section"><div className="blog-index-head"><h2>Latest intelligence</h2><p>Built for buyers, operators, and field teams who need useful answers without the sales pitch.</p></div><BlogIndex /></section><section className="blog-newsletter"><p>STAY CURRENT</p><h2>Pressure-control insight,<br />delivered occasionally.</h2><a href="mailto:PTX@BTX-Supply.com?subject=Subscribe to Sterling Insights">Join the list <span>↗</span></a></section></main>;
}
