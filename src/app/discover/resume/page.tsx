import React from "react";
import Image from "next/image";
import tugas1 from "@/app/components/images/tugas1.jpeg"
import tugas2 from "@/app/components/images/tugas2.jpeg"
import polmanLogo from "@/app/components/images/logoPolman.png"

const Resume = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="m-10">
          <Image
            src={tugas1}
            alt="T1"
            width= "200"
            height="150"
            className="relative rounded-md"
          />
        </div>
        <div className="text-left">
          <div className="m-5">
            <h1 className="text-4xl font-bold mb-5 ml-3">Design Website</h1>
            <div className="m-3 ml-100">
              <h3>Tujuan: Membantu pembuatan website</h3>
              <h3>Deskripsi: Desain ini dibuat agar pengembang dapat mengetahui tata letak dari website dan fungsi yang sudah direncanakan</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen rounded-md">
        <div className="text-left">
          <div className="m-5">
            <h1 className="text-4xl font-bold mb-5 ml-3">Konversi Resistor</h1>
            <div className="m-3">
              <h3>Tujuan: Mengetahui bagaimana cara membaca garis komponen resistor</h3>
              <h3>Deskripsi: Resistor memiliki banyak tipe, dan hal itu di tandai oleh warna yang bermacam macam</h3>
            </div>
          </div>
        </div>
        <div className="m-10">
          <Image
            src={tugas2}
            alt="T2"
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

export default Resume;