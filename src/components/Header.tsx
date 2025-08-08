export function Header() {
  return (
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <svg
              class="w-8 h-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h1 class="text-xl font-bold text-gray-900">Preact App</h1>
          </div>

          <nav class="hidden md:flex space-x-8">
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
