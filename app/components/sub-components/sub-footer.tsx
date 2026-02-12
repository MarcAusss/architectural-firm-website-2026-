import { montserrat } from "../../fonts";

export default function SubFooter() {
  return (
    <section className="relative h-[60vh] md:h-[75vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/asdasdasd.jpg')" }}
    >
      <div className="h-full bg-gradient-to-t from-[#a07662]/60 to-white/90">
        <div className="flex flex-col justify-center h-full px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wide">
            One Decision Can <br />
            Change <span className="text-[#978a7d] italic">Your Life</span>
          </h1>

          <p className="text-sm md:text-base my-6 max-w-md">
            Take that one step today that can open doors to a brighter tomorrow.
          </p>

          <button
            className={`${montserrat.className} w-fit px-6 py-3 bg-[#25221f] text-white text-sm rounded-full`}
          >
            Get Started Today
          </button>

        </div>
      </div>
    </section>
  );
}
