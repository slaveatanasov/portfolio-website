/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import CleanCard from '../components/CleanCard';
import SplitSection from '../components/SplitSection';

import TechIcons from '../svg/_icons';
import GithubIcon from '../svg/github';
import LinkedInIcon from '../svg/linkedin';
import EmailIcon from '../svg/email';
import ImageProgrammer from '../svg/programmer';

export default ({ data }) => {
  return (
    <Layout>
      <section id="about" className="pt-10 md:pt-20 bg-gradient">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2 sm:mb-3">
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold leading-none robot-name">
              Slave Atanasov
            </h1>
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-none">
              Frontend Developer
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Hey! I&apos;m a software developer creating web apps using industry standard
              technologies such as React &amp; TypeScript.
            </p>
            <br />
            <CleanCard className="q-a-card">
              <h3 className="font-semibold text-lg">Quick info</h3>
              <hr />
              <p>
                Current employment status:{' '}
                <span className="text-green-500">Employed full-time</span>
              </p>
              <p>
                Location: <span className="text-green-500">North Macedonia / remote</span>
              </p>
              <p>
                Eligible to work in the EU?{' '}
                <span className="text-green-500">Yes, I&apos;m a EU citizen</span>
              </p>
              <p>
                Current position:{' '}
                <span className="text-green-500">
                  Software engineer at{' '}
                  <a
                    href="https://htecgroup.com"
                    alt="HTEC Group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500"
                  >
                    HTEC Group
                  </a>
                </span>
              </p>
              <div className="socials flex justify-center lg:justify-start">
                <ul className="flex justify-between">
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="https://www.linkedin.com/in/slaveatanasov"
                      alt="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon classes="social-button w-6" />
                    </a>
                  </li>
                  <li className="ml-2">
                    <a
                      className="icon-anchor-link"
                      href="https://github.com/slaveatanasov"
                      alt="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon classes="social-button w-6" />
                    </a>
                  </li>
                  <li className="ml-2">
                    <a
                      className="icon-anchor-link"
                      href="mailto:slaveatan@gmail.com"
                      alt="Email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <EmailIcon classes="social-button w-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </CleanCard>
          </div>
          <div className="lg:w-1/2">
            <div className="image-sa-wrapper">
              <Img
                fluid={data.goodLookingDude.childImageSharp.fluid}
                alt="Good Looking Dude"
                className="image-sa xl:ml-14"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="qualifications" className="pt-12 md:pt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Qualifications</h2>
          <div className="flex flex-col lg:flex-wrap lg:flex-row sm:-mx-3 mt-6 md:mt-12">
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Technology</p>
                <hr />
                <p className="text-md">I have experience with</p>
                <ul className="list-tech flex flex-row flex-wrap justify-center">
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.html}</span>
                    <span>HTML 5</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.css}</span>
                    <span>CSS 3</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.js}</span>
                    <span>JavaScript</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.ts}</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.react}</span>
                    <span>React</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.redux}</span>
                    <span>Redux / Redux Toolkit</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.nextjs}</span>
                    <span>Next JS</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.gatsby}</span>
                    <span>Gatsby</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.nodejs}</span>
                    <span>Node.js</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.angular}</span>
                    <span>Angular</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.mongodb}</span>
                    <span>MongoDB</span>
                  </li>
                  {/* <li className="xl:p-1 m-2">
                    <span>{TechIcons.mysql}</span>
                    <span>MySQL</span>
                  </li> */}
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.git}</span>
                    <span>Git</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.linux}</span>
                    <span>Linux</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.vscode}</span>
                    <span>VSCode</span>
                  </li>
                  {/* <li className="xl:p-1 m-2">
                    <span>{TechIcons.bootstrap}</span>
                    <span>Bootstrap</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.materialui}</span>
                    <span>Material UI</span>
                  </li> */}
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.sass}</span>
                    <span>Sass</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.jest}</span>
                    <span>Jest</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.adobephotoshop}</span>
                    <span>Adobe Photoshop</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.figma}</span>
                    <span>Figma</span>
                  </li>
                </ul>
                <hr />
                <p className="text-md">I&apos;m learning to use on a regular basis</p>
                <ul className="list-tech flex flex-row flex-wrap justify-center">
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.graphql}</span>
                    <span>GraphQL</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.docker}</span>
                    <span>Docker</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.webpack}</span>
                    <span>Webpack</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.react}</span>
                    <span>React Native</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.adobeillustrator}</span>
                    <span>Adobe Illustrator</span>
                  </li>
                  {/* <li className="xl:p-1 m-2">
                    <span>{TechIcons.adobexd}</span>
                    <span>Adobe Xd</span>
                  </li> */}
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.wordpress}</span>
                    <span>Wordpress</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>...and more</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Work experience</p>
                <hr />
                <ul className="list-workexp mt-4 text-left">
                  <li>
                    <p className="text-sm">03/2022 – Present</p>
                    <h4>Software engineer</h4>
                    <a
                      href="https://htecgroup.com"
                      alt="HTEC Group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HTEC Group (contractor for Apple Inc.)
                    </a>
                    <p className="mt-1">
                      {`Working as a frontend software engineer and part of a highly talented team developing
                      complex user facing applications for one of the world's greatest technological companies - Apple Inc. 
                      The main technologies I work with daily are React, TypeScript,
                      JavaScript, TanStack Query, HTML, Styled Components, REST, Docker, Git, AWS,
                      Azure Cloud, Sketch, in-house design systems, libraries, and many more
                      related technologies. `}
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">05/2021 – 03/2022</p>
                    <h4>Frontend web developer</h4>
                    <a
                      href="https://www.be-tse.it"
                      alt="BE Group Italy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Be Group - Milan, Italy
                    </a>
                    <p className="mt-1">
                      {`I worked as a frontend developer/consultant and part of a team developing
                      complex online banking applications for clients such as "illimity" and "Azimut
                      / STEP". The main technologies I work with daily are React, Typescript,
                      JavaScript, Redux, Redux Toolkit, HTML, SCSS, REST, Styled Components, Git,
                      Azure Cloud, Zeplin, in-house design systems, libraries, and many other
                      related technologies. `}
                      <br />
                      <br />
                      {`                      In some cases, I've also used server-side/static
                      rendering frameworks based around React such as Next.js and Gatsby.`}
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">05/2020 – 05/2021</p>
                    <h4>Frontend web developer</h4>
                    <a
                      href="https://it.nttdata.com"
                      alt="NTTData"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NTT Data Italia - Milan, Italy
                    </a>
                    <p className="mt-1">
                      {`I worked as a frontend developer/consultant and part of a team developing
                      complex RESTful applications for various industries such as telecom, energy,
                      and governmental institutions. Clients include Vodafone, SKY UK, TIM, Sogei,
                      Enel, Italian Government ministries, and also internal NTT Data projects.`}
                      <br />
                      <br />
                      {`The
                        main technologies I worked with daily were React, Typescript, JavaScript,
                        Redux, HTML, SCSS, Styled Components, Git, Azure Cloud, Figma, Storybook,
                        Jest, in-house design systems, libraries, and many other related technologies.`}
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">01/2020 – 03/2022</p>
                    <h4>Web developer</h4>
                    <a
                      href="https://ipsedocet.it/"
                      alt="Ipse Docet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ipse Docet - Milan, Italy
                    </a>
                    <p className="mt-1">
                      Working as a frontend developer for various clients of Ipse Docet - an IT
                      consultancy and management company.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">09/2019 – 01/2020</p>
                    <h4>Freelance web developer</h4>
                    <p className="mt-1">
                      Built static websites in JavaScript frameworks from prototype to production,
                      worked on web applications/components with frameworks such as React and
                      Angular, worked on UI/UX solutions, created WordPress websites with popular
                      website builders.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">06/2019 – 09/2019</p>
                    <h4>Software engineer trainee</h4>
                    <a
                      href="https://one-inside.com"
                      alt="One Inside"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      One Inside - Skopje, North Macedonia
                    </a>
                    <p className="mt-1">
                      One Inside is a Swiss company with subsidiaries in Germany and North
                      Macedonia. As a software engineer trainee at the Skopje office, I worked in a
                      collaborative development team both on frontend and backend tasks on multiple
                      applications. I gained experience in technologies such as Angular, Node.js,
                      JavaScript, TypeScript, databases, SCSS, Git, Docker, Agile, UX/UI concepts,
                      and other related technologies.
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Education and training</p>
                <hr />
                <ul className="list-edu mt-4 text-left">
                  <li>
                    <p className="text-sm">2018 – 2019</p>
                    <h4>Web Development Program</h4>
                    <a
                      href="https://semosedu.com.mk"
                      alt="Semos Edu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Semos Education - Skopje, North Macedonia
                    </a>
                    <p className="mt-1">
                      A Web Development program focused on learning technologies such as HTML 5, CSS
                      3, JavaScript, Node.js, MongoDB, React, Redux, Linux, Git, HTTP, REST,
                      Angular, TypeScript.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">2008 – 2010</p>
                    <h4>Student</h4>
                    <p className="institution">
                      Faculty of Applied Foreign Languages (business department), FON University,
                      Skopje (North Macedonia)
                    </p>
                    <p className="mt-1">
                      Education put on hold in the 2nd of total 4 academic years.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">2004 – 2008</p>
                    <h4>Diploma - Social Sciences and Humanities</h4>
                    <p className="institution">
                      Public High School &ldquo;Jane Sandanski&ldquo; (North Macedonia)
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Personal skills</p>
                <hr />
                <ul className="list-skills mt-4 text-left">
                  <li>
                    <span>Open, friendly, and communicative personality</span>
                  </li>
                  <li>
                    <span>Task-oriented and deadline-focused on the job</span>
                  </li>
                  <li>
                    <span>Always a team player</span>
                  </li>
                  <li>
                    <span>Responsible, resourceful, and adaptive to all circumstances</span>
                  </li>
                  <li>
                    <span>Fully involved in advancing and developing newer and broader skills</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div id="projects" className="pt-12 md:pt-20">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Projects</h2>
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight">Upperway TMS</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check it out on{' '}
                <a
                  href="https://demo.upperway.io/"
                  alt="Upperway TMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demo.upperway.io
                </a>{' '}
                by requesting a demo account
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Upperway is a SaaS TMS (Transportation Management System) software built by me and
                my team to help solve problems for small and medium enterprises in the trucking
                industry primarily in the USA. This software is built with the enterprise standard
                technologies stack such as Angular, Java/Spring, SQL, and AWS.
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.upperway_scr_1.childImageSharp.fluid}
              alt="Upperway TMS"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight">UniversalDot</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check it out on{' '}
                <a
                  href="https://app.universaldot.me/"
                  alt="UniversalDot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  app.universaldot.me
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                I was commisioned to develop the Front End web application for a client who&apos;s
                established in the crypto industry. This project is built in React and is connected
                to a Polkadot blockchain API.
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.universaldot_scr_1.childImageSharp.fluid}
              alt="universaldoy"
              className="project-img"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight">
                From design prototype to a deployed website
              </h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check out the source code on{' '}
                <a
                  href="https://github.com/slaveatanasov/landing-page-example"
                  alt="GitHub Landing Page Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                This slick landing page website was built from scratch and in pixel perfect way
                based on a design provided by a client. It was build in Angular, it&apos;s fully
                responsive with features such as automatic slideshow, AJAX tabs section, modern
                cards and banners section, as well as contact form, and cookie policy components.
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.landingPageProject.childImageSharp.fluid}
              alt="Landing page project"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight">SlaveAtanasov.com</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check out the source code on{' '}
                <a
                  href="https://github.com/slaveatanasov/portfolio-website"
                  alt="slaveatanasov.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                The website you&apos;re currently browsing I built in Gatsby - one of the fastest
                static website frameworks available.
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.sacom.childImageSharp.fluid}
              alt="slaveatanasov.com"
              className="project-img"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight">Project 5mins</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check it out on{' '}
                <a
                  href="https://github.com/slaveatanasov/darryl-dexter"
                  alt="GitHub Project5mins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {' and '}
                <a
                  href="https://darryldexter.netlify.app/"
                  alt="Netlify Project5mins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Netlify
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                I was commisioned to develop this website for a client. I built it in Gatsby, with
                the content being sourced from Contentful through a GraphQL API.
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.project5mins.childImageSharp.fluid}
              alt="project-5mins"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight">Other projects</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Explore more on{' '}
                <a
                  href="https://github.com/slaveatanasov?tab=repositories"
                  alt="GitHub Projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Visit my GitHub account for other projects not presented here.
              </p>
            </div>
          }
          secondarySlot={<ImageProgrammer />}
        />
      </div>
      <h2 className="text-2xl lg:text-3xl pt-16 font-semibold text-center">Contact</h2>
    </Layout>
  );
};

export const query = graphql`
  query Images {
    upperway_scr_1: file(relativePath: { eq: "upperway_scr_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    universaldot_scr_1: file(relativePath: { eq: "universaldot_scr_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landingPageProject: file(relativePath: { eq: "landing-page-project.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sacom: file(relativePath: { eq: "slaveatanasovcom.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project5mins: file(relativePath: { eq: "project-5mins.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    goodLookingDude: file(relativePath: { eq: "sa_img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
