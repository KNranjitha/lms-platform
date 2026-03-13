interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function ProgressBar({ value, max = 100, showLabel, size = "md" }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const heightClass = size === "sm" ? "h-1.5" : size === "lg" ? "h-3" : "h-2";

  return (
    <div className="w-full">
      <div className={`${heightClass} w-full overflow-hidden rounded-full bg-slate-200`}>
        <div
          className={`${heightClass} rounded-full bg-gradient-to-r from-violet-500 to-violet-600 transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-xs font-medium text-slate-600">{Math.round(percentage)}% complete</p>
      )}
    </div>
  );
}
