"use client";

import { useState } from "react";
import styles from "./contact-form.module.css";

const services = [
  "Social media management",
  "Content strategy",
  "Creative content production",
  "Paid ads (Meta / Google)",
  "Brand consulting / 1-1",
  "Creator collab / UGC",
  "Something else",
];

const budgets = ["< ₹50k / mo", "₹50k – ₹1.5L / mo", "₹1.5L – ₹3L / mo", "₹3L+ / mo", "One-off project"];

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "WEB3FORMS_KEY_PLACEHOLDER");
    data.append("subject", `New enquiry from ${data.get("name") || "someone"}`);
    data.append("from_name", "rishimamenon.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className={styles.success}>
        <h3 className={styles.successTitle}>Got it.</h3>
        <p>
          Your brief is with me. I'll read it carefully and reply within 48 hours
          — usually sooner. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Your name</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Brand / company</span>
          <input name="brand" type="text" autoComplete="organization" />
        </label>
        <label className={styles.field}>
          <span>Where you're based</span>
          <input name="location" type="text" placeholder="City, country" />
        </label>
      </div>

      <label className={styles.field}>
        <span>What do you need?</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Pick one
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Budget</span>
        <select name="budget" defaultValue="">
          <option value="" disabled>
            Pick a range
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Brief</span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell me about the brand, the timeline, and what success looks like."
        />
      </label>

      <input type="hidden" name="botcheck" />

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"} →
      </button>

      {status === "error" && (
        <p className={styles.error}>
          Something broke. Email{" "}
          <a href="mailto:hello@rishimamenon.com">hello@rishimamenon.com</a>{" "}
          instead?
        </p>
      )}
    </form>
  );
}
