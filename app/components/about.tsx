import { montserrat } from "../fonts";

const features = [
  {
    title: "Personalized Care",
    description:
      "Support shaped around your needs, your pace, and your goals.",
    iconClass: "fa-solid fa-user-doctor",
  },
  {
    title: "Practical Tools",
    description:
      "Easy to use techniques that help you cope better in daily life.",
    iconClass: "fa-solid fa-tools",
  },
  {
    title: "Safe and Private",
    description:
      "Confidential sessions designed to help you open up and heal comfortably.",
    iconClass: "fa-solid fa-lock",
  },
];

export default function About() {
  return (
    <div className="px-6 md:px-0 py-16 md:py-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex items-center gap-2 font-semibold">
          <i className="fa-solid fa-diamond"></i>
          <p className={montserrat.className}>About Us</p>
        </div>

        <h1 className="text-2xl md:text-4xl leading-snug md:leading-tight">
          Feel Supported as you regain{" "}
          <span className="text-gray-500">
            calm, <br className="hidden md:block" />
            build confidence, and create real{" "}
            <br className="hidden md:block" />
            progress in your life.
          </span>
        </h1>
      </div>

      {/* Image + Stats */}
      <div className="grid md:grid-cols-[5.7fr_1fr] gap-6 md:gap-x-8 md:gap-y-5 my-10">
        
        {/* Image */}
        <div
          className="h-72 md:h-115 rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/two-business-mature-women-sitting-couch-office-talking-discussing-work_116407-30442.avif')",
          }}
        />

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-5">
          <div className="bg-[#F9F3EE] rounded-2xl p-5">
            <h1 className={`${montserrat.className} text-3xl font-semibold`}>
              250+
            </h1>
            <p className={`${montserrat.className} text-sm`}>
              Certified Therapists
            </p>
          </div>

          <div className="bg-[#F9F3EE] rounded-2xl p-5">
            <h1 className={`${montserrat.className} text-3xl font-semibold`}>
              1M+
            </h1>
            <p className={`${montserrat.className} text-sm`}>
              Community Members
            </p>
          </div>

          <div className="bg-[#F0E6DE] rounded-2xl p-5">
            <h1 className={`${montserrat.className} text-3xl font-semibold`}>
              24/7
            </h1>
            <p className={`${montserrat.className} text-sm`}>
              Online Assistance
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white border-t-2 border-[#c0b9b254] py-6 px-2 group transition-all duration-300"
          >
            <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#474441] group-hover:w-full transition-all duration-300"></div>

            <div className="text-sm bg-[#F0E6DE] p-3 rounded-md inline-block mb-4">
              <i className={feature.iconClass}></i>
            </div>

            <h1 className="text-xl md:text-2xl font-semibold mb-3">
              {feature.title}
            </h1>

            <p className={`${montserrat.className} text-gray-600`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
