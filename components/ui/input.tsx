import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-bark/15 bg-white px-4 text-sm text-bark placeholder:text-bark/40 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
