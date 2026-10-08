import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & IoT Telematics — Incode BD",
  description:
    "Commercial products built by Incode BD: GPS vehicle & pet telematics, smart switchboards, autonomous news aggregators, and custom hardware systems.",
  alternates: {
    canonical: "https://www.incodebd.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
