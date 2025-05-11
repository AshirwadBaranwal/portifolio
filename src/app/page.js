"use client";
import ContactForm from "@/components/Contact";
import First from "@/components/First";
import MyWork from "@/components/Projects";
import Second from "@/components/Second";
import Link from "next/link";
import { GrAd } from "react-icons/gr";
import Sidebar from "@/components/Sidebar";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import OfflineOverlay from "@/components/OfflineOverlay";
import Education from "@/components/Education";
import { FaDownload } from "react-icons/fa6";

export default function Home() {
  const isOnline = useOnlineStatus();
  return (
    <>
      {!isOnline && <OfflineOverlay />}
      <div className="max-w-screen-2xl mx-auto bg-black text-white font-sans relative overflow-hidden">
        <header className="fixed w-full top-0 flex justify-between items-center px-4 md:px-16 py-6 z-90 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className="flex items-center text-lg font-bold tracking-wider  gap-2">
            <GrAd color="white" />
            <span className="text-white uppercase">Ashirwad</span>
            <span className="text-gray-400 uppercase">Kumar</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-gray-300 items-center">
            <Link href="#education" className="hover:text-white">
              EDUCATION
            </Link>
            <Link href="#skills" className="hover:text-white">
              SKILLS
            </Link>
            <Link href="#my-work" className="hover:text-white">
              MY WORK
            </Link>
            <Link href="#contact" className="hover:text-white">
              CONTACT
            </Link>
            <Link
              href="https://drive.google.com/uc?export=download&id=1OKSnmVkBv36APCE5Z_Ns2jSy2fhV4mdm"
              className="hover:text-white border border-gray-300 rounded-md px-4 py-1 flex items-center gap-1"
            >
              <FaDownload />
              Resume
            </Link>
          </nav>
          <div className=" md:hidden ">
            <Sidebar />
          </div>
        </header>
        <div id="#">
          <First />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills" className="pt-8">
          <Second />
        </div>
        <div id="my-work" className="pt-5">
          <MyWork />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
