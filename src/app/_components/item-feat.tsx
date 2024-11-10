interface Props {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
}

export function ItemFeat({ icon: Icon, title, description }: Props) {
    return (
        <div className="text-center w-full max-w-96">
           <div className="w-14 h-14 flex items-center justify-center bg-brand-100 rounded-full mx-auto border-8 border-brand-50">
            <Icon className="w-6 h-6 stroke-brand-600" />
           </div>
           <h3 className="text-gray-900 font-medium text-xl/6 mt-5">{title}</h3>
           <p className="mt-2 text-gray-600 leading-6">{description}</p>
        </div>
    )
}