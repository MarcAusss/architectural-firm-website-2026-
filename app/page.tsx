import Landing from "./components/landing";
import About from "./components/about";
import Services from "./components/services";
import Function from "./components/function";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
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
