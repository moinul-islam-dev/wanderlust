import { ArrowRight } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const CTASection = () => {
  return (
    <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden py-20 md:min-h-[400px] md:py-24">
      <Image
        src="/images/CTA.png"
        alt="Airplane flying over a tropical island"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h2
          className={`${display.className} text-4xl font-normal tracking-tight text-white md:text-5xl`}
        >
          Ready To Start Your Journey?
        </h2>

        <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Button
          nativeButton={false}
          render={<Link href="/destinations" />}
          className="mt-8 h-12 min-w-52.5 gap-4 rounded-none bg-white px-6 text-xs font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
