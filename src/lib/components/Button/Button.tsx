import { ComponentProps, FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ComponentProps<"button">>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="bg-black p-4 text-white" {...props}>
      {children}
    </button>
  );
};
