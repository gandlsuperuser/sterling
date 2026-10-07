"use client";

import { useMemo, useState } from "react";

const items = [
  { drawing: "T000856 REV.A/0", name: "Plug Valve", description: "2\" FIG 1502 10000 PSI", quantity: 6, category: "Valves" },
  { drawing: "T000864 REV.A/1", name: "Union Pipe", description: "2\" FIG 1502 M×F 4 FT", quantity: 10, category: "Flow Iron" },
  { drawing: "T000866 REV.A/1", name: "Union Pipe", description: "2\" FIG 1502 M×F 6 FT", quantity: 10, category: "Flow Iron" },
  { drawing: "T000855 REV.A/1", name: "Union Pipe", description: "2\" FIG 1502 M×F 10 FT", quantity: 10, category: "Flow Iron" },
  { drawing: "T000620 REV.A/3", name: "Swivel Joints", description: "2\" FIG 1502 M×F STYLE 10", quantity: 6, category: "Swivels" },
  { drawing: "T000693 REV.A/4", name: "Swivel Joints", description: "2\" FIG 1502 M×F STYLE 50", quantity: 6, category: "Swivels" },
];

export default function Inventory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => items.filter((item) => (category === "All" || item.category === category) && Object.values(item).join(" ").toLowerCase().includes(query.toLowerCase())), [query, category]);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return <section className="inventory section" id="inventory">
    <div className="section-kicker"><span>03</span><p>AVAILABLE INVENTORY</p></div>
    <div className="inventory-head"><div><h2>Know what’s ready.<br />Plan what’s next.</h2><p>Current high-pressure equipment available for inquiry. Use the drawing number when requesting a quote.</p></div><div className="stock-total"><b>{total}</b><span>Total units listed</span></div></div>
    <div className="inventory-controls"><label><span className="sr-only">Search inventory</span><i>⌕</i><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search drawing, product, or specification" /></label><div className="filters">{["All", "Valves", "Flow Iron", "Swivels"].map((filter) => <button className={category === filter ? "active" : ""} onClick={() => setCategory(filter)} key={filter}>{filter}</button>)}</div></div>
    <div className="inventory-table" role="region" aria-label="Sterling equipment inventory"><div className="table-row table-head"><span>Drawing no.</span><span>Equipment</span><span>Specification</span><span>Availability</span><span /></div>{filtered.map((item) => <div className="table-row" key={item.drawing}><code>{item.drawing}</code><strong>{item.name}<small>{item.category}</small></strong><span className="spec">{item.description}</span><span className="availability"><i /> {item.quantity} in stock</span><a href={`mailto:PTX@BTX-Supply.com?subject=Inventory inquiry: ${encodeURIComponent(item.drawing)}`}>Inquire ↗</a></div>)}</div>
    {!filtered.length && <p className="empty">No inventory matches that search.</p>}
    <p className="inventory-note"><i /> Inventory quantities reflect the supplied Sterling inventory list and may change. Contact sales to confirm availability.</p>
  </section>;
}
