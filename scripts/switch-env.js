#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envConfigs = {
  local: {
    CONVEX_DEPLOYMENT: "local-oliv_dev-preact_mini_app_dev",
    VITE_CONVEX_URL: "http://127.0.0.1:3210",
  },
  cloud: {
    CONVEX_DEPLOYMENT: "colorful-curlew-558",
    VITE_CONVEX_URL: "https://colorful-curlew-558.convex.cloud",
  },
};

const environment = process.argv[2];

if (!environment || !envConfigs[environment]) {
  console.log("Usage: node scripts/switch-env.js [local|cloud]");
  console.log("");
  console.log("Available environments:");
  console.log("  local  - Use local Convex deployment");
  console.log("  cloud  - Use cloud Convex deployment");
  process.exit(1);
}

const config = envConfigs[environment];
const envLocalPath = path.join(__dirname, "..", ".env.local");

// Create .env.local content
const envContent =
  Object.entries(config)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n") + "\n";

// Write the file
fs.writeFileSync(envLocalPath, envContent);

console.log(`✅ Switched to ${environment} environment`);
console.log(`📝 Updated .env.local with:`);
Object.entries(config).forEach(([key, value]) => {
  console.log(`   ${key}=${value}`);
});

if (environment === "local") {
  console.log("");
  console.log("🚀 To start local development:");
  console.log("   pnpm dev:local");
} else {
  console.log("");
  console.log("🚀 To start cloud development:");
  console.log("   pnpm dev:cloud");
}
