import { ChangeEventHandler, FC } from "react";

type TextareaProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export const Textarea: FC<TextareaProps> = ({ label, ...rest }) => {
  return (
    <div className="flex gap-4">
      <p className="font-semibold w-20">{label}:</p>
      <textarea
        {...rest}
        rows={7}
        className="w-full border-2 rounded-md p-2 border-gray-300 outline-none"
      />
    </div>
  );
};
