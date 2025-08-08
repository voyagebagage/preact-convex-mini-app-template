import { useState } from "preact/hooks";
import { Counter } from "./components/Counter";
import { Card } from "./components/Card";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Preact
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              A fast, lightweight alternative to React with modern features
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <Card
              title="⚡ Fast & Lightweight"
              description="Preact provides the same modern API as React but in just 3kB"
            />
            <Card
              title="🔧 TypeScript Ready"
              description="Built with TypeScript support for better development experience"
            />
            <Card
              title="🎨 Tailwind CSS"
              description="Styled with Tailwind CSS for rapid UI development"
            />
            <Card
              title="⚡ Vite Powered"
              description="Lightning fast development with Vite build tool"
            />
          </div>

          <div class="flex justify-center">
            <Counter count={count} setCount={setCount} />
          </div>
        </div>
      </main>
    </div>
  );
}
