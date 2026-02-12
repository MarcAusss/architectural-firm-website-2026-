import { montserrat } from "../fonts";

export default function Function() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage:
          "url('/images/person-silhouette-sunset-jumping-mood-happy-joy-2560x1440-5066.jpg')",
      }}
    >
      <div className="px-6 md:px-0 md:mx-auto md:max-w-6xl text-white">
        
        {/* Header */}
        <div className="flex items-center gap-2 font-semibold mb-6">
          <i className="fa-solid fa-diamond"></i>
          <p className={montserrat.className}>How it Works</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h1 className="text-3xl md:text-5xl leading-tight">
            Simple Steps to Better <br className="hidden md:block" />
            Mental Health
          </h1>

          <p className={`${montserrat.className} text-sm text-white/80`}>
            We make the process clear and comfortable so you can focus
            on healing without stress.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className="bg-[#47444163] backdrop-blur-md rounded-xl p-8 flex flex-col justify-between min-h-[260px]"
            >
              <div className="w-10 h-10 bg-[#88837d98] flex items-center justify-center rounded-md text-lg mb-6">
                0{step}
              </div>

              <div>
                <h1 className="text-xl md:text-2xl mb-4">
                  Free Consultation
                </h1>
                <p className={`${montserrat.className} text-white/80`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cum ducimus eaque repudiandae iste illo odit.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className={`${montserrat.className} px-6 py-3 bg-white text-black text-sm rounded-full hover:scale-105 transition`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
