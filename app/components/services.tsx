import Image from "next/image";
import { montserrat  } from "../fonts";


export default function Services() {
    return (
        <div>
            <div className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-diamond"></i>
                <p className={`${montserrat.className}`}>Services</p>
            </div>
            <div className="flex justify-between items-end mt-5">
                <h1 className="text-4xl">Expect Support for Every Part <br /> of Your Healing Path</h1>
                <p className={`${montserrat.className}`}>Find the care that fits your needs, with services that <br /> help you grow, heal, and move forward.</p>
            </div> 
            <div className="grid grid-cols-3 my-5 gap-10">
                <div className="rounded-xl flex flex-col justify-between h-fit">
                    <div className="w-full h-108 relative">
                        <Image
                            src="/images/blog-3-1024x682.jpg"
                            fill
                            alt=""
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="h-[10%] mt-3">
                        <h1 className="text-2xl">Individual Therapy, Counseling</h1>
                        <p className={`${montserrat.className} text-sm`}>One-on-one sessions to help you understand</p>
                        <div className="flex justify-between mt-3">
                            <p className={`${montserrat.className} text-2xl font-semibold`}>₱2,000<span className="text-sm text-gray-600 font-normal">/session</span></p>
                            <button className={`${montserrat.className} px-2 flex items-center gap-2 border py-2 bg-white text-black text-sm rounded-full cursor-pointer`}>
                                Book Session <span className="text-3xl leading-0">&#x2197;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl flex flex-col justify-between h-fit">
                    <div className="w-full h-108 relative">
                        <Image
                            src="/images/GettyImages-1311740272.jpg"
                            fill
                            alt=""
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="h-[10%] mt-3">
                        <h1 className="text-2xl">Mindfulness, Meditation Coaching</h1>
                        <p className={`${montserrat.className} text-sm`}>Practice calm, focus, and emotional clarity through guided.</p>
                        <div className="flex justify-between mt-3">
                            <p className={`${montserrat.className} text-2xl font-semibold`}>₱2,000<span className="text-sm text-gray-600 font-normal">/session</span></p>
                            <button className={`${montserrat.className} px-2 flex items-center gap-2 border py-2 bg-white text-black text-sm rounded-full cursor-pointer`}>
                                Book Session <span className="text-3xl leading-0">&#x2197;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl flex flex-col justify-between h-fit">
                    <div className="w-full h-108 relative">
                        <Image
                            src="/images/istockphoto-2154184023-612x612.jpg"
                            fill
                            alt=""
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="h-[10%] mt-3">
                        <h1 className="text-2xl">Online Therapy, Stress Relief</h1>
                        <p className={`${montserrat.className} text-sm`}>Access professional support from the comfort of your home.</p>
                        <div className="flex justify-between mt-3">
                            <p className={`${montserrat.className} text-2xl font-semibold`}>₱2,000<span className="text-sm text-gray-600 font-normal">/session</span></p>
                            <button className={`${montserrat.className} px-2 flex items-center gap-2 border py-2 bg-white text-black text-sm rounded-full cursor-pointer`}>
                                Book Session <span className="text-3xl leading-0">&#x2197;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    );
}