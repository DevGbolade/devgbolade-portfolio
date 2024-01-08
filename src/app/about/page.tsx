/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Agbolade. I live in Lagos City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover shadow grayscale transition-transform hover:scale-110 hover:grayscale-0 dark:bg-zinc-800"
              // style={{ filter: 'grayscale(100%)' }}
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Agbolade, a vibrant soul thriving in the heartbeat of Lagos
            City.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              As a seasoned full-stack engineer, I possess expertise in a wide
              range of technologies, including ReactJS, Angular, Python,
              JavaScript, Node.js, microservices architecture, and AWS. I am
              well-versed in containerization and orchestration tools such as
              Docker and Kubernetes, ensuring efficient deployment and scaling
              of applications on the AWS cloud platform.
            </p>

            <p>
              My technical proficiency extends across the entire software
              development stack, allowing me to contribute to frontend and
              backend development seamlessly. Whether crafting interactive user
              interfaces with ReactJS or building robust backend services using
              Node.js, I bring a holistic approach to software engineering on
              the AWS infrastructure.
            </p>

            <p>
              Beyond the coding realm, I have a diverse set of hobbies that
              enrich my life. I find joy in singing, expressing my creativity
              through music. Additionally, playing soccer serves as a fantastic
              outlet for staying active and fostering teamwork. To unwind, I
              indulge in the world of cinema, appreciating the art of
              storytelling through movies.
            </p>
          </div>

          {/* I'm Agbolade, a vibrant soul thriving in the heartbeat of Lagos City, where each day unfolds like a chapter in a bustling novel. Amidst the vibrant chaos of this metropolis, I've found my rhythm, merging the energy of the city with the beat of my own aspirations.

Navigating the lively streets of Lagos, I discover the hidden gems, from the savory aromas wafting through local markets to the rhythmic sounds of street vendors hawking their wares. In this urban tapestry, I've woven my own story, drawing inspiration from the dynamic fusion of cultures, the resilience of its people, and the ever-evolving skyline that mirrors the upward trajectory of my dreams.

Lagos, with its diverse tapestry of neighborhoods, is not just my residence; it's my canvas. I contribute my brushstrokes to the city's narrative, adding colors of innovation and passion to the vibrant mosaic. Beyond the skyscrapers and busy intersections, I find solace in the city's communal spirit, forging connections that transcend the bustling pace and transform this urban landscape into a mosaic of shared experiences.

So, here I am, Agbolade, a Lagosian through and through, navigating the ebb and flow of life in this city of dreams, where each sunrise heralds new possibilities and each sunset paints the sky with hues of hope. */}
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/rozay10_" icon={TwitterIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/unicorrn3_/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/devgbolade"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/devgbolade/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:devgbolade@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              devgbolade@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
