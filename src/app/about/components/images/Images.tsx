import Image from "next/image";

function Images() {
  return (
    <div className="w-full dark:bg-dm-third">
      <div className="grid grid-cols-2 gap-8 p-5">
        <div className="relative w-1/2 h-96 mx-auto">
          <Image
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
            alt="something"
          />
        </div>

        <div className="relative w-1/2 h-96 mx-auto">
          <Image
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
            alt="something"
          />
        </div>
      </div>
    </div>
  );
}
export default Images;
