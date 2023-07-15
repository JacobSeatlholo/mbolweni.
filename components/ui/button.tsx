import { cn } from "@/lib/utils";
import { forwardRef } from "react";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-white text-sm font-normal  transition shadow-md outline-none`,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
