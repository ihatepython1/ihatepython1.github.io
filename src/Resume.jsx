import { createElement, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Code2, Database, Workflow, Layers3, Terminal, BarChart3, Pause, Play, Sparkles, Cpu, GitBranch, Braces } from 'lucide-react';
import { usePortfolioMotion } from './usePortfolioMotion.js';
const skills = {
  programming: ["Python", "SQL", "React", "JavaScript", "C++", "C", "HTML", "CSS"],
  analytics: ["Data Cleaning", "Exploratory Data Analysis", "Statistical Analysis", "A/B Testing", "Dashboard Development"],
  visualization: ["Power BI", "Matplotlib", "Excel / Google Sheets"],
  tools: ["Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "Git", "MySQL / PostgreSQL", "API Integration"],
  communication: ["Requirements Gathering", "Stakeholder Reporting", "Training Materials", "Presentations"],
  videoEditing: ["CapCut"]
};
const languageContent = [{
  label: "Thai",
  text: "Native. Write customer-facing copy, chatbot responses, and training materials read by store staff and customers."
}, {
  label: "English",
  text: "Professional reading and writing; conversational speaking."
}, {
  label: "Bilingual technical writing",
  text: "Explain system behaviour in plain Thai for non-technical users."
}, {
  label: "Thai-language engineering",
  text: "Trigram fuzzy matching for Thai product names; curated the Thai answer database for a public chatbot."
}];
const projects = [{
  title: "Retail Price Comparison Bot",
  description: "Built a bot that tracks product prices across Makro PRO, Lotus's, and Big C for a retail shop. It uses Playwright with persistent browser sessions and network interception, trigram-based fuzzy matching for Thai product names, and strict unit-for-unit price comparison.",
  tags: ["Playwright", "Web Scraping", "Fuzzy Matching", "Automation"]
}, {
  title: "LINE Mini App",
  description: "Developed a LINE Mini App with geofencing to detect users in the Bangkok metro area, PDPA consent recording, and a deep-link flow that sends customers to Shopee.",
  tags: ["LINE Mini App", "Geofencing", "PDPA", "Deep Linking"]
}, {
  title: "FLOW B2B Commerce Platform",
  description: "Worked on FLOW, a B2B commerce platform for retail stores, and its staff-facing ordering system. Visited stores to gather operational problems, reported findings to the development team's executives, turned meeting notes into a deduplicated product backlog, and created training materials for the ordering and coin-redemption features.",
  tags: ["Requirements Gathering", "Product Backlog", "Training Materials", "Retail"]
}, {
  title: "Rayong Botanical Garden Web App & Chatbot",
  description: "Team project delivered to a provincial botanical garden and now in real use. The web chatbot answers visitor questions from a curated information database, and geolocation helps visitors orient themselves within the grounds. My role covered the web interface design and the chatbot's information database.",
  tags: ["React", "Chatbot", "Geolocation", "Database"]
}, {
  title: "US Stock Screener & Backtester",
  description: "Built a Python system that screens US stocks for bullish candlestick patterns with confluence filters and backtests them across 200,000+ trades, plus a React dashboard with market regime assessment and multi-signal scoring. Testing showed profit-target exits gave the biggest improvement, implemented as bracket (OCO) orders.",
  tags: ["Python", "React", "Backtesting", "Data Analysis"]
}, {
  title: "Sales Performance Dashboard",
  description: "Built an interactive dashboard to monitor daily sales, top-performing products, revenue trends, and category performance using spreadsheet automation and BI-style visual design.",
  tags: ["Excel", "Dashboard", "Data Visualization", "Reporting"]
}, {
  title: "Customer Behavior Analysis",
  description: "Analyzed customer transaction data to identify purchasing patterns, segment users, and provide recommendations for promotion targeting and retention improvement.",
  tags: ["Python", "Pandas", "EDA", "Segmentation"]
}, {
  title: "Chatbot for Beverage Shop",
  description: "Created a LINE-based chatbot that receives customer orders, sends them to backend services, and stores results in Google Sheets for dashboard reporting and management.",
  tags: ["JavaScript", "LLM", "HTML", "Vite", "CSS"]
}];
const experience = [{
  role: "Product Owner",
  company: "T.C.C Technology Group",
  period: "2024 — Present",
  points: ["Own the product backlog for a retail commerce platform: gather requirements during store visits, turn meeting notes into prioritized, deduplicated backlog items, and report findings to executives.", "Handle customer service directly, answering questions from store staff and customers and feeding recurring issues back into the roadmap.", "Create training materials and presentations that walk staff through new features in plain language.", "Define acceptance criteria and review deliverables against them, documenting why work passes or fails.", "Work with developers through delivery and follow up on-site to confirm features solve the original problem."]
}, {
  role: "Application Developer",
  company: "T.C.C Technology Group",
  period: "2024 — Present",
  points: ["Implement the requirements assigned to me, from web applications to LINE Mini Apps and LINE chatbots used by real customers.", "Developed frontend interfaces in React and connected them to backend services, APIs, and databases.", "Automated manual work with Python, including price tracking across multiple retailers and order handling through Google Sheets.", "Debugged and improved live features based on feedback from staff and customers."]
}];
const education = [{
  school: "Chiang Mai University",
  degree: "B.Sc. in Computer Science",
  period: "Graduated 2026",
  details: "Relevant coursework: Data Science, Machine Learning, Statistics, Database Systems, Data Mining, Artificial Intelligence"
}];
const certifications = ["Honorable Mention Award, Faculty of Science Project"];
const codingHighlights = ["Software Development", "Data Analysis", "Problem Solving", "System Improvement", "Continuous Learning"];
function FacebookIcon() {
  return <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.9h-2.34V22c4.78-.74 8.43-4.9 8.43-9.93Z" />
    </svg>;
}
function InstagramIcon() {
  return <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>;
}
function GithubIcon() {
  return <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>;
}
const aboutParagraphs = ["I am a Product Owner and Application Developer at T.C.C Technology Group, where I have worked since 2024. I own a product backlog, handle frontline customer service, and build the applications that support both.", "I enjoy practical work involving web development, data analysis, dashboards, and systems that help users and organizations make better decisions.", "My strongest language is Python, with React as a close second. I like building useful applications, improving system workflows, and automating work that people otherwise do by hand.", "Beyond coding, I visit stores to understand day-to-day problems, report findings to management, and create training materials that help staff use new systems. I also edit videos with CapCut."];
const socialLinks = [{
  label: 'GitHub',
  href: 'https://github.com/ihatepython1',
  Icon: GithubIcon
}, {
  label: 'Instagram',
  href: 'https://www.instagram.com/npw_uoocl/',
  Icon: InstagramIcon
}, {
  label: 'Facebook',
  href: 'https://www.facebook.com/noppawit.putthanbutr',
  Icon: FacebookIcon
}];
function Socials() {
  return <div className="socials">{socialLinks.map(({
      label,
      href,
      Icon
    }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>{createElement(Icon, {
        size: 19
      })}</a>)}<a className="resume-link" href="/portfolio.pdf" target="_blank" rel="noreferrer">My Resume <ArrowUpRight size={16} /></a></div>;
}
function Tags({
  items
}) {
  return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>;
}
function SectionHeading({
  number,
  label,
  title
}) {
  return <div className="section-heading reveal"><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}<span className="accent">.</span></h2></div>;
}
function Cube({
  variant = 0
}) {
  const faces = variant === 0 ? [[Code2, 'CODE'], [Database, 'DATA'], [Workflow, 'FLOW'], [Terminal, 'PYTHON'], [Layers3, 'REACT'], [Braces, 'API']] : [[Workflow, 'PRODUCT'], [Layers3, 'SYSTEM'], [Sparkles, 'IDEAS'], [Code2, 'BUILD'], [Cpu, 'SOLVE'], [GitBranch, 'TEAM']];
  return <div className={`cube-scene cube-variant-${variant}`} aria-hidden="true"><div className="cube-float"><div className="cube">{faces.map(([Icon, label], i) => <div className={`cube-face face-${i}`} key={label}><span className="face-id">0{i + 1} / POON</span>{createElement(Icon, {
            strokeWidth: 1.4
          })}<strong>{label}</strong><span className="face-corner">+</span></div>)}</div></div><div className="cube-shadow" /></div>;
}
function StackMarquee() {
  const rows = [skills.programming, [...skills.tools, ...skills.visualization, ...skills.videoEditing]];
  const symbols = [Code2, Database, Braces, Terminal, Cpu, GitBranch, BarChart3, Layers3];
  return <div className="stack-marquees" aria-label="Tech stack and ecosystem">{rows.map((row, r) => <div className={`marquee marquee-${r}`} key={r}><div className="marquee-track">{[0, 1].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{row.map((item, i) => {
            const Icon = symbols[i % symbols.length];
            return <span className="stack-item" key={item} style={{
              '--stack-color': ['#f5ca5c', '#79b9ff', '#a38bfa', '#72d7bf', '#ee9572'][i % 5]
            }}>{createElement(Icon, {
                size: 30,
                strokeWidth: 1.6
              })}{item}</span>;
          })}</div>)}</div></div>)}</div>;
}
function Experience() {
  const rail = useRef(null);
  const [active, setActive] = useState(0);
  const select = index => {
    const element = rail.current;
    const child = element?.children[index];
    if (child) element.scrollTo({
      left: child.offsetLeft,
      behavior: document.documentElement.dataset.motion === 'off' ? 'instant' : 'smooth'
    });
  };
  return <section id="experience" className="section-wrap experience-section">
    <div className="heading-with-controls"><SectionHeading number="04" label="What I’ve Worked On" title="Experience" /><div className="timeline-controls"><button onClick={() => select(active - 1)} disabled={active === 0} aria-label="Previous experience"><ArrowLeft /></button><span>0{active + 1} / 02</span><button onClick={() => select(active + 1)} disabled={active === experience.length - 1} aria-label="Next experience"><ArrowRight /></button></div></div>
    <div ref={rail} className="timeline" tabIndex={0} aria-label="Work experience timeline. Scroll horizontally to explore." onScroll={() => {
      const el = rail.current;
      const distances = [...el.children].map(child => Math.abs(child.offsetLeft - el.scrollLeft));
      setActive(distances.indexOf(Math.min(...distances)));
    }}>
      {experience.map((item, i) => <article className="timeline-item" key={item.role}><div className="timeline-top"><span className="eyebrow">{item.period}</span><span className="timeline-index">0{i + 1}</span></div><div className="timeline-line"><span /></div><div className="experience-card"><p className="eyebrow">{item.company}</p><h3>{item.role}</h3><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul><div className="role-art" aria-hidden="true">{i === 0 ? <Workflow /> : <Code2 />}<span>{i === 0 ? 'PRODUCT / PEOPLE / PROCESS' : 'CODE / AUTOMATE / IMPROVE'}</span></div></div></article>)}
    </div>
  </section>;
}
export default function Resume() {
  const [paused, setPaused] = useState(false);
  const root = useRef(null);
  usePortfolioMotion(root, paused);
  useEffect(() => {
    document.title = 'Noppavit Putthanbutr — Product Owner & Application Developer';
  }, []);
  return <div ref={root} className={`portfolio ${paused ? 'motion-paused' : ''}`}>
    <a href="#portfolio" className="skip-link">Skip to portfolio</a>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Poon home">poon<span>✳</span></a><nav aria-label="Main navigation"><a href="#portfolio">About</a><a href="#projects">Work</a><a href="#experience">Experience</a><a href="#contact">Contact <ArrowUpRight size={13} /></a></nav><button className="motion-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? 'Enable animations' : 'Pause animations'} aria-pressed={paused}>{paused ? <Play size={15} /> : <Pause size={15} />}</button></header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-top"><p className="eyebrow">Welcome to my portfolio</p><span className="location"><span className="status-dot" /> Lampang, Thailand</span></div>
        <div className="hero-intro"><img src="/profile.jpg" alt="Poon — Noppavit Putthanbutr" width="64" height="64" /><h1>Hello, I’m Poon <span>— Noppavit Putthanbutr</span></h1></div>
        <div className="hero-display" aria-label="Product Owner / Application Developer"><div className="hero-line"><span>PRODUCT</span><span className="hero-star" aria-hidden="true">✳</span></div><div className="hero-line second"><span className="outline-word">OWNER</span><span className="hero-divider" aria-hidden="true" /><span className="hero-mini">& APPLICATION<br />DEVELOPER <ArrowUpRight /></span></div></div>
        <div className="hero-bottom"><p>Product Owner and Application Developer at T.C.C Technology Group, building practical systems for real users — from product backlogs and customer service to web apps, LINE Mini Apps, and data automation.</p><a className="round-cta" href="#portfolio"><span>View Portfolio</span><span className="circle"><ArrowDown /></span></a></div>
        <div className="hero-footer"><span className="eyebrow">Let’s Connect</span><Socials /><span className="hero-scroll-label">SCROLL TO EXPLORE ↓</span></div>
      </section>
      <section id="portfolio" className="section-wrap about-section">
        <SectionHeading number="01" label="Introduction" title="About" />
        <div className="about-grid"><div className="about-statement reveal"><p className="eyebrow">Resume / Portfolio</p><h3>Product Owner <span>/</span><br />Application Developer</h3><p>I work across both sides of product delivery: owning a backlog and handling customer service, and building the web apps and automation behind it. I care about systems that solve the problem people actually have.</p><div className="profile-signature"><img src="/profile.jpg" alt="" width="52" height="52" loading="lazy" /><div>Noppavit Putthanbutr<span>B.Sc. Computer Science, Chiang Mai University</span></div></div></div><div className="about-copy reveal">{aboutParagraphs.map(text => <p key={text}>{text}</p>)}</div></div>
        <div className="coding-focus reveal"><p className="eyebrow">Coding Focus</p><Tags items={codingHighlights} /></div>
        <div className="stack-heading"><h3 className="eyebrow">Tech Stack & Ecosystem</h3><span aria-hidden="true">↔</span></div><StackMarquee />
      </section>
      <section className="section-wrap focus-section" aria-label="Skills and focus">
        <div className="feature-row"><Cube /><div className="feature-copy reveal"><p className="eyebrow">Feature — 01 <span className="short-rule" /></p><h2>SOFTWARE<br />& DATA<span className="accent">.</span></h2><p>{aboutParagraphs[2]}</p><Tags items={[...skills.programming, ...skills.analytics]} /></div></div>
        <div className="feature-row feature-reverse"><Cube variant={1} /><div className="feature-copy reveal"><p className="eyebrow">Feature — 02 <span className="short-rule" /></p><h2>PRODUCT<br />& PEOPLE<span className="accent">.</span></h2><p>{aboutParagraphs[3]}</p><Tags items={skills.communication} /></div></div>
      </section>
      <section id="projects" className="section-wrap projects-section"><SectionHeading number="03" label="Selected Work" title="Projects" /><div className="projects-grid">{projects.map((project, i) => <article className="project-card reveal" key={project.title}><div className="project-top"><span className="eyebrow">PROJECT / {String(i + 1).padStart(2, '0')}</span><span className="project-glyph" aria-hidden="true">{['↗', '⌘', '◎', '❋', '⌁', '▥', '◈', '⌬'][i]}</span></div><h3>{project.title}</h3><p>{project.description}</p><Tags items={project.tags} /></article>)}</div></section>
      <Experience />
      <section className="section-wrap education-section"><SectionHeading number="05" label="Academic Background" title="Education" />{education.map(item => <article className="education-card reveal" key={item.school}><span className="eyebrow">{item.period}</span><div><h3>{item.degree}</h3><p className="school-name">{item.school}</p><p>{item.details}</p></div><span className="education-mark" aria-hidden="true">↗</span></article>)}</section>
      <section id="skills" className="section-wrap skills-section"><SectionHeading number="06" label="Tools I Use" title="Skills & Awards" /><div className="skills-grid">{Object.entries({
            Programming: skills.programming,
            Analytics: skills.analytics,
            Visualization: skills.visualization,
            'Tools & Libraries': skills.tools,
            Communication: skills.communication,
            'Video Editing': skills.videoEditing
          }).map(([label, items]) => <article className="skill-block reveal" key={label}><h3>{label}</h3><Tags items={items} /></article>)}</div><div className="language-awards"><article className="language-block reveal"><h3>Language & Content</h3>{languageContent.map(item => <p key={item.label}><strong>{item.label}:</strong> {item.text}</p>)}</article><article className="award-block reveal"><Sparkles size={36} strokeWidth={1} /><p className="eyebrow">Awards</p>{certifications.map(item => <h3 key={item}>{item}</h3>)}</article></div></section>
      <footer id="contact" className="section-wrap contact-section"><p className="eyebrow">Let’s Connect</p><a className="contact-heading" href="mailto:noppawitpoon@gmail.com">LET’S TALK<span><ArrowUpRight /></span></a><div className="contact-details"><a href="mailto:noppawitpoon@gmail.com">noppawitpoon@gmail.com</a><Socials /></div><div className="footer-bottom"><span>Noppavit Putthanbutr</span><span>Lampang, Thailand</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  </div>;
}
