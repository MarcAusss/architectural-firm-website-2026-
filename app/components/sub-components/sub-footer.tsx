import { montserrat  } from "../../fonts";
 

export default function SubFooter() {
    return (
        <div>
            <div className="relative h-[75vh] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/asdasdasd.jpg')" }}>
                <div className="h-full" style={{ background: 'linear-gradient(to top, rgba(160, 118, 98, 0.6), white)' }}>
                    <div className="flex flex-col justify-center h-full max-w-340 mx-auto">
                        <h1 className="text-4xl tracking-wide">One Decision Can <br /> Change <span className="text-[#978a7d] italic">Your Life</span></h1>
                        <p className="text-sm my-5 w-[25%] ">
                            Take that one step today that can open doors to a brighter tomorrow.
                        </p>
                        <div className="mt-4 flex gap-5">
                            <button className={`${montserrat .className} px-5 py-2 bg-[#25221f] text-white text-sm rounded-full cursor-pointer`}>Get Started Today</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
