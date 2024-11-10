import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

interface Props {
    variant?: "primary" | "secondary"
    size?: "sm" | "md"
    className?: string
    children: ReactNode
}

const btnVariants = tv({
    base: "w-full xl:w-auto font-semibold rounded-lg shadow-sm flex items-center justify-center gap-3 transition-colors", 
    variants: {
        variant: {
            primary: "bg-brand-600 text-white hover:bg-brand-700",
            secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
        },
        size: {
            sm: "px-[18px] py-[10px] text-base",
            md: "py-4 px-7 text-lg text-base"
        }
    }
})

export function Button({ variant = "primary", size = "md", className, children }: Props) {
    const styles = twMerge(btnVariants({ variant, size }), className)

    return (
        <button className={styles}>
            {children}
        </button>
    )
}