"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const skills1 = [
  { label: "HTML", value: 95 },
  { label: "CSS", value: 90 },
  { label: "JAVASCRIPT", value: 85 },
  { label: "TAILWIND", value: 85 },
  { label: "MERN", value: 80 },
];
const skills2 = [
  { label: "NEXTJS", value: 85 },
  { label: "SUPABASE", value: 80 },
  { label: "CLERK", value: 85 },
  { label: "KINDE", value: 70 },
  { label: "DEPLOYMENT", value: 90 },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Adjust margin for earlier trigger

  return (
    <section
      ref={ref}
      className="text-white md:px-8  max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-xl sm:text-3xl font-bold">
        I AM A FULL STACK DEVELOPER
      </h2>
      <p className="text-sm text-gray-400">
        Full Stack Developer with hands-on experience in building modern web
        applications using MERN stack, Next.js, and cloud tools. Skilled in
        crafting responsive user interfaces, integrating secure authentication
        flows, and working with APIs and databases like Supabase and MongoDB.
        Comfortable working across the stack and passionate about building
        intuitive and scalable products. Looking to contribute to dynamic teams
        where I can grow and deliver impact.
      </p>

      <div className=" mt-6 flex w-full gap-8 md:gap-10">
        <div className="space-y-5 w-1/2">
          {skills1.map(({ label, value }, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">{value}%</span>
                <span className="text-white font-medium">{label}</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-1000 ease-in-out"
                  style={{ width: isInView ? `${value}%` : `0%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-5 w-1/2">
          {skills2.map(({ label, value }, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">{value}%</span>
                <span className="text-white font-medium">{label}</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-1000 ease-in-out"
                  style={{ width: isInView ? `${value}%` : `0%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
