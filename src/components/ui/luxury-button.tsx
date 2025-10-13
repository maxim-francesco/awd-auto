"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "luxury-button",
        outline: "luxury-button-outline",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-luxury-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-3",
        sm: "px-6 py-2 text-xs",
        lg: "px-10 py-4 text-lg",
        icon: "h-10 w-10",
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
    const Comp = asChild ? Slot : motion.button
    
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
    
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ y: -2, boxShadow: "0 10px 30px -10px hsl(28 65% 42% / 0.4)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        {...(props as any)}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
