import { montserrat  } from "../fonts";


export default function Function() {
    return (
        <div className="w-full h-screen bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/images/person-silhouette-sunset-jumping-mood-happy-joy-2560x1440-5066.jpg')",}} >
            <div className="mx-auto max-w-340 py-14 text-white">
                <div className="flex items-center gap-2 font-semibold my-5 ">
                    <i className="fa-solid fa-diamond"></i>
                    <p className={`${montserrat.className}`}>How it Works</p>
                </div>        
                <div className="flex justify-between items-end">
                    <h1 className="text-5xl">Simple Steps to Better <br /> Mental Health</h1>
                    <p className={`${montserrat.className} text-sm`}>We make the process clear and comfortable so you can <br /> focus on healing without stress. Our process gives you <br /> clarity, confidence, and structure.</p>
                </div>

                <div className="grid grid-cols-3 gap-10 my-8">
                    <div className="bg-[#47444163] w-full h-87.5 backdrop-blur-md rounded-xl flex flex-col justify-between p-8">
                        <h1 className="w-5 h-5 rounded-sm bg-[#88837d98] flex items-center justify-center p-4 text-lg">01</h1>
                        <div className="">
                            <h1 className="text-3xl mb-4">Free Consultation</h1>
                            <p className={`${montserrat.className}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ducimus eaque repudiandae iste illo odit optio iusto molestiae, quis distinctio?</p>
                        </div>
                    </div>
                    <div className="bg-[#47444163] w-full h-87.5 backdrop-blur-md rounded-xl flex flex-col justify-between p-8">
                        <h1 className="w-5 h-5 rounded-sm bg-[#88837d98] flex items-center justify-center p-4 text-lg">01</h1>
                        <div className="">
                            <h1 className="text-3xl mb-4">Free Consultation</h1>
                            <p className={`${montserrat.className}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ducimus eaque repudiandae iste illo odit optio iusto molestiae, quis distinctio?</p>
                        </div>
                    </div>
                    <div className="bg-[#47444163] w-full h-87.5 backdrop-blur-md rounded-xl flex flex-col justify-between p-8">
                        <h1 className="w-5 h-5 rounded-sm bg-[#88837d98] flex items-center justify-center p-4 text-lg">01</h1>
                        <div className="">
                            <h1 className="text-3xl mb-4">Free Consultation</h1>
                            <p className={`${montserrat.className}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ducimus eaque repudiandae iste illo odit optio iusto molestiae, quis distinctio?</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className={`${montserrat.className} px-5 py-2 bg-white text-black text-sm rounded-full cursor-pointer`}>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}