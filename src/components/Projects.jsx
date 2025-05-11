"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import { BsGlobe2 } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Image from "next/image";

export default function MyWork() {
  const projects = [
    {
      title: "Grocify (Grocery Store)",
      imageUrl:
        "https://ap-south-1.graphassets.com/cmahtuzc10bci07pk64gx96gm/cmaj1tkcw1ifo07pm5ofyzch1",
      date: "2025",
      description:
        " A webiste with admin panel where user can buy groceries online.",
      icon: <SiNextdotjs />,
      href: "https://grocery-website-neon.vercel.app/",
      techs: ["Next.js", "Supabase", "Tailwind CSS", "Kinde Auth", "ShadcnUi"],
    },
    {
      title: "HostelHive(Hostel/PG Finder)",
      imageUrl: "https://ap-south-1.graphassets.com/cmahtuzc10bci07pk64gx96gm/cmaj1tkdl1i8m07pl6jws4wt9",
      date: "2024",
      description:
        "Built in collaboration with another developer to help students find hostels and PGs, with features like secure login, search filters, and real-time listings using MERN.",
      icon: <FaReact />,
      href: "https:/trendcity.online/",
      techs: [
        "Mongodb",
        "Express",
        "React",
        "Node.js",
        "Tailwind CSS",
        "Algolia Search",
        "Clerk",
        "ShadcnUi",
      ],
    },
    {
      title: "KrishanuClasses (Online Classes)",
      imageUrl:
        "https://ap-south-1.graphassets.com/cmahtuzc10bci07pk64gx96gm/cmaj1tkgk1i8s07plnxx94fcz",
      date: "2023",
      description:
        "An edtech platform with beautiful ui design with test system and performence dashboard.Still in progress.",
      icon: <SiNextdotjs />,
      href: "https://krishanu-classes.vercel.app",
      techs: ["Next.js", "Appwrite", "Tailwind CSS", "ShadcnUi"],
    },
    {
      title: "BCAGUIDE360",
      imageUrl: "https://ap-south-1.graphassets.com/cmahtuzc10bci07pk64gx96gm/cmaj1tkgf1ifu07pmfd8stp46",
      date: "2023",
      description:
        "A website for BCA students providing Book Library, Coding Ques, PYQs and notes.",
      icon: <SiNextdotjs />,
      href: "https://www.bcaguide360.live/",
      techs: ["Next.js", "Tailwind CSS", "Shadcn UI", "Clerk", "Hygraph"],
    },

    {
      title: "Traver(Travel)",
      imageUrl: "https://ap-south-1.graphassets.com/cmahtuzc10bci07pk64gx96gm/cmaj1tkcy1i8h07plukabsjr1",
      date: "2023",
      description:
        "A travelling webiste showcasing frontend skill in react js using tailwind.",
      icon: <FaReact />,
      href: "https://traverone.vercel.app",
      techs: ["React", "Tailwind CSS", "ShadcnUi"],
    },
    // Add more items as needed
  ];

  return (
    <section id="my-work" className="bg-black text-white py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 underline underline-offset-8">
        MY WORK
      </h2>
      <VerticalTimeline lineColor="#fff">
        {projects.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            contentStyle={{ background: "#111", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #111" }}
            iconStyle={{ background: "#fff", color: "#000" }}
            icon={item.icon}
          >
            <Image
              src={item.imageUrl} // Public folder or remote URL
              alt="Profile"
              width={500} // Required if not using `fill`
              height={500}
              className="rounded-xl object-cover"
              priority={false} // Set to true if above the fold
              quality={75} // 1-100 (optional optimization level)
            />
            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            <div className="mt-2">
              <h4 className="text-sm font-semibold">Technologies:</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {item.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[10px] font-semibold rounded-lg bg-gray-300 text-black p-1 px-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={item.href}
                target="_blank"
                className=" mt-4 inline-block float-right"
              >
                <Button className="cursor-pointer">
                  <BsGlobe2 />
                  Website
                </Button>
              </Link>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
