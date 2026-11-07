import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const features = [
  {
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    icon: "/images/ShieldCheck.png",
    alt: "Shield with a check mark",
  },
  {
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
    icon: "/images/MapTrifold.png",
    alt: "Folded map",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
    icon: "/images/Headset.png",
    alt: "Headset with microphone",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#EDFCFF] py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2
            className={`${display.className} text-4xl font-normal tracking-tight text-neutral-900 md:text-[2.5rem]`}
          >
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="gap-0 rounded-none py-6 shadow-sm ring-0 [--card-spacing:--spacing(6)]"
            >
              <CardHeader className="gap-0">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="size-8 object-contain"
                />
                <CardTitle className="mt-7 text-[18px] font-normal text-neutral-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2">
                <CardDescription className="text-sm leading-relaxed text-neutral-500">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
