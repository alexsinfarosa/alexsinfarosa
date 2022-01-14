import { MailIcon } from '@heroicons/react/solid'

const GithubIcon = (prop: any) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={prop.className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
    ></path>
  </svg>
)

const TwitterIcon = (prop: any) => (
  <svg className={prop.className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
  </svg>
)

const links = [
  {
    name: 'as898@cornell.edu',
    to: 'mailto:as898@cornell.edu',
    icon: MailIcon,
  },
  {
    name: 'alexsinfarosa',
    to: 'https://github.com/alexsinfarosa',
    icon: GithubIcon,
  },
  {
    name: '@alex_sinfarosa',
    to: 'https://twitter.com/alex_sinfarosa',
    icon: TwitterIcon,
  },
]

function Resume() {
  return (
    <div className="h-screen px-4 py-16 mx-auto prose border rounded-lg prose-slate sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="m-0">Alex Sinfarosa</h1>
        {/* <img
          className="inline-block p-0 m-0 rounded-full w-28 h-28"
          src="./public/alex.jpg"
          alt="Alex profile picture"
        /> */}
      </div>
      <h2 className="text-center text-teal-600">Front-End Developer</h2>

      <div className="flex flex-col sm:flex-row justify-evenly">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.to}
            className="relative inline-flex items-center px-4 py-2 m-1 text-sm font-medium no-underline rounded-md bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <link.icon className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      <h2>Work Experiance</h2>
      <div className="grid grid-cols-1 text-xs md:grid-cols-4 lg:gap-8">
        <div className="flex items-baseline justify-end mb-2 md:hidden">
          <div>
            <span className="text-base font-semibold">2017 - current</span>,
            <span className="ml-1 text-sm text-gray-700">Remote</span>
          </div>
        </div>
        <div className="hidden text-center md:block">
          <span className="text-base font-semibold">2017 - current</span>
          <div className="flex flex-col">
            <span className="text-sm text-gray-700">Remote</span>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="m-0 text-base font-semibold">
            Senior Front End Developer
          </h3>
          <span className="font-medium text-gray-700">
            <a
              href="https://www.nrcc.cornell.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>NRCC - Cornell University</em>
            </a>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            voluptate consectetur quae incidunt alias enim odio doloribus sunt
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, dolores.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique doloribus hic neque.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis eligendi doloribus dolorem nisi nam.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, enim
              officia?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi dolore, labore quod facere maiores hic.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
