import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-lhra-red text-white border-2 border-lhra-yellow hover:bg-lhra-blue hover:text-lhra-yellow hover:scale-105 hover:shadow-[0_0_12px_#f8b204]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-lhra-yellow text-lhra-yellow bg-transparent hover:bg-lhra-yellow hover:text-lhra-blue hover:scale-105 hover:shadow-[0_0_12px_#f8b204]",
        secondary:
          "bg-lhra-blue text-white border-2 border-lhra-yellow hover:bg-lhra-yellow hover:text-lhra-blue hover:scale-105 hover:shadow-[0_0_12px_#f8b204]",
        ghost: "hover:bg-lhra-yellow/10 hover:text-lhra-yellow",
        link: "text-lhra-yellow underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
