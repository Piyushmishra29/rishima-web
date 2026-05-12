"use client";

import { useState } from "react";
import { SITE_NAME, WEB3FORMS_KEY } from "@/lib/site";
import {
  enquiryServiceOptions as services,
  enquiryBudgetOptions as budgets,
  socials,
} from "@/lib/content";
import styles from "./contact-form.module.css";

type Status = "idle" | "sending" | "ok" | "error" | "misconfigured";

const emailSocial = socials.find((s) => s.label === "Email");
const fallbackEmail = emailSocial?.handle ?? "hello@rishimamenon.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      setStatus("misconfigured");
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `New enquiry from ${data.get("name") || "someone"}`);
    data.append("from_name", SITE_NAME);

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
      <div className={styles.success} aria-live="polite">
        <h3 className={styles.successTitle}>Got it.</h3>
        <p>
          Your brief is with me. I&rsquo;ll read it carefully and reply within 48
          hours &mdash; usually sooner. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} aria-describedby="form-status">
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
          <span>Where you&rsquo;re based</span>
          <input name="location" type="text" autoComplete="address-level2" />
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
          aria-describedby="brief-hint"
        />
        <span id="brief-hint" style={{ fontSize: 13, color: "var(--fg-soft)" }}>
          Tell me about the brand, the timeline, and what success looks like.
        </span>
      </label>

      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className={styles.botcheck}
      />

      <button
        type="submit"
        className={`btn ${styles.submit}`}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send"} →
      </button>

      <div id="form-status" aria-live="polite">
        {status === "error" && (
          <p className={styles.error}>
            Something broke. Email{" "}
            <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a> instead?
          </p>
        )}
        {status === "misconfigured" && (
          <p className={styles.error}>
            Form not wired up yet. Until then, email{" "}
            <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
