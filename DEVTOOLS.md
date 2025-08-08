# Developer Tools Setup

This project includes comprehensive debugging and development tools for both Preact and TanStack Router.

## 🛠️ Installed DevTools

### 1. Preact Developer Tools

**Browser Extension:**

- Install the [Preact Developer Tools](https://chromewebstore.google.com/detail/preact-developer-tools/ilcajpmogmhpliinlbcdebhbcanbghmd) for Chrome
- Or search for "Preact Developer Tools" in your browser's extension store

**Features:**

- Inspect component tree and props
- Monitor state changes
- Track component re-renders
- View hooks state and effects

**Usage:**

1. Install the browser extension
2. Open your app in development mode (`pnpm dev`)
3. Open Developer Tools (F12)
4. Look for the "Preact" tab

### 2. TanStack Router DevTools

**In-App DevTools:**

- Automatically included in development builds
- Look for the floating TanStack logo in the bottom-right corner

**Features:**

- Route tree visualization
- Route matching and loading states
- Search/params inspection
- Route timing and performance
- Navigation history

**Usage:**

1. Start the dev server (`pnpm dev`)
2. Look for the TanStack Router DevTools icon (bottom-right)
3. Click to open/close the devtools panel

### 3. Custom Debug Utilities

**Logger:**

```typescript
import { logger } from "./utils/debug";

logger.info("General information");
logger.warn("Warning message");
logger.error("Error message");
logger.route("Router-specific logging");
```

**Performance Timing:**

```typescript
import { perfTimer } from "./utils/debug";

const endTimer = perfTimer("My operation");
// ... do some work
endTimer(); // Logs time taken
```

**Component Render Tracking:**

```typescript
import { trackRender } from "./utils/debug";

export function MyComponent() {
  trackRender("MyComponent"); // Logs when component renders
  // ...
}
```

## 🚀 Development Workflow

1. **Start Development:**

   ```bash
   pnpm dev
   ```

2. **Open Browser DevTools (F12)**

3. **Check Console for Debug Logs:**

   - `[Preact App]` - General app logs
   - `[Router]` - Navigation logs
   - `[Perf]` - Performance timing

4. **Use Preact DevTools Tab:**

   - Inspect components
   - Monitor state changes

5. **Use TanStack Router DevTools:**
   - Click the floating icon
   - Explore route tree and navigation

## 📝 Debugging Tips

- All debug utilities only work in development mode
- Check browser console for structured logs
- Use the Preact tab to inspect component state
- Router devtools help debug navigation issues
- Performance timers help identify slow operations

## 🔧 Configuration

**Debug utilities can be imported from:**

```typescript
import { logger, perfTimer, trackRender, isDev } from "./utils/debug";
```

**Environment detection:**

- `isDev` - true in development, false in production
- All logging automatically disabled in production builds
