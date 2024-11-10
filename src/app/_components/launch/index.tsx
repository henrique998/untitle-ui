import Image from "next/image";
import { Container } from "../container";
import { MetricItem } from "./metric-item";

export function Launch() {
    return (
        <section className="py-16 px-4 xl:px-0 xl:py-24">
            <Container>
                <div className="w-full max-w-3xl">
                    <span className="font-semibold text-brand-700">Launch faster</span>
                    <h2 className="mt-3 text-3xl xl:text-4xl/[44px] font-semibold text-gray-900 -tracking-[0.72px]">Build something great</h2>
                    <p className="mt-5 text-lg/relaxed xl:text-xl/[30px] text-gray-600">
                        We’ve done all the heavy lifting so you don’t 
                        have to — get all the data you need to launch and grow your business faster.
                    </p>
                </div>

                <div className="mt-16 flex flex-col xl:flex-row gap-12 xl:gap-0 xl:items-center xl:justify-between">
                    <div className="w-full max-w-xl flex flex-col items-center xl:grid xl:grid-cols-2 xl:gap-x-8 gap-y-8 xl:gap-y-16">
                        <MetricItem 
                            metric="4,000+"
                            title="Global customers"
                            description="We’ve helped over 4,000 amazing global companies."
                        />

                        <MetricItem 
                            metric="600%"
                            title="Return on investment"
                            description="Our customers have reported an average of ~600% ROI."
                        />

                        <MetricItem 
                            metric="10k"
                            title="Global downloads"
                            description="Our app has been downloaded over 10k times."
                        /> 

                        <MetricItem 
                            metric="200+"
                            title="5-star reviews"
                            description="We’re proud of our 5-star rating with over 200 reviews."
                        />  
                    </div>
                    <div>
                        <Image 
                            src="/launch.svg" 
                            alt="launch" 
                            width={560} 
                            height={560}
                        /> 
                    </div>
                </div>
            </Container>
        </section>
    )
}