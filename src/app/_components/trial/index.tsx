import { Button } from "../button";
import { Container } from "../container";

export function Trial() {
    return (
        <section className="bg-gray-50 py-16 px-4 xl:px-0 xl:py-24">
            <Container className="flex flex-col items-center justify-center gap-10">
                <div className="text-center space-y-5">
                    <h2 className="font-semibold text-3xl xl:text-4xl/[44px] text-gray-900">
                        Start your free trial
                    </h2>

                    <p className="text-xl/[30px] text-gray-600">
                        Join over 4,000+ startups already growing with Untitled.
                    </p>
                </div>

                <div className="w-full xl:w-auto flex flex-col xl:flex-row items-center justify-center gap-3">
                    <Button variant="secondary" size="sm">Learn more</Button>
                    <Button size="sm">Get started</Button>
                </div>
            </Container>
        </section>
    )
}