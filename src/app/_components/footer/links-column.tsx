export type LinkData = {
    href: string
    label: string
    hasTag?: boolean
}

interface Props {
    title: string,
    links: LinkData[]
}

export function LinksColumn({ title, links }: Props) {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-gray-600">{title}</h4>
            <ul className="mt-4 space-y-3">
                {links.map(({ href, label, hasTag = false }) => (
                    <li key={href} className="flex items-center gap-2">
                        <a href={href} className="text-base text-gray-600 font-semibold hover:opacity-50 transition-opacity">
                            {label}
                        </a>

                        {hasTag && (
                            <div className="inline-flex items-center px-2 py-[2px] bg-success-50 rounded-full">
                                <span className="text-xs/[18px] font-medium text-success-700">
                                    New
                                </span>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}