import Image from "next/image";
import { montserrat  } from "../fonts";


export default function Team() {
    return (
        <div>
            <div className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-diamond"></i>
                <p className={`${montserrat.className}`}>Our Team</p>
            </div>
            <div className="flex justify-between items-end">
                <h1 className="text-4xl">Meet Our Expert Therapist</h1>
                <p className={`${montserrat.className}`}>Get guidance from an experienced <br /> therapist who truly understand your <br /> needs.</p>
            </div> 
            <div className="grid grid-cols-3 my-5 gap-10">
                <div className="rounded-xl flex flex-col justify-between h-fit">
                    <div className="w-full h-118 relative">
                        <Image
                            src="/images/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
                            fill
                            alt=""
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="h-[10%] mt-3">
                        <h1 className="text-2xl">John Doe</h1>
                        <p className={`${montserrat.className} text-sm text-gray-400`}>Manila, Philippines</p>
                    </div>
                </div>
                <div className="rounded-xl flex flex-col justify-between h-fit">
                    <div className="w-full h-118 relative">
                        <Image
                            src="/images/confident-smiling-middle-aged-business-600nw-2451544833.jpg"
                            fill
                            alt=""
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="h-[10%] mt-3">
                        <h1 className="text-2xl">Jane Doe</h1>
                        <p className={`${montserrat.className} text-sm text-gray-400`}>Cebu, Philippines</p>
                    </div>
                </div>
                <div className="rounded-xl flex flex-col justify-between h-fit">
                    <div className="w-full h-118 relative">
                        <Image
                            src="/images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
                            fill
                            alt=""
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="h-[10%] mt-3">
                        <h1 className="text-2xl">Joe Doe</h1>
                        <p className={`${montserrat.className} text-sm text-gray-400`}>Davao, Philippines</p>
                    </div>
                </div>
            </div>       
        </div>
    );
}