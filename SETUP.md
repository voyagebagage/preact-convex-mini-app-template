# Setup Guide

## 🚀 Quick Setup

### 1. Clone & Install
```bash
git clone https://github.com/voyagebagage/preact-convex-mini-app-template.git
cd preact-convex-mini-app-template
pnpm install
```

### 2. Configure Convex Deployments

**Option A: Let Convex create deployments for you (Recommended)**
```bash
# This will create new deployments and configure them automatically
npx convex dev --configure=new --dev-deployment cloud
npx convex dev --configure=new --dev-deployment local
```

**Option B: Use existing deployments**
1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Update `scripts/switch-env.js` with your deployment details:
   ```javascript
   const envConfigs = {
     local: {
       CONVEX_DEPLOYMENT: "local:your-actual-local-deployment",
       VITE_CONVEX_URL: "http://127.0.0.1:3210",
     },
     cloud: {
       CONVEX_DEPLOYMENT: "your-actual-cloud-deployment",
       VITE_CONVEX_URL: "https://your-actual-deployment.convex.cloud",
     },
   };
   ```

### 3. Start Development
```bash
# Start with local Convex (recommended for development)
pnpm convex local

# OR start with cloud Convex (for collaboration)
pnpm convex cloud
```

## 🔧 Finding Your Deployment Information

### Cloud Deployment
1. Visit [Convex Dashboard](https://dashboard.convex.dev)
2. Your deployment name is in the URL: `https://dashboard.convex.dev/d/YOUR-DEPLOYMENT-NAME`
3. Your URL is: `https://YOUR-DEPLOYMENT-NAME.convex.cloud`

### Local Deployment
- Deployment name: `local:PROJECT-NAME`
- URL: `http://127.0.0.1:3210`

## 🔒 Security Notes

- Never commit `.env.local` files (already in .gitignore)
- Update `scripts/switch-env.js` with your actual deployment names
- The template includes placeholder values for security

## 🎯 Next Steps

Once configured, you can:
- Switch between environments: `pnpm convex status`
- Develop locally: `pnpm convex local`
- Collaborate: `pnpm convex cloud`
- Deploy: `pnpm build`

See [README.md](./README.md) for full documentation.
