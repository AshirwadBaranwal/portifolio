import Image from "next/image";
import { GrAd } from "react-icons/gr";
import { SpinningText } from "@/components/magicui/spinning-text";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function First() {
  return (
    <main className="md:min-h-screen bg-black text-white font-sans relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5 z-0">
        <Image
          src="/backgroundweb.webp" // Replace with actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=" mix-blend-difference"
        />
      </div>

      {/* Header */}

      {/* Content */}
      <section className="relative h-[calc(100vh-120px)] flex flex-col-reverse md:flex-row items-center  px-8 md:px-20 md:ml-14 ml-5 mt-20 ">
        {/* Left Shape + Image */}
        <div className="relative w-full md:w-1/2   h-full flex md:items-center justify-center mt-10 md:mt-0">
          {/* Geometric Shape */}
          <div className="md:absolute w-[320px] h-[320px] md:w-[35vw] md:h-[35vw] bg-gray-600 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] rotate-45 z-1 overflow-hidden  ">
            <div className="relative w-[120%] h-[120%] mt-10 ">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover -rotate-45"
              />
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-fit text-center md:text-left space-y-2 md:-ml-24  lg:-ml-36 z-2 ">
          <h2 className="text-5xl  md:text-6xl lg:text-[6rem] font-bold tracking-wide text-white">
            CREATIVE
          </h2>

          <h1 className="text-4xl  md:text-[3rem] lg:text-[4rem] font-medium tracking-widest md:tracking-[0.2rem] lg:tracking-[1rem]">
            DEVELOPER
          </h1>

          <p className="w-full text-md  md:text-xl lg:text-2xl text-gray-400 mt-2 tracking-[0.15rem] md:tracking-[0.25rem] lg:tracking-[0.7rem] ">
            SENSIBLE TO FRONTEND
          </p>
        </div>
      </section>

      {/* Left Number */}
      <div className="absolute bottom-6 left-6 text-6xl md:text-[100px] font-bold text-white ">
        01
        <div className="w-full h-2 bg-white a"></div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-0 right-0 text-[10px] text-gray-500 rotate-90 origin-bottom-right pr-4">
        @2024 TURABLI
      </div>
      {/* Spinning Text */}
      <div className="absolute bottom-20 right-10 text-[10px] text-gray-500 rotate-90 origin-bottom-left pl-4">
        <SpinningText>Ashirwad Kumar • Frontend Developer •</SpinningText>
      </div>
      <div className="absolute flex gap-3 flex-col  top-[40%] left-2 md:left-5 text-[10px] ">
        <Link
          href="https://x.com/Ashirwa63650095"
          target="_blank"
          className="text-black bg-white p-2 rounded-full cursor-pointer "
        >
          <FaTwitter size={10} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ashirwad-kumar-9a643520b/"
          target="_blank"
          className="text-black bg-white p-2 rounded-full cursor-pointer "
        >
          <FaLinkedinIn size={10} />
        </Link>
        <Link
          href="https://github.com/AshirwadBaranwal?tab=overview"
          target="_blank"
          className="text-black bg-white p-2 rounded-full cursor-pointer "
        >
          <FaGithub size={10} />
        </Link>
      </div>
    </main>
  );
}
