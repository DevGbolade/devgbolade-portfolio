import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIMage } from '@/components/Icons'

const projectData = [
  {
    year: 2024,
    project: 'Chat server API',
    builtWith:
      'Node.js, Express, Typescript, Redux, Redis, Terraform, SocketIO, Jest, MongoDB, AWS',
    link: 'https://github.com/DevGbolade/chat-api',
  },
  {
    year: 2020,
    project: 'DevConnector',
    builtWith: 'Node.js, Express, React, Redux',
    link: 'https://github.com/DevGbolade/devconnector',
  },
  {
    year: 2019,
    project: 'Wayfarer API',
    builtWith: 'Node.js, Express',
    link: 'https://github.com/DevGbolade/wayfarer-api-real-project',
  },
  {
    year: 2021,
    project: 'Tradacommerce',
    builtWith: 'NextJs, MongoDb, MUI',
    link: 'https://tradacommerce-o0ffsnv1d-devgbolade.vercel.app/',
  },
  {
    year: 2019,
    project: 'DevTraining',
    builtWith: 'ReactJs, Cloudinary, Nodejs, Heroku',
    link: 'https://github.com/DevGbolade/devTraining',
  },
  {
    year: 2019,
    project: 'Book API',
    builtWith: 'NodeJs, Express, Jest',
    link: 'https://github.com/DevGbolade/book-api',
  },
  {
    year: 2020,
    project: 'React E-commerce',
    builtWith: 'ReactJs, Firebase, Redux',
    link: 'https://github.com/DevGbolade/react-ecommerce',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My projects',
}

export default function Projects() {
  return (
    <SimpleLayout title="Things I’ve made trying to put my dent in the universe.">
      <div className="hidden md:block">
        <ul
          role="list"
          className="grid grid-cols-5 justify-start gap-x-8 border-b-[0.5px] p-2"
        >
          <li className="hidden font-bold md:block">Year</li>
          <li className="font-bold">Project</li>
          <li className="hidden font-bold md:block">Built With</li>
          <li className="font-bold">Link</li>
        </ul>
        {projectData
          .sort((a, b) => b.year - a.year)
          .map((item, index) => (
            <ul
              style={{ gridAutoFlow: 'column' }}
              key={index}
              className="content- grid grid-cols-5 justify-start gap-x-8 border-b-[0.5px] p-2"
            >
              <li className="hidden md:block">{item.year}</li>

              <li className="text-xs md:text-base">{item.project}</li>
              <ul className=" hidden flex-row flex-wrap gap-2 md:flex">
                {item.builtWith.split(',').map((tech, techIndex) => (
                  <Card.Button key={techIndex}>{tech}</Card.Button>
                ))}
              </ul>
              <li>
                <Card.Link className="text-xs md:text-base" href={item.link}>
                  {item.link}{' '}
                </Card.Link>
              </li>
            </ul>
          ))}
      </div>
      <div className="block md:hidden">
        <ul
          role="list"
          className="grid grid-cols-3 justify-start gap-x-8 border-b-[0.5px] p-2"
        >
          <li className=" font-bold ">Year</li>
          <li className="font-bold">Project</li>
          <li className="font-bold">Link</li>
        </ul>
        {projectData
          .sort((a, b) => a.year - b.year)
          .map((item, index) => (
            <ul
              style={{ gridAutoFlow: 'column' }}
              key={index}
              className="content- grid grid-cols-3 justify-start gap-x-8 border-b-[0.5px] p-2"
            >
              <li className="">{item.year}</li>

              <li className="text-xs md:text-base">{item.project}</li>
              <li className="">
                <Card.Link className="text-xs md:text-base" href={item.link}>
                  <LinkIMage />
                </Card.Link>
              </li>
            </ul>
          ))}
      </div>
    </SimpleLayout>
  )
}
