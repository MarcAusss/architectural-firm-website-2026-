import localFont from "next/font/local";

// Montserrat
export const montserrat = localFont({
    src: [
        {
        path: "./fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
        weight: "100 900",
        style: "normal",
        },
        {
        path: "./fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
        weight: "100 900",
        style: "italic",
        },
    ],
    variable: "--font-montserrat",
});

// Hagrid
export const hagrid = localFont({
    src: [
        {
        path: "./fonts/hagrid/Hagrid-Regular-trial.ttf",
        weight: "400",
        style: "normal",
        },
        {
        path: "./fonts/hagrid/Hagrid-Italic-trial.ttf",
        weight: "400",
        style: "italic",
        },
        {
        path: "./fonts/hagrid/Hagrid-Text-Extrabold-trial.ttf",
        weight: "800",
        style: "normal",
        },
        {
        path: "./fonts/hagrid/Hagrid-Text-Extrabold-Italic-trial.ttf",
        weight: "800",
        style: "italic",
        },
    ],
  variable: "--font-hagrid",
});

export const playfair = localFont({
    src: [
        {
        path: "./fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf",
        weight: "100 900",
        style: "italic",
        },
        {
        path: "./fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
        weight: "100 900",
        style: "normal",
        },
    ],
    variable: "--font-playfair",
});
