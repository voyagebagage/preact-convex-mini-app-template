import { useEffect, useState } from "preact/hooks";

export function ConvexStatus() {
  const [isLocal, setIsLocal] = useState<boolean | null>(null);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const convexUrl = import.meta.env.VITE_CONVEX_URL;
    setUrl(convexUrl || "Not configured");
    setIsLocal(
      convexUrl?.includes("127.0.0.1") ||
        convexUrl?.includes("localhost") ||
        false
    );
  }, []);

  if (isLocal === null) {
    return null;
  }

  return (
    <div
      class={`fixed top-4 right-4 px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-50 ${
        isLocal
          ? "bg-green-100 text-green-800 border border-green-200"
          : "bg-blue-100 text-blue-800 border border-blue-200"
      }`}>
      <div class="flex items-center space-x-2">
        <div
          class={`w-2 h-2 rounded-full ${
            isLocal ? "bg-green-500" : "bg-blue-500"
          }`}></div>
        <span>{isLocal ? "🏠 Local" : "☁️ Cloud"} Convex</span>
      </div>
      <div class="text-xs opacity-75 mt-1">{url}</div>
    </div>
  );
}
