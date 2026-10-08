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
    "incode bd",
    "incodebd",
    "Incode BD Software Company",
    "Incode Dhaka",
    "Incode BD Tongi",
    "Incode BD Gazipur",
    "Software Company Dhaka",
    "IoT Solutions Bangladesh",
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
  alternates: {
    canonical: "https://incodebd.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://incodebd.com/#organization",
      name: "Incode BD",
      alternateName: ["Incode", "IncodeBD", "Incode BD Software Company"],
      url: "https://incodebd.com",
      logo: "https://incodebd.com/logo.png",
      image: "https://incodebd.com/banner.png",
      description:
        "Solving Business Problems with Hardware, Software, and Aesthetics. Independent Software Company and IoT Solutions Hub in Dhaka, Bangladesh.",
      telephone: "+8801581495140",
      email: "contact@incodebd.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Akon Villa, Ground Floor, College Gate",
        addressLocality: "Tongi, Gazipur",
        postalCode: "1711",
        addressRegion: "Dhaka",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.8966,
        longitude: 90.3986,
      },
      sameAs: [
        "https://facebook.com/incodebd",
        "https://github.com/inbox-hasibur/Incode-BD",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://incodebd.com/#website",
      url: "https://incodebd.com",
      name: "Incode BD",
      description: "Solving Business Problems with Hardware, Software, and Aesthetics.",
      publisher: {
        "@id": "https://incodebd.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect & Google Fonts */}
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
