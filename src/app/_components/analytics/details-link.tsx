import Link from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props {
    href: string
    title?: string
    className?: string
    children: ReactNode
}

export function DetailsLink({ href, title, className, children }: Props) {
    const styles = twMerge('w-fit flex items-center gap-2 text-base font-semibold text-brand-700 hover:opacity-50 transition-opacity', className)

    return (
        <Link 
            href={href} 
            title={title}
            className={styles}
        >
            {children}
        </Link>
    )
}