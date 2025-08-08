# Local Convex Development Guide

This project supports both **local** and **cloud** Convex deployments with an easy switching mechanism.

## 🏠 Local vs ☁️ Cloud Convex

### Local Convex

- **Fast Development**: No network latency
- **Offline Work**: Develop without internet
- **Quick Testing**: Instant deployments and changes
- **Private Data**: All data stays on your machine
- **URL**: `http://127.0.0.1:3210`

### Cloud Convex

- **Team Collaboration**: Share data with team members
- **Production Ready**: Same environment as production
- **Persistent Data**: Data persists across sessions
- **Real-time Sync**: Multiple users can see changes
- **URL**: `https://colorful-curlew-558.convex.cloud`

## 🚀 Quick Start Commands

### Switch and Start Development

```bash
# Start with LOCAL Convex (recommended for development)
npm run convex local

# Start with CLOUD Convex (for collaboration)
npm run convex cloud
```

### Just Switch Environment (without starting dev server)

```bash
# Switch to local
npm run switch:local

# Switch to cloud
npm run switch:cloud

# Check current environment
npm run convex status
```

### Manual Development Commands

```bash
# Start local development
npm run dev:local

# Start cloud development
npm run dev:cloud

# Start with current environment (whatever is in .env.local)
npm run dev
```

## 🔧 Environment Management

### Available Commands

```bash
npm run convex          # Show help and available commands
npm run convex local    # Switch to local and start development
npm run convex cloud    # Switch to cloud and start development
npm run convex status   # Show current environment
npm run convex switch local   # Just switch to local
npm run convex switch cloud   # Just switch to cloud
```

### Environment Status Indicator

The app includes a visual indicator in the top-right corner:

- 🏠 **Green badge**: Local Convex (`127.0.0.1:3210`)
- ☁️ **Blue badge**: Cloud Convex (`colorful-curlew-558.convex.cloud`)

## 📁 How It Works

### Environment Configuration

The switching system uses these files:

```
scripts/
├── switch-env.js    # Environment switching logic
└── convex-env.js    # CLI helper for easy commands

.env.local           # Current environment (auto-generated)
```

### Environment Configurations

**Local Environment:**

```bash
CONVEX_DEPLOYMENT=local:local-oliv_dev-preact_mini_app_dev
VITE_CONVEX_URL=http://127.0.0.1:3210
```

**Cloud Environment:**

```bash
CONVEX_DEPLOYMENT=colorful-curlew-558
VITE_CONVEX_URL=https://colorful-curlew-558.convex.cloud
```

## 🔄 Development Workflow

### Typical Development Flow

1. **Start Local Development**

   ```bash
   npm run convex local
   ```

2. **Develop and Test**

   - Make changes to your functions in `convex/`
   - Test with local data (fast iteration)
   - Use the Convex Status indicator to confirm you're local

3. **Test with Cloud Data**

   ```bash
   npm run convex cloud
   ```

   - Test with shared/production-like data
   - Collaborate with team members

4. **Switch Back to Local**
   ```bash
   npm run convex local
   ```

### Data Isolation

- **Local**: Each developer has their own isolated database
- **Cloud**: Shared database across team members
- **No Data Sync**: Switching doesn't migrate data between environments

## 🛠️ Local Convex Features

### Benefits of Local Development

1. **Faster Iteration**

   - No network latency
   - Instant function deployments
   - Immediate schema changes

2. **Offline Development**

   - Work without internet connection
   - No dependency on cloud services

3. **Privacy**

   - All development data stays local
   - No accidental sharing of test data

4. **Debugging**
   - Direct access to local logs
   - Easy function inspection

### Local Dashboard

When running locally, access the dashboard at:

- **Local Dashboard**: `https://dashboard.convex.dev/d/local-oliv_dev-preact_mini_app_dev`
- **Cloud Dashboard**: `https://dashboard.convex.dev/d/colorful-curlew-558`

## 🎯 Best Practices

### When to Use Local vs Cloud

**Use Local Convex for:**

- Feature development
- Function testing
- Schema changes
- Performance testing
- Offline development

**Use Cloud Convex for:**

- Team collaboration
- Integration testing
- Demo preparations
- Production-like testing
- Data sharing

### Development Tips

1. **Start Local**: Begin development with local Convex for fast iteration
2. **Test Cloud**: Switch to cloud before major commits to test integration
3. **Reset Local**: Delete local data when testing fresh user experiences
4. **Monitor Status**: Use the visual indicator to know which environment you're using
5. **Team Sync**: Coordinate with team when using cloud environment

## 🚨 Important Notes

### Data Management

- **Local data** is stored on your machine and will be lost if you reset the local deployment
- **Cloud data** is persistent and shared across team members
- **No automatic sync** between local and cloud environments
- **Schema changes** apply to whichever environment you're currently using

### Environment Switching

- Switching environments **does not** migrate your data
- Always check the status indicator after switching
- Restart your development server after switching for best results
- The app automatically detects the environment and shows the appropriate badge

## 🔍 Troubleshooting

### Common Issues

**"Cannot connect to Convex"**

- Check if you're using the right environment with `npm run convex status`
- Ensure local Convex is running if using local environment
- Verify internet connection if using cloud environment

**"Functions not found"**

- Run `npx convex dev --once` to push your functions to the current environment
- Check that you're in the correct environment

**"Environment indicator shows wrong environment"**

- Refresh your browser after switching environments
- Check `.env.local` file contents with `npm run convex status`

## 📋 Quick Reference

```bash
# Essential Commands
npm run convex local     # 🏠 Local development
npm run convex cloud     # ☁️  Cloud development
npm run convex status    # 🔍 Check environment
npm run dev             # 🚀 Start with current env

# Environment Operations
npm run switch:local    # Switch to local only
npm run switch:cloud    # Switch to cloud only

# Manual Development
npm run dev:local       # Start local (with switch)
npm run dev:cloud       # Start cloud (with switch)
npm run dev:frontend    # Just Vite dev server
npm run dev:backend     # Just Convex dev server
```

For more information, see the main [CONVEX.md](./CONVEX.md) documentation.
