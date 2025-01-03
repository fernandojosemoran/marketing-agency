import { navigation } from "@/app/shared/components/navigation";

import Image from "next/image";
import Link from "next/link";

function ServiceHeader() {
  return (
    <main className="dark:bg-dm-primary pb-10">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12 ">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                Software Development Services
              </h1>

              <p className="mt-16 text-2xl max-w-3xl leading-8 text-black dark:text-dm-third-text">
                We love to shake established thought-patterns and create what
                has never been attempted before. We take seeds and grow jungles
              </p>

              <div className="dark:bg-dm-primary absolute bottom-0 left-0 flex space-x-6 xl:mx-20 mx-6">
                {navigation.social.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lm-third-text dark:text-dm-secondary-text hover:text-gray-800"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-8 w-8" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)] ">
              <Image
                width={500}
                height={500}
                src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg"
                loading="lazy"
                className="w-full h-full object-cover"
                alt=":V"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServiceHeader;
