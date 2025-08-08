interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p class="text-gray-600">{description}</p>
    </div>
  );
}
