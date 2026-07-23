
// import Image from "next/image";

// const sections = [
//   {
//     title: "Our Brands & Products (Solar)",
//     image: "/blaze/braand.png",
//     alt: "Blaze Solar Brands and Products",
//     description:
//       "We supply premium solar brands and components for reliable, long-term energy solutions.",
//   },
//   {
//     title: "Our Work & Solutions (Interactives)",
//     image: "/blaze/work.png",
//     alt: "Blaze Interactive Work and Solutions",
//     description:
//       "We design, develop and market digital solutions that help businesses grow online.",
//   },
// ];

// export default function BlazeProducts() {
//   return (
//     <section className="w-full bg-[#1A263B] px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10">
//       <div className="mx-auto w-full max-w-[1300px]">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//           {sections.map((section) => (
//             <div key={section.title} className="w-full">
//               <h2 className="mb-4 text-center text-[18px] font-extrabold uppercase leading-tight text-white sm:text-[20px] md:text-[22px]">
//                 {section.title}
//               </h2>

//               <article className="w-full overflow-hidden rounded-[6px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)]">
//                 {/* Responsive Image */}
//                 <div className="relative h-[250px] w-full sm:h-[330px] md:h-[400px]">
//                   <Image
//                     src={section.image}
//                     alt={section.alt}
//                     fill
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
//                     className="object-contain object-center"
//                   />
//                 </div>

//                 <div className="px-4 py-4 text-center sm:px-5">
//                   <p className="mx-auto max-w-[390px] text-[12px] leading-[1.6] text-[#566071]">
//                     {section.description}
//                   </p>
//                 </div>
//               </article>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const sections = [
  {
    title: "Our Brands & Products (Solar)",
    image: "/blaze/braand.png",
    alt: "Blaze Solar Brands and Products",
    description:
      "We supply premium solar brands and components for reliable, long-term energy solutions.",
  },
  {
    title: "Our Work & Solutions (Interactives)",
    image: "/blaze/work.png",
    alt: "Blaze Interactive Work and Solutions",
    description:
      "We design, develop and market digital solutions that help businesses grow online.",
  },
];

export default function BlazeProducts() {
  return (
    <section className="w-full bg-[#1A263B] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="flex min-w-0 flex-col"
            >
              <h2 className="mb-4 min-h-0 text-center text-base font-extrabold uppercase leading-tight text-white sm:text-lg md:text-xl lg:min-h-[52px] lg:text-[21px] xl:text-[22px]">
                {section.title}
              </h2>

              <article className="flex h-full w-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)]">
                {/* Fully Responsive Image */}
                <div className="relative aspect-[4/3] w-full bg-white sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11]">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-contain object-center p-2 sm:p-3"
                  />
                </div>

                <div className="flex flex-1 items-center justify-center px-4 py-4 sm:px-6 sm:py-5">
                  <p className="mx-auto max-w-md text-center text-xs leading-relaxed text-[#566071] sm:text-sm">
                    {section.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}