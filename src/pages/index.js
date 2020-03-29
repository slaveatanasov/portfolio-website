import React from 'react';

import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import CleanCard from '../components/CleanCard';
import SplitSection from '../components/SplitSection';

import TechIcons from '../svg/_icons';
import SvgCharts from '../svg/charts';
import GithubIcon from '../svg/github';
import FacebookIcon from '../svg/facebook';
import LinkedInIcon from '../svg/linkedin';
import InstagramIcon from '../svg/instagram';
import EmailIcon from '../svg/email';
import ImageSA from '../images/sa_img.jpg';
import ImageAcconote from '../images/acconote.png';
import ImagePerssonified from '../images/perssonified_1.jpg';

export default () => {
  return (
    <Layout>
      <section id="about" className="pt-20">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2 sm:mb-3">
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold leading-none robot-name">
              Slave Atanasov
            </h1>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Frontend Developer
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Hi! My lifelong interest of modern technologies and creative environments has become
              an endeavour of building a career in the web development industry.
            </p>
            <br />
            <CleanCard className="">
              <p className="font-semibold text-lg">Q&amp;A:</p>
              <p>
                Employment status: <span className="text-green-500">Available for hire!</span>
              </p>
              <p>
                Current location: <span className="text-green-500">Milan, Italy</span>
              </p>
              <p>
                Eligible to work in the EU?{' '}
                <span className="text-green-500">Yes, I&apos;m an EU Citizen</span>
              </p>
              <p>
                Latest working experience?{' '}
                <span className="text-green-500">Software engineer trainee at One Inside</span>
              </p>
              <p>
                Goal: <span className="text-green-500">Junior frontend developer position.</span>
              </p>
              <div className="socials flex justify-center lg:justify-start">
                <LinkedInIcon classes="social-button w-6 mr-4" />
                <GithubIcon classes="social-button w-6 mr-4" />
                <FacebookIcon classes="social-button w-6 mr-4" />
                <InstagramIcon classes="social-button w-6 mr-4" />
                <EmailIcon classes="social-button w-6 mr-4" />
              </div>
            </CleanCard>
          </div>
          <div className="lg:w-1/2">
            <div className="image-sa-wrapper">
              <img src={ImageSA} alt="slave-atanasov" className="image-sa" />
            </div>
          </div>
        </div>
      </section>
      <section id="qualifications" className="pt-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Qualifications</h2>
          <div className="flex flex-col lg:flex-wrap lg:flex-row sm:-mx-3 mt-12">
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Technology</p>
                <hr />
                <p className="text-md">I have experience with</p>
                <ul className="list-tech flex flex-row flex-wrap justify-center">
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.html}</span>
                    <span className="md:text-lg">HTML 5</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.css}</span>
                    <span className="md:text-lg">CSS 3</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.js}</span>
                    <span className="md:text-lg">JavaScript</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.ts}</span>
                    <span className="md:text-lg">TypeScript</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.nodejs}</span>
                    <span className="md:text-lg">Node.js</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.angular}</span>
                    <span className="md:text-lg">Angular</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.react}</span>
                    <span className="md:text-lg">React</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.redux}</span>
                    <span className="md:text-lg">Redux</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.mongodb}</span>
                    <span className="md:text-lg">MongoDB</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.mysql}</span>
                    <span className="md:text-lg">MySQL</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.git}</span>
                    <span className="md:text-lg">Git</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.linux}</span>
                    <span className="md:text-lg">Linux</span>
                  </li>
                </ul>
                <hr />
                <p className="text-md">I&apos;m currently exploring</p>
                <ul className="list-tech flex flex-row flex-wrap justify-center">
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.gatsby}</span>
                    <span>Gatsby</span>
                  </li>
                  <li className="xl:p-1 m-2">
                    <span>{TechIcons.graphql}</span>
                    <span>GraphQL</span>
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
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Education and training</p>
                <hr />
                <ul className="list-edu mt-4 text-left">
                  <li>
                    <p className="text-sm">2018 – 2019</p>
                    <h4>Web Development - JavaScript Academy</h4>
                    <a href="https://semosedu.com.mk">Semos Education - Skopje, North Macedonia</a>
                    <p className="mt-1">
                      Linux, Git, HTML 5, CSS 3, JavaScript, Node.js, MongoDB, React, Redux, HTTP,
                      REST. Subsequently, I added to my knowledge technologies such as Angular,
                      TypeScript, MySQL etc.
                    </p>
                  </li>
                  <hr />
                  <li className="">
                    <p className="text-sm">2018 – 2010</p>
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
                  <li className="">
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
                <p className="font-semibold text-xl">Work experience</p>
                <hr />
                <ul className="list-workexp mt-4 text-left">
                  <li>
                    <p className="text-sm">06/2019 – 09/2019</p>
                    <h4>Software engineer trainee</h4>
                    <a href="https://one-inside.com">One Inside - Skopje, North Macedonia</a>
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
                    <a href="https://patapata.eu">Pata Pata Recordings</a>
                    <p className="mt-1">Event organisation, music label and artist management</p>
                  </li>
                  <hr />
                  <li className="">
                    <p className="text-sm">2008 – present</p>
                    <h4>Artist - electronic music producer</h4>
                    <a href="https://patapata.eu">Sal Sonder – Pata Pata Recordings</a>
                    <p className="mt-1">Freelance producer, mix and mastering engineer</p>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div id="projects" className="pt-20">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Portfolio projects</h2>
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">peRSSonified</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                <a href="https://github.com/slaveatanasov/perssonified">Check it out on GitHub</a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi vero soluta?
                Aliquam quam temporibus laudantium fuga, quas voluptas deleniti quaerat officiis
                exercitationem optio incidunt velit nobis cum libero ad?
              </p>
            </div>
          }
          secondarySlot={<img src={ImagePerssonified} alt="perssonified" className="project-img" />}
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">Acconote</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                <a href="https://github.com/slaveatanasov/acconote_app">Check it out on GitHub</a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi vero soluta?
                Aliquam quam temporibus laudantium fuga, quas voluptas deleniti quaerat officiis
                exercitationem optio incidunt velit nobis cum libero ad?
              </p>
            </div>
          }
          secondarySlot={<img src={ImageAcconote} alt="acconote" className="project-img" />}
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">Other projects</h3>
              <p className="mt-2 text-xl font-light leading-relaxed">
                <a href="https://github.com/slaveatanasov?tab=repositories">
                  Check all projects on GitHub
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi vero soluta?
                Aliquam quam temporibus laudantium fuga, quas voluptas deleniti quaerat officiis
                exercitationem optio incidunt velit nobis cum libero ad?
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
      </div>
    </Layout>
  );
};
