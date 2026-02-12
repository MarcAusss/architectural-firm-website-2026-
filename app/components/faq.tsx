import { montserrat  } from "../fonts";


export default function Faq() {
    return (
        <div>
            <div className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-diamond"></i>
                <p className={`${montserrat.className}`}>FAQ</p>
            </div>        
        </div>
    );
}