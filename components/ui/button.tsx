import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tsinline-flex tsitems-center tsjustify-center tswhitespace-nowrap tsrounded-md tstext-sm tsfont-medium tsring-offset-background tstransition-colors focus-visible:tsoutline-none focus-visible:tsring-2 focus-visible:tsring-ring focus-visible:tsring-offset-2 disabled:tspointer-events-none disabled:tsopacity-50",
  {
    variants: {
      variant: {
        default: "tsbg-primary tstext-primary-foreground hover:tsbg-primary/90",
        destructive:
          "tsbg-destructive tstext-destructive-foreground hover:tsbg-destructive/90",
        outline:
          "tsborder tsborder-input tsbg-background hover:tsbg-accent hover:tstext-accent-foreground",
        secondary:
          "tsbg-secondary tstext-secondary-foreground hover:tsbg-secondary/80",
        ghost: "hover:tsbg-accent hover:tstext-accent-foreground",
        link: "tstext-primary tsunderline-offset-4 hover:tsunderline",
      },
      size: {
        default: "tsh-10 tspx-4 tspy-2",
        sm: "tsh-9 tsrounded-md tspx-3",
        lg: "tsh-11 tsrounded-md tspx-8",
        icon: "tsh-10 tsw-10",
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
