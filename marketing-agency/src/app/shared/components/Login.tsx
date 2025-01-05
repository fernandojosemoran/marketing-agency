import Link from 'next/link';

const Login = () => {
  return (
    <form action="/user/login" method="POST" className="flex justify-center items-center drop-shadow-md">
      <div className="bg-lm-primary dark:bg-dm-third shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">

          <label className="block text-gray-700 dark:text-dm-secondary-text text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>

          <div className="relative">
            <span className="absolute translate-y-2 translate-x-2 flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-indigo-500 font-bold">
              <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>

            </span>
            <input
              className="shadow dark:bg-dm-secondary dark:outline-none dark:text-dm-third-text dark:border-dm-primary appearance-none border border-red rounded w-full py-2 px-3 pl-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-dm-secondary-text text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>

          <div className="relative">
            <span className="absolute translate-y-2 translate-x-2 flex ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-indigo-500 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            </span>
            <input
              className="shadow dark:bg-dm-secondary dark:outline-none dark:border-dm-primary appearance-none border border-red rounded w-full py-2 px-3 pl-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(event) => event.preventDefault()}
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
