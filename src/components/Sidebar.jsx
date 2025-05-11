import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuKebab } from "react-icons/ci";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <Sheet className="font-">
      <SheetTrigger>
        <div className="md:hidden flex items-center bg-gray-800 rounded-full p-2">
          <CiMenuKebab />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Here is the shortcut menu -</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
          <Link
            href="#"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300"
          >
            Skills
          </Link>
          <Link
            href="#my-work"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href="https://drive.google.com/uc?export=download&id=1OKSnmVkBv36APCE5Z_Ns2jSy2fhV4mdm"
            className="hover:text-white border border-gray-300 rounded-md px-4 py-1 flex items-center gap-1"
          >
            <FaDownload />
            Resume
          </Link>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
