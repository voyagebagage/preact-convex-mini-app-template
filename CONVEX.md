# Convex Integration Guide

This project is integrated with Convex, a real-time backend-as-a-service that provides:

- Real-time database with TypeScript support
- Serverless functions (queries, mutations, actions)
- Automatic schema validation
- Real-time subscriptions

## 🚀 Project Structure

```
convex/
├── _generated/          # Auto-generated TypeScript types and API
├── schema.ts           # Database schema definition
├── tasks.ts           # Task management functions
├── counters.ts        # Counter management functions
└── tsconfig.json      # TypeScript config for Convex functions

src/
├── lib/
│   └── convex.ts      # Convex client configuration
├── components/
│   ├── ConvexCounter.tsx  # Real-time counter component
│   └── TaskList.tsx       # Real-time task management
└── main.tsx           # App wrapped with ConvexProvider
```

## 🔧 Development Setup

### 1. Environment Configuration

The Convex deployment URL is automatically configured in `.env.local`:

```bash
CONVEX_DEPLOYMENT=colorful-curlew-558
VITE_CONVEX_URL=https://colorful-curlew-558.convex.cloud
```

### 2. Starting Development

```bash
# Starts both frontend and Convex backend
pnpm dev

# Or start them separately:
pnpm dev:frontend  # Vite dev server
pnpm dev:backend   # Convex dev server
```

## 📊 Database Schema

### Tables

**tasks**

- `text: string` - Task description
- `isCompleted: boolean` - Completion status
- `createdAt: number` - Creation timestamp

**counters**

- `name: string` - Counter identifier
- `value: number` - Current count value

**messages**

- `body: string` - Message content
- `author: string` - Message author
- `timestamp: number` - Message timestamp

## 🔧 Functions

### Task Functions (`convex/tasks.ts`)

```typescript
// Get all tasks (real-time)
const tasks = useQuery(api.tasks.getAllTasks);

// Add a new task
const addTask = useMutation(api.tasks.addTask);
await addTask({ text: "Buy groceries" });

// Toggle task completion
const toggleTask = useMutation(api.tasks.toggleTask);
await toggleTask({ id: taskId });

// Delete a task
const deleteTask = useMutation(api.tasks.deleteTask);
await deleteTask({ id: taskId });
```

### Counter Functions (`convex/counters.ts`)

```typescript
// Get counter value (real-time)
const count = useQuery(api.counters.getCounter, { name: "main" });

// Increment counter
const increment = useMutation(api.counters.incrementCounter);
await increment({ name: "main" });

// Decrement counter
const decrement = useMutation(api.counters.decrementCounter);
await decrement({ name: "main" });

// Reset counter
const reset = useMutation(api.counters.resetCounter);
await reset({ name: "main" });
```

## 🎯 Using Convex in Components

### Basic Query Hook

```typescript
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function MyComponent() {
  const data = useQuery(api.myFunctions.myQuery, { arg: "value" });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
}
```

### Basic Mutation Hook

```typescript
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

function MyComponent() {
  const doSomething = useMutation(api.myFunctions.myMutation);

  const handleClick = () => {
    doSomething({ arg: "value" });
  };

  return <button onClick={handleClick}>Do Something</button>;
}
```

## 🔒 TypeScript Integration

Convex automatically generates TypeScript types:

```typescript
import { api } from "../convex/_generated/api";
import { Doc, Id } from "../convex/_generated/dataModel";

// Doc<"tableName"> for document types
const task: Doc<"tasks"> = { ... };

// Id<"tableName"> for document IDs
const taskId: Id<"tasks"> = "...";
```

## 🌐 Real-time Features

- **Automatic Updates**: Components using `useQuery` automatically re-render when data changes
- **Optimistic Updates**: Mutations can provide immediate UI feedback
- **Conflict Resolution**: Convex handles concurrent updates automatically
- **Offline Support**: Built-in offline/online state management

## 🎛️ Convex Dashboard

Access your Convex dashboard at:
https://dashboard.convex.dev/d/colorful-curlew-558

Features:

- View and edit data
- Monitor function performance
- View logs and errors
- Manage deployments

## 📝 Adding New Functions

1. **Define the function** in `convex/`:

```typescript
// convex/myFunctions.ts
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const myQuery = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query("tableName").collect();
  },
});
```

2. **Push to deployment**:

```bash
npx convex dev --once
```

3. **Use in component**:

```typescript
const data = useQuery(api.myFunctions.myQuery, { name: "test" });
```

## 🔧 Environment Commands

```bash
# Deploy functions
npx convex dev

# View dashboard
npx convex dashboard

# Import/export data
npx convex import
npx convex export

# View logs
npx convex logs
```

For more information, visit the [Convex Documentation](https://docs.convex.dev/).
