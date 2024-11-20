import { Suspense } from "react";
import UseChoice from "./components/UseChoice";
import {
  Nav,
  Header,
  Feature,
  HowItWork,
  CTA,
  Notice,
  Footer,
} from "./components/homepage";

export default function Home() {
  return (
    <main className="bg-dark flex flex-col gap-40 text-white">
      <Nav />
      <Header />
      <Feature />
      <HowItWork />
      <CTA />
      <Notice />
      <Footer />
      <Suspense>
        <UseChoice></UseChoice>
      </Suspense>
    </main>
  );
}
