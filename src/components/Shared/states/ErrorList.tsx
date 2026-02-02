interface ErrorListProps {
  title?: string;
  errors: string[];
}

export default function ErrorList({
  title = '请修正以下问题：',
  errors,
}: ErrorListProps) {
  if (!errors.length) return null;

  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-3">
      <div className="text-sm font-medium text-red-800 mb-1">{title}</div>
      <ul className="text-sm text-red-700 space-y-1">
        {errors.map((error, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">•</span>
            <span>{error}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
