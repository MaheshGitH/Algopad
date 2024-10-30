import CTA from "./components/CTA/CTA";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HowItWork from "./components/howitwork/HowItWork";
import Nav from "./components/Nav";
import Notice from "./components/notice/Notice";

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
    </main>
  );
}
