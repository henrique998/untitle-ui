import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props {
    className?: string
    children: ReactNode
}

export function Container({ className, children }: Props) {
    const styles = twMerge('w-full max-w-container mx-auto', className)

    return <div className={styles}>{children}</div>
}