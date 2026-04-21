import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const variantClasses: Record<string, string> = {
  default: "bg-black text-white hover:opacity-90",
  outline: "border border-current bg-transparent hover:bg-gray-100",
  ghost: "bg-transparent hover:bg-gray-100",
  link: "bg-transparent underline hover:no-underline",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
};

const sizeClasses: Record<string, string> = {
  default: "px-4 py-2 text-sm",
  sm: "px-3 py-1.5 text-xs",
  lg: "px-6 py-3 text-base",
  icon: "p-2",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild: _asChild, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
