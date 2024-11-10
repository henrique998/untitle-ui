import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    href: string
    title?: string
    children: ReactNode
}

export function NavLink({ href, title, children }: Props) {
    return (
        <Link 
            href={href} 
            title={title}
            className="text-gray-600 font-semibold hover:opacity-50 transition-opacity"
        >
            {children}
        </Link>
    )
}