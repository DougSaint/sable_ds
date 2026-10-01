"use client";

import { useState, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-2 font-medium tracking-tight text-foreground",
  {
    variants: {
      size: {
        sm: "size-6 text-[0.65rem]",
        default: "size-8 text-xs",
        lg: "size-10 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type AvatarProps = ComponentProps<"span"> &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    alt?: string;
    fallback: string;
  };

function Avatar({
  src,
  alt = "",
  fallback,
  size,
  className,
  ...props
}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <span
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="size-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span aria-hidden>{fallback}</span>
      )}
    </span>
  );
}

export { Avatar, avatarVariants };
export type { AvatarProps };
