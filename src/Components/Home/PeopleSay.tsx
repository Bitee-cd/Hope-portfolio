import Image from "next/image";
import React, { useState } from "react";
import ArrowUp from "../../../public/svg/arrow-up.svg";
import { AnimatePresence, motion } from "framer-motion";
interface Props {}
const testimonialData = [
  {
    id: 1,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "Victor Anto",
    position: "Senior Frontend Engineer",
    company: "(Ourpass, Nigeria)",
  },
  {
    id: 2,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "John Doe",
    position: "Software Developer",
    company: "(Acme Inc., USA)",
  },
  {
    id: 3,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "Jane Smith",
    position: "UI Designer",
    company: "(Design Co., Canada)",
  },
  {
    id: 4,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "Mike Johnson",
    position: "Product Manager",
    company: "(Innovate Ltd., UK)",
  },
  {
    id: 5,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”",
    author: "Lucy Williams",
    position: "Marketing Manager",
    company: "(Growth Inc., Australia)",
  },
];
const PeopleSay = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonialData.length);
  };

  // Automatically move to the next testimonial every one second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonialData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonialData[currentIndex];
  return (
    <section className="bg-sec">
      <div className="screen-center  grid lg:grid-cols-2 gap-10 my-10 lg:my-20">
        <div className="flex items-center justify-center text-white">
          <p className="h2 font-bold text-center">What people say about Me.</p>
        </div>
        <div className="flex flex-col md:flex-row relative  gap-5 mb-10">
          <div className="md:w-[80%]  relative">
            <div className="bg-sec_dark rounded-[30px] w-[80%] right-1/2  translate-x-1/2 h-[110%] lg:h-[120%] lg:h- z-auto my-auto -top-5 lg:-top-10  border border-sec_light absolute"></div>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                key={currentTestimonial.id}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-50%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-sec_dark rounded-[30px] p-5 md:px-10  relative w-full  z-auto  mx-auto border border-sec_light "
              >
                <p className="text-ter text-opacity-50 h2 font-bold">
                  {testimonialData[currentIndex].id.toString().padStart(2, "0")}
                </p>
                <p className="text-[#DADADA] p">
                  {testimonialData[currentIndex].quote}
                </p>
                <p className="text-white p font-semibold mt-5">
                  {testimonialData[currentIndex].author}
                </p>
                <div className="p-small text-[#888787] text-opacity-60 mt-2">
                  <p> {testimonialData[currentIndex].position}</p>
                  <p>
                    <span>{testimonialData[currentIndex].company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-row md:flex-col gap-5 justify-center">
            <button
              onClick={handlePrevClick}
              className="bg-sec_dark -rotate-90 md:rotate-0 rounded-full flex items-center justify-center w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
            >
              <Image src={ArrowUp} alt="arrow up" />
            </button>
            <button
              onClick={handleNextClick}
              className="bg-sec_dark rotate-90 md:rotate-180 rounded-full flex items-center justify-center  w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
            >
              <Image src={ArrowUp} alt="arrow up" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;
