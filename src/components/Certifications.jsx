"use client";
import React from "react";
import { motion } from "motion/react";
import { CometCard } from "@/components/ui/comet-card";
import HeaderComp from "./HeaderComp";
import Image from "next/image";

const certifications = [
  {
    id: 1,
    title: "Full Stack Software Development",
    issuer: "Sheriyans Coding School",
    date: "2024",
    description:
      "Successfully completed the Full Stack Software Development program covering modern frontend frameworks, backend architecture, databases, APIs, and cloud deployment.",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779434548/Certificate_of_Sheriyans_-Ashirwad_page-0001_t0djep.jpg",
    aspectRatio: "3284 / 2471",
    tags: ["Frontend", "Backend", "Database", "Deployment"],
  },
  {
    id: 2,
    title: "Website Building Competition",
    subtitle: "2nd Place",
    issuer: "College of Commerce, Arts and Science",
    date: "2026",
    description:
      "Secured 2nd position in the inter-college Website Building Competition in, demonstrating strong frontend design skills and creative problem solving under time constraints by building students attendance management system.",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779434429/winn_s6srsg.jpg",
    aspectRatio: "4053 / 3088",
    tags: ["Competition", "Web Design", "Frontend"],
  },
];

export default function Certifications() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <HeaderComp text="CERTIFICATIONS" />

      <div className="flex flex-col gap-20 mt-4">
        {certifications.map((cert, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={cert.id}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <CometCard className="w-full" rotateDepth={6} translateDepth={6}>
                  <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
                    <div className="relative w-full" style={{ aspectRatio: cert.aspectRatio }}>
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </CometCard>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
                  {cert.issuer}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 leading-tight tracking-tight">
                  {cert.title}
                </h3>

                {cert.subtitle && (
                  <span className="text-lg font-semibold text-gray-300 mt-1">
                    {cert.subtitle}
                  </span>
                )}

                <div className="w-10 h-px bg-white/20 mt-4 mb-4" />

                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {cert.description}
                </p>

                {cert.tags && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-wider text-gray-500 border border-white/[0.08] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-xs text-gray-600 mt-5 tracking-wide">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
