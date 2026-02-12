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
        <div className="mx-auto max-w-340 my-16">
          <About/>
        </div>

        <div className="mx-auto max-w-340 my-16">
          <Services/>
        </div>

        <div className="mx-auto max-w-340 my-16 h-screen" id="function">
          <Function/>
        </div>

        <div className="mx-auto max-w-340 my-16 h-screen">
          <Team/>
        </div>

        <div className="mx-auto max-w-340 my-16 h-screen">
          <Testimonials/>
        </div>

        <div className="mx-auto max-w-340 my-16 h-screen">
          <Faq/>
        </div>
      </main>
    </div>
  );
}
