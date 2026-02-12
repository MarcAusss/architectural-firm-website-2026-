import Form from 'next/form'
import Link from 'next/link'
import { montserrat  } from "../../fonts";


export default function Footer() {
    return (
        <footer className="max-w-345 mx-auto" id="footer">
            <div className="flex justify-between items-end py-8 border-b border-gray-300">
                <h1 className="text-5xl">Your journey to mental <br /> wellness starts here</h1>
                <p className={`${montserrat.className} text-sm`}>We make the process clear and comfortable so you can <br /> focus on healing without stress. Our process gives you <br /> clarity, confidence, and structure.</p>
            </div>
            <div className="mt-5 py-5 flex justify-between">
                <div className="w-[30%]">
                    <h1 className="font-bold text-xl mb-2">Greenova</h1>
                    <p className="text-sm font-semibold mb-2">Subscribe</p>
                    <p className="text-sm mb-5">Join our newsletter to stay up to date on features and releases.</p>
                    <div className="mb-5">
                        <Form action="/search" className='flex items-center bg-[#dbdbdb50] justify-between p-2 rounded-4xl'>
                            <div className="p-2 bg-[#e2f89a] rounded-full">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <input name="query" placeholder='Enter your email' className='outline-0'/>
                            <button type="submit" className='px-5 py-2 bg-black text-white rounded-4xl'>Subscribe</button>
                        </Form>
                    </div>
                    <p className="">
                        By subscribing you agree to with our <Link href="" className="underline">Privacy Policy</Link>
                    </p>
                </div>
                <div className="flex justify-between w-[50%]">
                    <div className="flex flex-col gap-4">
                        <h1>Quick Links</h1>
                        <Link href="">Home</Link>
                        <Link href="">About</Link>
                        <Link href="">Services</Link>
                        <Link href="">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Services</h1>
                        <Link href="">Solar Panel Installation</Link>
                        <Link href="">Wind Turbine Solution</Link>
                        <Link href="">EV Charging Station</Link>
                        <Link href="">Maintenance Support</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Company</h1>
                        <Link href="">Contact Us</Link>
                        <Link href="">Emergency Help</Link>
                        <Link href="">FAQ</Link>
                        <Link href="">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-345 mx-auto flex justify-between border-t py-3 border-gray-300">
                <p className="text-gray-400">© 2026 Company, All rights reserved.</p>
                <div className="flex gap-5">
                    <Link href="" className='border-r pr-5 border-gray-400'>Terms of Services</Link>
                    <Link href="" className='border-r pr-5 border-gray-400'>Privacy Policy</Link>
                    <Link href="" className=''>Compliance</Link>
                </div>
            </div>
        </footer>
    );
}