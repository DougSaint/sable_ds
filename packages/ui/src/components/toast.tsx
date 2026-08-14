"use client";

import type { ComponentProps } from "react";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = ComponentProps<typeof Sonner>;

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="dark"
      className="toaster"
      toastOptions={{
        classNames: {
          toast:
            "group border border-border bg-surface text-foreground shadow-[var(--shadow-card)] rounded-[var(--radius-control)]",
          title: "text-sm font-medium",
          description: "text-sm text-muted",
          actionButton:
            "bg-primary text-primary-foreground rounded-[var(--radius-control)]",
          cancelButton: "bg-surface-2 text-foreground",
          error: "border-danger",
          success: "border-success",
        },
      }}
      {...props}
    />
  );
}

export { Toaster, toast };
