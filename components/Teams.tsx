import React from "react";
import Image from "next/image";

import { ourTeams } from "./constants";

const Teams = () => {
  return (
    <section
      id="Teams"
      className="mx-auto pt-32 bg-white dark:bg-gray-800 mt-2"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] dark:text-white">
                Our Team
              </h2>
              <h3 className="text-primary mb-2 block text-lg font-semibold dark:text-white">
                The Talented People Behind the Scenes of the Organization
              </h3>
              <p className="text-body-color text-base dark:text-white">
                Our teams are a great way to showcase your skills and expertise.
                You can list your name, position, and the team you work for
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-gray-800 px-10 py-10">
        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col mx-auto h-128">
          <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full bg-eternity-500"></div>
          <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full overflow-auto pt-5 no-scrollbar">
            <div
              role="list"
              aria-label="Behind the scenes People"
              className="lg:flex md:flex sm:flex items-center xl:justify-evenly flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              {ourTeams.map((member, index) => {
                return (
                  <div
                    key={index}
                    role="listitem"
                    className="rounded-[20px] hover:shadow-lg xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 mr-1"
                  >
                    <div className="rounded-md overflow-hidden shadow-md bg-white dark:bg-gray-900">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <Image
                            src={member.Avatar.src}
                            alt={member.Avatar.alt}
                            className="rounded-full object-cover h-full w-full shadow-md"
                            width={100}
                            height={30}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <h4 className="font-bold dark:text-white text-xl text-center mb-1">
                          {member.name}
                        </h4>
                        <p className="text-gray-800 dark:text-white text-sm text-center">
                          {member.role}
                        </p>
                        <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                          {member.description}
                        </p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="#" className="mx-5">
                            <div aria-label="Github" role="img">
                              <Image
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                                alt="github"
                                width={25}
                                height={25}
                                priority
                              />
                            </div>
                          </a>
                          <a href="#" className="mx-5">
                            <div aria-label="Twitter" role="img">
                              <Image
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                                alt="twitter"
                                width={25}
                                height={25}
                                priority
                              />
                            </div>
                          </a>
                          <a href="#" className="mx-5">
                            <div aria-label="Instagram" role="img">
                              <Image
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                                alt="instagram"
                                width={25}
                                height={25}
                                priority
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
