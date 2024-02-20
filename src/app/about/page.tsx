import React from "react";
import Image from "next/image";
import bimos from "@/app/components/images/bimoThumbsup.jpg"
import rusLogo from "@/app/components/images/logoRus.png"

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
      <div className="flex justify-center items-center w-full h-screen bg-gray-500 rounded-md">
        <div className="text-right text-black">
          <div className="m-5">
            <h1 className="text-4xl font-bold mb-5 ml-3">Recent Education</h1>
            <div className="m-3">
              <h3>Raden Umar Said Vocational School, Kudus</h3>
            </div>
            <div className="m-3">
              <h3>Besito Gebog Kudus, Jawa Tengah</h3>
              <h3>Indonesia</h3>
            </div>
            <div className="m-3">
              <h3>contact@smkrus.sch.id</h3>
              <h3>+62 0291 430202</h3>
            </div>
          </div>
        </div>
        <div className="m-10">
          <Image
            src={rusLogo}
            alt="RUS"
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