import { useEffect, useState } from "react";
import { projects, categories } from "../../Data/projects";
import { useLocation } from "react-router-dom";

// ── DETAIL PAGE ──────────────────────────────────────────
function DetailPage({ project, onBack }) {
  const [galIdx, setGalIdx] = useState(0);

  return (
    <div className="min-h-screen bg-[#0e0e0d] py-5 sm:py-10 text-white">
      <style>{`
        @keyframes pageIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gal-thumb { transition: opacity 0.3s, border-color 0.3s; }
        .detail-img { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .detail-img:hover { transform: scale(1.01); }
      `}</style>

      <div className="flex min-h-screen ">
        {/* LEFT SIDEBAR */}
        <aside
          className="hidden lg:flex  flex-col justify-between w-56 xl:w-64 flex-shrink-0 border-r border-white/8 px-8 py-10 fixed left-0 top-[80px] h-[calc(100vh-80px)] z-10 bg-[#0e0e0d]"
        >
          <div>
            <button
              onClick={onBack}
              className="font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase text-white/35 hover:text-white transition-colors duration-200 flex items-center gap-2 mb-14"
            >
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M0 5H15M6 1L0 5L6 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>

            <p className="font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase text-white/25 mb-6">
              Project Info
            </p>

            {[
              { label: "Category", val: project.category },
              { label: "Location", val: project.location },
              { label: "Year", val: project.year },
              { label: "Area", val: project.area },
              { label: "Status", val: project.status },
            ].map((m) => (
              <div key={m.label} className="mb-5">
                <p className="font-['Montserrat'] text-[9px] tracking-[0.25em] uppercase text-white/25 mb-1">
                  {m.label}
                </p>
                <p className="font-['Barlow'] text-sm font-semibold text-white/70">{m.val}</p>
              </div>
            ))}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="font-['Montserrat'] text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border border-white/10 text-white/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

       
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 lg:ml-56 xl:ml-64 px-5 sm:px-10 lg:px-16 sm:pt-24 lg:pt-14 pb-20">
          <button
            onClick={onBack}
            className="lg:hidden font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase text-white/35 hover:text-white transition-colors duration-200 flex items-center gap-2 mb-8"
          >
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M0 5H15M6 1L0 5L6 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </button>

          <div style={{ animation: "fadeUp 0.6s 0.1s both" }}>
            <p className="font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
              {project.category} · {project.year}
            </p>
            <h1 className="font-['Barlow'] text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-8">
              {project.name}
            </h1>
          </div>

          <div className="w-full overflow-hidden mb-4" style={{ animation: "fadeUp 0.6s 0.15s both" }}>
            <img
              key={galIdx}
              src={project.gallery[galIdx]}
              alt={project.name}
              className="detail-img w-full h-[40vh] sm:h-[55vh] lg:h-[65vh] object-cover"
            />
          </div>

          {project.gallery.length > 1 && (
            <div className="flex gap-3 mb-10" style={{ animation: "fadeUp 0.6s 0.2s both" }}>
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setGalIdx(i)}
                  className={`gal-thumb overflow-hidden flex-shrink-0 ${i === galIdx ? "opacity-100 ring-1 ring-white" : "opacity-35 hover:opacity-70"}`}
                  style={{ width: "80px", height: "54px" }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 mb-10" style={{ animation: "fadeUp 0.6s 0.25s both" }}>
            {[
              { label: "Location", val: project.location },
              { label: "Year", val: project.year },
              { label: "Area", val: project.area },
              { label: "Status", val: project.status },
            ].map((m) => (
              <div key={m.label} className="bg-[#0e0e0d] px-5 py-5">
                <p className="font-['Montserrat'] text-[9px] tracking-[0.2em] uppercase text-white/25 mb-1.5">
                  {m.label}
                </p>
                <p className="font-['Barlow'] text-base font-semibold text-white">{m.val}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl" style={{ animation: "fadeUp 0.6s 0.3s both" }}>
            <p className="font-['Montserrat'] text-sm sm:text-base font-300 text-gray-400 leading-8">
              {project.desc}
            </p>
          </div>

          <div className="lg:hidden mt-8 flex flex-wrap gap-2" style={{ animation: "fadeUp 0.6s 0.35s both" }}>
            {project.tags.map((t) => (
              <span key={t} className="font-['Montserrat'] text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border border-white/10 text-white/30">
                {t}
              </span>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// ── PROJECTS LIST PAGE ───────────────────────────────────
export default function Project() {
      const location = useLocation();

  const [active, setActive] = useState(
    location.state?.category || "All"
  );  const [selected, setSelected] = useState(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  if (selected) {
    return <DetailPage project={selected} onBack={() => setSelected(null)} />;
  }
  
  return (
    <div className="min-h-screen bg-[#0e0e0d] sm:py-20 text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proj-img { 
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease; 
        }
        .proj-card:hover .proj-img { 
          transform: scale(1.05); 
          filter: brightness(0.55); 
        }
        .proj-overlay { 
          opacity: 0; 
          transition: opacity 0.4s ease; 
        }
        .proj-card:hover .proj-overlay { 
          opacity: 1; 
        }
        .filter-btn { transition: all 0.25s ease; }
      `}</style>

      <div className="flex min-h-screen">
        {/* LEFT SIDEBAR */}
        <aside
          className="hidden lg:flex flex-col justify-between w-56 xl:w-64 flex-shrink-0 border-r border-white/8 px-8 py-10 fixed left-0 top-[80px] h-[calc(100vh-80px)] z-10 bg-[#0e0e0d]"
        >
          <div>
            <nav className="flex flex-col gap-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`filter-btn font-['Montserrat'] text-[11px] tracking-[0.25em] uppercase text-left ${
                    active === cat ? "text-white" : "text-white/30 hover:text-white/70"
                  }`}
                >
                  {cat === "All" ? "PROJECTS" : cat.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>

          <p className="font-['Montserrat'] text-[9px] tracking-[0.2em] text-white/15 uppercase">
            © 2024
          </p>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 lg:ml-56 xl:ml-64">
          {/* Filters */}
          <div className="px-5 lg:px-16 pt-6 pb-8 border-b border-white/8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`filter-btn font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase px-4 py-2 border ${
                    active === cat
                      ? "border-white text-white"
                      : "border-white/15 text-white/35 hover:border-white/40 hover:text-white/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="p-5 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className="proj-card cursor-pointer group relative overflow-hidden"
                  style={{ animation: `fadeUp 0.5s ${i * 0.05}s cubic-bezier(0.22,1,0.36,1) both` }}
                  onClick={() => setSelected(p)}
                >
                  <div className="overflow-hidden bg-white/3 relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="proj-img w-full h-[280px] sm:h-[300px] object-cover"
                    />

                    {/* Centered View Details Button on Hover */}
                    <div className="proj-overlay absolute inset-0 flex items-center justify-center pointer-events-none bg-black/40">
                      <span className="font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase text-white border border-white/70 px-6 py-3 pointer-events-auto">
                        View Details
                      </span>
                    </div>

                    {/* Status badge */}
                    {p.status === "Ongoing" && (
                      <div className="absolute top-3 right-3">
                        <span className="font-['Montserrat'] text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 bg-amber-500/90 text-black">
                          Ongoing
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="px-4 py-4 border-b border-white/6">
                    <h2 className="font-['Barlow'] text-base sm:text-lg font-semibold text-white group-hover:text-white/70 transition-colors duration-300">
                      {p.name}
                    </h2>
                    <p className="font-['Montserrat'] text-[10px] tracking-[0.15em] uppercase text-white/30 mt-1">
                      {p.category} · {p.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-32 text-center">
                <p className="font-['Montserrat'] text-xs tracking-[0.25em] uppercase text-white/20">
                  No projects in this category.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}