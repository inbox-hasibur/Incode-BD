import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Incode BD — Solving Business Problems with Hardware, Software, and Aesthetics",
  description:
    "Official launchpad for Incode BD. Solving business problems with hardware, software, and aesthetics. Dhaka, Bangladesh.",
  keywords: [
    "Incode BD",
    "Incode",
    "Software Company",
    "Hardware",
    "Dhaka",
    "Bangladesh",
    "Internship",
    "Practicum",
    "Aesthetics",
    "IoT",
  ],
  authors: [{ name: "Incode BD", url: "https://incodebd.com" }],
  metadataBase: new URL("https://incodebd.com"),
  openGraph: {
    title: "Incode BD — Hardware, Software, & Aesthetics",
    description:
      "Solving Business Problems with Hardware, Software, and Aesthetics. Official Launching This October | Dhaka.",
    url: "https://incodebd.com",
    siteName: "Incode BD",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Incode BD Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Incode BD",
    description:
      "Solving Business Problems with Hardware, Software, and Aesthetics.",
    images: ["/banner.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo-dark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#0A0D14] text-slate-100 antialiased selection:bg-[#B4F000] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
