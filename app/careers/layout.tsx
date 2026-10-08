import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Internship Fellowship — Incode BD",
  description:
    "Explore engineering careers and 3-4 month internship fellowships at Incode BD. Work on real IoT hardware, full-stack software, and client systems in Dhaka.",
  alternates: {
    canonical: "https://incodebd.com/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
