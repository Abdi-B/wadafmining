import Image from "next/image";
import { useState, useEffect } from "react";
import Partners from "./Partners";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";

import {
  HeroCar1,
  HeroCar2,
  HeroCar6,
  HeroCar9,
  HeroCar10,
  HeroCar12,
} from "../assets";
import { useTypewriter } from "react-simple-typewriter";

const slides = [
  { id: 1, src: HeroCar1 },
  { id: 2, src: HeroCar2 },
  { id: 3, src: HeroCar6 },
  { id: 4, src: HeroCar9 },
  { id: 5, src: HeroCar10 },
  { id: 6, src: HeroCar12 },
];

const Hero = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [index, cycleIndex] = useCycle(0, 1, 2, 3, 4, 5);
  const currentSlide = slides[index];

  const [text, count] = useTypewriter({
    words: [
      "Machine Rent In Ethiopia.",
      "Mining In Ethiopia.",
      "Transportation Rental In Ethiopia.",
    ],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      cycleIndex();
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div
      id="Hero"
      className="w-full relative mx-auto lg:max-w-full md:max-w-full  h-full"
    >
      {/*  */}
      <motion.div
        key={currentSlide.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
      >
        <Image
          src={currentSlide.src}
          // src={slides[0].src}
          className="w-full flex-shrink-0 object-cover h-full absolute inset-0 bg-pink-500 text-white flex items-center justify-center text-5xl transform duration-500"
          alt="carousel"
          fill
          placeholder="blur"
        />
      </motion.div>

      <motion.div>
        <div className="px-5 py-3 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-x lg:py-40 relative bg-gradient-to-r from-shadowDefault to-shadowDefault">
          <div className="max-w-xl sm:mx-auto lg:max-w-3xl">
            <div className="flex flex-col items-center text-center mt-20  mb-16  sm:mb-0 sm:mt-10 lg:mt-0">
              {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400 mb-6 sm:mx-auto">
              
                <svg
                  className="w-10 h-10 text-eternity-300"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                 
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div> */}

              <div className="max-w-xl mx-auto  w-4/5   md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <motion.h1
                  initial={{
                    x: -1000,
                    opacity: 0,
                    // scale: 0.5,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    // scale: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  className="mb-6  font-sans font-bold leading-none tracking-tight text-white text-2xl sm:text-3xl lg:text-3xl md:mx-auto"
                >
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Mining</span>
                  </span>{" "}
                  With Purpose Wadaf Ethiopia Mining PLC Commitment To Responsible{" "}
                  <span className="animate-text bg-gradient-to-r from-eternity-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                    {text}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{
                    x: 1000,
                    opacity: 0,
                    // scale: 0.5,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    // scale: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  className="text-white text-md md:text-lg lg:text-xl"
                >
                  Wadaf Ethiopia Mining PLC is a mining company that operates in Ethiopia, dedicated
                  to extracting valuable minerals and resources while
                  maintaining the highest standards of safety and environmental
                  responsibility.
                </motion.p>
              </div>
              {/* <div>
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "10px 13px 5px -3px rgba(0, 0, 0, 0.3)",
                  }}
                  href="#Contact"
                  className="inline-flex rounded-2xl items-center justify-center h-12 px-10 font-semibold tracking-wide text-white transition duration-200 shadow-md hover:text-white bg-gradient-to-r from-eternity-500 to-blue-500 hover:bg-eternity-800 focus:shadow-outline focus:outline-none"
                >
                  Contact Us
                </motion.a>
              </div> */}
            </div>
          </div>
          <div className="flex w-full justify-center items-center mt-10">
            <hr className="w-40 border-1 border-gray-200 mr-2" />
            <h3 className="text-white text-xl font-bold text-center">
              Our Partners
            </h3>
            <hr className="w-40 border-1 border-gray-200 ml-2" />
          </div>
          <motion.div
          
            initial={{
              y: 100,
              opacity: 0,
              // scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              // scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="mt-16"
          >
            <Partners />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
