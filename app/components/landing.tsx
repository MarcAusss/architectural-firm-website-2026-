import { montserrat  } from "../fonts";


export default function Landing() {
  return (
    <div className="w-full h-screen bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/images/mountain-meditation-bliss-stockcake.jpg')",}} >
      <div className="pt-32 pb-10 mx-auto max-w-340 flex flex-col justify-between h-full">
        <h1 className="text-5xl text-white leading-16">
          Healing Starts with a <br /> Single {" "}
          <span className="italic text-gray-100">Conversation</span>
        </h1>
        <div className="">
          <h1 className={`${montserrat .className} text-white mb-5`}>
            Compassionate mental health care, online and in person. <br />
            Short-term therapy, long-term tools, provel result.
          </h1>
          <button className={`${montserrat .className} px-5 py-2 rounded-full font-semibold bg-white text-black`}>
            Book A Session
          </button>
        </div>
      </div>

    </div>
  );
}
