"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Calendar, Clock, Users, Building, Mail, User, MessageSquare, CheckCircle } from "lucide-react";

const initial = {
  name: "",
  email: "",
  academy: "",
  size: "1–50 students",
  date: "",
  time: "Morning (9am–12pm)",
  message: "",
};

const PERKS = [
  { icon: Clock, title: "30 min", desc: "Live walkthrough, not a slideshow" },
  { icon: Users, title: "Your setup", desc: "Mapped to your roles & pricing" },
  { icon: CheckCircle, title: "No cost", desc: "Free demo, no commitment" },
];

export default function DemoBooking() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.academy.trim()) errs.academy = "Enter your academy name";
    if (!form.date) errs.date = "Pick a date";
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setServerError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Network problem — check your connection and try again.");
    }
  };

  const inputCls = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[14.5px] outline-none transition-all duration-200 focus:border-iris focus:shadow-lg focus:shadow-iris/5 ${
      errors[field] ? "border-red-400" : "border-ink/10"
    }`;

  const label = "mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate2";

  return (
    <section id="demo" className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <Reveal y={20} className="text-center">
         <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6E93E0]" />
            Book a Demo
          </span>
          <h2 
            className="mt-3 text-3xl tracking-tight md:text-4xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500 }}
          >
            See Blackstone <span className="text-iris">live</span>, on your
            schedule
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-slate2">
            A 30-minute walkthrough, tailored to how your academy runs today.
          </p>
        </Reveal>

        {/* Perk strip */}
        <Reveal delay={90} y={16} className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PERKS.map((perk) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.title}
                className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-iris/20 hover:shadow-lg"
              >
                <div className="rounded-full bg-gradient-to-br from-iris/10 to-indigo-400/10 p-2 transition-colors duration-300 group-hover:from-iris/20 group-hover:to-indigo-400/20">
                  <Icon className="h-4 w-4 text-iris" />
                </div>
                <div>
                  <p className="text-[13.5px] font-bold text-ink">{perk.title}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-slate2">{perk.desc}</p>
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* Form card */}
        <Reveal delay={140} y={24} className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-sm transition-shadow duration-500 hover:shadow-2xl md:p-9">
          {status === "success" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-iris to-indigo-500 shadow-lg shadow-iris/25">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 
                className="mt-5 text-2xl tracking-tight"
                style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500 }}
              >
                Demo booked!
              </h3>
              <p className="mt-2.5 max-w-xs text-[14.5px] leading-relaxed text-slate2">
                Thanks, {form.name.split(" ")[0]}. We'll confirm at <span className="font-medium text-ink">{form.email}</span> shortly.
              </p>
              <button
                onClick={() => { setForm(initial); setStatus("idle"); }}
                className="mt-6 rounded-full border border-ink/15 px-6 py-2.5 text-[14px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-iris/30 hover:bg-white hover:shadow-lg"
              >
                Book another demo
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Row 1 — 2 columns: Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={label}>
                    <User className="h-3 w-3" />
                    Full name
                  </label>
                  <input 
                    className={inputCls("name")} 
                    placeholder="Ayesha Rahman" 
                    value={form.name} 
                    onChange={update("name")} 
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className={label}>
                    <Mail className="h-3 w-3" />
                    Work email
                  </label>
                  <input 
                    type="email" 
                    className={inputCls("email")} 
                    placeholder="you@academy.com" 
                    value={form.email} 
                    onChange={update("email")} 
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2 — 2 columns: Academy Name + Size */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={label}>
                    <Building className="h-3 w-3" />
                    Academy name
                  </label>
                  <input 
                    className={inputCls("academy")} 
                    placeholder="Noor Academy" 
                    value={form.academy} 
                    onChange={update("academy")} 
                  />
                  {errors.academy && <p className="mt-1 text-xs text-red-400">{errors.academy}</p>}
                </div>
                <div>
                  <label className={label}>
                    <Users className="h-3 w-3" />
                    Academy size
                  </label>
                  <div className="relative">
                    <select 
                      className={`${inputCls("size")} appearance-none pr-12`} 
                      value={form.size} 
                      onChange={update("size")}
                    >
                      <option>1–50 students</option>
                      <option>51–200 students</option>
                      <option>201–1,000 students</option>
                      <option>1,000+ students</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#62728C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 — 2 columns: Date + Time */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={label}>
                    <Calendar className="h-3 w-3" />
                    Preferred date
                  </label>
                  <input 
                    type="date" 
                    className={inputCls("date")} 
                    value={form.date} 
                    onChange={update("date")} 
                  />
                  {errors.date && <p className="mt-1 text-xs text-red-400">{errors.date}</p>}
                </div>
                <div>
                  <label className={label}>
                    <Clock className="h-3 w-3" />
                    Preferred time
                  </label>
                  <div className="relative">
                    <select 
                      className={`${inputCls("time")} appearance-none pr-12`} 
                      value={form.time} 
                      onChange={update("time")}
                    >
                      <option>Morning (9am–12pm)</option>
                      <option>Afternoon (12pm–4pm)</option>
                      <option>Evening (4pm–8pm)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#62728C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4 — Full width: Message */}
              <div>
                <label className={label}>
                  <MessageSquare className="h-3 w-3" />
                  Anything specific to cover? (optional)
                </label>
                <textarea 
                  rows={3} 
                  className={inputCls("message")} 
                  placeholder="e.g. multi-currency invoicing, custom roles…" 
                  value={form.message} 
                  onChange={update("message")} 
                />
              </div>

              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-500">
                  {serverError}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full rounded-full bg-gradient-to-r from-ink to-ink/90 px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-lg shadow-ink/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending your request…
                  </span>
                ) : (
                  "Book my free demo"
                )}
              </button>
              
              <p className="text-center text-xs text-slate2">
                Sent securely to our admin team and used only to arrange the demo.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}