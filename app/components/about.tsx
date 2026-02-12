import { montserrat  } from "../fonts";

const features = [
    {
      title: "Personalized Care",
      description:
        "Support shaped around your needs, your pace, and your goals.",
      iconClass: "fa-solid fa-user-doctor", // replace FaUserMd
    },
    {
      title: "Practical Tools",
      description:
        "Easy to use techniques that help you cope better in daily life.",
      iconClass: "fa-solid fa-tools", // replace FaTools
    },
    {
      title: "Safe and Private",
      description:
        "Confidential sessions designed to help you open up and heal comfortably.",
      iconClass: "fa-solid fa-lock", // replace FaLock
    },
  ];


export default function About() {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-semibold">
                    <i className="fa-solid fa-diamond"></i>
                    <p className={`${montserrat.className}`}>About Us</p>
                </div>

                <h1 className="text-4xl">
                    Feel Supported as you regain {" "}
                    <span className="text-gray-500">
                        calm, <br /> build confidence, and create real <br /> progress in your life.
                    </span>
                </h1>
            </div>

            <div className="grid grid-cols-[5.7fr_1fr] grid-rows-[0.8fr_0.8fr_0.8fr] gap-0 my-5 gap-x-8 gap-y-5">
                <div className="row-span-3 col-span-1 bg-no-repeat bg-center bg-cover h-116 rounded-2xl" style={{backgroundImage: "url('/images/two-business-mature-women-sitting-couch-office-talking-discussing-work_116407-30442.avif')",}}></div>

                <div className="row-span-1 col-span-1 bg-[#F9F3EE] flex flex-col justify-center gap-4 rounded-2xl p-5">
                    <h1 className={`${montserrat.className} text-4xl font-semibold`}>250+</h1>
                    <p className={`${montserrat.className} text-sm`}>Cetified Therapists</p>
                </div>

                <div className="row-span-1 col-span-1 bg-[#F9F3EE] flex flex-col justify-center gap-4 rounded-2xl p-5">
                    <h1 className={`${montserrat.className} text-4xl font-semibold`}>1M+</h1>
                    <p className={`${montserrat.className} text-sm`}>Community Members</p>
                </div>
                
                <div className="row-span-1 col-span-1 bg-[#F0E6DE] flex flex-col justify-center gap-4 rounded-2xl p-5">
                    <h1 className={`${montserrat.className} text-4xl font-semibold`}>24/7</h1>
                    <p className={`${montserrat.className} text-sm`}>Online Assistance</p>
                </div>
            </div>

            <div className=" grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="relative bg-white border-[#c0b9b254] border-t-3 py-4 flex flex-col items-start transition-shadow duration-300 group" >
                        <div className="absolute -top-1 left-0 w-0 h-0.75 bg-[#474441] group-hover:w-full transition-all duration-300"></div>
                        <div className="text-sm text-black bg-[#F0E6DE] p-2 rounded-md mb-3">
                            <i className={feature.iconClass}></i>
                        </div>
                        <h1 className="text-2xl font-semibold mb-2">{feature.title}</h1>
                        <p className={`${montserrat.className} text-gray-600 text-[16px]`}>{feature.description}</p>
                    </div>
                ))}
            </div>
            
        </ >
    );
}