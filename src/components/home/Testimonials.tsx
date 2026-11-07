import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonial";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const Testimonials = () => {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Carousel opts={{ align: "start" }} className="w-full">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2
                className={`${display.className} text-4xl font-normal tracking-tight text-neutral-900 md:text-[2.5rem]`}
              >
                What Travelers Say
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Real experiences from our happy travelers
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <CarouselPrevious className="static size-9 translate-x-0 translate-y-0 border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900" />
              <CarouselNext className="static size-9 translate-x-0 translate-y-0 border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900" />
            </div>
          </div>

          <CarouselContent className="-ml-5 mt-8">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-5 md:basis-1/2">
                <Card className="h-full gap-0 rounded-none border border-neutral-200 bg-white py-0 shadow-none ring-0">
                  <CardContent className="flex flex-1 gap-5 p-5">
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="text-sm leading-relaxed text-neutral-800">
                        “{testimonial.message}”
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-px w-4 shrink-0 bg-brand"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-brand">
                            {testimonial.name}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-neutral-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-24 shrink-0 self-stretch overflow-hidden sm:w-28 lg:w-32">
                      <Image
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.name}`}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
