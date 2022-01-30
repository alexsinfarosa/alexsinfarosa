import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  MailIcon,
  StarIcon,
} from '@heroicons/react/solid'
import pattern from '~/images/pattern.svg'
import profilePicture from '~/images/profile_picture.jpg'

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

// const TwitterIcon = (prop: any) => (
//   <svg
//     role="img"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="currentColor"
//     className={prop.className}
//   >
//     <title>Twitter</title>
//     <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
//   </svg>
// )

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
  // {
  //   name: '@alex_sinfarosa',
  //   to: 'https://twitter.com/alex_sinfarosa',
  //   icon: TwitterIcon,
  // },
]

function H3({ text, icon }: { text: string; icon: React.ReactNode }) {
  return (
    <h3 className="relative" id={text.toLowerCase()}>
      <div
        className="absolute inset-0 hidden items-center sm:flex"
        aria-hidden="true"
      >
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-start">
        <span className="inline-flex items-center bg-white pr-3 text-xl font-semibold text-gray-900 sm:font-normal sm:text-gray-600 lg:text-2xl">
          {icon}
          {text}
        </span>
      </div>
    </h3>
  )
}

function TimeLocation({ time, location }: { time: string; location: string }) {
  return (
    <div className=" col-span-1 -mt-0.5 text-right font-medium text-gray-500">
      <span className="sm:pt-0.5 sm:text-base">{time}</span>
      <div className="hidden flex-shrink-0 items-center justify-end text-xs sm:flex">
        <LocationMarkerIcon className="mr-1 h-4 w-4" aria-hidden="true" />
        {location}
      </div>
    </div>
  )
}

function Resume() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50 py-8 lg:py-12">
      <div
        className={`absolute inset-0 bg-[url(${pattern})] bg-top [mask-image:linear-gradient(180deg,red,rgba(255,255,255,0))]`}
      ></div>

      <div className="relative w-full rounded-md bg-white px-6 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-20">
        <div className="mx-auto max-w-prose lg:text-lg">
          <div className="prose prose-slate mx-auto prose-h2:text-blue-500 lg:prose-lg">
            <div className="flex items-center justify-between">
              <h1 className="m-0">Alex Sinfarosa</h1>
              <img
                className="m-0 inline-block h-32 w-32 rounded-lg p-0 sm:h-36 sm:w-36 "
                src={profilePicture}
                alt="Alex profile picture"
              />
            </div>
            <h2 className="text-center font-extrabold">Front-End Engineer</h2>

            <div className="flex flex-col justify-center py-1 sm:flex-row">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.to}
                  className="relative m-2 inline-flex items-center rounded-md bg-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium tracking-wide text-white no-underline hover:bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <link.icon className="mr-2 h-5 w-5" aria-hidden="true" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <h3 id="summary">Summary</h3>
            <p className="lead">
              Senior Front-end Engineer with 5+ years of experience designing,
              developing, testing and managing complex web/mobile applications.
              Participated in projects in all stages of the product life cycle.
            </p>

            <H3
              text="Experience"
              icon={
                <BriefcaseIcon
                  className="mb-1 mr-1 h-6 w-6 text-gray-600"
                  aria-hidden="true"
                ></BriefcaseIcon>
              }
            ></H3>

            {/* First */}
            <section className="grid gap-4 sm:grid-cols-4 sm:gap-6">
              <TimeLocation
                time="2017 - ONGOING"
                location="REMOTE"
              ></TimeLocation>

              <div className="col-span-3 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Senior Front End Engineer
                  </span>
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
                  Design and develop different web applications and internal
                  tools.
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
            <section className="mt-8 grid gap-4 sm:grid-cols-4 sm:gap-6">
              <TimeLocation time="Summer 2016" location="NY, NY"></TimeLocation>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Data Science Intern
                  </span>
                </div>
                <span className="font-medium text-gray-600">
                  <em>Berkshire Hathaway Real Estate, NY</em>
                </span>
                <p>
                  Worked with real estate brokerage firm in New York to conduct
                  statistical analysis on active properties that helped buyers
                  to navigate the housing market.
                </p>
                <ul>
                  <li>
                    Understand problem statement and read relevant research
                    papers.
                  </li>
                  <li>
                    Exploratory data analysis and presenting findings to the
                    team.
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
                  className="mr-1 h-6 w-6 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:grid-cols-4 sm:gap-6">
              <TimeLocation
                time="2012 - 2016"
                location="ITHACA, NY"
              ></TimeLocation>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Bachelor of Science (B.Sc.), Data Science
                  </span>
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
                  className="mb-0.5 mr-1 h-6 w-6 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:grid-cols-4 sm:gap-6 sm:text-sm">
              <span className="col-span-1 text-lg font-medium text-gray-500"></span>
              <div className="col-span-3 grid grid-cols-3 gap-4 sm:grid-cols-4">
                <em className="">HTML</em>
                <em className="">CSS</em>
                <em className="">JavaScript</em>
                <em className="">TypeScript</em>
                <em className="">React</em>
                <em className="">Web APIs</em>
                <em className="">Cloudflare</em>
                <em className="">GraphQL</em>
                <em className="">D3.js</em>
                <em className="">Git/Version Control</em>
                <em className="">RESTful services & APIs</em>
                <em className="">UI/UX & Design</em>
              </div>
            </section>

            <H3
              text="Awards"
              icon={
                <StarIcon
                  className="h-6 w-6 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:grid-cols-4 sm:gap-6">
              <TimeLocation time="2018" location="REMOTE"></TimeLocation>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    <span className="ordinal">1st</span> Place in the City of
                    Syracuse's "Plowing Through the Data" Civic Hackathon.
                  </span>
                </div>
                <span className="font-medium text-gray-700">
                  <a
                    href="https://www.nrcc.cornell.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <em>civic-hackathon-plowing-through-data</em>
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
                  className="mr-1 h-6 w-6 text-gray-600"
                  aria-hidden="true"
                />
              }
            ></H3>
            <section className="grid gap-4 sm:grid-cols-4 sm:gap-6">
              <TimeLocation time="2006 - 2011" location="NY, NY"></TimeLocation>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Restaurant Manager
                  </span>
                </div>
                <p>
                  Restaurant Manager with 5+ years of experience managing a
                  high-quality and fast-paced New York City restaurants. Ability
                  to train staff to the highest standards of customer service,
                  ensuring increased customer satisfaction.
                </p>
              </div>
            </section>

            <section className="mt-8 grid gap-4 sm:grid-cols-4 sm:gap-6">
              <TimeLocation time="1993 - 2003" location="ITALY"></TimeLocation>

              <div className="col-span-3 mt-1 sm:mt-0 sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">
                    Master Degree in Classical Piano
                  </span>
                </div>
                <p>
                  Studied classical piano since young age. Graduated from the
                  Conservatory of La Spezia (Italy).
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
