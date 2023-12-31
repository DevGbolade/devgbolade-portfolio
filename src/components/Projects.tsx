import React from 'react'
interface ProjectItemProps {
  image: string
  name: string
  description: string
  tools: string[]
  link: string
}

const LinkIMage = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
        stroke="#000"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
        stroke="#000"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  )
}

const GithubImage = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>github [#142]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-140.000000, -7559.000000)"
          fill="#000000"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
              id="github-[#142]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  image,
  name,
  description,
  tools,
  link,
}) => {
  return (
    <div className="hover:zinc-100 mb-8 flex transform items-center justify-center rounded-lg  p-4 transition-transform hover:bg-zinc-50 hover:shadow-md  group-hover:scale-100 group-hover:opacity-100 hover:dark:bg-zinc-800/50">
      <div>
        <h2 className="text-base font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2">
          <a
            href={link}
            className="flex cursor-pointer gap-5 text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIMage />
            <GithubImage />
          </a>
        </div>
        <div className="mt-2">
          <ul className="gap- flex flex-row flex-wrap">
            {/* {tools.map((tech, techIndex) => (
              <Card.Button
                className="!dark:text-white !border-0 text-blue-600"
                key={techIndex}
              >
                {tech}
              </Card.Button>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

const projects = [
  // Add your project details here
  {
    image: 'https://picsum.photos/200/300',
    name: 'Built an eccomerce shop',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est cum accusantium pariatur corporis debitis dolores quibusd of ',
    tools: ['Tool 1', 'Tool 2'],
    link: 'https://example.com/project1',
  },
  // Add your project details here
  {
    image: 'https://picsum.photos/200/300',
    name: 'Build a mining system',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est cum accusantium pariatur corporis debitis dolores quibusd ',
    tools: ['Tool 1', 'Tool 2'],
    link: 'https://example.com/project1',
  },
]

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="mb- ml-4 text-xl font-semibold">Projects:</h1>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  )
}

export default Projects
