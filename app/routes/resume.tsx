import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  MailIcon,
  StarIcon,
} from '@heroicons/react/solid'
import pattern from '../../public/images/pattern.svg'
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

function H3({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <h3 className="relative" id={text.toLowerCase()}>
      <div
        className="absolute inset-0 items-center hidden sm:flex"
        aria-hidden="true"
      >
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-start">
        <span className="inline-flex items-center pr-3 text-xl font-normal text-gray-600 bg-white lg:text-2xl">
          {icon}
          {text}
        </span>
      </div>
    </h3>
  )
}
console.log(pattern)
function Resume() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen py-8 overflow-hidden bg-slate-50 lg:py-12">
      <div
        className={`absolute inset-0 bg-[url(${pattern})] bg-top [mask-image:linear-gradient(180deg,red,rgba(255,255,255,0))]`}
      ></div>

      <div className="relative w-full px-6 py-12 bg-white rounded-md shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        <div className="mx-auto max-w-prose lg:text-lg">
          <div className="mx-auto mt-8 prose prose-slate prose-h2:text-blue-500 lg:prose-lg">
            <div className="flex items-center justify-between">
              <h1 className="m-0">Alex Sinfarosa</h1>
              <img
                className="inline-block w-32 h-32 p-0 m-0 rounded-full sm:w-36 sm:h-36 "
                src={profilePicture}
                alt="Alex profile picture"
              />
            </div>
            <h2 className="font-extrabold text-center">Front-End Engineer</h2>

            <div className="flex flex-col py-1 sm:flex-row justify-evenly">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.to}
                  className="relative inline-flex items-center px-4 py-2 m-2 text-sm font-medium tracking-wide text-white no-underline rounded-md bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl"
                >
                  <link.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <h3 id="summary">Summary</h3>
            <p className="lead">
              Senior Front-end Engineer with 5+ years of experience designing,
              developing, and managing complex web/mobile applications.
              Participated in projects in all stages of the product life cycle.
            </p>

            <H3
              text="Experience"
              icon={
                <BriefcaseIcon
                  className="w-6 h-6 mb-1 mr-1 text-gray-600"
                  aria-hidden="true"
                ></BriefcaseIcon>
              }
            ></H3>

            {/* First */}
            <section className="grid gap-4 sm:grid-cols-4">
              <span className="col-span-1 font-medium text-gray-500 sm:pt-0.5 sm:text-base text-right">
                2017 - ONGOING
              </span>

              <div className="col-span-3 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Senior Front End Developer
                  </span>
                  <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
                    <LocationMarkerIcon
                      className="-ml-0.5 mr-1 h-4 w-4"
                      aria-hidden="true"
                    />
                    Remote
                  </div>
                </div>
                <span className="font-medium text-gray-500">
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
                  voluptate consectetur quae incidunt alias enim odio doloribus
                  sunt
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    enim officia?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam excepturi dolore, labore quod facere maiores hic.
                  </li>
                </ul>
              </div>
            </section>

            {/* Second */}
            <section className="grid gap-4 mt-8 sm:grid-cols-4">
              <span className="col-span-1 font-medium text-gray-500 sm:pt-0.5 sm:text-base text-right">
                SUMMER '16
              </span>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Data Science Intern
                  </span>
                  <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
                    <LocationMarkerIcon
                      className="-ml-0.5 mr-1 h-4 w-4"
                      aria-hidden="true"
                    />
                    NY, NY
                  </div>
                </div>
                <span className="font-medium text-gray-600">
                  <em>Berkshire Hathaway Real Estate, NY</em>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  voluptate consectetur quae incidunt alias enim odio doloribus
                  sunt
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

            <H3
              text="Education"
              icon={
                <AcademicCapIcon
                  className="w-6 h-6 mr-1 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:grid-cols-4">
              <span className="col-span-1 font-medium text-gray-500 sm:pt-0.5 sm:text-base text-right">
                2012 - 2016
              </span>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Bachelor of Science (B.Sc.), Data Science
                  </span>
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
                <p></p>
              </div>
            </section>

            <H3
              text="Skills"
              icon={
                <BadgeCheckIcon
                  className="w-6 h-6 mb-0.5 mr-1 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:text-sm sm:grid-cols-4">
              <span className="col-span-1 text-lg font-medium text-gray-500"></span>
              <div className="grid grid-cols-3 col-span-3 gap-4 sm:grid-cols-4">
                <em className="font-medium tracking-wide">HTML</em>
                <em className="font-medium tracking-wide">CSS</em>
                <em className="font-medium tracking-wide">Javascript</em>
                <em className="font-medium tracking-wide">React</em>
                <em className="font-medium tracking-wide">Tailwind</em>
                <em className="font-medium tracking-wide">Gatsby</em>
                <em className="font-medium tracking-wide">Remix</em>
                <em className="font-medium tracking-wide">Cloudflare</em>
                <em className="font-medium tracking-wide">GraphQL</em>
                <em className="font-medium tracking-wide">D3.js</em>
                <em className="font-medium tracking-wide">Python</em>
                <em className="font-medium tracking-wide">Node.js</em>
              </div>
            </section>

            <H3
              text="Awards"
              icon={
                <StarIcon
                  className="w-6 h-6 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:grid-cols-4">
              <span className="col-span-1 font-medium text-gray-500 sm:pt-0.5 sm:text-base text-right">
                2018
              </span>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    <span className="ordinal">1st</span> Place in the City of
                    Syracuse's "Plowing Through the Data" civic hackathon.
                  </span>
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
                  Sponsored by the City of Syracuse, Syracuse University, and
                  AT&T, the hackathon presented participants with the city's GPS
                  data from their snowplows, and challenged us to come up with a
                  data related project which could help the city with their snow
                  removal efforts.
                </p>
              </div>
            </section>

            <H3
              text="Others"
              icon={
                <InformationCircleIcon
                  className="w-6 h-6 mr-1 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:grid-cols-4">
              <span className="col-span-1 font-medium text-gray-500 sm:pt-0.5 sm:text-base text-right">
                2006 - 2011
              </span>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Restaurant Manager
                  </span>
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
                  high-quality and fast-paced restaurants. Ability to train
                  staff to the highest standards of customer service, ensuring
                  increased customer satisfaction, reduced staff turnover rates,
                  and a 92% rise in sales through upselling techniques.
                </p>
              </div>
            </section>

            <section className="grid gap-4 mt-8 sm:grid-cols-4">
              <span className="col-span-1 font-medium text-gray-500 sm:pt-0.5 sm:text-base text-right">
                1993 - 2003
              </span>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Conservatory of Music
                  </span>
                  <div className="items-center flex-shrink-0 hidden font-medium text-gray-500 sm:flex">
                    <LocationMarkerIcon
                      className="-ml-0.5 mr-1 h-4 w-4"
                      aria-hidden="true"
                    />
                    Italy
                  </div>
                </div>
                <p>
                  Studied classical piano since young age. Received master's
                  degree in pianoforte at the Conservatory of La Spezia (Italy).
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
