import {
  CheckCircleIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@/app/shared/icons";

import Image from "next/image";

interface IApplicant {
  name: string;
  email: string;
  imageUrl: string;
}

interface IApplication {
  applicant: IApplicant;
  date: string;
  dateFull: string;
  stage: string;
  href: string;
}

const applications: IApplication[] = [
  {
    applicant: {
      name: "Ricardo Cooper",
      email: "ricardo.cooper@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Ted Fox",
      email: "ted.fox@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
];

export function PositionsList() {
  return (
    <div className="max-w-full mx-4 lg:mx-12 bg-lm-primary dark:bg-dm-primary">
      <h2 className="text-5xl font-semibold text-lm-third-text dark:text-dm-primary-text pb-8">
        Open Positions
      </h2>
      <p className="text-2xl font-regular text-lm-third-text dark:text-dm-secondary-text max-w-5xl leading-10">
        Let&apos;s write some beautiful code and make smart designs. This is
        what we&apos;re crazy about, and we&apos;re looking for the ones who
        feel the same.
      </p>

      <div className="grid grid-cols-12 pt-8">
        <div className="col-span-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-lm-secondary-text dark:text-dm-third-text"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 dark:bg-dm-secondary mb-2 dark:text-dm-secondary-text py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Canada"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden bg-lm-primary dark:bg-dm-secondary shadow sm:rounded-md py-12">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:text-dm-secondary-text"
        >
          {applications.map((application) => (
            <li key={application.applicant.email}>
              <a
                href={application.href}
                className="block hover:bg-gray-50 dark:hover:bg-dm-primary"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0">
                      <Image
                        width={48}
                        height={48}
                        className="max-h-12 max-w-12 rounded-full"
                        src={application.applicant.imageUrl}
                        alt={application.applicant.name}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          {application.applicant.name}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-lm-primary-text dark:text-dm-secondary-text">
                          <EnvelopeIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-dm-third-text"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {application.applicant.email}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-lm-third-text dark:text-dm-third-text">
                            Applied on{" "}
                            <time dateTime={application.date}>
                              {application.dateFull}
                            </time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            {application.stage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="size-6 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
