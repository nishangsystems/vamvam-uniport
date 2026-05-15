
import { cn } from "@/utils/cn";

interface TextareaProps {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  name?: string;
  error?: string;
}
const Textarea = ({
  className,
  value,
  onChange,
  name,
  error,
  placeholder,
  rows = 3,
}: TextareaProps) => {
  return (
    <>
      <textarea
        className={cn(
          "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent",
          className,
        )}
        placeholder={placeholder}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </>
  );
};

export default Textarea;
