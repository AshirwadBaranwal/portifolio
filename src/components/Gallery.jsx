"use client";
import React from "react";
import { motion } from "motion/react";
import HeaderComp from "./HeaderComp";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    caption: "Receiving 2nd place trophy",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779436494/1779436073839_cyiiqo.jpg",
    width: 400,
    height: 500,
  },
  {
    id: 2,
    caption: "Trophy showcase",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779436495/1779436073809_w1lclk.jpg",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    caption: "Award ceremony",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779436494/1779436073883_yh1ura.jpg",
    width: 400,
    height: 600,
  },
  {
    id: 4,
    caption: "Competition day",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779436497/1779436073570_wf6s7q.jpg",
    width: 500,
    height: 350,
  },
  {
    id: 5,
    caption: "Team celebration",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779436497/1779436073524_m4hypy.jpg",
    width: 400,
    height: 500,
  },
  {
    id: 6,
    caption: "With mentors",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779436498/1779436073633_in3mzv.jpg",
    width: 600,
    height: 400,
  },
  {
    id: 7,
    caption: "Stage moment",
    date: "2026",
    imageUrl:
      "https://res.cloudinary.com/devm1r823/image/upload/v1779436877/Screenshot_2026-05-22-13-30-16-693_com.miui.mediaeditor_cut9at.png",
    width: 400,
    height: 550,
  },
  // Add more items as needed
];

export default function Gallery() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <HeaderComp text="GALLERY" />

      {/* Scrollable container */}
      <div
        className="relative mx-auto max-w-6xl rounded-2xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden"
      >
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div
          className="overflow-y-auto p-4 md:p-6"
          style={{
            maxHeight: "70vh",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.08) transparent",
          }}
        >
          {/* Masonry grid using CSS columns */}
          <div
            style={{
              columnCount: 3,
              columnGap: "12px",
            }}
            className="[column-count:2] md:[column-count:3]"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="mb-3 break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <div className="group relative rounded-xl overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.caption}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />

                  {/* Hover overlay with caption */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                    <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium text-white leading-snug">
                        {item.caption}
                      </p>
                      <span className="text-[11px] text-gray-400">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
