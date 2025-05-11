// app/components/Education.tsx or /components/Education.tsx

import HeaderComp from "./HeaderComp";

const educationData = [
  {
    college: "COLLEGE OF COMMERCE, ARTS AND SCIENCE",
    degree: "Bachelor in Computer Applications",
    duration: "Aug 2023 - Aug 2026",
  },
  {
    college: "M.J.K COLLEGE, BETTIAH",
    degree: "Physics, Chemistry & Mathematics",
    duration: "April 2019 - April 2021",
  },
];

export default function Education() {
  return (
    <section className="text-white bg-black py-10 px-6 md:px-20">
      <HeaderComp text="EDUCATION" />
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-between md:items-center border-b border-gray-800 pb-6"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold uppercase">
                {edu.college}
              </h3>
              <p className="text-gray-400 mt-1">{edu.degree}</p>
            </div>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
