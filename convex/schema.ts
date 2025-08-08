import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
    createdAt: v.number(),
  }),

  messages: defineTable({
    body: v.string(),
    author: v.string(),
    timestamp: v.number(),
  }),

  counters: defineTable({
    name: v.string(),
    value: v.number(),
  }),
});
