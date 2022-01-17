import { LocationMarkerIcon, MailIcon } from '@heroicons/react/solid'
import profilePicture from '../../public/images/profile_picture.jpg'

const GithubIcon = (prop: any) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={prop.className}
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const TwitterIcon = (prop: any) => (
  <svg
    role="img"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={prop.className}
  >
    <title>Twitter</title>
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
    <div className="px-4 py-16 mx-auto prose border rounded-lg prose-slate max-w-prose sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="m-0">Alex Sinfarosa</h1>
        <img
          className="inline-block w-32 h-32 p-0 m-0 rounded-full sm:w-36 sm:h-36 "
          src={profilePicture}
          alt="Alex profile picture"
        />
      </div>
      <h2 className="text-center text-teal-600">Front-End Engineer</h2>

      <div className="flex flex-col py-1 sm:flex-row justify-evenly">
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

      <h2>Summary</h2>
      <p>
        Senior Front-end Engineer with 5+ years of experience designing,
        developing, and managing complex web/mobile applications. Participated
        in projects in all stages of the product life cycle.
      </p>

      <h2 className="sm:pb-1 sm:border-b">Experience</h2>
      {/* First */}
      <section className="grid grid-cols-1 sm:gap-8 sm:text-sm sm:grid-cols-4">
        <span className="col-span-1 pt-1 font-bold text-gray-500 sm:text-gray-900">
          2017 - CURRENT
        </span>

        <div className="col-span-3 mt-1 sm:mt-0">
          <div className="flex items-center justify-between">
            <h3 className="m-0">Senior Front End Developer</h3>
            <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
              <LocationMarkerIcon
                className="-ml-0.5 mr-1 h-4 w-4"
                aria-hidden="true"
              />
              Remote
            </div>
          </div>
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
      </section>

      {/* Second */}
      <section className="grid grid-cols-1 mt-8 sm:gap-8 sm:text-sm sm:grid-cols-4">
        <span className="col-span-1 pt-1 font-bold text-gray-500 sm:text-gray-900">
          SUMMER '16
        </span>

        <div className="col-span-3 mt-1 sm:mt-0">
          <div className="flex items-center justify-between">
            <h3 className="m-0">Data Science Intern</h3>
            <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
              <LocationMarkerIcon
                className="-ml-0.5 mr-1 h-4 w-4"
                aria-hidden="true"
              />
              NY, NY
            </div>
          </div>
          <span className="font-medium text-gray-700">
            <em>Berkshire Hathaway Real Estate, NY</em>
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
          </ul>
        </div>
      </section>

      <h2 className="sm:pb-1 sm:border-b">Education</h2>
      <section className="grid grid-cols-1 sm:gap-8 sm:text-sm sm:grid-cols-4">
        <span className="col-span-1 pt-1 font-bold text-gray-500 sm:text-gray-900">
          2012 - 2016
        </span>

        <div className="col-span-3 mt-1 sm:mt-0">
          <div className="flex items-center justify-between">
            <h3 className="m-0">Bachelor of Science (B.Sc.), Data Science</h3>
            <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
              <LocationMarkerIcon
                className="-ml-0.5 mr-1 h-4 w-4"
                aria-hidden="true"
              />
              Ithaca, NY
            </div>
          </div>
          <span className="font-medium text-gray-700">
            <a
              href="https://www.engineering.cornell.edu/data-science"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Cornell University</em>
            </a>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            voluptate consectetur quae incidunt alias enim odio doloribus sunt
          </p>
        </div>
      </section>

      <h2 className="sm:pb-1 sm:border-b">Awards & Achievements</h2>
      <section className="grid grid-cols-1 sm:gap-8 sm:text-sm sm:grid-cols-4">
        <span className="col-span-1 pt-1 font-bold text-gray-500 sm:text-gray-900">
          2018
        </span>

        <div className="col-span-3 mt-1 sm:mt-0">
          <div className="flex items-center justify-between">
            <h3 className="m-0">
              1st Place in the City of Syracuse's "Plowing Through the Data"
              civic hackathon.
            </h3>
            <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
              <LocationMarkerIcon
                className="-ml-0.5 mr-1 h-4 w-4"
                aria-hidden="true"
              />
              Remote
            </div>
          </div>
          <span className="font-medium text-gray-700">
            <a
              href="https://www.nrcc.cornell.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>civic-Hackathon-Plowing-Through-Data</em>
            </a>
          </span>
          <p>
            Sponsored by the City of Syracuse, Syracuse University, and AT&T,
            the hackathon presented participants with the city's GPS data from
            their snowplows, and challenged them to come up with a data related
            project which could help the city with their snow removal efforts.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:gap-8 sm:text-sm sm:grid-cols-4">
        <span className="col-span-1 pt-1 font-bold text-gray-500 sm:text-gray-900">
          2006 - 2011
        </span>

        <div className="col-span-3 mt-1 sm:mt-0">
          <div className="flex items-center justify-between">
            <h3 className="m-0">Restaurant Manager</h3>
            <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
              <LocationMarkerIcon
                className="-ml-0.5 mr-1 h-4 w-4"
                aria-hidden="true"
              />
              NY, NY
            </div>
          </div>
          <p>
            Restaurant Manager with 5+ years of experience managing a
            high-quality and fast-paced restaurants. Ability to train staff to
            the highest standards of customer service, ensuring increased
            customer satisfaction, reduced staff turnover rates, and a 92% rise
            in sales through upselling techniques.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Resume
