import Image from "next/image";

const LogoCLoud = () => {
  return (
    <div className="bg-lm-primary dark:bg-dm-primary mx-40">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              width={48}
              height={48}
              className="h-12"
              src="https://vectorified.com/images/enterprise-icon-16.png"
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              width={48}
              height={48}
              className="h-12"
              src="https://vectorified.com/images/enterprise-icon-16.png"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              width={48}
              height={48}
              className="h-12"
              src="https://vectorified.com/images/enterprise-icon-16.png"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <Image
              width={48}
              height={48}
              className="h-12"
              src="https://vectorified.com/images/enterprise-icon-16.png"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <Image
              width={48}
              height={48}
              className="h-12"
              src="https://vectorified.com/images/enterprise-icon-16.png"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoCLoud;
