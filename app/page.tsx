import Landing from "./components/landing";
import About from "./components/about";
import Services from "./components/services";
import Function from "./components/function";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Landing/>
        <About/>
        <Services/>
        <Function/>
        <Team/>
        <Testimonials/>
        <Faq/>
      </main>
    </div>
  );
}
