import Image from "next/image";
import { Container } from "../container";
import { LinksColumn,  } from "./links-column";
import { companyLinks, legalLinks, productLinks, resourcesLinks, socialLinks, usecasesLinks } from "./data";

export function Footer() {
    return (
        <footer className="py-12 px-4 xl:px-0 xl:pt-16">
            <Container>
                <div className="grid grid-cols-2 gap-8 xl:gap-0 xl:flex items-start justify-between pb-12 xl:pb-16">
                    <LinksColumn title="Product" links={productLinks} />
                    <LinksColumn title="Company" links={companyLinks} />
                    <LinksColumn title="Resources" links={resourcesLinks} />
                    <LinksColumn title="Use Cases" links={usecasesLinks} />
                    <LinksColumn title="Social" links={socialLinks} />
                    <LinksColumn title="Legal" links={legalLinks} />
                </div>
                <div className="flex items-start xl:items-center flex-col gap-6 xl:gap-0 xl:flex-row justify-between pt-8 border-t border-t-gray-200">
                    <Image 
                        src="/logo.svg" 
                        alt="logo" 
                        width={140} 
                        height={32} 
                    />

                    <p className="text-gray-500 text-base">© {new Date().getFullYear()} Untitled UI. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}