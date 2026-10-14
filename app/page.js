import Inventory from "@/components/Inventory";
import InquiryForm from "@/components/InquiryForm";

const capabilities = [
  { number: "01", title: "Field ready", text: "Equipment selected for demanding pressure-control work and fast deployment in the field." },
  { number: "02", title: "Traceable", text: "Every inventory line is organized by drawing number, configuration, and current quantity." },
  { number: "03", title: "Responsive", text: "A practical team that helps operators identify the right iron and move quickly." },
];

const solutions = [
  { tag: "CONTROL", title: "Plug valves", text: "Compact, dependable isolation for high-pressure service and manifold applications.", spec: "2\" · FIG 1502 · 10,000 PSI" },
  { tag: "FLOW", title: "Union pipe", text: "Field-proven connections in the lengths crews need for efficient rig-up and routing.", spec: "4 FT · 6 FT · 10 FT" },
  { tag: "MOVEMENT", title: "Swivel joints", text: "Flexible flowline routing for complex layouts, vibration, and changing site geometry.", spec: "STYLE 10 · STYLE 50" },
];

function Mark() {
  return <span className="mark" aria-hidden="true"><i /><i /><i /></span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sterling Wellhead home"><Mark /><span>STERLING<small>WELLHEAD</small></span></a>
        <nav aria-label="Primary navigation">
          <a href="#company">Company</a><a href="#solutions">Solutions</a><a href="#inventory">Inventory</a><a href="/blog">Insights</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#inventory">View inventory <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> LOCAL STOCK + RAPID CUSTOM</p>
          <h1>Quality meets speed.<br /><em>Stocked local. Built fast.</em></h1>
          <p className="hero-copy">Standard pressure-control parts are available from local inventory. Need a custom configuration? Sterling can deliver select custom parts in as little as 10–14 days.</p>
          <div className="hero-actions"><a className="button button-red" href="#inventory">Explore inventory <b>→</b></a><a className="text-link" href="#company">Why Sterling <span>↓</span></a></div>
        </div>
        <div className="hero-stats"><div><b>LOCAL</b><span>Standard parts in stock</span></div><div><b>48</b><span>Units in current inventory</span></div><div><b>10–14</b><span>Day custom delivery available</span></div></div>
        <span className="hero-index">01 / 04</span>
      </section>

      <section className="intro section" id="company">
        <div className="section-kicker"><span>01</span><p>THE STERLING STANDARD</p></div>
        <div className="intro-grid">
          <h2>Wellhead equipment<br />without the runaround.</h2>
          <div><p className="lead">From high-pressure plug valves to flexible swivel-joint assemblies, Sterling keeps essential field equipment visible, organized, and ready to quote.</p><p>Our approach is simple: understand the application, confirm the specification, and help your team move with confidence.</p></div>
        </div>
        <div className="capability-grid">{capabilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="solutions section" id="solutions">
        <div className="section-kicker light"><span>02</span><p>CORE SOLUTIONS</p></div>
        <div className="solutions-head"><h2>Equipment that earns<br />its place on site.</h2><p>Purpose-built components for the pressure, movement, and pace of modern wellsite operations.</p></div>
        <div className="solution-grid">{solutions.map((item, index) => <article key={item.title}><div className={`product-visual visual-${index + 1}`} role="img" aria-label={index === 0 ? "Cross-section technical drawing of a FIG 1502 plug valve" : index === 1 ? "Sterling red FIG 1502 union pipe" : "Sterling red high-pressure swivel joints"}><span>{String(index + 1).padStart(2, "0")}</span><div className="valve-glyph"><i /><i /><i /></div></div><div className="product-copy"><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p><strong>{item.spec}</strong></div></article>)}</div>
      </section>

      <Inventory />

      <section className="field-note section">
        <div className="field-image" role="img" aria-label="High-pressure wellhead equipment at an oilfield"><span>FIELD / 31°59′ N</span></div>
        <div className="field-copy"><div className="section-kicker"><span>04</span><p>BUILT AROUND OPERATIONS</p></div><h2>Clear answers.<br />Fewer delays.</h2><p>Pressure-control equipment only helps when it arrives in the right configuration. Our inventory-first process keeps the conversation grounded in available hardware and exact specifications.</p><a className="arrow-link" href="#contact">Start a conversation <b>↗</b></a></div>
      </section>

      <section className="inquiry" id="contact"><div className="inquiry-intro"><p className="eyebrow"><span /> REQUEST EQUIPMENT</p><h2>Tell us what<br />the job needs.</h2><p>Share the application, specification, and timing. Sterling will review the request and follow up with availability and next steps.</p><div className="contact-details"><a href="mailto:sales@sterlingwellhead.com"><small>EMAIL</small><strong>sales@sterlingwellhead.com</strong></a><a href="tel:+15123730384"><small>PHONE</small><strong>512-373-0384</strong></a><a href="https://maps.google.com/?q=217+Main+St,+Jourdanton,+TX+78026" target="_blank" rel="noreferrer"><small>LOCATION</small><strong>217 Main St<br />Jourdanton, TX 78026</strong></a></div></div><InquiryForm /></section>

      <footer><a className="brand footer-brand" href="#top"><Mark /><span>STERLING<small>WELLHEAD</small></span></a><div className="footer-nav"><div><b>Navigate</b><a href="#company">Company</a><a href="#solutions">Solutions</a><a href="#inventory">Inventory</a><a href="/blog">Insights</a></div><div><b>Connect</b><a href="mailto:sales@sterlingwellhead.com">sales@sterlingwellhead.com</a><a href="tel:+15123730384">512-373-0384</a><a href="https://maps.google.com/?q=217+Main+St,+Jourdanton,+TX+78026" target="_blank" rel="noreferrer">217 Main St<br />Jourdanton, TX 78026</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sterling Wellhead</span><span>Jourdanton, Texas</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
