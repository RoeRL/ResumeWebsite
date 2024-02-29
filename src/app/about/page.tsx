import React from "react";
import Image from "next/image";
import bimos from "@/app/components/images/bimoThumbsup.jpg"
import polmanLogo from "@/app/components/images/logoPolman.png"

const About = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="m-10">
          <Image
            src={bimos}
            alt="Beemo"
            width= "200"
            height="150"
            className="relative rounded-md"
          />
        </div>
        <div className="text-left">
          <div className="m-5">
            <h1 className="text-4xl font-bold mb-5 ml-3">About Me</h1>
            <div className="m-3">
              <h3>Bimo Indracahya Nugroho</h3>
              <h3>Bandung Manufacturing Polytechnic</h3>
            </div>
            <div className="m-3">
              <h3>Jl. Kanayakan Bawah No.63, Dago,</h3>
              <h3>Kecamatan Coblong, Kota Bandung</h3>
            </div>
            <div className="m-3">
              <h3>bimoonwork@gmail.com</h3>
              <h3>+62 877 3973 1102</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen rounded-md">
        <div className="text-right">
          <div className="m-5">
            <h1 className="text-4xl font-bold mb-5 ml-3">Education</h1>
            <div className="m-3">
              <h3>Bandung Manufacturing Polytechnic</h3>
            </div>
            <div className="m-3">
              <h3>Jl. Kanayakan No.21, Dago, Kecamatan Coblong,</h3>
              <h3>Kota Bandung, Jawa Barat 40135</h3>
            </div>
            <div className="m-3">
              <h3>sekretariat@polman-bandung.ac.id</h3>
              <h3>+62 811 2243 666</h3>
            </div>
          </div>
        </div>
        <div className="m-10">
          <Image
            src={polmanLogo}
            alt="Polman"
            width= "200"
            height="150"
            className="relative rounded-md"
          />
        </div>
      </div>
    </div>
  </>
  );
};

export default About;