import { FC, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  isBlock?: boolean;
  isValid?: boolean;
  title: string;
};

export const PageWrapper: FC<WrapperProps> = ({ children, title }) => {
  return (
    <div className="w-screen h-inherit mt-20">
      <h1 className="text-3xl font-semibold mb-4 ml-32">{title}</h1>
      {children}
    </div>
  );
};
