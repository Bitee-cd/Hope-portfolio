import "../styles/globals.css";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// import type { AppProps } from "next/app";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="hidden lg:block">
        <AnimatedCursor
          color="197, 255, 0"
          outerAlpha={0.9}
          innerScale={0.7}
          outerScale={5}
          innerSize={10}
          outerSize={20}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}
