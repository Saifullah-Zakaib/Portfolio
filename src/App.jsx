import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { ArrowUpRight, Github, Globe, Radio } from "lucide-react";
import { portfolio } from "./data/portfolio.js";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const t = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Karachi",
          hour12: false,
        }) + " PKT",
      );
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="grain-overlay" aria-hidden />
      <Toaster theme="dark" position="top-right" />
      <Nav />
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <Hero time={time} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

/* -------------------- NAV -------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-background/85 backdrop-blur-xl border-b border-hairline" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between">
        <a href="#home" className="font-display italic text-2xl text-foreground">Saif</a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[10px] uppercase tracking-[0.3em] border border-hairline px-3 py-2"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-3 border border-hairline bg-background/95 backdrop-blur-xl">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
              className="block px-5 py-4 border-b border-hairline last:border-b-0 text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero({ time }) {
  const tickerItems = [
    "React","TypeScript","Next.js","Node.js","Flutter","MongoDB",
    "Tailwind","Django","Firebase","Unity","Available · 2026",
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-36 pb-20">
      <span className="animate-float-up inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
        Hello, I am
      </span>

      <h1 className="animate-float-up font-display leading-[0.9] tracking-tight mb-8 text-6xl md:text-8xl lg:text-[10rem]" style={{ animationDelay: "0.1s" }}>
        <span className="italic font-light">Saif</span>{" "}
        <span className="font-semibold">Ullah.</span>
      </h1>

      <p className="animate-float-up max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10" style={{ animationDelay: "0.2s" }}>
        {portfolio.headline}. {portfolio.intro}
      </p>

      <div className="animate-float-up flex flex-wrap gap-3 mb-16" style={{ animationDelay: "0.3s" }}>
        <a href="#projects" className="group relative overflow-hidden border border-foreground px-6 py-3.5">
          <span className="relative z-10 text-[11px] uppercase tracking-[0.25em] font-medium group-hover:text-background transition-colors duration-300">
            View My Work
          </span>
          <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
        <a href={portfolio.resumeUrl} download target="_blank" rel="noopener"
          className="px-6 py-3.5 text-[11px] uppercase tracking-[0.25em] border border-hairline hover:border-foreground/50 transition-colors font-medium">
          Download Resume
        </a>
      </div>

      <div className="animate-float-up relative grid grid-cols-1 md:grid-cols-3 border-t border-b border-hairline mb-12" style={{ animationDelay: "0.4s" }}>
        <span className="hidden md:block absolute left-1/3 -top-1.5 w-3 h-3 border border-foreground/40 bg-background -translate-x-1/2" />
        <span className="hidden md:block absolute left-2/3 -top-1.5 w-3 h-3 border border-foreground/40 bg-background -translate-x-1/2" />
        <span className="hidden md:block absolute left-1/3 -bottom-1.5 w-3 h-3 border border-foreground/40 bg-background -translate-x-1/2" />
        <span className="hidden md:block absolute left-2/3 -bottom-1.5 w-3 h-3 border border-foreground/40 bg-background -translate-x-1/2" />

        <div className="p-6 md:p-7 md:border-r border-hairline">
          <div className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">Specialization</div>
          <div className="text-base font-display font-light text-foreground italic leading-snug">Full-stack web<br />& mobile systems</div>
        </div>
        <div className="p-6 md:p-7 md:border-r border-hairline border-t md:border-t-0">
          <div className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">Location</div>
          <div className="text-base font-display font-light text-foreground italic leading-snug">{portfolio.location}<br />Working globally</div>
        </div>
        <div className="p-6 md:p-7 border-t md:border-t-0">
          <div className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">Local Time</div>
          <div className="text-base font-mono tracking-tight text-foreground leading-snug">{time || "—"}</div>
        </div>
      </div>

      <div className="animate-float-up overflow-hidden border-y border-hairline py-4 -mx-6 lg:-mx-8" style={{ animationDelay: "0.5s" }}>
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-12">
              {t}<span className="text-foreground/30">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <a href={portfolio.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        <a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        <a href={portfolio.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
        <span className="ml-auto flex items-center gap-2 animate-scroll-hint">Scroll <span>↓</span></span>
      </div>
    </section>
  );
}

function SectionLabel({ index, label }) {
  return (
    <div className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-12 flex items-center gap-4">
      <span className="text-foreground/40">{index}</span>
      <span className="h-px w-12 bg-hairline" />
      <span>{label}</span>
    </div>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-b border-hairline px-6 md:px-12">
      <SectionLabel index="01" label="About" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-5xl md:text-6xl font-display italic font-light leading-[0.95]">The<br />Intent.</h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          <p className="text-2xl md:text-3xl font-display font-light leading-[1.3] text-foreground">
            A passionate Software Engineering student driven by <span className="italic">curiosity</span> and{" "}
            <span className="italic">creativity</span> — building scalable, modern applications across web and mobile.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base max-w-2xl">{portfolio.about.p1}</p>
          <p className="text-muted-foreground leading-relaxed text-base max-w-2xl">{portfolio.about.p2}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-hairline border border-hairline mt-14">
            {portfolio.about.highlights.map((h, i) => (
              <div key={h.title} className="p-7 bg-background hover:bg-white/[0.02] transition-colors">
                <div className="text-3xl font-display italic font-light text-foreground mb-3">0{i + 1}</div>
                <div className="text-sm text-foreground font-medium mb-1.5">{h.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">Core Technologies</div>
            <div className="flex flex-wrap gap-2">
              {portfolio.about.core.map((t) => (
                <span key={t} className="px-3 py-1.5 border border-hairline text-[11px] text-foreground/80">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SKILLS -------------------- */
function Skills() {
  const [selected, setSelected] = useState(0);
  const levelLabel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    return "Familiar";
  };

  const domains = portfolio.skills.length;
  const tools = portfolio.skills.reduce((acc, g) => acc + g.items.length, 0);
  const year = new Date().getFullYear();
  const active = portfolio.skills[selected];
  const average = Math.round(active.items.reduce((acc, s) => acc + s.level, 0) / active.items.length);
  const signature = active.items.reduce((prev, cur) => (cur.level > prev.level ? cur : prev));

  return (
    <section id="skills" className="py-28 md:py-36 px-6 md:px-12 border-b border-hairline">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-16 md:mb-20">
          <h2 className="font-display italic font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">A toolkit,<br />sharpened.</h2>
          <div className="flex gap-8 md:gap-12 md:justify-end">
            {[
              { v: String(domains).padStart(2, "0"), k: "Domains" },
              { v: tools, k: "Tools" },
              { v: year, k: "Year" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display italic text-4xl md:text-5xl leading-none mb-2">{s.v}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-hairline bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-hairline">
              {portfolio.skills.map((group, i) => {
                const avg = Math.round(group.items.reduce((acc, s) => acc + s.level, 0) / group.items.length);
                const isActive = selected === i;
                return (
                  <button
                    key={group.title}
                    onClick={() => setSelected(i)}
                    className={`w-full text-left px-6 md:px-8 py-7 md:py-8 border-b border-hairline last:border-b-0 transition-colors duration-300 ${
                      isActive ? "bg-foreground text-background" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[10px] uppercase tracking-[0.3em] ${isActive ? "text-background/60" : "text-muted-foreground"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`transition-transform duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                    <h3 className={`font-display italic text-2xl md:text-[28px] leading-tight mb-4 ${isActive ? "font-normal" : "font-light"}`}>
                      {group.title}
                    </h3>
                    <div className={`text-[10px] uppercase tracking-[0.25em] ${isActive ? "text-background/60" : "text-muted-foreground"}`}>
                      {group.items.length} tools · Avg {avg}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-hairline p-8 md:p-10 flex flex-col justify-between">
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-hairline" />
                    <circle
                      cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1"
                      strokeDasharray={289}
                      strokeDashoffset={289 - (289 * average) / 100}
                      strokeLinecap="round"
                      className="text-foreground transition-all duration-700"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display italic text-4xl md:text-5xl leading-none">{average}</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mt-2">Mastery</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-hairline">
                <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Signature</div>
                <div className="font-display italic text-2xl md:text-3xl leading-tight mb-3">{signature.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {levelLabel(signature.level)} · {signature.level}/100
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 md:p-10 relative overflow-hidden">
              <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-10">Inventory — {active.title}</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display italic text-[10rem] md:text-[12rem] leading-none text-foreground/[0.03] select-none pointer-events-none">
                {String(selected + 1).padStart(2, "0")}
              </div>
              <ul className="space-y-0 relative z-10">
                {active.items.map((s, i) => (
                  <li key={s.name} className="group flex items-center justify-between py-5 border-b border-hairline first:pt-0">
                    <div className="flex items-baseline gap-5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display italic text-xl md:text-2xl font-light">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{levelLabel(s.level)}</span>
                      <span className="font-mono text-sm text-foreground/80">{s.level}/100</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground shrink-0">Toolkit</span>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {portfolio.tools.map((t) => (
                <span key={t} className="text-sm text-foreground/65 hover:text-foreground transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */
function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-b border-hairline px-6 md:px-12">
      <SectionLabel index="03" label="Experience" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <h2 className="text-5xl md:text-6xl font-display italic font-light leading-[0.95]">The<br />Trajectory.</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl font-display font-light leading-[1.4] text-muted-foreground">
            Roles where I've shipped real software — from a national mental health platform to university leadership and government collaboration.
          </p>
        </div>
      </div>

      <div className="border-t border-hairline">
        {portfolio.experience.map((e, i) => (
          <article key={e.role + e.company} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-hairline group hover:bg-white/[0.015] transition-colors px-2 -mx-2">
            <div className="md:col-span-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground pt-1">0{i + 1}</div>
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{e.period}</div>
              <div className="text-foreground text-sm">{e.company}</div>
              <div className="text-xs text-muted-foreground mt-1">{e.location}</div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-2xl md:text-3xl font-display font-light text-foreground mb-5 group-hover:italic transition-all">{e.role}</h3>
              <ul className="space-y-3">
                {e.bullets.map((b, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground leading-relaxed pl-5 relative before:absolute before:left-0 before:top-2.5 before:h-px before:w-3 before:bg-foreground/40">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */
function Projects() {
  const allProjects = [...portfolio.featuredProjects, ...portfolio.otherProjects];
  const liveCount = allProjects.filter((p) => p.live).length;
  const sourceCount = allProjects.filter((p) => p.github).length;

  return (
    <section id="projects" className="py-28 md:py-36 border-b border-hairline px-6 md:px-12 relative">
      <SectionLabel index="04" label="Selected Works" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
        <div className="md:col-span-7">
          <h2 className="text-5xl md:text-7xl font-display italic font-light leading-[0.9] tracking-tight">Selected<br />Works.</h2>
          <p className="mt-6 text-muted-foreground max-w-md text-sm md:text-base leading-relaxed font-light">
            A curated archive of products, platforms and experiments shipped between university coursework, internships and freelance engagements.
          </p>
        </div>
        <div className="md:col-span-5 grid grid-cols-3 gap-3">
          <Stat k="Years" v="2022–26" />
          <Stat k="Shipped" v="18+" />
          <Stat k="Live" v="10+" pulse={true} />
        </div>
      </div>

      <div className="space-y-6">
        {portfolio.featuredProjects.map((p, i) => (
          <FeaturedProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <div className="mt-28 pt-14 border-t border-hairline">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">05 — Archive</div>
            <h3 className="text-3xl md:text-4xl font-display italic font-light">Other Works</h3>
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>{portfolio.otherProjects.length} Projects</span>
            <span className="hidden sm:inline">{sourceCount} Open Source</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
          {portfolio.otherProjects.map((p, i) => (
            <OtherProjectCard key={p.title} project={p} index={i + portfolio.featuredProjects.length + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project: p, index: i }) {
  const num = String(i + 1).padStart(2, "0");
  const reverse = i % 2 === 1;

  return (
    <article className="group border border-hairline hover:border-foreground/30 transition-colors duration-500 bg-background">
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-7 relative border-b lg:border-b-0 lg:border-r border-hairline">
          <div className="aspect-[16/10] relative overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_60%)]">
            <div className="absolute top-0 left-0 right-0 h-9 border-b border-hairline bg-background/60 backdrop-blur-sm flex items-center px-4 gap-3 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full border border-hairline" />
                <span className="w-2.5 h-2.5 rounded-full border border-hairline" />
                <span className="w-2.5 h-2.5 rounded-full border border-hairline" />
              </div>
              <div className="flex-1 mx-3 h-5 border border-hairline rounded-sm flex items-center px-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate">
                {p.live ? p.live.replace(/^https?:\/\//, "") : `${p.title.toLowerCase().replace(/\s+/g, "-")}.local`}
              </div>
              {p.live ? (
                <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-emerald-400/90">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  Live
                </span>
              ) : (
                <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Preview</span>
              )}
            </div>

            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }} />

            <div className="absolute inset-0 flex items-center justify-center pt-9">
              <span className="text-[14rem] font-display italic font-light text-white/[0.06] group-hover:text-white/[0.12] transition-colors duration-700 leading-none select-none">
                {num}
              </span>
            </div>

            {(p.live || p.github) && (
              <a
                href={p.live || p.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 pt-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/30 backdrop-blur-[2px]"
                aria-label={`${p.title} — ${p.live ? "Visit live site" : "Open repository"}`}
              >
                <span className="flex items-center gap-3 px-6 py-3.5 border border-foreground bg-background text-[11px] uppercase tracking-[0.3em] font-medium">
                  {p.live ? <Globe className="w-3.5 h-3.5" /> : <Github className="w-3.5 h-3.5" />}
                  {p.live ? "Visit Live Site" : "View Repository"}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 p-7 md:p-10 flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Featured · {num}</span>
              {p.live ? (
                <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-emerald-400/90 px-2 py-1 border border-emerald-400/30">
                  <Radio className="w-3 h-3" /> Online
                </span>
              ) : (
                <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground px-2 py-1 border border-hairline">Case Study</span>
              )}
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-light text-foreground leading-[1.05]">{p.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-[15px]">{p.description}</p>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-hairline">
              <Meta k="Role" v="Lead Dev" />
              <Meta k="Year" v="2025" />
              <Meta k="Status" v={p.live ? "Live" : "Internal"} italic={!p.live} />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 border border-hairline text-[10px] uppercase tracking-[0.1em] text-foreground/70">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {p.live ? (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden border border-foreground bg-foreground text-background px-5 py-3 text-[11px] uppercase tracking-[0.25em] font-medium flex-1 min-w-[180px] justify-center">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button type="button" disabled
                className="inline-flex items-center gap-2.5 border border-hairline text-muted-foreground px-5 py-3 text-[11px] uppercase tracking-[0.25em] font-medium flex-1 min-w-[180px] justify-center cursor-not-allowed">
                <Globe className="w-3.5 h-3.5 opacity-40" />
                Live Coming Soon
              </button>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-hairline hover:border-foreground/60 hover:bg-white/[0.03] px-5 py-3 text-[11px] uppercase tracking-[0.25em] font-medium transition-colors">
                <Github className="w-3.5 h-3.5" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function OtherProjectCard({ project: p, index }) {
  const num = String(index).padStart(2, "0");
  return (
    <article className="group bg-background hover:bg-white/[0.02] transition-colors p-7 md:p-8 relative flex flex-col gap-5 min-h-[260px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ {num}</span>
        <div className="flex items-center gap-2">
          {p.live && (
            <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-emerald-400/90">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Live
            </span>
          )}
        </div>
      </div>

      <h4 className="text-2xl md:text-[26px] font-display font-light leading-tight group-hover:italic transition-all">{p.title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-light">{p.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {p.tech.slice(0, 4).map((t) => (
          <span key={t} className="text-[9px] uppercase tracking-[0.2em] text-foreground/60 px-2 py-0.5 border border-hairline">{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-hairline">
        {p.live ? (
          <a href={p.live} target="_blank" rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-colors px-3 py-2.5 text-[10px] uppercase tracking-[0.25em] font-medium">
            <Globe className="w-3 h-3" /> Visit Live <ArrowUpRight className="w-3 h-3" />
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-2 border border-hairline text-muted-foreground px-3 py-2.5 text-[10px] uppercase tracking-[0.25em]">
            <Globe className="w-3 h-3 opacity-40" /> No Live Demo
          </span>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`}
            className="w-10 h-10 inline-flex items-center justify-center border border-hairline hover:border-foreground hover:bg-foreground hover:text-background transition-colors shrink-0">
            <Github className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

function Stat({ k, v, pulse }) {
  return (
    <div className="border-l border-foreground/20 pl-3 space-y-1">
      <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-1.5">
        {pulse && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
        )}
        {k}
      </div>
      <div className="text-base font-display italic font-light text-foreground">{v}</div>
    </div>
  );
}

function Meta({ k, v, italic }) {
  return (
    <div className="border-l border-foreground/20 pl-3 space-y-1">
      <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{k}</div>
      <div className={`text-xs font-light tracking-wide text-foreground ${italic ? "italic" : ""}`}>{v}</div>
    </div>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.trim();
    const email = fd.get("email")?.trim();
    const subject = fd.get("subject")?.trim();
    const message = fd.get("message")?.trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill out every field.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      // Web3Forms API endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Web3Forms access key from .env
          from_name: name,
          email: email,
          subject: subject,
          message: message,
          to_email: portfolio.email, // Your email where you'll receive messages
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please email me directly at " + portfolio.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 border-b border-hairline bg-white/[0.01] px-6 md:px-12">
      <div className="text-center mb-16">
        <SectionLabel index="05" label="Contact" />
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic font-light leading-[0.95]">Get in<br />touch.</h2>
        <p className="mt-8 text-muted-foreground font-light max-w-md mx-auto">Open to new opportunities and collaborations.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={onSubmit} className="space-y-7">
          <div className="grid sm:grid-cols-2 gap-7">
            <FieldUnderline name="name" placeholder="Name" />
            <FieldUnderline name="email" type="email" placeholder="Email" />
          </div>
          <FieldUnderline name="subject" placeholder="Subject" />
          <div>
            <textarea name="message" rows={5} placeholder="MESSAGE"
              className="w-full bg-transparent border-b border-hairline py-4 focus:outline-none focus:border-foreground transition-colors text-xs tracking-[0.2em] uppercase resize-none placeholder:text-muted-foreground/60" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full py-5 bg-foreground text-background text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground/90 transition-colors disabled:opacity-60">
            {loading ? "Sending…" : "Send Inquiry"}
          </button>
        </form>

        <div className="mt-20 pt-12 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Email</div>
            <a href={`mailto:${portfolio.email}`} className="text-sm text-foreground hover:underline underline-offset-4">{portfolio.email}</a>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Phone</div>
            <a href={`tel:${portfolio.phone.replace(/\s/g, "")}`} className="text-sm text-foreground hover:underline underline-offset-4">{portfolio.phone}</a>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Location</div>
            <span className="text-sm text-foreground">{portfolio.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldUnderline({ name, placeholder, type = "text" }) {
  return (
    <input type={type} name={name} placeholder={placeholder.toUpperCase()}
      className="w-full bg-transparent border-b border-hairline py-4 focus:outline-none focus:border-foreground transition-colors text-xs tracking-[0.2em] uppercase placeholder:text-muted-foreground/60" />
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-b border-hairline px-6 md:px-12 py-14">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display italic text-4xl mb-2">Saif Ullah</div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Software Engineering Student</div>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {["about", "skills", "projects", "contact"].map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-foreground/80 hover:text-foreground capitalize transition-colors">{id}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Elsewhere</div>
          <ul className="space-y-2 text-sm">
            <li><a href={portfolio.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">LinkedIn ↗</a></li>
            <li><a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">GitHub ↗</a></li>
            <li><a href={portfolio.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">Instagram ↗</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-hairline flex flex-wrap justify-between items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>© 2025 Saif Ullah. All rights reserved.</span>
        <span>{portfolio.email} · {portfolio.location}</span>
      </div>
    </footer>
  );
}
