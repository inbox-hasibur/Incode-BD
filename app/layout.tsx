import type { Metadata, Viewport } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  fallback: ["Inter", "system-ui", "-apple-system", "sans-serif"],
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect & Direct Google Fonts for Bagel Fat One & Raleway with Inter fallback */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Raleway:ital,wght@0,100..900;1,100..900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('incode-theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${raleway.variable} ${inter.variable} font-sans antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
