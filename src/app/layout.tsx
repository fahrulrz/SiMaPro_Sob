

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";


// import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "SiMaPro",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Copyright © 2024 SiMaPro",
  
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
  
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"></link>

          {/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans w-screen max-sm:overflow-hidden`}>
        <AuthProvider>

        {children}
        </AuthProvider>
        <script>

        </script>
      </body>
    </html>
  );
}
