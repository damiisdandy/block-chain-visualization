import { FC, ReactNode } from "react";

type InputBlockProps = {
  children: ReactNode;
  isBlock?: boolean;
  isValid?: boolean;
};

export const InputBlock: FC<InputBlockProps> = ({
  children,
  isBlock,
  isValid,
}) => {
  return (
    <div
      className={`py-4 pl-24 pr-10 ${
        isBlock
          ? isValid
            ? "bg-green-50 border-green-800"
            : "bg-red-100 border-red-800"
          : "bg-gray-200 border-gray-300"
      } rounded-md border-2 block`}
    >
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};
