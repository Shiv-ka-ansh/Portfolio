import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivansh Gupta — MERN Stack Developer",
  description:
    "Modern portfolio for Shivansh Gupta, a MERN Stack Developer crafting premium, high-performance web experiences with animation-forward UI.",
  metadataBase: new URL("https://shivansh-portfolio.local"),
  openGraph: {
    title: "Shivansh Gupta — MERN Stack Developer",
    description:
      "High-performance, animation-rich portfolio showcasing projects, experience, and contact details.",
    url: "https://shivansh-portfolio.local",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Shivansh Gupta Portfolio",
      },
    ],
  },
  themeColor: "#213448",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#213448]`}
      >
        {children}
      </body>
    </html>
  );
}
