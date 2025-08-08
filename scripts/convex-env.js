#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const command = process.argv[2];

const commands = {
  local: {
    description: "Switch to local Convex and start development",
    run: () => {
      console.log("🔄 Switching to local Convex deployment...");
      execSync("pnpm dev:local", { stdio: "inherit" });
    },
  },
  cloud: {
    description: "Switch to cloud Convex and start development",
    run: () => {
      console.log("☁️  Switching to cloud Convex deployment...");
      execSync("pnpm dev:cloud", { stdio: "inherit" });
    },
  },
  switch: {
    description: "Switch environment without starting dev server",
    run: () => {
      const env = process.argv[3];
      if (!env || !["local", "cloud"].includes(env)) {
        console.log("Usage: pnpm convex switch [local|cloud]");
        return;
      }
      execSync(`pnpm switch:${env}`, { stdio: "inherit" });
    },
  },
  status: {
    description: "Show current environment status",
    run: () => {
      try {
        const envPath = path.join(__dirname, "..", ".env.local");

        if (!fs.existsSync(envPath)) {
          console.log("❌ No .env.local file found");
          console.log("💡 Run: pnpm convex local  or  pnpm convex cloud");
          return;
        }

        const envContent = fs.readFileSync(envPath, "utf8");
        const isLocal = envContent.includes("127.0.0.1");

        console.log(
          `🔍 Current Convex environment: ${isLocal ? "🏠 LOCAL" : "☁️  CLOUD"}`
        );
        console.log("📄 .env.local contents:");
        console.log(envContent);
      } catch (error) {
        console.log("❌ Error reading environment:", error.message);
      }
    },
  },
};

if (!command || !commands[command]) {
  console.log("🔧 Convex Environment Manager");
  console.log("");
  console.log("Available commands:");
  Object.entries(commands).forEach(([cmd, { description }]) => {
    console.log(`  ${cmd.padEnd(8)} - ${description}`);
  });
  console.log("");
  console.log("Examples:");
  console.log("  pnpm convex local   # Start local development");
  console.log("  pnpm convex cloud   # Start cloud development");
  console.log("  pnpm convex status  # Check current environment");
  process.exit(0);
}

commands[command].run();
