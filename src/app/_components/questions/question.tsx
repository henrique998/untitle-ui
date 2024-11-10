'use client'

import { useState } from "react"
import { FiMinusCircle } from "react-icons/fi"

interface Props {
    question: string
    answer: string
}

export function Question({ question, answer }: Props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full pt-6 pb-8 first:pt-0 last:pb-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                    {question}
                </h3>

                <FiMinusCircle className="w-6 h-6 stroke-brand-600" />
            </button>

            {isOpen && (
                <p className="mt-2 leading-normal text-gray-600 pr-12">
                    {answer}
                </p>
            )}
        </div>
    )
}