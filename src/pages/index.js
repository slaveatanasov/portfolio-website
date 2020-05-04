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
import FacebookIcon from '../svg/facebook';
import LinkedInIcon from '../svg/linkedin';
import InstagramIcon from '../svg/instagram';
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
              Hi! My lifelong interest in modern technologies and creative environments has become
              an endeavour of building a career in the web development industry.
            </p>
            <br />
            <CleanCard className="q-a-card">
              <h3 className="font-semibold text-lg">FAQ</h3>
              <p>
                Employment status: <span className="text-green-500">Available for hire!</span>
              </p>
              <p>
                Current location: <span className="text-green-500">Milan, Italy</span>
              </p>
              <p>
                Eligible to work in the EU?{' '}
                <span className="text-green-500">Yes, I&apos;m an EU citizen</span>
              </p>
              <p>
                Latest working experience?{' '}
                <span className="text-green-500">Software engineer trainee</span>
              </p>
              <p>
                Goal: <span className="text-green-500">Frontend developer position</span>
              </p>
              <div className="socials flex justify-center lg:justify-start">
                <ul className="flex justify-between w:180px">
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
                  <li>
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
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="https://www.facebook.com/slaveatanasov"
                      alt="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon classes="social-button w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="https://www.instagram.com/slaveatan"
                      alt="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon classes="social-button w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-anchor-link"
                      href="mailto:slaveatanasovmusic@gmail.com"
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
                    <span>{TechIcons.nodejs}</span>
                    <span>Node.js</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.angular}</span>
                    <span>Angular</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.react}</span>
                    <span>React</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.redux}</span>
                    <span>Redux</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.gatsby}</span>
                    <span>Gatsby</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.mongodb}</span>
                    <span>MongoDB</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.mysql}</span>
                    <span>MySQL</span>
                  </li>
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
                    <span>{TechIcons.adobephotoshop}</span>
                    <span>Adobe Photoshop</span>
                  </li>
                </ul>
                <hr />
                <p className="text-md">I&apos;m currently exploring</p>
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
                    <span>{TechIcons.jest}</span>
                    <span>Jest</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.adobeillustrator}</span>
                    <span>Adobe Illustrator</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.adobexd}</span>
                    <span>Adobe Xd</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.figma}</span>
                    <span>Figma</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.wordpress}</span>
                    <span>Wordpress</span>
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
                    <p className="text-sm">01/2020 – Present</p>
                    <h4>Freelance web developer</h4>
                    <p className="mt-1">Working on frontend web development projects</p>
                  </li>
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
                      collaborative, agile development team both on frontend and backend tasks on
                      multiple applications. I became knowledgeable in and used technologies such as
                      Angular, Node.js, JavaScript, TypeScript, MySQL, SCSS, Git, Docker, Jira as
                      well as UI/UX implementations
                    </p>
                  </li>
                  <hr />
                  <li className="">
                    <p className="text-sm">2013 – 2019</p>
                    <h4>Event organisation, music label and artist management</h4>
                    <a
                      href="https://patapata.eu"
                      alt="Pata Pata Recordings"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pata Pata Recordings
                    </a>
                    <p className="mt-1">Event organisation, music label and artist management</p>
                  </li>
                  <hr />
                  <li className="">
                    <p className="text-sm">2008 – present</p>
                    <h4>Artist - electronic music producer</h4>
                    <a
                      href="https://patapata.eu"
                      alt="Pata Pata Recordings"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sal Sonder – Pata Pata Recordings
                    </a>
                    <p className="mt-1">Freelance producer, mix and mastering engineer</p>
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
                    <h4>Web Development - JavaScript Academy</h4>
                    <a
                      href="https://semosedu.com.mk"
                      alt="Semos Edu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Semos Education - Skopje, North Macedonia
                    </a>
                    <p className="mt-1">
                      Linux, Git, HTML 5, CSS 3, JavaScript, Node.js, MongoDB, React, Redux, HTTP,
                      REST. Subsequently, I added to my knowledge technologies such as Angular,
                      TypeScript, MySQL etc.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">2008 – 2010</p>
                    <h4>Student</h4>
                    <p className="institution">
                      Faculty of Applied Foreign Languages - business department, FON University,
                      Skopje (North Macedonia)
                    </p>
                    <p className="mt-1">
                      Education put on hold in the 2nd of total 4 academic years
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
                    <span>
                      Friendly and communicative person, with a positive outlook on things
                    </span>
                  </li>
                  <li>
                    <span>Task-oriented and deadline-focused</span>
                  </li>
                  <li>
                    <span>Team player</span>
                  </li>
                  <li>
                    <span>Responsible</span>
                  </li>
                  <li>
                    <span>Adaptive</span>
                  </li>
                  <li>
                    <span>Resourceful</span>
                  </li>
                  <li>
                    <span>Greatly interested in developing new skills</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div id="projects" className="pt-12 md:pt-20">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Portfolio projects</h2>
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight">peRSSonified</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check it out on{' '}
                <a
                  href="https://github.com/slaveatanasov/perssonified"
                  alt="GitHub peRSSonified"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {' and '}
                <a
                  href="https://perssonified.herokuapp.com/"
                  alt="Heroku peRSSonified"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroku
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Imagined as a personalized news aggregator allowing you to subscribe to news outlets
                and topics that you want to read, this project implements authorization and
                authentication, using tools such as Two Factor Authentication and JWT. The
                technologies used in building it include Angular, Angular Material, TypeScript,
                Node.js, MySQL, SCSS etc.
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.perssonified.childImageSharp.fluid}
              alt="perssonified"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight">
                From prototype in Photoshop to a complete website
              </h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check it out on{' '}
                <a
                  href="https://github.com/slaveatanasov/landing-page-example"
                  alt="GitHub Landing Page Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {' and '}
                <a
                  href="https://playground-by-slave-atanasov.herokuapp.com/"
                  alt="Heroku Landing Page Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroku
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                This slick landing page website was built in Angular from scratch following the
                design provided in a Photoshop file. It is fully responsive with features such as
                automatic slideshow, AJAX tabs section, modern cards and banners section, as well as
                contact form and cookie policy components.
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
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight">SlaveAtanasov.com</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                <a
                  href="https://github.com/slaveatanasov/portfolio-website"
                  alt="slaveatanasov.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out the source code on GitHub
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                I built the website you&apos;re currently browsing in Gatsby. It&apos;s one of the
                fastest static website frameworks.
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
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
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
                I was commisioned to develop this website for a client&apos;s new app. I build it in
                Gatsby, with the content being sourced from Contentful via a GraphQL API.
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
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight">Acconote</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check it out on{' '}
                <a
                  href="https://github.com/slaveatanasov/acconote_app"
                  alt="GitHub Acconote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {' and '}
                <a
                  href="https://acconote.herokuapp.com/"
                  alt="Heroku Acconote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroku
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                This basic note taking and to-do app is a quick way to showcase the latest React
                possibilities. It implements TypeScript in React, as well as the newest React Hooks,
                and it uses HTML5 drag and drop API for a better user experience. For the UI I used
                tools such as Materialize and SCSS.
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.acconote.childImageSharp.fluid}
              alt="Acconote"
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
                <a
                  href="https://github.com/slaveatanasov?tab=repositories"
                  alt="GitHub Projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore all projects on GitHub
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Check out my GitHub account for other small projects I&apos;ve built.
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
    acconote: file(relativePath: { eq: "acconote.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    perssonified: file(relativePath: { eq: "perssonified_1.jpg" }) {
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
