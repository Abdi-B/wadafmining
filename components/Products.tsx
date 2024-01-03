import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import { ourProducts, productQuestions, services2 } from "./constants";
import { ServiceImage } from "../assets";
import Accordion from "./Accordion";

const Products = () => {
  const carousel = useRef(null);
  const [width, setWidth] = useState<Number>(0);

  const handleResize = () => {
    if (carousel.current) {
      const { scrollWidth, offsetWidth } = carousel.current;

      if (typeof scrollWidth === "number" && typeof offsetWidth === "number")
        setWidth(scrollWidth - offsetWidth);
    }
  };

  const [expanded, setExpanded] = useState<false | number>(0);

  useEffect(() => {
    handleResize();
  }, [width]);

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="w-full dark:bg-backgroundDefault bg-white">
      <section
        id="Products"
        className="px-2 mt-2 flex justify-center items-center flex-col mx-10"
      >
        <div className="w-full flex justify-center items-center pt-8">
          <div className="max-w-screen-md text-center">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100">
              Products We Offer
            </h2>
            <p className="mt-1 text-dark dark:text-gray-200">
              {/* add bit info on services offered description */}
              We aim to optimize operational efficiency, 
          embrace technological advancements, and foster positive relationships with stakeholders 
          to drive long-term growth and create lasting value for our shareholders, employees, and the communities in which we operate.
            </p>
          </div>
        </div>

        <div className="max-w-[95rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-2 w-full  flex flex-col justify-center items-center ">
          <div className="aspect-w-16 aspect-h-7 w-full">
            <Image
              src={ServiceImage}
              className="w-full object-cover rounded-xl h-96"
              alt="Image Description"
            />
          </div>

          <div className="mt-5 lg:mt-16   gap-8 lg:gap-12 flex  w-full sm:w-4/5 flex-col">
            <div className="lg:col-span-1  flex  w-full   flex-col justify-center items-center ">
              <h2 className="  font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100">
                The Full Products we provide at Wadaf Ethiopia Mining PLC
              </h2>
              <p className="mt-2 md:mt-4 text-dark dark:text-gray-200 text-center">
              At Wadaf Ethiopia Mining PLC, we offer a comprehensive range of 
              premium-quality mineral products sourced through meticulous extraction processes. 
              Our product portfolio includes a diverse array of minerals meticulously mined 
              from our sites, ensuring superior quality and adherence to industry standards. 
              From precious metals to industrial minerals, our offerings cater to varied 
              market needs, promising reliability, and excellence in every product delivered.
              </p>
            </div>
            

            <div className="lg:col-span-2 flex justify-center w-full">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12 md:w-2/3 w-full ">
                {services2.map((val, index) => (
                  <div className="flex gap-x-5  p-2 shadow-lg" key={index}>
                    <Image
                      src={val.icon}
                      alt="product icons"
                      className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
                      width="16"
                      height="16"
                    />
                    {/* <val.icon
                      className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
                      width="16"
                      height="16"
                    /> */}
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {val.title}
                      </h3>
                      <p className="mt-1 text-dark dark:text-gray-200">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
