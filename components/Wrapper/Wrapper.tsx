import { FC, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  isBlock?: boolean;
  isValid?: boolean;
  title: string;
  subtitle: string;
};

export const PageWrapper: FC<WrapperProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="w-screen h-inherit pt-4">
      <div className="mb-4 ml-3 md:ml-32">
        <h1 className="text-xl md:text-3xl font-semibold">{title}</h1>
        <p className="text-sm md:text-md text-gray-500">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};
