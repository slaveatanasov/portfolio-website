/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import SplitSection from '../components/SplitSection';
import ToptalBadge from '../components/ToptalBadge';

import GithubIcon from '../svg/github';
import LinkedInIcon from '../svg/linkedin';
import EmailIcon from '../svg/email';
import ImageProgrammer from '../svg/programmer';

export default ({ data }) => {
  return (
    <Layout>
      <section id="about" className="pt-10 md:pt-20 bg-gradient">
        <div className="container mx-auto px-8 hero-layout">
          <div className="text-center lg:text-left hero-content sm:mb-3">
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold leading-none robot-name">
              Slave Atanasov
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mt-1">
              Senior Web Developer
            </h1>
            <p className="hero-intro text-xl lg:text-2xl mt-6 font-light text-gray-800 leading-relaxed">
              Hi, I&apos;m Slave. I build web software solo and with teams, from small shops to
              large companies.
            </p>
            <div className="in-short-block">
              <div className="in-short">
                <div className="in-short-header">
                  <h3 className="font-semibold text-lg text-gray-900">In short</h3>
                  <p className="in-short-caption">Availability, location, citizenship</p>
                </div>
                <dl className="in-short-facts text-left">
                  <div className="in-short-row">
                    <dt>Work arrangement</dt>
                    <dd>
                      Independent contractor · selectively taking new work when capacity and fit
                      align
                    </dd>
                  </div>
                  <div className="in-short-row">
                    <dt>Location</dt>
                    <dd>North Macedonia · remote delivery across time zones</dd>
                  </div>
                  <div className="in-short-row">
                    <dt>Citizenship</dt>
                    <dd>EU citizen (Bulgaria) · North Macedonia</dd>
                  </div>
                </dl>
                <div className="socials flex justify-center lg:justify-start in-short-socials">
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
              </div>
              <div className="toptal-badge-wrapper">
                <ToptalBadge />
              </div>
            </div>
          </div>
          <div className="hero-media">
            <div className="image-sa-wrapper">
              <GatsbyImage
                image={data.goodLookingDude.childImageSharp.gatsbyImageData}
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
              <Card className="mb-8 text-left">
                <p className="font-semibold text-xl text-center">Stack &amp; tools</p>
                <hr />
                <div className="tools-block">
                  <h4>Frontend &amp; UI</h4>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>HTML &amp; CSS</span>
                    </li>
                    <li>
                      <span>Tailwind CSS</span>
                    </li>
                    <li>
                      <span>JavaScript</span>
                    </li>
                    <li>
                      <span>TypeScript</span>
                    </li>
                    <li>
                      <span>React</span>
                    </li>
                    <li>
                      <span>Next.js</span>
                    </li>
                    <li>
                      <span>Angular</span>
                    </li>
                    <li>
                      <span>Redux Toolkit</span>
                    </li>
                    <li>
                      <span>TanStack (Query, Router, Table)</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>Backend &amp; data</h4>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>REST</span>
                    </li>
                    <li>
                      <span>GraphQL</span>
                    </li>
                    <li>
                      <span>Node.js / Express</span>
                    </li>
                    <li>
                      <span>MongoDB</span>
                    </li>
                    <li>
                      <span>PostgreSQL / SQL</span>
                    </li>
                    <li>
                      <span>Supabase</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>Infra &amp; delivery</h4>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>Vercel</span>
                    </li>
                    <li>
                      <span>AWS</span>
                    </li>
                    <li>
                      <span>Azure</span>
                    </li>
                    <li>
                      <span>CI/CD &amp; DevOps</span>
                    </li>
                    <li>
                      <span>Docker</span>
                    </li>
                    <li>
                      <span>Linux</span>
                    </li>
                    <li>
                      <span>Cloudflare</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>Tooling &amp; quality</h4>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>Git</span>
                    </li>
                    <li>
                      <span>VS Code</span>
                    </li>
                    <li>
                      <span>Figma</span>
                    </li>
                    <li>
                      <span>Testing / Jest</span>
                    </li>
                    <li>
                      <span>Webpack, Vite &amp; modern bundlers</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>AI &amp; LLMs</h4>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>Cursor</span>
                    </li>
                    <li>
                      <span>GitHub Copilot</span>
                    </li>
                    <li>
                      <span>Claude</span>
                    </li>
                    <li>
                      <span>ChatGPT / OpenAI</span>
                    </li>
                    <li>
                      <span>LLM APIs &amp; integrations</span>
                    </li>
                    <li>
                      <span>Prompt &amp; tool-calling workflows</span>
                    </li>
                    <li>
                      <span>Agent-style product features</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>SEO &amp; analytics</h4>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>Technical &amp; on-page SEO</span>
                    </li>
                    <li>
                      <span>Analytics &amp; event tracking</span>
                    </li>
                    <li>
                      <span>Performance &amp; Core Web Vitals</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>Building, SaaS &amp; collaboration</h4>
                  <p className="tools-intro">
                    Beyond client work I also build and ship my own products: solopreneur and
                    indie-style projects, SaaS ideas end to end, and collaboration with partners,
                    users, and teams when a product needs more than code.
                  </p>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>Solopreneurship &amp; side projects</span>
                    </li>
                    <li>
                      <span>SaaS product building</span>
                    </li>
                    <li>
                      <span>Collaboration &amp; delivery</span>
                    </li>
                    <li>
                      <span>Marketing &amp; growth</span>
                    </li>
                    <li>
                      <span>Stakeholder communication</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>Content &amp; CMS</h4>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>Strapi</span>
                    </li>
                    <li>
                      <span>WordPress</span>
                    </li>
                    <li>
                      <span>Headless CMS patterns</span>
                    </li>
                  </ul>
                </div>
                <div className="tools-block">
                  <h4>Mobile (learning)</h4>
                  <p className="tools-intro">
                    Still growing here: dabbling in React Native to see how mobile apps feel and
                    ship, alongside web. Small experiments and real builds, not my main lane yet,
                    but I am actively learning.
                  </p>
                  <ul className="list-tech flex flex-row flex-wrap">
                    <li>
                      <span>React Native</span>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="mb-8">
                <p className="font-semibold text-xl">Education</p>
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
                      Semos Education, Skopje
                    </a>
                    <p className="mt-1">
                      Full-time program covering the modern web stack: HTML/CSS, JavaScript,
                      Node.js, MongoDB, React, Redux, Angular, TypeScript, Linux, Git, HTTP, and
                      REST APIs.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">2008 – 2010</p>
                    <h4>University (paused)</h4>
                    <p className="institution">
                      Faculty of Applied Foreign Languages, business track, FON University, Skopje
                    </p>
                    <p className="mt-1">
                      Studied two of four years, then paused to pursue other paths.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">2004 – 2008</p>
                    <h4>High school diploma</h4>
                    <p className="institution">
                      Public High School &ldquo;Jane Sandanski&ldquo;, North Macedonia
                    </p>
                  </li>
                </ul>
              </Card>
              <Card className="mb-8">
                <p className="font-semibold text-xl">How I work</p>
                <hr />
                <ul className="how-i-work-list mt-4 text-left text-sm leading-relaxed text-gray-700">
                  <li>
                    <strong className="text-gray-900">Communication.</strong> Regular updates with
                    engineers, designers, and stakeholders.
                  </li>
                  <li>
                    <strong className="text-gray-900">Range.</strong> Agency and founder work, and
                    longer corporate engagements.
                  </li>
                  <li>
                    <strong className="text-gray-900">Scope.</strong> Agreed in writing; I call out
                    risks early.
                  </li>
                  <li>
                    <strong className="text-gray-900">Dates.</strong> I aim to hit what we agree on,
                    and I say early if that is not realistic.
                  </li>
                  <li>
                    <strong className="text-gray-900">Collaboration.</strong> Code reviews, pairing,
                    shared ownership.
                  </li>
                  <li>
                    <strong className="text-gray-900">Change.</strong> New stacks, teams, or
                    priorities are normal; I adjust.
                  </li>
                  <li>
                    <strong className="text-gray-900">Learning.</strong> I keep up with tools,
                    patterns, and the product domain.
                  </li>
                </ul>
              </Card>
            </div>
            <div className="lg:w-1/2 sm:w-auto px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Work Experience</p>
                <hr />
                <ul className="list-workexp mt-4 text-left">
                  <li>
                    <p className="text-sm">02/2026 – Present</p>
                    <h4>Senior Web Developer</h4>
                    <a
                      href="https://www.deltatre.com/"
                      alt="Deltatre"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deltatre
                    </a>{' '}
                    (via Toptal)
                    <p className="mt-1">
                      <div>
                        I work in <strong>Next.js</strong> on both <strong>client UI</strong> and{' '}
                        <strong>server-side</strong> code. I contribute to{' '}
                        <strong>architecture</strong> and implement <strong>APIs</strong> in the
                        context of merged companies and how their systems come together.
                      </div>
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">04/2025 – 02/2026</p>
                    <h4>Senior Software Engineer</h4>
                    <a href="https://zoox.com" alt="Zoox" target="_blank" rel="noopener noreferrer">
                      Zoox, Inc.
                    </a>
                    <p className="mt-1">
                      <div>
                        Contract role: apps that help mechanics diagnose and repair{' '}
                        <strong>autonomous vehicles</strong>, built with <strong>React</strong>,{' '}
                        <strong>TypeScript</strong>, <strong>Redux Toolkit</strong>, and in-house UI
                        libraries in a large <strong>monorepo</strong>.
                      </div>
                      <div>
                        <strong>AI-assisted tooling</strong> for velocity;{' '}
                        <strong>TypeScript</strong>/<strong>Node</strong> services,{' '}
                        <strong>Docker</strong> on Linux <strong>VDIs</strong>,{' '}
                        <strong>CI/CD</strong>, and cross-team coordination.
                      </div>
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">03/2022 – 04/2025</p>
                    <h4>Software Engineer</h4>
                    <a
                      href="https://www.apple.com"
                      alt="Apple"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apple Inc.
                    </a>
                    <p className="mt-1">
                      <div>
                        Contract role: built and maintained <strong>UIs</strong> and internal tools
                        for flagship services such as <strong>Apple Music</strong>,{' '}
                        <strong>iTunes</strong>, and <strong>Apple TV+</strong>, including a
                        platform for emerging music trends and a next-generation{' '}
                        <strong>editorial media management</strong> system.
                      </div>
                      <div>
                        Contributed to a <strong>micro-frontend migration</strong>, partnered with{' '}
                        <strong>design</strong> and <strong>product</strong>, mentored contractors,
                        and demoed progress to stakeholders.
                      </div>
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">03/2022 – 02/2026</p>
                    <h4>Senior Software Engineer</h4>
                    <a
                      href="https://htecgroup.com"
                      alt="HTEC Group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HTEC Group
                    </a>
                    <p className="mt-1">
                      <div>
                        I worked for HTEC&apos;s partners and clients: <strong>frontend</strong> and
                        product delivery with <strong>React</strong>, <strong>TypeScript</strong>,{' '}
                        <strong>JavaScript</strong>, <strong>Next.js</strong>,{' '}
                        <strong>Node.js</strong>, <strong>Docker</strong>, <strong>Git</strong>,
                        design tooling, <strong>CI/CD</strong>, and in-house design systems.
                        Internal tools and customer-facing products; onboarding peers and demos to
                        stakeholders.
                      </div>
                      <div>
                        Kept up with <strong>AI</strong> and emerging tech encouraged by the
                        company; collaborated with <strong>Tech Leads</strong> and{' '}
                        <strong>design</strong> to ship features and improve how the team works.
                      </div>
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">05/2021 – 03/2022</p>
                    <h4>Web Developer</h4>
                    <a
                      href="https://www.be-tse.it"
                      alt="BE Group Italy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Be Group - Milan, Italy
                    </a>
                    <p className="mt-1">
                      <div>
                        Illimity contract: building and evolving the digital bank&apos;s online
                        banking frontend with the team. React, TypeScript, Redux Toolkit, REST, and
                        Azure-hosted delivery; Next.js and Gatsby where static or SSR helped
                        performance and UX.
                      </div>
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">05/2020 – 05/2021</p>
                    <h4>Web Developer</h4>
                    <a
                      href="https://it.nttdata.com"
                      alt="NTTData"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NTT Data Italia - Milan, Italy
                    </a>
                    <p className="mt-1">
                      <div>
                        Frontend on large REST-backed products for telco, energy, and public sector
                        clients (e.g. Vodafone, SKY UK, TIM, Sogei, Enel, government ministries)
                        plus internal NTT Data work. React, TypeScript, Redux, Storybook, Jest,
                        Figma, and Azure, with each client&apos;s design system and delivery
                        standards.
                      </div>
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">01/2020 – 03/2022</p>
                    <h4>Web Developer</h4>
                    <a
                      href="https://ipsedocet.it/"
                      alt="Ipse Docet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ipse Docet - Milan, Italy
                    </a>
                    <p className="mt-1">
                      Frontend developer for Ipse Docet clients across short- and long-term
                      engagements at a Milan-based IT consultancy.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">09/2019 – 01/2020</p>
                    <h4>Freelance Web Developer</h4>
                    <p className="mt-1">
                      Freelance builds: marketing sites and React or Angular pieces from prototype
                      to production, light UI/UX support, and WordPress sites with common builders.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <p className="text-sm">06/2019 – 09/2019</p>
                    <h4>Junior Software Developer</h4>
                    <a
                      href="https://one-inside.com"
                      alt="One Inside"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      One Inside - Skopje, North Macedonia
                    </a>
                    <p className="mt-1">
                      Trainee on a Swiss-led team in Skopje: frontend and backend tasks on several
                      apps. Stack exposure included Angular, Node.js, TypeScript, databases, Docker,
                      Git, and Agile delivery.
                    </p>
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
              <h3 className="text-2xl font-semibold leading-tight mb-0">Next 9 Months</h3>
              <p className="mt-1 text-xl font-light leading-relaxed">
                <a
                  href="https://next9months.com"
                  alt="Next 9 Months"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  next9months.com
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Next 9 Months is a product I built for parents: gender reveals, polls, a baby-name
                finder, and other shared moments around pregnancy and early parenthood.
              </p>
            </div>
          }
          secondarySlot={
            <GatsbyImage
              image={data.next9Months.childImageSharp.gatsbyImageData}
              alt="Next 9 Months"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight mb-0">Upperway TMS</h3>
              <p className="mt-1 text-xl font-light leading-relaxed">
                <a
                  href="https://upperway.io/"
                  alt="Upperway TMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  upperway.io
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Upperway is a SaaS TMS for small and mid-size trucking companies in the US, built
                with my team. Angular on the front end, Java and Spring on the back end, SQL, and
                AWS.
              </p>
            </div>
          }
          secondarySlot={
            <GatsbyImage
              image={data.upperway_scr_1.childImageSharp.gatsbyImageData}
              alt="Upperway TMS"
              className="project-img"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight mb-0">UniversalDot</h3>
              <p className="mt-1 text-xl font-light leading-relaxed">
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
                Frontend for a client in crypto: React, wired to a Polkadot-based chain through its
                API.
              </p>
            </div>
          }
          secondarySlot={
            <GatsbyImage
              image={data.universaldot_scr_1.childImageSharp.gatsbyImageData}
              alt="UniversalDot"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight mb-0">
                From design prototype to a deployed website
              </h3>
              <p className="mt-1 text-xl font-light leading-relaxed">
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
                Marketing site from a client&apos;s design: Angular, responsive layout, slideshow,
                tabbed sections, cards and banners, contact form, and cookie UI. Implemented to
                match the mockups closely.
              </p>
            </div>
          }
          secondarySlot={
            <GatsbyImage
              image={data.landingPageProject.childImageSharp.gatsbyImageData}
              alt="Landing page project"
              className="project-img"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight mb-0">SlaveAtanasov.com</h3>
              <p className="mt-1 text-xl font-light leading-relaxed">
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
                This portfolio: Gatsby, static HTML at build time.
              </p>
            </div>
          }
          secondarySlot={
            <GatsbyImage
              image={data.sacom.childImageSharp.gatsbyImageData}
              alt="slaveatanasov.com"
              className="project-img"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-2xl font-semibold leading-tight mb-0">Project 5mins</h3>
              <p className="mt-1 text-xl font-light leading-relaxed">
                <a
                  href="https://github.com/slaveatanasov/darryl-dexter"
                  alt="GitHub Project5mins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p className="mt-px text-xl font-light leading-relaxed">
                <a
                  href="https://darryldexter.netlify.app/"
                  alt="Netlify Project5mins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  darryldexter.netlify.app
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Client site on Gatsby; copy and assets from Contentful, queried at build time with
                GraphQL.
              </p>
            </div>
          }
          secondarySlot={
            <GatsbyImage
              image={data.project5mins.childImageSharp.gatsbyImageData}
              alt="project-5mins"
              className="project-img"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-2xl font-semibold leading-tight mb-0">Other projects</h3>
              <p className="mt-1 text-xl font-light leading-relaxed">
                <a
                  href="https://github.com/slaveatanasov?tab=repositories"
                  alt="GitHub Projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/slaveatanasov
                </a>
              </p>
              <p className="mt-2 text-xl font-light leading-relaxed">
                Smaller experiments and older work live in the repo list there.
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    universaldot_scr_1: file(relativePath: { eq: "universaldot_scr_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    next9Months: file(relativePath: { eq: "n9m.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    landingPageProject: file(relativePath: { eq: "landing-page-project.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    sacom: file(relativePath: { eq: "slaveatanasovcom.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project5mins: file(relativePath: { eq: "project-5mins.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    goodLookingDude: file(relativePath: { eq: "sa_img.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
