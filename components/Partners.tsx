import React from "react";
import Image from "next/image";
import Link from "next/link";

import { partners } from "./constants";


const Partners = () => {
  return (
    <div className="flex flex-row lg:flex-wrap md:overflow-auto sm:overflow-auto overflow-auto items-center lg:justify-center md:justify-center">
      {partners.map((partner, index) => {
        return (
          <div
            className="transform hover:rotate-90  hover:translate-x-1 transition duration-500 relative mr-10 mb-8"
            key={index}
          >
            <Link
              href={partner.link}
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={partner.avatar.src}
                alt={partner.avatar.alt}
                className="rounded-3xl z-10"
                fill
                placeholder="blur"
              />
              <div className="w-24 h-24 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-eternity-900 relative z-0 rounded-3xl" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
