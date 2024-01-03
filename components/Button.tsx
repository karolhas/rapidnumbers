"use client";

import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "mx-2 inline-flex items-center justify-center text-xl transition-colors rounded-lg cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-slate-800 text-slate-100 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-800 dark:hover:bg-slate-100",
        outline:
          "bg-transparent border-2 border-[#111010cc] hover:bg-[#c9fc6a] active:bg-[#c9fc6a] dark:border-slate-300 dark:text-slate-300 dark:hover:bg-[#086e05]",
        active:
          "border-2 border-[#111010cc] bg-[#c9fc6a] active:bg-[#c9fc6a] dark:border-slate-300 dark:text-slate-300  dark:bg-[#086e05] dark:hover:bg-[#086e05] dark:active:bg-[#086e05]",
      },
      size: {
        default: "h-14 py-2 px-4",
        sm: "h-10 px-3",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
