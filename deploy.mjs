#!/usr/bin/env node
/**
 * Mirrors the static export in `out/` to Hostinger via FTP.
 *
 * Reads from .env.local (gitignored). Required vars:
 *   FTP_HOST, FTP_USER, FTP_PASS
 *
 * Optional:
 *   FTP_LOCAL   (default: "out")
 *   FTP_REMOTE  (default: "/")
 *
 * Usage:
 *   pnpm deploy
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
const REMOTE = process.env.FTP_REMOTE || "/";

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

  if (REMOTE !== "/" && REMOTE !== "") {
    console.log(`→ ensureDir ${REMOTE}`);
    await client.ensureDir(REMOTE);
  }

  console.log(`→ Mirroring ${localDir} → ${REMOTE}`);
  await client.uploadFromDir(localDir);
  console.log("✓ Done.");
} catch (err) {
  console.error("✗ Deploy failed:", err);
  process.exitCode = 1;
} finally {
  client.close();
}
