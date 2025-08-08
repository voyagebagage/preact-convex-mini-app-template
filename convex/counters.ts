import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get counter value
export const getCounter = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const counter = await ctx.db
      .query("counters")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();

    return counter?.value ?? 0;
  },
});

// Increment counter
export const incrementCounter = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const counter = await ctx.db
      .query("counters")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();

    if (counter) {
      await ctx.db.patch(counter._id, {
        value: counter.value + 1,
      });
      return counter.value + 1;
    } else {
      await ctx.db.insert("counters", {
        name: args.name,
        value: 1,
      });
      return 1;
    }
  },
});

// Decrement counter
export const decrementCounter = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const counter = await ctx.db
      .query("counters")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();

    if (counter) {
      const newValue = Math.max(0, counter.value - 1);
      await ctx.db.patch(counter._id, {
        value: newValue,
      });
      return newValue;
    } else {
      return 0;
    }
  },
});

// Reset counter
export const resetCounter = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const counter = await ctx.db
      .query("counters")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();

    if (counter) {
      await ctx.db.patch(counter._id, {
        value: 0,
      });
    }
    return 0;
  },
});
