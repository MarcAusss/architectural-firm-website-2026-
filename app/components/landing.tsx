import { playfair } from "../fonts";

export default function Landing() {
  return (
    <div className="w-full h-screen bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/images/mountain-meditation-bliss-stockcake.jpg')",}} >
      <div className="">
        <h1 className={`${playfair.className} text-5xl`}>
          Healing Starts with a Single {" "}
          <span className="italic">Conversation</span>
        </h1>
      </div>

    </div>
  );
}
