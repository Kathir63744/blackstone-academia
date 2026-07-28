import Reveal from "./Reveal";
import BackgroundAccent from "./BackgroundAccent";

// ---- Design tokens (shy-blue palette) --------------------------------
// Canvas:        #F4F8FD   soft powder-blue white
// Ink:           #10233F   deep navy for headings
// Slate:         #62728C   muted secondary text
// Card border:   #E2E9F5
// Gradient A→B:  #A9C6F5 → #6E93E0   (highlighted "shy blue" cards)
// Accent word:   #3D66C9   medium blue for the emphasized word
// White card:    #FFFFFF

const stats = [
  { value: "5K", suffix: "+", label: "Companies onboarded", highlighted: true },
  { value: "78", suffix: "%", label: "Cuts manual reporting time", highlighted: false },
  { value: "25", suffix: "%", label: "Faster deployment cycles", highlighted: true },
  { value: "6", suffix: "M", label: "API calls processed daily", highlighted: false },
];

export default function StatsShowcase() {
  return (
    <section
      style={{ background: "#F4F8FD", fontFamily: "'Onest', sans-serif" }}
      className="relative w-full overflow-hidden px-6 py-20 md:px-14"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .shy-dotgrid {
          background-image: radial-gradient(circle, #C7D7F2 1.4px, transparent 1.4px);
          background-size: 22px 22px;
        }

        .shy-card {
          transition: transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.35s ease;
        }
        .shy-card:hover {
          transform: translateY(-4px);
        }

        .shy-highlight {
          background: linear-gradient(155deg, #AFCBF7 0%, #7FA3E7 55%, #6690DD 100%);
          box-shadow: 0 18px 40px -18px rgba(72, 107, 187, 0.55);
        }

        .shy-white {
          background: #FFFFFF;
          box-shadow: 0 10px 30px -18px rgba(20, 45, 90, 0.18);
        }

        .shy-accent-word {
          font-family: 'Onest', sans-serif;
          font-style: italic;
          font-weight: 500;
          color: #3D66C9;
        }
      `,
        }}
      />

      {/* decorative dot grid, top-left */}
      <div
        className="shy-dotgrid pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-70"
        style={{
          maskImage: "radial-gradient(circle at top left, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at top left, black 0%, transparent 70%)",
        }}
      />
      <BackgroundAccent variant="diagonal" className="opacity-60" />

      <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
        {/* ---------------- Left column ---------------- */}
        <Reveal className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#6E93E0" }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#62728C" }}>
              Why Choose Us
            </span>
          </div>

          <h2
            className="text-3xl leading-[1.15] md:text-[2.6rem]"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500, color: "#10233F" }}
          >
            Empowers teams with{" "}
            <span className="shy-accent-word">smart</span> workflows
            to automate operations, boost productivity, and scale with
            confidence
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "#62728C" }}>
            Built for product and ops teams who want less manual work and
            more visibility — trusted by companies that ship faster.
          </p>
        </Reveal>

        {/* ---------------- Right column: staggered stat grid ---------------- */}
        <div className="flex flex-col gap-4 md:gap-5">
          {/* top row */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <StatCard s={stats[0]} tall delay={0} />
            <StatCard s={stats[1]} delay={90} />
          </div>
          {/* bottom row, nudged right to echo the reference's staggered rhythm */}
          <div className="ml-6 grid grid-cols-2 gap-4 md:ml-14 md:gap-5">
            <StatCard s={stats[2]} delay={180} />
            <StatCard s={stats[3]} delay={270} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ s, tall, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      y={28}
      className={`shy-card rounded-[26px] p-6 md:p-8 ${
        s.highlighted ? "shy-highlight" : "shy-white border"
      } ${tall ? "md:py-11" : ""}`}
      style={!s.highlighted ? { borderColor: "#E2E9F5" } : undefined}
    >
      <p
        className="leading-none"
        style={{
          fontFamily: "'Onest', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: s.highlighted ? "#FFFFFF" : "#10233F",
        }}
      >
        {s.value}
        <span style={{ color: s.highlighted ? "#EAF1FE" : "#6E93E0" }}>{s.suffix}</span>
      </p>
      <p
        className="mt-4 text-sm font-medium leading-snug"
        style={{ 
          color: s.highlighted ? "rgba(255,255,255,0.88)" : "#8592A8",
          fontFamily: "'Onest', sans-serif"
        }}
      >
        {s.label}
      </p>
    </Reveal>
  );
}