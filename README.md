# Preact + Convex Mini App Template

A modern, full-stack web application template featuring:

- ⚡ **Preact** - Fast, lightweight React alternative (3kB)
- 🗄️ **Convex** - Real-time backend with serverless functions
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Full type safety
- 🚀 **Vite** - Lightning-fast build tool
- 🧭 **TanStack Router** - Type-safe routing
- 🏠 **Local + Cloud** Convex support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- Convex account (free at [convex.dev](https://convex.dev))

### Setup

```bash
# Install dependencies
pnpm install

# Configure Convex (creates deployments automatically)
npx convex dev --configure=new --dev-deployment cloud
npx convex dev --configure=new --dev-deployment local
```

**⚠️ Important**: Update `scripts/switch-env.js` with your actual deployment names from the Convex dashboard.

### Development

```bash
# Start LOCAL development (recommended)
pnpm convex local

# OR start CLOUD development
pnpm convex cloud

# OR start with current environment
pnpm dev
```

Visit `http://localhost:3000` to see your app!

📖 **Need help?** See [SETUP.md](./SETUP.md) for detailed configuration instructions.

## 🏠 Local vs ☁️ Cloud Development

This template supports both local and cloud Convex deployments:

### Quick Commands

```bash
npm run convex local     # 🏠 Local development (fast, offline)
npm run convex cloud     # ☁️ Cloud development (collaboration)
npm run convex status    # 🔍 Check current environment
```

### Environment Indicator

The app shows a visual indicator in the top-right:

- 🏠 **Green**: Local Convex (`127.0.0.1:3210`)
- ☁️ **Blue**: Cloud Convex (shared database)

## 📋 Available Scripts

```bash
# Development
pnpm dev              # Start with current environment
npm run convex local  # Switch to local + start development
npm run convex cloud  # Switch to cloud + start development

# Building & Testing
pnpm build           # Build for production
pnpm preview         # Preview production build
pnpm lint            # Run ESLint

# Environment Management
npm run convex status         # Show current environment
npm run switch:local         # Switch to local only
npm run switch:cloud         # Switch to cloud only
```

## 🎯 Features Included

### 🔄 Real-time Components

- **ConvexCounter**: Synced counter across all clients
- **TaskList**: Real-time todo list with CRUD operations
- **ConvexStatus**: Visual environment indicator

### 🗄️ Database Schema

- `tasks` - Todo items with completion status
- `counters` - Named counters for various uses
- `messages` - Ready for chat/messaging features

### 🛠️ Developer Tools

- **Preact DevTools** - Component inspection (browser extension required)
- **TanStack Router DevTools** - Route debugging (floating panel)
- **Custom Debug Utils** - Structured logging and performance timing

## 📁 Project Structure

```
src/
├── components/           # Preact components
│   ├── ConvexCounter.tsx    # Real-time counter
│   ├── TaskList.tsx         # Real-time todo list
│   ├── ConvexStatus.tsx     # Environment indicator
│   └── ...
├── lib/
│   └── convex.ts           # Convex client setup
├── pages/                  # Route components
├── utils/
│   └── debug.ts           # Debug utilities
└── router.tsx             # TanStack Router config

convex/
├── schema.ts              # Database schema
├── tasks.ts              # Task CRUD functions
├── counters.ts           # Counter functions
└── _generated/           # Auto-generated types

scripts/
├── switch-env.js         # Environment switching
└── convex-env.js         # CLI helper
```

## 🔧 Configuration

### Environment Variables

Automatically managed by the switching scripts:

```bash
# Local Development
CONVEX_DEPLOYMENT=local:local-oliv_dev-preact_mini_app_dev
VITE_CONVEX_URL=http://127.0.0.1:3210

# Cloud Development
CONVEX_DEPLOYMENT=colorful-curlew-558
VITE_CONVEX_URL=https://colorful-curlew-558.convex.cloud
```

### TypeScript

- Full type safety with auto-generated Convex types
- Preact compatibility layer for React libraries
- Strict TypeScript configuration

## 📚 Documentation

- [CONVEX.md](./CONVEX.md) - Complete Convex integration guide
- [LOCAL-CONVEX.md](./LOCAL-CONVEX.md) - Local development setup
- [DEVTOOLS.md](./DEVTOOLS.md) - Developer tools guide

## 🎮 Testing the App

1. **Start development** with `npm run convex local`
2. **Open multiple browser tabs** to see real-time sync
3. **Try the components**:
   - Local counter (Preact state) vs Convex counter (real-time)
   - Add/complete/delete tasks - they sync instantly!
4. **Switch environments** with `npm run convex cloud` to test collaboration

## 🌐 Deployment

### Build for Production

```bash
pnpm build
```

### Deploy Frontend

The frontend can be deployed to any static hosting service:

- Vercel, Netlify, Cloudflare Pages, etc.

### Deploy Backend

Convex functions are automatically deployed:

- **Local**: Running on your machine
- **Cloud**: Hosted on Convex infrastructure

## 🔗 Dashboard Access

- **Local Dashboard**: https://dashboard.convex.dev/d/local-oliv_dev-preact_mini_app_dev
- **Cloud Dashboard**: https://dashboard.convex.dev/d/colorful-curlew-558

## 📝 Development Tips

1. **Start with Local**: Use local development for fast iteration
2. **Test with Cloud**: Switch to cloud for integration testing
3. **Monitor Environment**: Check the status indicator to know which environment you're using
4. **Use DevTools**: Install Preact DevTools browser extension for component debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Use local development for testing
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your projects!

---

Built with ❤️ using Preact + Convex
