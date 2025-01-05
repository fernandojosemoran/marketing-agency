import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  GitHubIcon,
  Dribble,
} from "@/app/shared/icons/index";

interface INavigationLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface INavigation {
  solutions: INavigationLink[];
  support: INavigationLink[];
  company: INavigationLink[];
  legal: INavigationLink[];
  social: INavigationLink[];
}

const navigation: INavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [{ name: "Contacto", href: "/contacto" }],
  company: [
    { name: "Casos", href: "/casos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Carreras", href: "/carreras" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <FacebookIcon />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <InstagramIcon />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <TwitterIcon />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: <GitHubIcon />,
    },
    {
      name: "Dribble",
      href: "#",
      icon: <Dribble />,
    },
  ],
};
function Header() {
  return (
    <main className="pb-10">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12 ">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight dark:text-dm-primary-text pb-8 sm:text-7xl">
                About us
              </h1>
              <p className="mt-6 text-2xl leading-10 text-lm-secondary-text dark:text-dm-secondary-text max-w-5xl">
                Every company has its Cinderella story about those dark times
                when it has just started hitting the market. Our story takes its
                beginning in 2013, at a small office with a few like - minded
                people and bottomless cups of coffee, that kept us working
                throughout the night when we have just started building a
                company with a strong idea. We strived to build a brand that
                will contribute to the world with useful products that empower
                people and make their lives easier. We still believe in it
                today.
              </p>
              <div className="absolute bottom-0 left-0 flex space-x-6 xl:mx-20 mx-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lm-third-text hover:text-gray-800 dark:text-dm-secondary-text dark:hover:text-dm-third-text"
                  >
                    <span className="sr-only">{item.name}</span>
                    {/* className="h-8 w-8" aria-hidden="true" */}
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
