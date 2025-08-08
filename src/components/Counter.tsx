interface CounterProps {
  count: number;
  setCount: (count: number) => void;
}

export function Counter({ count, setCount }: CounterProps) {
  return (
    <div class="bg-white rounded-lg shadow-md p-8 text-center max-w-sm">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Interactive Counter</h2>
      <div class="text-6xl font-bold text-indigo-600 mb-6">{count}</div>
      <div class="flex gap-4 justify-center">
        <button
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button
          class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
}
