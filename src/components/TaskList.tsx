import { useState } from "preact/hooks";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Doc } from "../../convex/_generated/dataModel";

export function TaskList() {
  const [newTask, setNewTask] = useState("");
  const tasks = useQuery(api.tasks.getAllTasks) ?? [];
  const addTask = useMutation(api.tasks.addTask);
  const toggleTask = useMutation(api.tasks.toggleTask);
  const deleteTask = useMutation(api.tasks.deleteTask);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (newTask.trim()) {
      await addTask({ text: newTask.trim() });
      setNewTask("");
    }
  };

  return (
    <div class="bg-white rounded-lg shadow-md p-6 max-w-md">
      <h3 class="text-xl font-bold text-gray-900 mb-4">Real-time Task List</h3>

      <form onSubmit={handleSubmit} class="mb-4">
        <div class="flex gap-2">
          <input
            type="text"
            value={newTask}
            onInput={(e) => setNewTask((e.target as HTMLInputElement).value)}
            placeholder="Add a new task..."
            class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="submit"
            class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors">
            Add
          </button>
        </div>
      </form>

      <div class="space-y-2">
        {tasks.map((task: Doc<"tasks">) => (
          <div
            key={task._id}
            class={`flex items-center gap-3 p-3 rounded-lg border ${
              task.isCompleted
                ? "bg-gray-50 border-gray-200"
                : "bg-white border-gray-300"
            }`}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask({ id: task._id })}
              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
            />
            <span
              class={`flex-1 ${
                task.isCompleted
                  ? "text-gray-500 line-through"
                  : "text-gray-900"
              }`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask({ id: task._id })}
              class="text-red-500 hover:text-red-700 text-sm font-medium">
              Delete
            </button>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <p class="text-gray-500 text-center py-4">
          No tasks yet. Add one above!
        </p>
      )}

      <p class="text-xs text-gray-400 mt-4 text-center">
        Tasks are stored in Convex and sync in real-time
      </p>
    </div>
  );
}
