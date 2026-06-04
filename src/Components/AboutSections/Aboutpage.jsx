import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "340+", label: "Projects Completed" },
  { value: "28+", label: "Ongoing Projects" },
  { value: "6", label: "Cities We Build In" },
];

const values = [
  {
    number: "01",
    title: "Craftsmanship",
    desc: "Every joint, surface, and finish is treated as a signature — not just structure, but statement.",
  },
  {
    number: "02",
    title: "Transparency",
    desc: "No hidden costs, no surprises. We build trust the same way we build homes — with precision.",
  },
  {
    number: "03",
    title: "Sustainability",
    desc: "Materials chosen for longevity, methods chosen for the earth. Building for generations, not seasons.",
  },
  {
    number: "04",
    title: "Client-First",
    desc: "Your vision leads. We listen, refine, and deliver — never imposing, always elevating.",
  },
];

const team = [
  {
    name: "Arjun Nair",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&crop=face",
    exp: "18 yrs",
  },
  {
    name: "Meera Krishnan",
    role: "Head of Interior Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=face",
    exp: "14 yrs",
  },
  {
    name: "Ravi Menon",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=face",
    exp: "11 yrs",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function AnimSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.8s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.8s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#0e0e0d] text-white overflow-x-hidden">
      <style>{`
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent); }
        .accent-line { width: 40px; height: 1px; background: rgba(255,255,255,0.35); display: inline-block; vertical-align: middle; margin-right: 14px; }
        .stat-card { transition: background 0.3s ease; }
        .stat-card:hover { background: rgba(255,255,255,0.03); }
        .stat-val { transition: letter-spacing 0.4s ease; }
        .stat-card:hover .stat-val { letter-spacing: 0.12em; }
        .team-card img { transition: transform 0.6s ease, filter 0.6s ease; }
        .team-card:hover img { transform: scale(1.04); filter: grayscale(0%) !important; }
        .value-row { border-bottom: 1px solid rgba(255,255,255,0.07); transition: background 0.3s ease; }
        .value-row:hover { background: rgba(255,255,255,0.03); }
      `}</style>

       <section className="pt-6 pb-12 md:pt-28 md:pb-16 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          
           <div className="relative order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&fit=crop"
              alt="Thuisbuilders"
              className="w-full h-[180px] sm:h-[260px] md:h-[320px] object-cover rounded-2xl"
            />
          </div>

           <div className="relative z-10 order-1 md:order-2">
            <AnimSection delay={0}>
              <p className="font-['Montserrat'] text-xs sm:text-sm font-400 tracking-[0.3em] text-white/40 uppercase flex items-center">
                <span className="accent-line" />About Us
              </p>
            </AnimSection>

            <AnimSection delay={0.1}>
              <h1 className="font-['Barlow'] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-5 leading-[1.05]">
                We Don't
                Just Build.<br />
                <span className="font-['Barlow'] font-semibold text-white/80">We Belong.</span>
              </h1>
            </AnimSection>

            <AnimSection delay={0.2}>
              <p className="font-['Montserrat'] text-base sm:text-lg font-300 text-gray-400 mt-7 leading-8">
                Thuisbuilders is a construction and design company rooted in the belief
                that a building is more than concrete and steel — it's where life unfolds.
                Since 2012, we've crafted homes, commercial spaces, and institutions
                that stand with integrity and speak with character.
              </p>
            </AnimSection>

            <AnimSection delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="/projects"
                  className="font-['Montserrat'] text-xs font-500 tracking-[0.2em] uppercase px-8 py-3.5 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Our Projects
                </a>
                <a
                  href="/contact-us"
                  className="font-['Montserrat'] text-xs font-500 tracking-[0.2em] uppercase text-white/45 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  Contact Us
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path d="M0 4H19M15 1L19 4L15 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Divider - Hidden on small screens */}
      <div className="divider mx-5 sm:mx-10 md:mx-16 lg:mx-24 hidden md:block" />

      {/* ── STATS ── */}
      <section className="py-6 sm:py-20 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((s, i) => (
            <AnimSection key={i} delay={i * 0.08}>
              <div className="stat-card bg-[#0e0e0d] px-6 py-10 sm:px-10 sm:py-12 text-center cursor-default">
                <div className="stat-val font-['Barlow'] text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-3 tracking-tight">
                  {s.value}
                </div>
                <p className="font-['Montserrat'] text-xs font-400 tracking-[0.2em] text-white/35 uppercase">
                  {s.label}
                </p>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      <div className="divider mx-5 sm:mx-10 md:mx-16 lg:mx-24" />

      {/* Rest of your code remains unchanged */}
      {/* ── STORY ── */}
      <section className="py-6 sm:py-24 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimSection delay={0}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80&fit=crop"
                alt="Our Story"
                className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 bg-[#0e0e0d] border border-white/10 px-6 py-5 hidden sm:block">
                <p className="font-['Barlow'] text-4xl sm:text-5xl font-semibold text-white">2012</p>
                <p className="font-['Montserrat'] text-xs font-400 tracking-[0.2em] text-white/35 mt-1 uppercase">
                  Est. Kerala, India
                </p>
              </div>
            </div>
          </AnimSection>

          <div>
            <AnimSection delay={0.1}>
              <p className="font-['Montserrat'] text-xs font-400 tracking-[0.3em] text-white/35 uppercase flex items-center">
                <span className="accent-line" />Our Story
              </p>
            </AnimSection>
            <AnimSection delay={0.15}>
              <h1 className="font-['Barlow'] text-4xl sm:text-5xl font-semibold text-white mt-5 leading-tight">
                Built from the Ground Up,{" "}
                <span className="text-white/70">With Purpose.</span>
              </h1>
            </AnimSection>
            <AnimSection delay={0.2}>
              <p className="font-['Montserrat'] text-base font-300 text-gray-400 mt-6 leading-8">
                Thuisbuilders was founded with a single conviction: that the act of
                building should be as thoughtful as what is built. Starting from a
                small team in Thrissur, Kerala, we've grown into a trusted name across
                South India — delivering residential villas, commercial complexes,
                institutional projects, and luxury interiors.
              </p>
            </AnimSection>
            <AnimSection delay={0.25}>
              <p className="font-['Montserrat'] text-base font-300 text-gray-400 mt-4 leading-8">
                "Thuis" — Dutch for <em>home</em> — is at the heart of everything we do.
                Whether it's a first-time homeowner or a large developer, we bring the
                same discipline, care, and craftsmanship to every square foot.
              </p>
            </AnimSection>
          </div>
        </div>
      </section>

      <div className="divider mx-5 sm:mx-10 md:mx-16 lg:mx-24" />

      {/* ── VALUES ── */}
      <section className="py-6 sm:py-24 px-5 sm:px-10 md:px-16 lg:px-24">
        <AnimSection delay={0}>
          <p className="font-['Montserrat'] text-xs font-400 tracking-[0.3em] text-white/35 uppercase flex items-center">
            <span className="accent-line" />What We Stand For
          </p>
          <h1 className="font-['Barlow'] text-4xl sm:text-5xl font-semibold text-white mt-5 leading-tight">
            Our Core Values
          </h1>
        </AnimSection>

        <div className="mt-12">
          {values.map((v, i) => (
            <AnimSection key={i} delay={i * 0.08}>
              <div className="value-row flex items-start gap-6 sm:gap-10 py-7 sm:py-8 px-3 sm:px-4 cursor-default">
                <span className="font-['Barlow'] text-sm font-400 text-white/15 tracking-[0.15em] flex-shrink-0 mt-1">
                  {v.number}
                </span>
                <div className="flex-1 md:flex md:items-center md:gap-14">
                  <h2 className="font-['Barlow'] text-xl sm:text-2xl font-semibold text-white md:w-48 flex-shrink-0">
                    {v.title}
                  </h2>
                  <p className="font-['Montserrat'] text-sm sm:text-base font-300 text-gray-400 leading-7 mt-2 md:mt-0">
                    {v.desc}
                  </p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      <div className="divider mx-5 sm:mx-10 md:mx-16 lg:mx-24" />

      {/* ── TEAM ── */}
      <section className="py-6 sm:py-24 px-5 sm:px-10 md:px-16 lg:px-24">
        <AnimSection delay={0}>
          <p className="font-['Montserrat'] text-xs font-400 tracking-[0.3em] text-white/35 uppercase flex items-center">
            <span className="accent-line" />The People
          </p>
          <h1 className="font-['Barlow'] text-4xl sm:text-5xl font-semibold text-white mt-5">
            Meet the Team
          </h1>
        </AnimSection>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <AnimSection key={i} delay={i * 0.1}>
              <div className="team-card group cursor-default">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 sm:h-72 object-cover"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h2 className="font-['Barlow'] text-xl font-semibold text-white">
                      {member.name}
                    </h2>
                    <p className="font-['Montserrat'] text-xs font-400 tracking-[0.15em] text-white/40 uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                  <span className="font-['Montserrat'] text-xs font-400 text-white/20 mt-1">
                    {member.exp}
                  </span>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      <div className="divider mx-5 sm:mx-10 md:mx-16 lg:mx-24" />

      {/* ── CTA ── */}
      <section className="py-6 sm:py-30 px-5 sm:px-10 md:px-16 lg:px-24 text-center">
        <AnimSection delay={0}>
          <p className="font-['Montserrat'] text-xs font-400 tracking-[0.35em] text-white/25 uppercase mb-6">
            Ready to Build?
          </p>
          <h1 className="font-['Barlow'] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mx-auto max-w-3xl leading-tight">
            Let's Create Something That Lasts.
          </h1>
          <p className="font-['Montserrat'] text-md font-300 text-gray-400 mt-6 max-w-md mx-auto leading-8">
            Tell us about your project and let's build something extraordinary together.
          </p>
          <a
            href="/contact"
            className="font-['Montserrat'] text-xs font-500 tracking-[0.25em] uppercase inline-block mt-10 px-10 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Your Project
          </a>
        </AnimSection>
      </section>
    </div>
  );
}       