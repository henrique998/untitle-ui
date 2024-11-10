import { FiArrowRight, FiBarChart2, FiMail, FiZap } from "react-icons/fi";
import { Container } from "../container";
import { DetailsLink } from "./details-link";
import Image from "next/image";
import { ItemFeat } from "../item-feat";

export function Analytics() {
    return (
        <section className="pt-16 px-4 xl:px-0 xl:pt-24">
            <Container>
                <div className="text-center">
                    <small 
                        className="block w-fit mx-auto font-medium text-sm/snug text-brand-700 bg-brand-50 px-3 py-1 rounded-2xl"
                    >
                        Features
                    </small>
                    <h2 className="mt-4 text-3xl xl:text-4xl/[44px] font-semibold text-gray-900 -tracking-[0.72px]">
                        Cutting-edge features for advanced analytics
                    </h2>
                    <p className="mt-5 text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto">
                        Powerful, self-serve product and growth analytics to help you convert, 
                        engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="relative w-full max-w-full xl:max-w-[888px] h-auto xl:h-[562px] mx-auto mt-12 xl:mt-16">
                    <Image 
                        src="/screen-mockup.svg" 
                        alt="screen-mockup" 
                        width={768} 
                        height={512}
                        className="hidden xl:block absolute -top-[15px] right-[15px]" 
                    />

                    <Image 
                        src="/iphone-mockup.svg" 
                        alt="iphone-mockup" 
                        width={244} 
                        height={498} 
                        className="relative mx-auto xl:absolute bottom-0 left-0 z-40"
                    />
                </div>

                <div className="mt-24 flex items-center flex-col gap-10 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:gap-y-16">
                    <div className="space-y-5">
                        <ItemFeat 
                            icon={FiMail}
                            title="Share team inboxes" 
                            description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop." 
                        />

                        <DetailsLink href="#" className="mx-auto">
                            Learn more
                            <FiArrowRight size={20} />
                        </DetailsLink>
                    </div>

                    <div className="space-y-5">
                        <ItemFeat 
                            icon={FiZap}
                            title="Deliver instant answers" 
                            description="An all-in-one customer service platform that helps you balance everything your customers need to be happy." 
                        />

                        <DetailsLink href="#" className="mx-auto">
                            Learn more
                            <FiArrowRight size={20} />
                        </DetailsLink>
                    </div>

                    <div className="space-y-5">
                        <ItemFeat 
                            icon={FiBarChart2}
                            title="Manage your team with reports" 
                            description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." 
                        />

                        <DetailsLink href="#" className="mx-auto">
                            Learn more
                            <FiArrowRight size={20} />
                        </DetailsLink>
                    </div>
                </div>

                <hr className="mt-16 xl:mt-24 border-gray-200" />
            </Container>
        </section>
    )
}