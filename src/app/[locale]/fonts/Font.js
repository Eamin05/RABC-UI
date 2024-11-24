import { Roboto, Montserrat } from "next/font/google";

const roboto = Roboto({
  weight: [
    "100", // Thin
    "300", // Light
    "400", // Regular
    "500", // Medium
    "700", // Bold
    "900", // Black
  ],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: [
    "100", // Thin
    "200", // Extra Light
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi-Bold
    "700", // Bold
    "800", // Extra-Bold
    "900", // Black
  ],
  subsets: ["latin"],
  display: "swap",
});

export { roboto, montserrat };
