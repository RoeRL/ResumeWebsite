import React from "react";
import Image from "next/image";
import tugas1 from "@/app/components/images/tugas1.jpeg"
import tugas2 from "@/app/components/images/tugas2.jpeg"
import tugas3 from "@/app/components/images/ArduinoDemo.jpeg"
import tugas31 from "@/app/components/images/Rangkaian.jpeg"
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
            width= "500"
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
            width= "500"
            height="150"
            className="relative rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="m-10">
          <Image
            src={tugas3}
            alt="T1"
            width= "500"
            height="150"
            className="relative rounded-md"
          />
          <Image
            src={tugas31}
            alt="T1"
            width= "500"
            height="150"
            className="relative rounded-md"
          />
        </div>
        <div className="text-left">
          <div className="m-5">
            <h1 className="text-4xl font-bold mb-5 ml-3">Demo Proteus</h1>
            <div className="m-3 ml-100">
              <h3>Tujuan: Memahami Komponen listrik menggunakan arduino uno</h3>
              <h3>Deskripsi: Simulasi Arduino Uno kepada LCD 20x4</h3>
              <h3>Disini kita menggunakan beberapa komponen penting seperti resistor, sensor arus, transistor, dan lain lain.</h3>
              <h3>Software yang digunakan adalah Proteus 8 Professional yang dikembangkan oleh Labcenter Electronics.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Resume;