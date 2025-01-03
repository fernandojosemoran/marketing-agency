import { IPost } from "../interfaces/posts.interface";

import Image from "next/image";
import Link from "next/link";

function CaseCard({ index, data }: { index: number; data: IPost }) {
  return (
    <>
      <Link
        href="/cases/id"
        className="flex flex-col overflow-hidden  rounded-lg shadow-lg"
      ></Link>

      <div className="flex-shrink-0">
        <Image
          width={500}
          height={500}
          id={String(data.id)}
          className="h-24rem w-full transition duration-400 ease-in-out object-cover"
          loading="lazy"
          src={data.imageUrl}
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col justify-between bg-lm-primary dark:bg-dm-secondary p-6">
        <div className="flex-1">
          <p className="text-xl font-medium text-lm-third-text dark:text-dm-secondary-text">
            <Link href={data.category.href} className="hover:underline">
              {data.category.name}
            </Link>
          </p>

          <Link href={data.href} className="mt-2 block">
            <p
              id={index.toString()}
              className="lg:text-4xl pt-4 pb-6 text-2xl font-semibold transition duration-400 ease-in-out text-lm-third-text dark:text-dm-third-text"
            >
              {data.title}
            </p>
            <p className="mt-3 text-2xl space-y-2 leading-9 text-lm-primary-text dark:text-dm-third-text">
              {data.description}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CaseCard;
