import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full rounded-2xl border border-bark/15 bg-white px-4 py-3 text-sm text-bark placeholder:text-bark/40 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
