

// import { Poppins } from "next/font/google";
// import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// export const metadata = {
//   title: "MTAX Group of Companies",
//   description: "MTAX Group Website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} overflow-x-hidden`}>{children}</body>
//     </html>
//   );
// }

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "MTAX Group of Companies",
  description: "MTAX Group Website",

  icons: {
    icon: "/images/brand6.png",
    shortcut: "/images/brand6.png",
    apple: "/images/brand6.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}