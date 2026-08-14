import * as React from "react";
import { cn } from "../lib/utils";

type FieldProps = React.ComponentProps<"div"> & {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  htmlFor?: string;
};

function Field({
  label,
  hint,
  error,
  htmlFor,
  className,
  children,
  ...props
}: FieldProps) {
  const hintId = React.useId();
  const errorId = React.useId();

  return (
    <div
      data-slot="field"
      data-invalid={error ? "true" : undefined}
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    >
      {label ? (
        <label
          htmlFor={htmlFor}
          className="text-[length:var(--control-text)] font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <p id={errorId} role="alert" className="text-xs text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export { Field };
export type { FieldProps };
