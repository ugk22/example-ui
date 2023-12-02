import { ComponentProps, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = PropsWithChildren<ComponentProps<"button">>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge("bg-black p-4 text-white", className)}
      {...props}
    >
      {children}
    </button>
  );
};
