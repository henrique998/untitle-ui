import Image from "next/image";
import { Container } from "../container";

export function Testimonials() {
    return (
        <div className="bg-gray-50 px-4 xl:px-0 py-16 xl:py-24">
            <Container>
                <Image 
                    src="/sisyphus.svg" 
                    alt="sisyphus" 
                    width={140}  
                    height={40} 
                    className="mx-auto" 
                />

                <h2 className="font-medium text-3xl/tight xl:text-5xl/[60px] text-center text-gray-900 mt-8 -tracking-[0.96px]">
                    We’ve been using Untitled to kick start every new project and can’t imagine working without it.
                </h2>

                <div className="flex flex-col items-center gap-4 mt-8 text-center">
                    <Image 
                        src="/avatar.png" 
                        alt="avatar" 
                        width={192} 
                        height={192}
                        className="w-16 h-16 rounded-full object-cover"
                    />

                    <div className="space-y-1">
                        <span className="block font-medium text-gray-900 text-lg">Candice Wu</span>
                        <small className="text-gray-600 text-base">Product Manager, Sisyphus</small>
                    </div>
                </div>
            </Container>
        </div>
    )
}