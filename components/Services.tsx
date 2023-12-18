import React from "react";
import Image from "next/image";

import { ourServices } from "./constants";
import {
  CartIcon,
  DigIcon,
  TruckIcon,
  ClawIcon,
  MiningTruck,
  MiningTunnel,
  HeroCar3

} from "../assets";

interface CurrentImageProps {
  src: any;
  alt: string;
}

const images: CurrentImageProps[] = [
  {
    src: MiningTruck,
    alt: "Database",
  },
  {
    src: HeroCar3,
    alt: "Backend",
  },
  {
    src: MiningTunnel,
    alt: "Frontend",
  },
];

const Services = () => {
  const [currentImage, setCurrentImage] = React.useState<CurrentImageProps>(
    images[0]
  );

  return (
    <section
      id="Services"
      className="px-2 bg-white dark:bg-backgroundDefault mt-2"
    >
      <div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  At our company, we provide a wide range of services.
                </h2>

                <nav
                  className="grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    onMouseEnter={() => setCurrentImage(images[0])}
                    onClick={() => setCurrentImage(images[0])}
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-300 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                  >
                    <span className="flex">
                      <Image
                        src={DigIcon}
                        alt="product icons"
                        width="16"
                        height="16"
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                      />

                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          MINING
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Plan it, create it, launch it. Collaborate seamlessly
                          with all the organization and hit your marketing goals
                          every month with our marketing plan.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    onMouseEnter={() => setCurrentImage(images[1])}
                    onClick={() => setCurrentImage(images[1])}
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-300 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                  >
                    <span className="flex">
                      <Image
                        src={TruckIcon}
                        alt="product icons"
                        width="16"
                        height="16"
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                      />

                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          MACHINARY RENT
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Plan it, create it, launch it. Collaborate seamlessly
                          with all the organization and hit your marketing goals
                          every month with our marketing plan.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    onMouseEnter={() => setCurrentImage(images[2])}
                    onClick={() => setCurrentImage(images[2])}
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-300 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                  >
                    <span className="flex">
                      <Image
                        src={TruckIcon}
                        alt="product icons"
                        width="16"
                        height="16"
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                      />
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          TRANPORTATION TRUCKS RENTAL
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Plan it, create it, launch it. Collaborate seamlessly
                          with all the organization and hit your marketing goals
                          every month with our marketing plan.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div>
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <Image
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src={currentImage.src}
                        alt={currentImage.alt}
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-200 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
