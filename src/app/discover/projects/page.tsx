import React from "react";
import Image from "next/image";
import gameDevPng from "@/app/components/images/Game-Development.png"
import mobileDevPng from "@/app/components/images/Mobile-Development.png"
import websiteDevPng from "@/app/components/images/Website-Development.png"
import aiDevPng from "@/app/components/images/AI-Development.png"
import Link from "next/link";
import archive from "@/app/components/images/archive.png"

const About = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-5">Projects</h1>
                <h2>Select Category</h2>
            </div>
            <div className="text-center">
          <div className="flex m-10">
            <div className="m-5 font-bold justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <Link href="/discover/projects/game-development">
                  <Image
                    src={gameDevPng}
                    alt="gamedev"
                    width="150"
                    height="100"
                    className="relative m-3"
                  />
                </Link>
              </div>
              <h1>Game Development</h1>
            </div>
            <div className="m-5 ">
              <div className="flex justify-center items-center flex-col">
                <Link href="/discover/projects/mobile-development">
                  <Image
                    src={mobileDevPng}
                    alt="mobileDev"
                    width="150"
                    height="100"
                    className="relative m-3"
                  />
                </Link>
              </div>
              <h1>Mobile Development</h1>
            </div>
            <div className="m-5 ">
              <div className="flex justify-center items-center flex-col">
                <Link href="/discover/projects/web-development">
                  <Image
                    src={websiteDevPng}
                    alt="webDev"
                    width="150"
                    height="100"
                    className="relative m-3"
                  />
                </Link>
              </div>
              <h1>Website Development</h1>
            </div>
            <div className="m-5 ">
              <div className="flex justify-center items-center flex-col">
                <Link href="/discover/projects/ai-development">
                  <Image
                    src={aiDevPng}
                    alt="aiDev"
                    width="150"
                    height="100"
                    className="relative m-3"
                  />
                </Link>
              </div>
              <h1>NLP Development</h1>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default About;