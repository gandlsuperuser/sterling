import Inventory from "@/components/Inventory";

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
          <p className="eyebrow"><span /> PRESSURE-CONTROL EQUIPMENT</p>
          <h1>Built for pressure.<br /><em>Ready for the field.</em></h1>
          <p className="hero-copy">Sterling supplies wellhead and high-pressure flow equipment for crews who value speed, clarity, and dependable performance.</p>
          <div className="hero-actions"><a className="button button-red" href="#inventory">Explore inventory <b>→</b></a><a className="text-link" href="#company">Why Sterling <span>↓</span></a></div>
        </div>
        <div className="hero-stats"><div><b>10K</b><span>PSI rated equipment</span></div><div><b>48</b><span>Units in current stock</span></div><div><b>06</b><span>Traceable line items</span></div></div>
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
        <div className="solution-grid">{solutions.map((item, index) => <article key={item.title}><div className={`product-visual visual-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><div className="valve-glyph"><i /><i /><i /></div></div><div className="product-copy"><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p><strong>{item.spec}</strong></div></article>)}</div>
      </section>

      <Inventory />

      <section className="field-note section">
        <div className="field-image" role="img" aria-label="High-pressure wellhead equipment at an oilfield"><span>FIELD / 31°59′ N</span></div>
        <div className="field-copy"><div className="section-kicker"><span>04</span><p>BUILT AROUND OPERATIONS</p></div><h2>Clear answers.<br />Fewer delays.</h2><p>Pressure-control equipment only helps when it arrives in the right configuration. Our inventory-first process keeps the conversation grounded in available hardware and exact specifications.</p><a className="arrow-link" href="#contact">Start a conversation <b>↗</b></a></div>
      </section>

      <section className="contact" id="contact"><div><p className="eyebrow"><span /> NEED A SPECIFIC CONFIGURATION?</p><h2>Let’s get your next<br />job moving.</h2><a className="contact-address" href="https://maps.google.com/?q=217+Main+St,+Jourdanton,+TX+78026" target="_blank" rel="noreferrer">217 Main St · Jourdanton, TX 78026 ↗</a></div><a className="circle-cta" href="mailto:sales@sterlingwellhead.com"><span>CONTACT<br />STERLING</span><b>↗</b></a></section>

      <footer><a className="brand footer-brand" href="#top"><Mark /><span>STERLING<small>WELLHEAD</small></span></a><div className="footer-nav"><div><b>Navigate</b><a href="#company">Company</a><a href="#solutions">Solutions</a><a href="#inventory">Inventory</a><a href="/blog">Insights</a></div><div><b>Connect</b><a href="mailto:sales@sterlingwellhead.com">Sales inquiries</a><a href="https://maps.google.com/?q=217+Main+St,+Jourdanton,+TX+78026" target="_blank" rel="noreferrer">217 Main St<br />Jourdanton, TX 78026</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sterling Wellhead</span><span>Jourdanton, Texas</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
