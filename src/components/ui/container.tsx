import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={`container w-[90%] mx-auto ${className}`}>{children}</div>
  );
};
