"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-[background-color,opacity,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border border-border bg-surface-2 text-foreground hover:bg-surface",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-surface-2",
        ghost: "text-foreground hover:bg-surface-2",
        destructive:
          "bg-danger text-danger-foreground hover:bg-danger/90",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-[var(--control-h)] rounded-[var(--radius-control)] px-[var(--control-px)] text-[length:var(--control-text)]",
        sm: "h-8 rounded-[var(--radius-control)] px-3 text-xs",
        lg: "h-12 rounded-[var(--radius-control)] px-5 text-base",
        icon: "h-[var(--control-h)] w-[var(--control-h)] rounded-[var(--radius-control)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
