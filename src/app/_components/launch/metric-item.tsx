interface Props {
    metric: string
    title: string
    description: string
}

export function MetricItem({ metric, title, description }: Props) {
    return (
        <div className="text-center">
            <h3 className="text-5xl text-brand-600 font-semibold xl:text-6xl/[60px]">{metric}</h3>
            <h4 className="text-gray-900 font-medium text-lg/7 mt-3">{title}</h4>
            <p className="mt-2 text-base text-gray-600 leading-6">{description}</p>
        </div>
    )
}