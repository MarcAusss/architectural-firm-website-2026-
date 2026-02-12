import { montserrat } from "../fonts";

export default function Landing() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage:
          "url('/images/mountain-meditation-bliss-stockcake.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      {/* ================= DESKTOP (unchanged) ================= */}
      <div className="hidden md:flex pt-32 relative x-10 pb-10 mx-auto max-w-340 flex-col justify-between h-full">
        <h1 className="text-5xl text-white leading-16">
          Healing Starts with a <br /> Single{" "}
          <span className="italic text-gray-100">Conversation</span>
        </h1>

        <div>
          <h1 className={`${montserrat.className} text-white mb-5`}>
            Compassionate mental health care, online and in person. <br />
            Short-term therapy, long-term tools, provel result.
          </h1>

          <button
            className={`${montserrat.className} px-5 py-2 rounded-full font-semibold bg-white text-black`}
          >
            Book A Session
          </button>
        </div>
      </div>

      {/* ================= MOBILE ONLY ================= */}
      <div className="flex md:hidden relative z-10 h-full px-6 py-20 flex-col justify-center text-center">
        <h1 className="text-3xl leading-tight text-white mb-6">
          Healing Starts with a{" "}
          <span className="italic text-gray-100">Conversation</span>
        </h1>

        <p
          className={`${montserrat.className} text-white text-sm mb-6`}
        >
          Compassionate mental health care, online and in person.
          Short-term therapy, long-term tools, proven results.
        </p>

        <button
          className={`${montserrat.className} px-6 py-3 rounded-full font-semibold bg-white text-black`}
        >
          Book A Session
        </button>
      </div>
    </div>
  );
}
