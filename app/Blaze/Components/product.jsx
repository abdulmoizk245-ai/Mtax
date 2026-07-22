
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
//     <section className="w-full bg-[#1A263B] px-5 py-8 md:px-8 lg:px-10 lg:py-10">
//       <div className="mx-auto w-full max-w-[1300px]">
//         <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">   
//           {sections.map((section) => (
//             <div key={section.title}>
//               {/* Heading */}
//               <h2 className="mb-4 text-center text-[18px] font-extrabold uppercase leading-tight text-white md:text-[22px] lg:text-[20px]">
//                 {section.title}
//               </h2>

//               {/* Card */}
//               <article className="overflow-hidden rounded-[6px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)]">
//                 {/* Image */}
//                 <div className="relative h-[400px] w-full">
//                   <Image
//                     src={section.image}
//                     alt={section.alt}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                     className="object-cover object-center"
//                   />
//                 </div>

//                 {/* Bottom Text */}
//                 <div className="px-5 py-3 text-center">
//                   <p className="mx-auto max-w-[390px] text-[11px] leading-[1.5] text-[#566071] sm:text-[12px]">
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
    <section className="w-full bg-[#1A263B] px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="w-full">
              <h2 className="mb-4 text-center text-[18px] font-extrabold uppercase leading-tight text-white sm:text-[20px] md:text-[22px]">
                {section.title}
              </h2>

              <article className="w-full overflow-hidden rounded-[6px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)]">
                {/* Responsive Image */}
                <div className="relative h-[250px] w-full sm:h-[330px] md:h-[400px]">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-center"
                  />
                </div>

                <div className="px-4 py-4 text-center sm:px-5">
                  <p className="mx-auto max-w-[390px] text-[12px] leading-[1.6] text-[#566071]">
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