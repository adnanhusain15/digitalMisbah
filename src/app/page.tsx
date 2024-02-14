import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const Perks = [
  {
    name: "Instant delivery",
    icon: ArrowDownToLine,
    description:
      "Lo consectetur adipisicing elit. Qui cumque eaque, nesciunt libero doloremque laudantium.",
  },
  {
    name: "Guaranteed quality",
    icon: CheckCircle,
    description:
      " consectetur adipisicing elit. Qui cumque eaque, nesciunt libero doloremque laudantium.",
  },
  {
    name: "For the planet",
    icon: Leaf,
    description:
      "amet consectetur adipisicing elit. Qui cumque eaque, nesciunt libero doloremque laudantium.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-gray-900 sm:text-6xl text-4xl font-bold tracking-tight">
            You market place for high quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere est
            et dolore tenetur, in, cupiditate eum aliquid exercitationem
            repellat rerum ab corrupti? Aliquid totam corrupti iste vel
            assumenda provident quibusdam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Browse trending
            </Link>
            <Button variant={"ghost"}>Our quality promise</Button>
          </div>
        </div>
        <section className="border-t border-gray-200 bg-gray-50">
          <MaxWidthWrapper className="py-20">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {Perks.map((perk, index) => {
                return (
                  <div
                    key={index}
                    className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                  >
                    <div className="md:flex-shrink-0 flex justify-center">
                      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                        <perk.icon className="w-1/3 h-1/3" />
                      </div>
                    </div>
                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="font-medium text-base text-gray-900">
                        {perk.name}
                      </h3>
                      <p className="font-muted-foreground mt-3 text-sm">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MaxWidthWrapper>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
