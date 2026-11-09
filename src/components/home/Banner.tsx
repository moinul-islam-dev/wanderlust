import { ArrowRight } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const searchFields = [
  {
    id: "location",
    label: "Location",
    placeholder: "Address, City Or Zip",
    type: "text",
  },
  {
    id: "duration",
    label: "Date/Duration",
    placeholder: "Anytime / 3 Days",
    type: "text",
  },
  {
    id: "budget",
    label: "Budget",
    placeholder: "$0-$3000",
    type: "text",
  },
  {
    id: "people",
    label: "People",
    placeholder: "5-10",
    type: "text",
  },
];

const Banner = () => {
  return (
    <section
      className={`${display.className} relative flex min-h-svh flex-col overflow-hidden`}
    >
      {/* Background Image */}
      <Image
        src="/images/Banner.png"
        alt="Aerial view of a turquoise bay surrounded by green hills and coastal homes"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-28 pb-16 text-center">
        <h1 className="text-balance text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5.75rem]">
          Discover Your
          <br />
          Next Adventure
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base font-semibold leading-relaxed text-white/90 sm:mt-8 sm:text-xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
          <Button
            nativeButton={false}
            render={<Link href="/destinations" />}
            className="h-13 min-w-51.25 gap-6 rounded-none bg-brand px-6 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Now
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>

          <Button
            variant="secondary"
            nativeButton={false}
            render={<Link href="/destinations" />}
            className="h-13 min-w-51.25 gap-0 rounded-none bg-white/25 px-6 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View Destination
          </Button>
        </div>
      </div>

      {/* Search Form */}
      <form
        action="/destinations"
        method="get"
        className="relative z-10 w-full shrink-0 border-t border-white/25 bg-black/25 backdrop-blur-md"
      >
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {searchFields.map((field) => (
            <div
              key={field.id}
              className="min-w-0 border-b border-white/20 px-6 py-4 text-left sm:border-r lg:border-b-0"
            >
              <Label
                htmlFor={field.id}
                className="block text-[17px] font-semibold leading-normal text-white"
              >
                {field.label}
              </Label>

              <Input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className="mt-1 h-auto w-full rounded-none border-0 bg-transparent p-0 text-sm text-white/80 shadow-none placeholder:text-white/70 focus-visible:border-0 focus-visible:ring-0 md:text-sm dark:bg-transparent"
              />
            </div>
          ))}

          <Button
            type="submit"
            className="h-full min-h-19 w-full rounded-none bg-brand px-6 text-lg font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white"
          >
            Search
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Banner;
