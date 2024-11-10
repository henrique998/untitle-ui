import { FiBarChart2, FiCommand, FiMail, FiMessageCircle, FiSmile, FiZap } from "react-icons/fi";
import { Container } from "../container";
import { ItemFeat } from "../item-feat";

export function Features() {
    return (
        <section className="py-16 mx-4 xl:mx-0 xl:py-24">
            <Container>
                <div className="text-center">
                    <small className="block font-semibold text-base text-brand-700">Features</small>
                    <h2 className="mt-3 text-3xl xl:text-4xl/10 font-semibold text-gray-900 tracking-tighter-[-0.72px]">
                        Analytics that feels like it’s from the future
                    </h2>
                    <p className="mt-5 text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto">
                        Powerful, self-serve product and growth analytics to help you convert, 
                        engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-12 xl:gap-y-16">
                    <ItemFeat 
                        icon={FiMail}
                        title="Share team inboxes" 
                        description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop." 
                    />

                    <ItemFeat 
                        icon={FiZap}
                        title="Deliver instant answers" 
                        description="An all-in-one customer service platform that helps you balance everything your customers need to be happy." 
                    />

                    <ItemFeat 
                        icon={FiBarChart2}
                        title="Manage your team with reports" 
                        description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." 
                    />

                    <ItemFeat 
                        icon={FiSmile}
                        title="Connect with customers" 
                        description="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion." 
                    />

                    <ItemFeat 
                        icon={FiCommand}
                        title="Connect the tools you already use" 
                        description="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools." 
                    />

                    <ItemFeat 
                        icon={FiMessageCircle}
                        title="Our people make the difference" 
                        description="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help." 
                    />
                </div>
            </Container>
        </section>
    )
}