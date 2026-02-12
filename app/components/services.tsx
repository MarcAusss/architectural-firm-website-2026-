import { montserrat  } from "../fonts";


export default function Services() {
    return (
        <div>
            <div className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-diamond"></i>
                <p className={`${montserrat.className}`}>Services</p>
            </div>        
        </div>
    );
}