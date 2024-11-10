import Image from "next/image";
import { Container } from "../container";
import { Question } from "./question";
import { Button } from "../button";

export function Questions() {
    return (
        <section className="pt-16 px-4 xl:px-0 xl:pt-24">
            <Container>
                <div className="text-center space-y-5">
                    <h2 className="font-semibold text-3xl xl:text-4xl/[44px] text-gray-900">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-lg/relaxed xl:text-xl/[30px] text-gray-600">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="w-full max-w-3xl mx-auto mt-12 xl:mt-16 divide-y divide-gray-200">
                    <Question
                        question="Is there a free trial available?"
                        answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                    />

                    <Question
                        question="Can I change my plan later?"
                        answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                    />

                    <Question
                        question="What is your cancellation policy?"
                        answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                    />

                    <Question
                        question="Can other info be added to an invoice?"
                        answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                    />

                    <Question
                        question="How does billing work?"
                        answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                    />

                    <Question
                        question="How do I change my account email?"
                        answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                    />
                </div>

                <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
                    <Image
                        src="/users.svg" 
                        alt="users" 
                        width={120} 
                        height={56} 
                        className="mx-auto"
                    />

                    <h4 className="mt-8 text-xl/[30px] font-medium text-gray-900">Still have questions?</h4>
                    <p className="mt-2 text-lg/7 text-gray-600">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    <Button size="sm" className="mt-8 mx-auto">Get in touch</Button>
                </div>

                <hr className="mt-16 xl:mt-24 border-gray-200" />
            </Container>
        </section>
    )
}