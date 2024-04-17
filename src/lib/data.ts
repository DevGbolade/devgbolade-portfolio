import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg';

export const ROLES = [
  {
    company: 'Healthtracka',
    title: 'Senior Software engineer',
    summary: `
    I built and deployed a Nestjs application to automate both admin and customer booking processes, leveraging AWS Aurora, resulting in an 80% reduction in booking process time. Additionally, I architected and developed high-performance web applications with Next.js and React, achieving an impressive 80% reduction in load times, while implementing advanced SEO strategies that boosted search engine visibility and increased organic traffic. In contributing to the growth of the Engineering team, I participated in recruitment, improved current processes, trained junior engineers, and provided daily support to team members. I also led the ideation and architectural development of project maps for several high-impact initiatives, notably including the Health-test booking Application and the Admin Platform, and took the lead on projects as required.`,
    date: 'April 2022 - Present',
    tools: ['Javascript', 'RTL', 'Jest', 'Redux toolkit', 'Tailwindcss', 'ReactJs', 'NodeJs', 'NestJs', 'NextJs', 'Prisma', 'AWS route 53', 'S3 bucket', "EC2", "Amplify"],
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
    summary: `I engineered a Content Management System (CMS) tailored for VC-backed startups, utilizing Next.js, TypeScript, Node.js, and GraphQL, enabling swift portfolio updates and efficient brand asset management. This initiative significantly saved time and costs, thereby enhancing funding accessibility. Working closely with product and design teams, I prioritized understanding end-user needs to ensure efficient app delivery, resulting in a seamless, customer-centric product that exceeded expectations. Implementing logging and monitoring with Prometheus and Grafana became a standard practice, addressing core business needs and improving system visibility to proactively identify issues for enhanced reliability, security, and performance. Additionally, I optimized frontend performance for the VCA Next.js application, employing techniques such as efficient code, lazy loading, and minimized requests to achieve faster load times, improved user experience (UX), and enhanced responsiveness.`,
    date: 'Mar - Oct 2021',
    tools: ['Javascript', 'NodeJs', 'NestJs', 'NextJs', 'Tailwind', 'Graphql', 'Typescript'],
  },
  {
    company: 'Abule.io',
    title: 'Software Engineer',
    logo: logoFacebook,
    start: 'Mar 2020',
    end: 'Sep 2020',
    role: 'Senior Software engineer',
    summary: `I developed an event-driven serverless application that incorporated a distinctive bartering system using Node.js and React.js, specifically designed to assist parents with childcare needs. My responsibilities included defining and communicating technical and design requirements, with a focus on daily coding and debugging tasks. As a leader, I oversaw end-to-end deployment and conducted rigorous testing to ensure the resilience and reliability of the applications. Throughout the entire application lifecycle, from conceptualization to deployment, I played a crucial role, actively participating to ensure seamless development and robust outcomes.`,
    date: 'June - Sep 2020',
    tools: ['Javascript', 'ReactJs', 'NodeJs', 'RabbitMq', 'Postgres', 'Typescript', 'Redux', 'SocketIO'],
  },
  {
    company: 'Leviticus Labs LLC',
    title: 'Software Developer',
    logo: logoStarbucks,
    start: 'Nov 2019',
    end: 'Jan 2020',
    role: 'Frontend developer',
    summary: `I developed, maintained, and deployed production code for client websites, achieving a notable 70% improvement in website performance. Additionally, I conducted quality assurance tests to ensure cross-browser compatibility and mobile responsiveness, resulting in a 50% increase in user satisfaction. I also addressed technical challenges within the internal web application by implementing effective bug fixes, leading to a significant 40% improvement in system performance and scalability. Throughout these endeavors, I played a pivotal role in driving project success through strategic planning and continuous collaboration with stakeholders.`,
    date: 'April 2022 - Present',
    tools: ['Javascript', 'Angular','Typescript'],
  },
  {
    company: 'Softcity Group',
    title: 'Software Developer',
    logo: logoStarbucks,
    start: 'Jan 2019',
    end: 'Dec 2019',
    role: 'Senior Software engineer',
    summary: `I spearheaded the development, maintenance, and deployment of production code for client websites, achieving an impressive 70% enhancement in website performance. My role extended to conducting rigorous quality assurance tests, guaranteeing cross-browser compatibility and mobile responsiveness, which significantly bolstered user satisfaction by 50%. Moreover, I adeptly tackled technical hurdles within the internal web application, implementing effective bug fixes that resulted in a notable 40% improvement in system performance and scalability. Throughout these endeavors, I played a central role in steering project success, leveraging strategic planning and fostering continuous collaboration with stakeholders.`,
    date: 'April 2022 - Present',
    tools: ['Javascript', 'JQuerry', 'PHP', 'Laravel', 'Bootstrap'],
  },

  {
    company: 'Sone Aeon',
    title: 'Frontend developer',
    logo: logoStarbucks,
    start: 'Mar 2018',
    end: 'Dec 2018',
    role: 'Frontend developer',
    summary: `I specialized in developing e-commerce platforms tailored for high-volume businesses, ensuring robust performance and scalability. I maintained a focus on producing well-organized, optimized, and thoroughly documented source code to facilitate seamless maintenance and future enhancements. Collaborating closely with fellow software developers, I contributed to the comprehensive planning, design, development, testing, and maintenance of the company's web applications. Additionally, I remained proactive in generating innovative ideas for new programs, products, or features by monitoring industry developments and trends. Furthermore, I actively engaged in continuing education and training initiatives to stay abreast of best practices, acquire proficiency in new programming languages, and effectively support and mentor other team members.`,
    date: 'Jan 2018 – Dec 2018',
    tools: ['Javascript', 'JQuerry', 'PHP', 'Codeigniter'],
  },
]