import { montserrat  } from "../fonts";


export default function Team() {
    return (
        <div>
            <div className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-diamond"></i>
                <p className={`${montserrat.className}`}>Our Team</p>
            </div>        
        </div>
    );
}