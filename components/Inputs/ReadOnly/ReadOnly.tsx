import { FC } from "react";

export const ReadOnly: FC<{ value: string | number; label: string }> = ({
  value,
  label,
}) => {
  return (
    <div className="flex gap-4">
      <p className="font-semibold w-20">{label}:</p>
      <input
        value={value}
        readOnly
        className="text-gray-500 text-sm tracking-wider font-mono px-3 py-1 w-full border-2 border-gray-300 outline-none rounded-md bg-gray-100"
      />
    </div>
  );
};
