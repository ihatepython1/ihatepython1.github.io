const skills = {
  programming: ["Python", "SQL", "React", "JavaScript", "C++", "C", "HTML", "CSS"],
  analytics: [
    "Data Cleaning",
    "Exploratory Data Analysis",
    "Statistical Analysis",
    "A/B Testing",
    "Dashboard Development",
  ],
  visualization: ["Power BI", "Matplotlib", "Excel / Google Sheets"],
  tools: [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Jupyter Notebook",
    "Git",
    "MySQL / PostgreSQL",
    "API Integration",
  ],
  communication: [
    "Thai (Native)",
    "English Reading & Writing (Good)",
    "English Speaking (Conversational)",
    "Requirements Gathering",
    "Stakeholder Reporting",
    "Training Materials",
    "Presentations",
  ],
  videoEditing: ["CapCut"],
};

const projects = [
  {
    title: "Retail Price Comparison Bot",
    description:
      "Built a bot that tracks product prices across Makro PRO, Lotus's, and Big C for a retail shop. It uses Playwright with persistent browser sessions and network interception, trigram-based fuzzy matching for Thai product names, and strict unit-for-unit price comparison.",
    tags: ["Playwright", "Web Scraping", "Fuzzy Matching", "Automation"],
  },
  {
    title: "LINE Mini App",
    description:
      "Developed a LINE Mini App with geofencing to detect users in the Bangkok metro area, PDPA consent recording, and a deep-link flow that sends customers to Shopee.",
    tags: ["LINE Mini App", "Geofencing", "PDPA", "Deep Linking"],
  },
  {
    title: "FLOW B2B Commerce Platform",
    description:
      "Worked on FLOW, a B2B commerce platform for retail stores, and its staff-facing ordering system. Visited stores to gather operational problems, reported findings to the development team's executives, turned meeting notes into a deduplicated product backlog, and created training materials for the ordering and coin-redemption features.",
    tags: ["Requirements Gathering", "Product Backlog", "Training Materials", "Retail"],
  },
  {
    title: "Rayong Botanical Garden Web App & Chatbot",
    description:
      "Team project delivered to a provincial botanical garden and now in real use. The web chatbot answers visitor questions from a curated information database, and geolocation helps visitors orient themselves within the grounds. My role covered the web interface design and the chatbot's information database.",
    tags: ["React", "Chatbot", "Geolocation", "Database"],
  },
  {
    title: "US Stock Screener & Backtester",
    description:
      "Built a Python system that screens US stocks for bullish candlestick patterns with confluence filters and backtests them across 200,000+ trades, plus a React dashboard with market regime assessment and multi-signal scoring. Testing showed profit-target exits gave the biggest improvement, implemented as bracket (OCO) orders.",
    tags: ["Python", "React", "Backtesting", "Data Analysis"],
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Built an interactive dashboard to monitor daily sales, top-performing products, revenue trends, and category performance using spreadsheet automation and BI-style visual design.",
    tags: ["Excel", "Dashboard", "Data Visualization", "Reporting"],
  },
  {
    title: "Customer Behavior Analysis",
    description:
      "Analyzed customer transaction data to identify purchasing patterns, segment users, and provide recommendations for promotion targeting and retention improvement.",
    tags: ["Python", "Pandas", "EDA", "Segmentation"],
  },
  {
    title: "Chatbot for Beverage Shop",
    description:
      "Created a LINE-based chatbot that receives customer orders, sends them to backend services, and stores results in Google Sheets for dashboard reporting and management.",
    tags: ["JavaScript", "LLM", "HTML", "Vite", "CSS"],
  },
];

const experience = [
  {
    role: "Product Owner",
    company: "T.C.C Technology Group",
    period: "2024 — Present",
    points: [
      "Own the product backlog for a retail commerce platform: gather requirements during store visits, turn meeting notes into prioritized, deduplicated backlog items, and report findings to executives.",
      "Handle customer service directly, answering questions from store staff and customers and feeding recurring issues back into the roadmap.",
      "Create training materials and presentations that walk staff through new features in plain language.",
      "Define acceptance criteria and work with developers through delivery, then follow up on-site to confirm features solve the original problem.",
    ],
  },
  {
    role: "Application Developer",
    company: "T.C.C Technology Group",
    period: "2024 — Present",
    points: [
      "Implement the requirements assigned to me, from web applications to LINE Mini Apps and LINE chatbots used by real customers.",
      "Developed frontend interfaces in React and connected them to backend services, APIs, and databases.",
      "Automated manual work with Python, including price tracking across multiple retailers and order handling through Google Sheets.",
      "Debugged and improved live features based on feedback from staff and customers.",
    ],
  },
];

const education = [
  {
    school: "Chiang Mai University",
    degree: "B.Sc. in Computer Science",
    period: "Graduated 2026",
    details:
      "Relevant coursework: Data Science, Machine Learning, Statistics, Database Systems, Data Mining, Artificial Intelligence",
  },
];

const certifications = [
  "Honorable Mention Award, Faculty of Science Project",
];

const codingHighlights = [
  "Software Development",
  "Data Analysis",
  "Problem Solving",
  "System Improvement",
  "Continuous Learning",
];

function scrollToPortfolio() {
  const section = document.getElementById("portfolio");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {subtitle}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-accent/15 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
      {children}
    </span>
  );
}

function SocialLink({ href, label, children, dark = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
        dark
          ? "border-line bg-transparent text-body hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          : "border-line bg-surface text-body shadow-sm hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
      }`}
    >
      {children}
    </a>
  );
}

function PdfLink({ href, dark = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="View PDF Portfolio"
      className={`inline-flex h-11 items-center justify-center rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 ${
        dark
          ? "border-line bg-transparent text-body hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          : "border-line bg-surface text-body shadow-sm hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
      }`}
    >
      My Resume
    </a>
  );
}

function HeroButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-w-[172px] items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
    >
      {children}
    </button>
  );
}

function InfoCard({ children }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:border-accent/30">
      {children}
    </article>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.9h-2.34V22c4.78-.74 8.43-4.9 8.43-9.93Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 16.5a1 1 0 0 1-.7-.29l-6-6 1.4-1.42L12 13.97l5.3-5.18 1.4 1.42-6 6a1 1 0 0 1-.7.29Z" />
    </svg>
  );
}

export default function Resume() {
  return (
    <div className="bg-paper text-body">
      <section
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, #E9E4F8 0%, rgba(233, 228, 248, 0) 60%), linear-gradient(180deg, #F1EEFA 0%, #F4F3F8 100%)",
        }}
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center">
          <div className="mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-accent/15 sm:h-40 sm:w-40">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-accent">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-light tracking-tight text-ink sm:text-6xl md:text-7xl">
            Hello, I’m Poon
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-body sm:text-lg">
            Recent graduate passionate about developer and data analyst roles,
            with a strong interest in building practical systems, analyzing data,
            and continuously improving through real-world projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Let’s Connect
            </span>

            <div className="h-px w-10 bg-line" />

            <div className="flex flex-wrap items-center justify-center gap-3">
              <SocialLink
                href="https://www.facebook.com/noppawit.putthanbutr"
                label="Facebook"
              >
                <FacebookIcon />
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/npw_uoocl/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>

              <SocialLink
                href="https://github.com/ihatepython1"
                label="GitHub"
              >
                <GithubIcon />
              </SocialLink>

              <PdfLink href="/portfolio.pdf" />
            </div>
          </div>

          <div className="mt-12">
            <HeroButton onClick={scrollToPortfolio}>
              <span>View Portfolio</span>
              <ArrowDownIcon />
            </HeroButton>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="space-y-8 lg:sticky lg:top-0 lg:h-screen lg:py-10">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Resume / Portfolio
                </p>
                <h2 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  Noppavit Putthanbutr
                </h2>
                <p className="mt-4 text-lg font-medium text-ink">
                  Developer / Data Analyst
                </p>
                <p className="mt-6 max-w-md leading-8 text-body">
                  I am a recent graduate with a strong interest in developer and
                  data analyst roles. I am eager to apply my knowledge, gain
                  practical experience, and continuously develop my skills to
                  grow in my career.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <SocialLink
                  href="https://www.facebook.com/noppawit.putthanbutr"
                  label="Facebook"
                  dark
                >
                  <FacebookIcon />
                </SocialLink>
                <SocialLink
                  href="https://www.instagram.com/npw_uoocl/"
                  label="Instagram"
                  dark
                >
                  <InstagramIcon />
                </SocialLink>
                <SocialLink
                  href="https://github.com/ihatepython1"
                  label="GitHub"
                  dark
                >
                  <GithubIcon />
                </SocialLink>
                <PdfLink href="/portfolio.pdf" dark />
              </div>

              <div className="space-y-2 text-sm text-muted">
                <p>Lampang, Thailand</p>
                <p>B.Sc. Computer Science, Chiang Mai University</p>
                <p>noppawitpoon@gmail.com</p>
              </div>
            </aside>

            <section className="space-y-12 lg:py-10">
              <div>
                <SectionTitle title="About" subtitle="Introduction" />
                <div className="space-y-4 leading-8 text-body">
                  <p>
                    I am a recent graduate who is eager to start a career in
                    developer and data analyst roles. I am passionate about
                    learning, improving my skills, and continuously developing
                    myself through real-world experience and new challenges.
                  </p>
                  <p>
                    I enjoy working on practical projects involving web
                    development, data analysis, dashboards, and systems that
                    help users and organizations make better decisions.
                  </p>
                  <p>
                    I also have a strong interest in coding and software
                    development, especially in building useful applications,
                    improving system workflows, and solving problems through
                    programming.
                  </p>
                  <p>
                    Beyond coding, I visit stores to understand day-to-day
                    problems, report findings to management, and create
                    training materials that help staff use new systems. I also
                    edit videos with CapCut.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                    Coding Focus
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {codingHighlights.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <SectionTitle title="Experience" subtitle="What I’ve Worked On" />
                <div className="space-y-4">
                  {experience.map((item) => (
                    <InfoCard key={`${item.role}-${item.company}`}>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-ink">
                            {item.role}
                          </h3>
                          <p className="text-sm text-accent">{item.company}</p>
                        </div>
                        <p className="text-sm text-muted">{item.period}</p>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm leading-7 text-body">
                        {item.points.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    </InfoCard>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Projects" subtitle="Selected Work" />
                <div className="space-y-4">
                  {projects.map((project) => (
                    <InfoCard key={project.title}>
                      <h3 className="text-lg font-semibold text-ink">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-body">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </InfoCard>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Education" subtitle="Academic Background" />
                {education.map((item) => (
                  <InfoCard key={item.school}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-ink">
                          {item.degree}
                        </h3>
                        <p className="text-sm text-accent">{item.school}</p>
                      </div>
                      <p className="text-sm text-muted">{item.period}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-body">
                      {item.details}
                    </p>
                  </InfoCard>
                ))}
              </div>

              <div>
                <SectionTitle title="Skills & Awards" subtitle="Tools I Use" />

                <div className="space-y-4">
                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      Programming
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      Analytics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.analytics.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      Visualization
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.visualization.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      Tools & Libraries
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      Communication
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.communication.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      Video Editing
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.videoEditing.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      Awards
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {certifications.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}