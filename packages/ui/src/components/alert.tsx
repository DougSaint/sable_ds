import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CircleAlert,
  CircleCheck,
  Info,
  TriangleAlert,
} from "lucide-react";
import { cn } from "../lib/utils";

const alertVariants = cva(
  "flex gap-3 rounded-[var(--radius-card)] border px-4 py-3",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-2",
        info: "border-info/40 bg-info/10",
        success: "border-success/40 bg-success/10",
        warning: "border-warning/40 bg-warning/10",
        danger: "border-danger/40 bg-danger/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const iconClass = {
  default: "text-muted",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
} as const;

const icons = {
  default: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: CircleAlert,
} as const;

type AlertVariant = NonNullable<VariantProps<typeof alertVariants>["variant"]>;

function Alert({
  className,
  variant = "default",
  children,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  const tone: AlertVariant = variant ?? "default";
  const Icon = icons[tone];
  const live = tone === "danger" || tone === "warning" ? "alert" : "status";

  return (
    <div
      {...props}
      data-slot="alert"
      data-variant={tone}
      role={live}
      className={cn(alertVariants({ variant: tone }), className)}
    >
      <Icon
        aria-hidden
        className={cn("mt-0.5 size-4 shrink-0", iconClass[tone])}
      />
      <div className="flex min-w-0 flex-col gap-1">{children}</div>
    </div>
  );
}

function AlertTitle({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="alert-title"
      className={cn("text-sm font-medium tracking-tight text-foreground", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="alert-description"
      className={cn("text-sm text-muted", className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, alertVariants };
