import Image from "next/image";
import { Container } from "../container";
import { NavLink } from "./nav-link";
import { FiMenu } from "react-icons/fi";

export function Header() {
    return (
        <header className="h-20 px-4 sticky top-0 z-50 bg-white border-b border-b-gray-100">
            <Container className="h-full flex items-center justify-between">
                <div className="w-full xl:w-auto flex items-center justify-between gap-10">
                    <Image src="/logo.svg" alt="" width={142} height={32} />

                    <nav className="hidden xl:flex items-center gap-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Products</NavLink>
                        <NavLink href="/resource">Resource</NavLink>
                        <NavLink href="/pricing">Pricing</NavLink>
                    </nav>

                    <button className="block xl:hidden">
                        <FiMenu className="w-6 h-6 stroke-gray-700" />
                    </button>
                </div>

                <div>
                    <Image 
                        src="/avatar.png" 
                        alt="avatar" 
                        width={120} 
                        height={120} 
                        className="hidden xl:block w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </Container>
        </header>
    )
}