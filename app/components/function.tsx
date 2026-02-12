import { montserrat  } from "../fonts";


export default function Function() {
    return (
        <div>
            <div className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-diamond"></i>
                <p className={`${montserrat.className}`}>How it Works</p>
            </div>        
        </div>
    );
}