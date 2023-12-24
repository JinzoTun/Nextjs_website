"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "tsfixed tsinset-0 tsz-50 tsbg-black/80 ts data-[state=open]:tsanimate-in data-[state=closed]:tsanimate-out data-[state=closed]:tsfade-out-0 data-[state=open]:tsfade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "tsfixed tsz-50 tsgap-4 tsbg-background tsp-6 tsshadow-lg tstransition tsease-in-out data-[state=open]:tsanimate-in data-[state=closed]:tsanimate-out data-[state=closed]:tsduration-300 data-[state=open]:tsduration-500",
  {
    variants: {
      side: {
        top: "tsinset-x-0 tstop-0 tsborder-b data-[state=closed]:tsslide-out-to-top data-[state=open]:tsslide-in-from-top",
        bottom:
          "tsinset-x-0 tsbottom-0 tsborder-t data-[state=closed]:tsslide-out-to-bottom data-[state=open]:tsslide-in-from-bottom",
        left: "tsinset-y-0 tsleft-0 tsh-full tsw-3/4 tsborder-r data-[state=closed]:tsslide-out-to-left data-[state=open]:tsslide-in-from-left sm:tsmax-w-sm",
        right:
          "tsinset-y-0 tsright-0 tsh-full tsw-3/4 ts tsborder-l data-[state=closed]:tsslide-out-to-right data-[state=open]:tsslide-in-from-right sm:tsmax-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="tsabsolute tsright-4 tstop-4 tsrounded-sm tsopacity-70 tsring-offset-background tstransition-opacity hover:tsopacity-100 focus:tsoutline-none focus:tsring-2 focus:tsring-ring focus:tsring-offset-2 disabled:tspointer-events-none data-[state=open]:tsbg-secondary">
        <X className="tsh-4 tsw-4" />
        <span className="tssr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tsflex tsflex-col tsspace-y-2 tstext-center sm:tstext-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tsflex tsflex-col-reverse sm:tsflex-row sm:tsjustify-end sm:tsspace-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("tstext-lg tsfont-semibold tstext-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("tstext-sm tstext-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
