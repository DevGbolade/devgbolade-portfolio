import Link from 'next/link'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import ToolsImages from '@/components/ToolsImages'
import Projects from '../components/Projects'
import { ROLES } from '@/lib/data'

// function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
//       <path
//         d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

function Work({ role }: { role: any }) {
  return (
    <Card as="article">
      <Card.Title className="text-red-500" as="h1" href={`#`}>
        {role.company}
      </Card.Title>
      <Card.Title className="text" href={`#`}>
        {role.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={role.date} decorate>
        {role.date}
      </Card.Eyebrow>
      <Card.Description>{role.summary}</Card.Description>
      <div className="gap- mt-3 flex flex-wrap gap-x-4 space-y-1">
        {role.tools.map((tool: any, indx: number) => (
          <Card.Button key={indx}>{tool}</Card.Button>
        ))}
      </div>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Experienced Software Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am Gbolade, a committed Software Engineer focused on creating
            products that empower organizations to achieve optimal scalability.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/rozay10_"
              aria-label="Follow on X"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/unicorrn3_/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/devgbolade"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/devgbolade/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {ROLES.map((role, idx) => (
              <Work key={idx} role={role} />
            ))}
          </div>
          <div className="flex flex-col items-center space-y-10 lg:pl-16 xl:pl-24">
            <ToolsImages />
            {/* <Projects /> */}
          </div>
        </div>
      </Container>
    </>
  )
}
