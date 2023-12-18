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
        className="px-2 mt-2 flex justify-center items-center flex-col"
      >
        <div className="w-full flex justify-center items-center pt-8">
          <div className="max-w-screen-md text-center">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100">
              Products We Offer
            </h2>
            <p className="mt-1 text-dark dark:text-gray-200">
              {/* add bit info on services offered description */}
              We offer a wide range of services from web development to mobile
              app development to help you grow your business.
            </p>
          </div>
        </div>

        <div className="max-w-[95rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="aspect-w-16 aspect-h-7">
            <Image
              src={ServiceImage}
              className="w-full object-cover rounded-xl h-96"
              alt="Image Description"
            />
          </div>

          <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100">
                The Full Products we provide at Wadaf Ethiopia Mining PLC
              </h2>
              <p className="mt-2 md:mt-4 text-dark dark:text-gray-200">
                We provide cutting-edge mining equipment to help you maximize
                efficiency and profitability. Invest in our quality products for
                your mining operations. We provide cutting-edge mining
                equipment.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {services2.map((val, index) => (
                  <div className="flex gap-x-5" key={index}>
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
