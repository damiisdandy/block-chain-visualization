import { ChangeEventHandler, FC } from "react";

type InputProps = {
  label: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="flex gap-4 items-center">
      <p className="font-semibold w-20">{label}:</p>
      <input
        {...rest}
        className="font-mono tex-sm w-full border-2 rounded-md px-3 py-1 border-gray-300 outline-none"
      />
    </div>
  );
};
