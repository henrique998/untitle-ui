import Image from "next/image";
import { Container } from "../container";

export function Companies() {
    return (
        <section className="px-4 xl:px-0 pt-24">
            <Container>
                <h3 className="font-medium text-base text-center text-gray-600">Join 4,000+ companies already growing</h3>

                <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-8 xl:flex xl:items-center xl:justify-between">
                    <Image src="/layers.svg" alt="layers" width={146} height={48} className="w-[102px] h-[34px] mx-auto xl:w-[146px] xl:h-[48px]" />
                    <Image src="/sisyphus.svg" alt="sisyphus" width={169} height={48} className="w-[118px] h-[34px] mx-auto xl:w-[169px] xl:h-[48px]" />
                    <Image src="/circooles.svg" alt="circooles" width={183} height={48} className="w-[128px] h-[34px] mx-auto xl:w-[183px] xl:h-[48px]" />
                    <Image src="/catalog.svg" alt="catalog" width={160} height={48} className="w-[112px] h-[34px] mx-auto xl:w-[160px] xl:h-[48px]" />
                    <Image src="/quotient.svg" alt="quotient" width={187} height={48} className="w-[131px] h-[34px] mx-auto xl:w-[187px] xl:h-[48px]" />
                    <Image src="/hourglass.svg" alt="hourglass" width={136} height={34} className="xl:hidden mx-auto" />
                </div>

                <hr className="mt-16 xl:mt-24 border-gray-200" />
            </Container>
        </section>
    )
}