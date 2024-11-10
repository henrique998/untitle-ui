import { FiArrowRight } from "react-icons/fi";

export function TagFeat() {
    return (
        <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-full">
            <span className="inline-block bg-white h-6 px-[10px] rounded-2xl font-medium text-brand-700 text-xs/6 xl:text-sm/6">
                New Feature
            </span>
            <a href="#" className="flex items-center gap-1 font-medium text-brand-700 hover:opacity-50 transition-opacity text-xs/6 xl:text-sm/6">
                Check out the team dashboard <FiArrowRight />
            </a>
        </div>
    )
}