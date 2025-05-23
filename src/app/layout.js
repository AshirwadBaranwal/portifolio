import { Geist, Geist_Mono, Concert_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const concert = Concert_One({
//   weight: "400",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ashirwad's Portfolio",
  description: "My personal portfolio website",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
