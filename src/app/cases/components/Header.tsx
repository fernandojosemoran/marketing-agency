
const Header = () => {
  return (
      <main>
        <div className="relative px-6 lg:px-8">
          <div className=" max-w-3xl pt-20 pb-32 sm:pt-36 sm:pb-40">
            <div>
              <div className="ml-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text- sm:text-6xl">
                  Cases studies
                </h1>
                <div className="mt-20">
                  <p className="text-lg font-thin text-lm-primary-text dark:text-lm-third">
                    We helped Monster University revolutionize their scaring education program by incorporating innovative technologies and immersive experiences. The revamped curriculum, interactive platforms, and VR simulations resulted in increased student engagement and enhanced learning outcomes. Monster University is now a leader in scaring education, preparing students for successful careers in the field.
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Header;
