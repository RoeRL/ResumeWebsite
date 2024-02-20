import React from "react";
import Image from "next/image";
import archive from "@/app/components/images/archive.png";
import Link from "next/link";

const Discover = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="text-center">
          <div className="flex">
            <div className="m-5 text-2xl justify-center items-center">
              <h1>Projects</h1>
              <div className="flex justify-center items-center flex-col">
                <Link href="/discover/projects">
                  <Image
                    src={archive}
                    alt="Archive"
                    width="65"
                    height="60"
                    className="relative m-3"
                  />
                </Link>
              </div>
            </div>
            <div className="m-5 text-2xl">
              <h1>Resume</h1>
              <div className="flex justify-center items-center flex-col">
                <Link href="/discover/resume">
                  <Image
                    src={archive}
                    alt="Archive"
                    width="65"
                    height="60"
                    className="relative m-3"
                  />
                </Link>
              </div>
            </div>
            <div className="m-5 text-2xl">
              <h1>Archivement</h1>
              <div className="flex justify-center items-center flex-col">
                <Link href="/discover/archivement">
                  <Image
                    src={archive}
                    alt="Archive"
                    width="65"
                    height="60"
                    className="relative m-3"
                  />
                </Link>
              </div>
            </div>
            <div className="m-5 text-2xl">
              <h1>Portofolio</h1>
              <div className="flex justify-center items-center flex-col">
                <Link href="/discover/portofolio">
                  <Image
                    src={archive}
                    alt="Archive"
                    width="65"
                    height="60"
                    className="relative m-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Discover;