

// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";

// const divisions = [
//   {
//     image: "/blaze/about1.png",
//     label: "BLAZE",
//     title: "SOLAR ENERGY",
//     description:
//       "Your trusted partner for premium solar products and reliable supply solutions.",
//     points: [
//       "High-quality solar panels & components",
//       "Bulk supply for businesses & retailers",
//       "Reliable customer service",
//       "Commercial and residential solar support",
      
//     ],
//     imagePosition: "left",
//   },
//   {
//     image: "/blaze/about2.png",
//     label: "BLAZE",
//     title: "INTERACTIVES",
//     description:
//       "A creative software house and IT solutions provider helping brands grow in the digital world.",
//     points: [
//       "Website Design & Development",
//       "Software Development",
//       "Web & Mobile Solutions",
//       "Branding & Social Media Management",
//       "Digital Marketing & Content Creation",
//       "IT Support & Maintenance",
//     ],
//     imagePosition: "right",
//   },
// ];

// export default function BlazeAbout() {
//   return (
//     <section className="w-full bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-8">
//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* Heading */}
//         <h2 className="mb-8 text-center text-[24px] font-extrabold uppercase leading-none text-[#1C283D] sm:text-[28px] md:text-[32px]">
//           About Blaze Division
//         </h2>

//         {/* Division Cards */}
//         <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//           {divisions.map((division) => (
//             <article
//               key={division.title}
//               className="overflow-hidden rounded-[6px] border border-[#D5DBE4] bg-white shadow-[0_3px_12px_rgba(15,23,42,0.10)]"
//             >
//               <div className="grid min-h-[285px] grid-cols-1 sm:grid-cols-2">
//                 {/* Left Image for first card */}
//                 {division.imagePosition === "left" && (
//                   <DivisionImage
//                     image={division.image}
//                     title={division.title}
//                   />
//                 )}

//                 {/* Content */}
//                 <div className="flex min-h-[285px] flex-col justify-center bg-[#102B5A] px-5 py-6 sm:px-6 lg:px-5 xl:px-7">
//                   <p className="text-[14px] font-bold uppercase leading-none text-white md:text-[15px]">
//                     {division.label}
//                   </p>

//                   <h3 className="mt-1 text-[17px] font-extrabold uppercase leading-tight text-[#2990FF] md:text-[19px]">
//                     {division.title}
//                   </h3>

//                   <p className="mt-3 max-w-[300px] text-[11px] leading-[1.5] text-white/90 md:text-[12px]">
//                     {division.description}
//                   </p>

//                   <ul className="mt-5 space-y-[7px]">
//                     {division.points.map((point) => (
//                       <li
//                         key={point}
//                         className="flex items-start gap-2 text-[9px] leading-[1.4] text-white/90 md:text-[10px]"
//                       >
//                         <FaCheckCircle className="mt-[2px] shrink-0 text-[8px] text-white" />

//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Right Image for second card */}
//                 {division.imagePosition === "right" && (
//                   <DivisionImage
//                     image={division.image}
//                     title={division.title}
//                   />
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function DivisionImage({ image, title }) {
//   return (
//     <div className="relative min-h-[230px] sm:min-h-[285px]">
//       <Image
//         src={image}
//         alt={`Blaze ${title}`}
//         fill
//         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//         className="object-cover object-center"
//       />
//     </div>
//   );
// }

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const divisions = [
  {
    image: "/blaze/about1.png",
    label: "BLAZE",
    title: "SOLAR ENERGY",
    description:
      "Your trusted partner for premium solar products and reliable supply solutions.",
    points: [
      "High-quality solar panels & components",
      "Bulk supply for businesses & retailers",
      "Reliable customer service",
      "Commercial and residential solar support",
    ],
    imagePosition: "left",
  },
  {
    image: "/blaze/about2.png",
    label: "BLAZE",
    title: "INTERACTIVES",
    description:
      "A creative software house and IT solutions provider helping brands grow in the digital world.",
    points: [
      "Website Design & Development",
      "Software Development",
      "Web & Mobile Solutions",
      "Branding & Social Media Management",
      "Digital Marketing & Content Creation",
      "IT Support & Maintenance",
    ],
    imagePosition: "right",
  },
];

export default function BlazeAbout() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Main Heading */}
        <h2 className="mb-8 text-center text-[24px] font-extrabold uppercase leading-none text-[#1C283D] sm:text-[28px] md:text-[32px]">
          About Blaze Division
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {divisions.map((division) => (
            <article
              key={division.title}
              className="h-full overflow-hidden rounded-[6px] border border-[#D5DBE4] bg-white shadow-[0_3px_12px_rgba(15,23,42,0.10)]"
            >
              <div className="grid h-full grid-cols-1 sm:min-h-[330px] sm:grid-cols-2">
                {/* Left Image */}
                {division.imagePosition === "left" && (
                  <DivisionImage
                    image={division.image}
                    title={division.title}
                  />
                )}

                {/* Content */}
                <div className="flex min-h-[330px] flex-col items-start justify-start bg-[#102B5A] px-5 py-8 sm:px-6 lg:px-5 xl:px-7">
                  {/* Label */}
                  <p className="text-[14px] font-bold uppercase leading-none text-white md:text-[15px]">
                    {division.label}
                  </p>

                  {/* Title */}
                  <h3 className="mt-1 text-[17px] font-extrabold uppercase leading-tight text-[#2990FF] md:text-[19px]">
                    {division.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 min-h-[55px] w-full max-w-[300px] text-[11px] leading-[1.5] text-white/90 md:text-[12px]">
                    {division.description}
                  </p>

                  {/* Points */}
                  <ul className="mt-5 w-full space-y-[7px]">
                    {division.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[9px] leading-[1.4] text-white/90 md:text-[10px]"
                      >
                        <FaCheckCircle className="mt-[2px] shrink-0 text-[8px] text-white" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Image */}
                {division.imagePosition === "right" && (
                  <DivisionImage
                    image={division.image}
                    title={division.title}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DivisionImage({ image, title }) {
  return (
    <div className="relative min-h-[230px] w-full sm:min-h-[330px]">
      <Image
        src={image}
        alt={`Blaze ${title}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center"
      />
    </div>
  );
}