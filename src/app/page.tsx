import Image from "next/image";
import bimo from "@/app/components/images/bimo.jpg";

export default function Home() {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="m-10">
          <Image
            src={bimo}
            alt="Beemo"
            width= "200"
            height="150"
            className="relative rounded-md"
          />
        </div>
        <div className="text-center">
          <div className="m-5">
            <h1 className="text-4xl font-bold mb-5">Bimo Indracahya Nugroho</h1>
            <h3>Student at the Bandung Manufacturing Polytechnic,</h3>
            <h3>majoring in Automation Engineering,</h3>
            <h3>concentration in Industrial Engineering Informatics Technology</h3>
          </div>
        </div>
      </div>
    </div>
  </>);
}
