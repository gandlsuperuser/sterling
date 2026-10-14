"use client";

import { useState } from "react";

const initialState = { name: "", company: "", email: "", phone: "", product: "", quantity: "", pressure: "", timeline: "", message: "", website: "" };

export default function InquiryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  async function submit(event) {
    event.preventDefault();
    if (form.website) return;
    setStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@sterlingwellhead.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Sterling inquiry — ${form.product || "General equipment"}`,
          _template: "table",
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          product: form.product,
          quantity: form.quantity,
          working_pressure: form.pressure,
          required_timeline: form.timeline,
          message: form.message,
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setForm(initialState);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return <form className="inquiry-form" onSubmit={submit}>
    <input className="form-honeypot" name="website" value={form.website} onChange={update} tabIndex="-1" autoComplete="off" aria-hidden="true" />
    <div className="form-row"><label>Full name <span>*</span><input name="name" value={form.name} onChange={update} autoComplete="name" required placeholder="Your name" /></label><label>Company <span>*</span><input name="company" value={form.company} onChange={update} autoComplete="organization" required placeholder="Company name" /></label></div>
    <div className="form-row"><label>Email <span>*</span><input type="email" name="email" value={form.email} onChange={update} autoComplete="email" required placeholder="name@company.com" /></label><label>Phone<input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" placeholder="(555) 555-5555" /></label></div>
    <div className="form-row"><label>Equipment <span>*</span><select name="product" value={form.product} onChange={update} required><option value="" disabled>Select equipment</option><option>Plug Valve</option><option>Union Pipe</option><option>Swivel Joint</option><option>Multiple Products</option><option>Other / Custom</option></select></label><label>Quantity<input type="number" name="quantity" value={form.quantity} onChange={update} min="1" inputMode="numeric" placeholder="Units needed" /></label></div>
    <div className="form-row"><label>Working pressure<select name="pressure" value={form.pressure} onChange={update}><option value="">Select pressure</option><option>10,000 PSI</option><option>15,000 PSI</option><option>20,000 PSI</option><option>Other / To confirm</option></select></label><label>Required timeline<select name="timeline" value={form.timeline} onChange={update}><option value="">Select timeline</option><option>Immediately</option><option>Within 2 weeks</option><option>Within 30 days</option><option>Planning / Budgetary</option></select></label></div>
    <label>Project details <span>*</span><textarea name="message" value={form.message} onChange={update} required rows="5" placeholder="Include drawing numbers, lengths, end connections, service conditions, delivery location, or documentation requirements." /></label>
    <div className="form-submit"><p>By submitting, you agree that Sterling Wellhead may contact you about this inquiry.</p><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send inquiry"}<b>↗</b></button></div>
    <div className={`form-status ${status}`} role="status" aria-live="polite">{status === "sent" && "Thank you. Your inquiry has been sent to the Sterling team."}{status === "error" && <>We couldn’t send the form. Please email <a href="mailto:sales@sterlingwellhead.com">sales@sterlingwellhead.com</a> or call <a href="tel:+15123730384">512-373-0384</a>.</>}</div>
  </form>;
}
