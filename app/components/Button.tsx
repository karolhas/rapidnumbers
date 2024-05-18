//hooks
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

//variants
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

const buttonVariants = cva(
   "inline-flex justify-center items-center transition-colors bg-transparent rounded-lg cursor-pointer",
   {
      variants: {
         variant: {
            default:
               "border-2 border-slate-800 text-slate-800 hover:bg-[#c9fc6a] active:bg-[#c9fc6a] dark:text-slate-300 dark:border-slate-300 dark:hover:bg-[#086e05] dark:active:bg-[#086e05]",
            active:
               "border-2 border-[#111010cc] bg-[#c9fc6a] active:bg-[#c9fc6a] dark:border-slate-300 dark:text-slate-300  dark:bg-[#086e05] dark:hover:bg-[#086e05] dark:active:bg-[#086e05]",
         },
         size: {
            default: "text-lg py-3 px-4",
            sm: "text-base py-2 px-3",
            lg: "text-xl py-4 px-6",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   }
);

interface ButtonProps
   extends ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   children: ReactNode;
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
