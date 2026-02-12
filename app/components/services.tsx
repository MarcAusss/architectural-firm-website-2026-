import Image from "next/image";
import { montserrat } from "../fonts";

export default function Services() {
  return (
    <div className="px-6 md:px-0 py-16 md:py-20">

      {/* Header */}
      <div className="flex items-center gap-2 font-semibold">
        <i className="fa-solid fa-diamond"></i>
        <p className={montserrat.className}>Services</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
        <h1 className="text-2xl md:text-4xl leading-snug">
          Expect Support for Every Part <br className="hidden md:block" />
          of Your Healing Path
        </h1>

        <p className={`${montserrat.className} text-sm text-gray-600`}>
          Find the care that fits your needs, with services that help you grow,
          heal, and move forward.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {[
          {
            title: "Individual Therapy, Counseling",
            image: "/images/blog-3-1024x682.jpg",
          },
          {
            title: "Mindfulness, Meditation Coaching",
            image: "/images/GettyImages-1311740272.jpg",
          },
          {
            title: "Online Therapy, Stress Relief",
            image: "/images/istockphoto-2154184023-612x612.jpg",
          },
        ].map((service, index) => (
          <div key={index} className="rounded-xl">
            <div className="relative h-72 md:h-105">
              <Image
                src={service.image}
                fill
                alt=""
                className="object-cover rounded-xl"
              />
            </div>

            <div className="mt-4">
              <h1 className="text-xl md:text-2xl mb-2">
                {service.title}
              </h1>

              <p className={`${montserrat.className} text-sm text-gray-600`}>
                Access professional support from the comfort of your home.
              </p>

              <div className="flex justify-between items-center mt-4">
                <p className={`${montserrat.className} text-xl font-semibold`}>
                  ₱2,000
                  <span className="text-sm text-gray-500 font-normal">
                    /session
                  </span>
                </p>

                <button
                  className={`${montserrat.className} px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition`}
                >
                  Book Session ↗
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
