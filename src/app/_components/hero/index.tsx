import { FiPlayCircle } from "react-icons/fi";
import { Button } from "../button";
import { Container } from "../container";
import { TagFeat } from "./tag-feat";
import Image from "next/image";

export function Hero() {
    return (
        <section className="px-4 pt-16 xl:pt-24 xl:px-0">
            <Container>
                <div className="text-center">
                    <TagFeat />
                    <h1 className="text-4xl xl:text-6xl font-semibold text-gray-900 mt-4">Beautiful analytics to grow smarter</h1>
                    <p className="mt-6 text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto">
                        Powerful, self-serve product and growth analytics to help you convert, 
                        engage, and retain more users. 
                        Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="pt-12 flex flex-col xl:flex-row items-center justify-center gap-3">
                    <Button variant="secondary">
                        <FiPlayCircle className="w-6 h-6 stroke-gray-700" />
                        Demo
                    </Button>

                    <Button>
                        Sign Up
                    </Button>
                </div>

                <Image 
                    src="/hero.svg" 
                    alt="hero image" 
                    width={1216} 
                    height={710} 
                    className="hidden xl:block mx-auto mt-16" 
                />

                <Image 
                    src="/hero-mobile.svg" 
                    alt="hero image" 
                    width={342} 
                    height={200} 
                    className="xl:hidden mx-auto mt-16" 
                />

                <hr className="hidden xl:block border-gray-200" />
            </Container>
        </section>
    )
}