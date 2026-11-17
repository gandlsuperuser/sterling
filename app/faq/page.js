import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Local answers for oilfield buyers: next-day shipping from stock in Jourdanton, Texas, quotes within 1–3 business days, and the 2-inch FIG 1502 flow iron Sterling Wellhead carries.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Sterling Wellhead",
    description: "How soon is the lead time, how fast is a quote, and what do you need in an RFQ? Straight answers from Sterling Wellhead.",
    url: "/faq",
  },
};

const faqs = [
  {
    q: "How soon can I get my order?",
    a: "In-stock items ship the next day from our yard in Jourdanton, Texas. Select custom configurations are available in as little as 10–14 days. Include your required-on-site date in your RFQ and we will confirm timing before you commit.",
  },
  {
    q: "How fast will I get a quote?",
    a: "Most quotes are turned around within 1–3 business days of receiving a complete RFQ.",
  },
  {
    q: "How do I request a quote?",
    a: "Send an RFQ through the form on this site, email sales@sterlingwellhead.com, or call 512-373-0384. Include the drawing number, quantity, delivery location, and required-on-site date.",
  },
  {
    q: "What products do you carry?",
    a: "New 2-inch FIG 1502 flow iron rated to 10,000 PSI: plug valves, union pipe in 4, 6, and 10 ft lengths, and Style 10 and Style 50 swivel joints. Our current inventory lists 48 units — see the inventory table on the home page.",
  },
  {
    q: "Do you publish prices online?",
    a: "No. All sales are quote-based. Send your line list and quantities and we will return pricing within 1–3 business days.",
  },
  {
    q: "Where is your stock held?",
    a: "In Jourdanton, Texas, at 217 Main St, 78026. Standard parts are held in local inventory and ship the next day.",
  },
  {
    q: "Do you deliver, or can I pick up locally?",
    a: "In-stock items ship the next day. Tell us your delivery location and timing in your RFQ and our team will confirm delivery or local pickup arrangements.",
  },
  {
    q: "What should I include in my RFQ?",
    a: "A line list with quantities and drawing numbers, the delivery location, and the required-on-site date. If you need pressure test documentation, ask for it with the RFQ.",
  },
  {
    q: "What if the part I need isn't in stock?",
    a: "Select custom configurations are available in as little as 10–14 days. Contact sales with the drawing number and quantity and we will confirm availability and timing.",
  },
  {
    q: "How do I check current availability?",
    a: "The inventory table on our home page lists current quantities by drawing number. Quantities change, so contact sales to confirm availability for your order.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <main className="blog-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <section className="blog-index section">
        <div className="section-kicker"><span>FAQ</span><p>ANSWERS BEFORE YOU ASK</p></div>
        <div className="blog-index-head">
          <h2>Questions, answered.</h2>
          <p>Lead times, quotes, and ordering — the answers local buyers ask for most, without the runaround.</p>
        </div>
        <div className="faq" style={{ marginTop: "60px" }}>
          {faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}<span>+</span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <div className="article-cta" style={{ marginTop: "70px" }}>
          <div><small>STILL HAVE A QUESTION?</small><h2>Ask sales directly.</h2></div>
          <a href="/#contact">Request a quote ↗</a>
        </div>
      </section>
    </main>
  );
}
