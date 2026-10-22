import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Incode BD Software Company",
  description:
    "Incode BD is a modern technology startup at College Gate, Tongi, Dhaka. Solving business problems with hardware (IoT), software (SaaS), and aesthetics.",
  alternates: {
    canonical: "https://www.incodebd.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
