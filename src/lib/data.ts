import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg';

export const ROLES = [
  {
    company: 'Healthtracka',
    title: 'Senior Software engineer',
    summary: `Spearheaded the development and deployment of a Nestjs API infrastructure automating admin and customer booking processes, managing product data through AWS Elastic Beanstalk. Key role in transitioning from a monolithic to a microservices-based architecture. Enhanced React.js app performance by implementing useMemo for memoization. Provided leadership within the engineering department through recruitment, process improvement, training, and mentorship.`,
    date: 'April 2022 - Present',
    tools: ['Javascript', 'ReactJs', 'NodeJs', 'NestJs', 'NextJs', 'Prisma'],
    logo: logoPlanetaria,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Qaltrak',
    title: 'Software Engineer',
    logo: logoAirbnb,
    start: 'Mar 2021',
    end: 'Oct 2021',
    role: 'Senior Software engineer',
    summary: `As a technical consultant, I provided valuable insights on emerging front-end technologies, ensuring clients' digital solutions remained competitive. I successfully built and delivered technical solutions aligned with business requirements, fostering cross-team collaboration for cohesive app development. Rigorous software testing underpinned my commitment to system reliability, contributing to robust and stable applications.`,
    date: 'Mar - Oct 2021',
    tools: ['Javascript', 'NodeJs', 'NestJs', 'NextJs', 'Tailwind'],
  },
  {
    company: 'Abule.io',
    title: 'Software Engineer',
    logo: logoFacebook,
    start: 'Jun 2020',
    end: 'Sep 2020',
    role: 'Senior Software engineer',
    summary: `Built an application supporting parents with childcare through a unique bartering system using NodeJS and Reactjs. Developed a style guide for the team design system with Storybook, optimizing the development workflow. Led end-to-end deployment and rigorous testing, ensuring application resilience and reliability.`,
    date: 'June - Sep 2020',
    tools: ['Javascript', 'ReactJs', 'NodeJs'],
  },
  {
    company: 'Leviticus Labs LLC',
    title: 'Software Developer',
    logo: logoStarbucks,
    start: 'Nov 2019',
    end: 'Jan 2021',
    role: 'Senior Software engineer',
    summary: ` Deliver high-quality, robust production code for a diverse array of
    projects for clients including Harvard Business School, Everytown for
    Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
    19th News, and more. Provide leadership within engineering department
    through close colloboration, knowledge shares, and mentorship.`,
    date: 'April 2022 - Present',
    tools: ['Javascript', 'Angular', 'Python', 'Django'],
  },
  {
    company: 'Softcity Group',
    title: 'Software Developer',
    logo: logoStarbucks,
    start: 'Jan 2019',
    end: 'Dec 2019',
    role: 'Senior Software engineer',
    summary: `Developed, maintained, and shipped production code for client websites using HTML, CSS, Sass, and Angular. Conducted quality assurance tests to ensure cross-browser compatibility and mobile responsiveness. Resolved technical challenges in the internal web application through effective bug fixes, leading to improved system performance and scalability.`,
    date: 'April 2022 - Present',
    tools: ['Javascript', 'JQuerry', 'PHP', 'Laravel', 'Bootstrap'],
  },

  {
    company: 'Sone Aeon',
    title: 'Software Developer',
    logo: logoStarbucks,
    start: 'Mar 2018',
    end: 'Dec 2018',
    role: 'Senior Software engineer',
    summary: `Developed e-commerce platforms, optimized source codes, and collaborated on web application development at Sone Aeon Technologies, showcasing versatility in technologies and a proactive approach to innovation and continual learning.`,
    date: 'Jan 2018 – Dec 2018',
    tools: ['Javascript', 'JQuerry', 'PHP', 'Codeigniter'],
  },
]