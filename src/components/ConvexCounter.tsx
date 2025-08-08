import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export function ConvexCounter() {
  const count = useQuery(api.counters.getCounter, { name: "main" }) ?? 0;
  const increment = useMutation(api.counters.incrementCounter);
  const decrement = useMutation(api.counters.decrementCounter);
  const reset = useMutation(api.counters.resetCounter);

  return (
    <div class="bg-white rounded-lg shadow-md p-8 text-center max-w-sm">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Convex Counter</h2>
      <div class="text-6xl font-bold text-purple-600 mb-6">{count}</div>
      <div class="flex gap-4 justify-center">
        <button
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => decrement({ name: "main" })}>
          Decrease
        </button>
        <button
          class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => reset({ name: "main" })}>
          Reset
        </button>
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => increment({ name: "main" })}>
          Increase
        </button>
      </div>
      <p class="text-sm text-gray-500 mt-4">
        Synced with Convex database in real-time
      </p>
    </div>
  );
}
