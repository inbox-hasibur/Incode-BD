import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services & Custom Systems — Incode BD",
  description:
    "Commercial software and IoT engineering services from Incode BD: enterprise ERPs, billing systems, IoT telemetry, and high-performance digital products.",
  alternates: {
    canonical: "https://www.incodebd.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
