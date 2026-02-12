import Landing from "./components/landing";
import About from "./components/about";
import Services from "./components/services";
import Function from "./components/function";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import SubFooter from "./components/sub-components/sub-footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Landing/>
        <div className="mx-auto max-w-340 my-16">
          <About/>
        </div>

        <div className="mx-auto max-w-340 my-16 mb-32">
          <Services/>
        </div>

        <div className="h-screen" id="function">
          <Function/>
        </div>

        <div className="mx-auto max-w-340 my-16">
          <Team/>
        </div>

        <div className="mx-auto max-w-340 my-16">
          <Testimonials/>
        </div>

        <div className="mx-auto max-w-340 my-16">
          <Faq/>
        </div>

        <div className="">
          <SubFooter/>
        </div>
      </main>
    </div>
  );
}
