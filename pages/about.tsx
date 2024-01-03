import React from "react";
import Image from "next/image";

import { CartIcon, HeroCar6, GemedaWorku } from "../assets";

const about = () => {
  return (
    <div className="mt-20 bg-white dark:bg-backgroundDefault">
      <div className="w-full relative py-16 mx-auto lg:max-w-full md:max-w-full lg:py-20 h-129">
        {/*  */}

        <Image
          src={HeroCar6}
          className="w-full object-cover h-full "
          alt="carousel"
          fill
          placeholder="blur"
        />

        <div className="flex justify-center flex-col items-center h-full w-full relative opacity-8">
          <h1 className="font-bold text-center  text-2xl md:text-2xl lg:text-3xl text-white">
          Digging Deep, Building Bright!
          </h1>
          <p className="font-medium  text-justify text-xl md:text-xl lg:text-2xl text-white mt-5 w-full px-4 sm:w-full md:w-3/4 lg:w-3/4">
              Wadaf Ethiopia Mining PLC is a pioneering force in responsible resource extraction, blending innovation 
              with a commitment to sustainability. Our ethos revolves around cutting-edge technology, ethical 
              practices, and community welfare, aiming to set higher industry standards. With a focus on 
              environmental preservation and social responsibility, we are reshaping mining for a prosperous, ethical future. 
          </p>
        </div>
      </div>
      {/* history */}
      <div
        id="mission"
        className="flex flex-col md:flex-row lg:flex-row my-3 py-10 md:px-10 lg:px-20"
      >
        <div className="flex w-full justify-center flex-col  md:w-1/2 lg:w-1/2 p-10 md:p-10 lg:p-10">
          <div className="flex justify-start items-center">
            <Image
              src={GemedaWorku}
              className="h-32 w-32 rounded-2xl"
              alt="CEO"
            />
            <div className="ml-10 text-dark dark:text-white">
              <div>
                <p className="font-bold text-xl">Mr. Gemeda Worku</p>
                <p className="italic "> CEO of Wadaf Ethiopia Mining PLC</p>
              </div>
              <div className="flex justify-left mt-4">
                <a
                  href="#!"
                  className="mr-6 text-white md:dark:text-white flex justify-center items-center bg-eternity-600 w-8 h-8 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    className="w-6 text-white dark:hover:text-gray-900 hover:text-gray-900"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#!"
                  className="mr-6 text-white md:dark:text-white flex justify-center items-center bg-eternity-600 w-8 h-8 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="w-6 text-white dark:hover:text-gray-900 hover:text-gray-900"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#!"
                  className="mr-6 text-white md:dark:text-white flex justify-center items-center bg-eternity-600 w-8 h-8 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="w-6 h-6 text-white dark:hover:text-gray-900 hover:text-gray-900"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="font-bold text-dark text-left text-xl md:text-xl lg:text-2xl dark:text-white mt-2">
            At Wadaf Ethiopia Mining PLC , our mission is to extract precious minerals and
            resources to meet the growing demands of modern society while
            adhering to the highest standards of safety, sustainability, and
            ethical practices.
          </p>
        </div>
        <div className="w-full text-dark md:w-1/2 lg:w-1/2 p-10 md:p-10 lg:p-10 dark:text-white">
          <p className="text-lg">
            Wadaf Ethiopia Mining Plc. established 2018 in accordance with
            commercial code of Ethiopia and registered by the federal ministry
            of Trade of The Federal Democratic Republic of Ethiopia. AS a
            country, Ethiopia’s Vision is to realize middle income country
            status by 2025. These visions, and the roadmap to achieving this
            goal, are set out in the Homegrown Economic Reform Agenda which was
            launched in 2019 by his Excellency Prime Minister Dr Abiy Ahmed, as
            the next phase of Ethiopia’s previous Growth and Transformation
            plan. The agenda speaks directly about the role of mining in
            achieving this vision. The new Reform Agenda places mining in the
            top four sectors at the core of our ambitions to increase economic
            productivity.
          </p>
        </div>
      </div>
      {/* vision and mission */}
      <div className="flex flex-col md:flex-row lg:flex-row my-3">
        <div className="bg-gray-900 flex lg:justify-evenly items-center flex-col w-full md:w-1/2 lg:w-1/2 p-10 lg:p-20 lg:h-96">
          <Image
            src={CartIcon}
            alt="vision"
            className="w-10 h-10"
            objectFit="cover"
            placeholder="blur"
          />
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-eternity-700">
            Vision
          </h2>
          <p className="text-white text-center">
            Productive and ethical working relationships, transparent and
            responsive dialogue with surrounding communities and public
            agencies, stakeholders and for the benefit of all. A leader in the
            mining industry through our performance
          </p>
        </div>
        <div className="bg-dark flex lg:justify-evenly items-center flex-col w-full md:w-1/2 lg:w-1/2 p-10 lg:p-20 lg:h-96">
          <Image
            src={CartIcon}
            alt="vision"
            className="w-10 h-10"
            objectFit="cover"
            placeholder="blur"
          />
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-eternity-600">
            Mission
          </h2>
          <p className="text-white text-center">
            Continuously introduce modern technologies and mining operational
            improvements and ensure that it employs only high caliber employees
            who will work productively and efficiently to meet the company
            visions, objectives, missions as well as the Country. To extract and
            convert minerals and metal from the Parabola ore body, safely and
            profitably.
          </p>
        </div>
      </div>
      {/* our objectives */}
      <div id="#objective" className="p-5 md:p-20 lg:p-20 w-full">
        <div className="flex justify-center items-center w-full flex-col">
          <h2 className="px-5 font-bold text-xl md:text-2xl lg:text-3xl text-dark py-3 dark:text-white">
            Our Objectives
          </h2>
          <p className="px-5 lg:w-2/3 text-center dark:text-white">
          Our objective at Wadaf Ethiopia Mining PLC is to become a leading global player in the extraction and 
          production of valuable minerals while maintaining the highest standards of safety, 
          sustainability, and ethical practices. We aim to optimize operational efficiency, 
          embrace technological advancements, and foster positive relationships with stakeholders 
          to drive long-term growth and create lasting value for our shareholders, employees, and the communities in which we operate.
          </p>
        </div>

        <div className="flex flex-wrap justify-center w-full mt-8">
          {Array(6)
            .fill({ name: "Objectives" })
            .map((val, index) => {
              return (
                <div
                  className="transform hover:scale-105 transition duration-300 flex flex-col justify-around w-full sm:w-80 md:w-96 lg:w-96 h-80 shadow-lg hover:shadow-xl rounded-lg m-5 p-5 dark:bg-foregroundDefault"
                  key={index}
                >
                  <Image
                    src={CartIcon}
                    alt="vision"
                    className="w-10 h-10"
                    objectFit="cover"
                    placeholder="blur"
                  />
                  <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-eternity-700">
                    {val.name}
                  </h2>
                  <p className="text-dark dark:text-white">
                    Productive and ethical working relationships, transparent
                    and responsive dialogue with surrounding communities and
                    public agencies, stakeholders and for the benefit of all. A
                    leader in the mining industry through our performance
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default about;
