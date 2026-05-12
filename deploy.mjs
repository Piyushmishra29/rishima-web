#!/usr/bin/env node
/**
 * Mirrors the static export in `out/` to Hostinger via FTP.
 *
 * Set FTP_HOST, FTP_USER, FTP_PASS in env (or .env.local which is gitignored).
 * The Hostinger root is already inside public_html — no chdir needed.
 *
 * Usage:
 *   FTP_HOST=... FTP_USER=... FTP_PASS=... node deploy.mjs
 */

import { Client } from "basic-ftp";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";

config({ path: ".env.local", quiet: true });
config({ quiet: true });

const HOST = process.env.FTP_HOST;
const USER = process.env.FTP_USER;
const PASS = process.env.FTP_PASS;
const LOCAL = process.env.FTP_LOCAL || "out";

if (!HOST || !USER || !PASS) {
  console.error("Missing FTP_HOST / FTP_USER / FTP_PASS in env. See README.md.");
  process.exit(1);
}

const localDir = resolve(LOCAL);
if (!existsSync(localDir)) {
  console.error(`Local dir ${localDir} does not exist. Run \`pnpm build\` first.`);
  process.exit(1);
}

const client = new Client();
client.ftp.verbose = false;

try {
  console.log(`→ Connecting to ${HOST}…`);
  await client.access({ host: HOST, user: USER, password: PASS, secure: false });
  console.log(`→ Mirroring ${localDir} → /`);
  await client.uploadFromDir(localDir);
  console.log("✓ Done.");
} catch (err) {
  console.error("✗ Deploy failed:", err);
  process.exitCode = 1;
} finally {
  client.close();
}
