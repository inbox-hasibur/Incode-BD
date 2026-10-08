import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Incode BD Software Company",
  description:
    "Learn about Incode BD, our physical workspace in College Gate, Tongi, and our engineering mission to solve business problems with hardware, software, and aesthetics.",
  alternates: {
    canonical: "https://incodebd.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
