import Image from "next/image";
// import logo from "@/assets/services/imgs/markeing-agency.png";

interface IIncentives {
  name: string;
  imageSrc: string;
  description: string;
}
// https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg
// https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg
// https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg

const incentives: IIncentives[] = [
  {
    name: "Free shipping",
    imageSrc: "https://vectorified.com/images/enterprise-icon-16.png",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc: "https://vectorified.com/images/enterprise-icon-16.png",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc: "https://vectorified.com/images/enterprise-icon-16.png",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

const Incentives = () => {
  return (
    <div className="dark:bg-dm-secondary dark:text-dm-primary-text">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-lm-third-text dark:text-dm-primary-text">
              We built our business on customer service
            </h2>
            <p className="mt-4 text-lm-primary-text dark:text-dm-secondary-text">
              At the beginning at least, but then we realized we could make a
              lot more money if we kinda stopped caring about that. Our new
              strategy is to write a bunch of things that look really good in
              the headlines, then clarify in the small print but hope people
              don&apos;t actually read it.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <Image
                    width={64}
                    height={64}
                    className="max-h-16 max-w-16"
                    src={incentive.imageSrc}
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-lm-third-text dark:text-dm-primary-text">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-lm-primary-text dark:text-dm-third-text">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incentives;
