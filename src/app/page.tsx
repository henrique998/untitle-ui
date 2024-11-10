import { Analytics } from "./_components/analytics";
import { Companies } from "./_components/companies";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Launch } from "./_components/launch";
import { Questions } from "./_components/questions";
import { Testimonials } from "./_components/testimonials";
import { Trial } from "./_components/trial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <Analytics />
      <Questions />
      <Launch />
      <Trial /> 
    </main>
  )
}

// type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// export default async function Home(props: {
//   searchParams: SearchParams
// }) {
//   const searchParams = await props.searchParams

//   const id = searchParams.id

//   if (!id) {
//     return <h1>Não existe id!</h1>
//   }

//   return <h1>O valor do ID é: {id}</h1>
// }