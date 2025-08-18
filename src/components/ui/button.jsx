import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = buttonVariants.variant[variant] || buttonVariants.variant.default;
  const sizeClasses = buttonVariants.size[size] || buttonVariants.size.default;
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(baseClasses, variantClasses, sizeClasses, className),
      ref,
      ...props
    });
  }

  return (
    <button
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };