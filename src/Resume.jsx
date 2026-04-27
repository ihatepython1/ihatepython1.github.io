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
};

const projects = [
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
    role: "Data Analyst / Data Science Project Developer",
    company: "Academic & Personal Projects",
    period: "2024 — Present",
    points: [
      "Collected, cleaned, and transformed structured data for analysis and reporting.",
      "Designed dashboards and summary reports to support decision-making and performance monitoring.",
      "Applied statistical and machine learning techniques to solve classification and prediction problems.",
      "Presented technical findings in clear business language with visual storytelling.",
      "Worked with coding tools such as Python, SQL, and JavaScript to build practical solutions for data-related tasks.",
      "Improved project quality through debugging, testing, and refining data processing workflows.",
    ],
  },
  {
    role: "System & Analytics Project Contributor",
    company: "Software / Data-driven Projects",
    period: "2023 — Present",
    points: [
      "Worked on systems that integrate APIs, cloud-based data storage, and automated workflows.",
      "Translated real-world requirements into measurable metrics, reports, and actionable insights.",
      "Supported data pipelines and analysis processes for operational and business reporting.",
      "Contributed to frontend and backend development tasks for small-scale web and system projects.",
      "Used programming knowledge to support feature development, data handling, and system improvement.",
    ],
  },
  {
    role: "Developer / Coding Project Builder",
    company: "University & Self-initiated Projects",
    period: "2023 — Present",
    points: [
      "Developed coding projects involving web interfaces, data processing, and user-focused system design.",
      "Practiced writing clean and understandable code using JavaScript, React, Python, C, and C++.",
      "Built project components such as forms, dashboards, automation logic, and data connections.",
      "Strengthened problem-solving skills by implementing features, fixing bugs, and improving usability.",
    ],
  },
];

const education = [
  {
    school: "Chiang Mai University",
    degree: "B.Sc. in Computer Science",
    period: "Expected Graduation: 2026",
    details:
      "Relevant coursework: Data Science, Machine Learning, Statistics, Database Systems, Data Mining, Artificial Intelligence",
  },
];

const certifications = [
  "Data Analysis with Python",
  "SQL for Data Analytics",
  "Data Visualization Fundamentals",
  "Machine Learning Foundations",
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
  const el = document.getElementById("portfolio");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300/70">
        {subtitle}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-medium text-violet-100">
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
          ? "border-slate-700 bg-slate-900/60 text-slate-300 hover:-translate-y-0.5 hover:border-violet-300/40 hover:text-violet-200"
          : "border-white/15 bg-white/10 text-white/90 backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/15"
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
          ? "border-slate-700 bg-slate-900/60 text-slate-300 hover:-translate-y-0.5 hover:border-violet-300/40 hover:text-violet-200"
          : "border-white/15 bg-white/10 text-white/90 backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/15"
      }`}
    >
      My Portfolio
    </a>
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

function HeroButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-w-[172px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/12 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/18"
    >
      {children}
    </button>
  );
}

function InfoCard({ children }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6 transition duration-300 hover:border-slate-700 hover:bg-slate-900/70">
      {children}
    </article>
  );
}

export default function Resume() {
  return (
    <div className="bg-slate-950 text-slate-300">
      <section
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(86, 46, 186, 0.88), rgba(60, 36, 136, 0.88)), url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center">
          <div className="mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-white/25 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:h-40 sm:w-40">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-violet-100/75">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl md:text-7xl">
            Hello, I’m Poon
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100/90 sm:text-lg">
            Recent graduate passionate about developer and data analyst roles,
            with a strong interest in building practical systems, analyzing data,
            and continuously improving through real-world projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-100/75">
              Let’s Connect
            </span>

            <div className="h-px w-10 bg-white/25" />

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
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300/75">
                  Resume / Portfolio
                </p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Noppawit Putthanbut
                </h2>
                <p className="mt-4 text-lg font-medium text-slate-200">
                  Developer / Data Analyst
                </p>
                <p className="mt-6 max-w-md leading-8 text-slate-400">
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

              <div className="space-y-2 text-sm text-slate-500">
                <p>Lampang, Thailand</p>
                <p>B.Sc. Computer Science, Chiang Mai University</p>
                <p>noppawitpoon@gmail.com</p>
              </div>
            </aside>

            <section className="space-y-12 lg:py-10">
              <div>
                <SectionTitle title="About" subtitle="Introduction" />
                <div className="space-y-4 leading-8 text-slate-300">
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
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/45 p-5">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
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
                          <h3 className="text-lg font-semibold text-white">
                            {item.role}
                          </h3>
                          <p className="text-sm text-violet-300">{item.company}</p>
                        </div>
                        <p className="text-sm text-slate-500">{item.period}</p>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
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
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
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
                        <h3 className="text-lg font-semibold text-white">
                          {item.degree}
                        </h3>
                        <p className="text-sm text-violet-300">{item.school}</p>
                      </div>
                      <p className="text-sm text-slate-500">{item.period}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.details}
                    </p>
                  </InfoCard>
                ))}
              </div>

              <div>
                <SectionTitle title="Skills & Certifications" subtitle="Tools I Use" />

                <div className="space-y-4">
                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                      Programming
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                      Analytics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.analytics.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                      Visualization
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.visualization.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                      Tools & Libraries
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </InfoCard>

                  <InfoCard>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                      Certifications / Awards
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