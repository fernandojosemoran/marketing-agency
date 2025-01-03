import Link from 'next/link';
import { navigation } from './navigation';

const Footer = () => {
  return (
    <footer className="bg-lm-primary dark:bg-dm-primary" aria-labelledby="footer-heading">
      <h2 className="sr-only text-5xl text-lm-primary">
        Epic Strategy
      </h2>
      <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className='flex items-center gap-2'>
              <h3 className='text-base font-medium text-lm-third-text dark:text-dm-secondary-text'>Epic Strategy</h3>
            </div>
            <p className="text-base text-lm-primary-text dark:text-dm-third-text">
              Unlock your coding potential with Epic Strategy. Our expert instructors offer practical, hands-on courses in web development, AI, and more. Join our community of learners and take your skills to the next level. Enroll today.
            </p>
            <div className="flex space-x-6">
              {
                navigation.social.map((item) => (
                  <Link key={item.name} href={item.href} target="_blank" className="text-lm-primary-text hover:text-lm-secondary-text dark:text-dm-secondary-text" rel="noreferrer">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                )
                )}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Visit Us</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-lm-primary-text hover:text-lm-third-text dark:text-dm-secondary-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-lm-primary-text hover:text-lm-third-text dark:text-dm-secondary-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Services</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-lm-primary-text hover:text-lm-third-text dark:text-dm-secondary-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-lm-primary-text hover:text-lm-third-text dark:text-dm-secondary-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">@Epic Strategy 2024, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
