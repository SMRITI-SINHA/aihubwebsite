import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronRight,
  FileText,
  Files,
  Gavel,
  Layers,
  MessageSquareText,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import heroImg from "@assets/screenshot-1769761069657.png";
import hubGridImg from "@assets/screenshot-1769761063482.png";
import draftModalImg from "@assets/image_1769761103651.png";
import editorResearchImg from "@assets/image_1769761122827.png";
import nyayaWelcomeImg from "@assets/image_1769761227961.png";
import docuchatImg from "@assets/image_1769761194231.png";
import cNRImg from "@assets/image_1769761183830.png";
import trainDraftsImg from "@assets/image_1769761163682.png";
import researchAdvancedImg from "@assets/image_1769761273282.png";
import complianceImg from "@assets/image_1769761652108.png";

const Section = ({
  id,
  kicker,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          {kicker ? (
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs font-medium text-[hsl(var(--foreground))] shadow-sm backdrop-blur"
              data-testid={`text-kicker-${id || title.replaceAll(" ", "-").toLowerCase()}`}
            >
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
              <span className="opacity-90">{kicker}</span>
            </div>
          ) : null}
          <h2
            className="text-balance font-[650] tracking-[-0.02em] text-3xl md:text-4xl"
            data-testid={`text-title-${id || title.replaceAll(" ", "-").toLowerCase()}`}
          >
            {title}
          </h2>
          {description ? (
            <p
              className="mt-3 text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))] md:text-lg"
              data-testid={`text-description-${id || title.replaceAll(" ", "-").toLowerCase()}`}
            >
              {description}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
};

function Nav() {
  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "How it works", href: "#how-it-works" },
    { label: "AI Hub", href: "#ai-hub" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="sticky top-0 z-40 border-b bg-[hsl(var(--background))]/75 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/60">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2"
            data-testid="link-home"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl border bg-white shadow-sm">
              <Scale className="h-5 w-5 text-[hsl(var(--primary))]" />
              <span className="pointer-events-none absolute -inset-px rounded-xl opacity-0 ring-2 ring-[hsl(var(--primary))]/20 transition-opacity group-hover:opacity-100" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-[-0.01em]" data-testid="text-brand">
                Chakshi
              </div>
              <div className="text-[11px] text-[hsl(var(--muted-foreground))]" data-testid="text-brand-sub">
                AI Hub
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-[hsl(var(--foreground))]/80 transition hover:bg-white/70 hover:text-[hsl(var(--foreground))]"
                data-testid={`link-nav-${l.label.replaceAll(" ", "-").toLowerCase()}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden rounded-full bg-white/60 backdrop-blur md:inline-flex"
              data-testid="button-signin"
              type="button"
            >
              Sign in
            </Button>
            <Button
              className="rounded-full"
              data-testid="button-get-started"
              type="button"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16" id="overview">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]/14 blur-3xl" />
        <div className="absolute -left-24 top-44 h-[420px] w-[420px] rounded-full bg-[hsl(var(--accent))]/10 blur-3xl" />
        <div className="absolute -right-24 top-64 h-[520px] w-[520px] rounded-full bg-[hsl(var(--primary))]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02),transparent)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur"
              data-testid="badge-hero"
            >
              <BadgeCheck className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
              <span className="text-[hsl(var(--foreground))]/80">Complete legal AI workspace</span>
              <span className="mx-1 h-3 w-px bg-black/10" />
              <span className="text-[hsl(var(--foreground))]/70">Draft • Chat • Research • Compliance</span>
            </div>

            <h1
              className="mt-5 text-balance font-[750] tracking-[-0.03em] text-4xl leading-[1.05] md:text-6xl"
              data-testid="text-hero-title"
            >
              Chakshi AI Hub
              <span className="block text-[hsl(var(--foreground))]/85">Built for real legal work.</span>
            </h1>
            <p
              className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))] md:text-lg"
              data-testid="text-hero-subtitle"
            >
              Move from scattered tools to a single workspace: drafting that understands your style, research with citations, document chats, memo generation, and compliance checklists.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button className="rounded-full" data-testid="button-hero-primary" type="button">
                Explore AI Hub
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full bg-white/60 backdrop-blur"
                data-testid="button-hero-secondary"
                type="button"
              >
                Watch product tour
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div
                className="rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur"
                data-testid="card-metric-1"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Wand2 className="h-4 w-4 text-[hsl(var(--primary))]" />
                  Faster drafting
                </div>
                <div className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
                  Structured drafts with research panel built-in.
                </div>
              </div>
              <div
                className="rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur"
                data-testid="card-metric-2"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Search className="h-4 w-4 text-[hsl(var(--primary))]" />
                  Verified sources
                </div>
                <div className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
                  Citations, timelines, and contradictions.
                </div>
              </div>
              <div
                className="rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur"
                data-testid="card-metric-3"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4 text-[hsl(var(--primary))]" />
                  Practice-ready
                </div>
                <div className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
                  Memos, checklists, and saved notes.
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[28px] bg-[radial-gradient(closest-side,rgba(182,157,116,0.20),transparent)] blur-xl" />
              <div className="relative overflow-hidden rounded-[28px] border bg-white shadow-[0_18px_50px_-26px_rgba(31,40,57,0.55)]">
                <div className="flex items-center justify-between border-b bg-[hsl(var(--card))]/60 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-hero-preview-title">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                    Chakshi Platform Preview
                  </div>
                  <Badge className="rounded-full" data-testid="badge-live">Live</Badge>
                </div>
                <div className="p-4">
                  <img
                    src={heroImg}
                    alt="Chakshi platform screenshot"
                    className="w-full rounded-2xl border"
                    data-testid="img-hero"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="pointer-events-none absolute -bottom-6 -left-6 hidden w-[240px] rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur md:block"
              initial={{ opacity: 0, y: 10, x: -6 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-hero-float-1">
                <FileText className="h-4 w-4 text-[hsl(var(--primary))]" />
                Draft with research
              </div>
              <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-hero-float-1-sub">
                Side-by-side panel for provisions and notes.
              </div>
            </motion.div>

            <motion.div
              className="pointer-events-none absolute -right-4 top-10 hidden w-[220px] rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur md:block"
              initial={{ opacity: 0, y: -10, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-hero-float-2">
                <Gavel className="h-4 w-4 text-[hsl(var(--primary))]" />
                Citation-backed answers
              </div>
              <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-hero-float-2-sub">
                Links to trusted sources.
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-[28px] border bg-white/55 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div>
              <div className="text-sm font-semibold" data-testid="text-hero-bottom-title">
                One workspace, many tools
              </div>
              <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]" data-testid="text-hero-bottom-sub">
                The AI Hub brings drafting, chat, research, and compliance into a single flow—so your team can move faster without switching contexts.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              {[
                "Drafting",
                "AI Chat",
                "Research",
                "Study Buddy",
                "Compliance",
              ].map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="rounded-full bg-white"
                  data-testid={`badge-topic-${t.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-8" />
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      icon: Wand2,
      title: "AI Legal Drafting",
      desc: "Draft with an integrated research panel and structured prompts.",
      img: editorResearchImg,
      pill: "Drafting",
      bullets: ["Draft from facts", "Upload reference documents", "Use trained firm style"],
    },
    {
      icon: MessageSquareText,
      title: "DocuChat",
      desc: "Upload large documents and extract timelines, issues, and evidence.",
      img: docuchatImg,
      pill: "AI Chat",
      bullets: ["800+ pages support", "Issue tagging", "Evidence finder"],
    },
    {
      icon: Scale,
      title: "Nyaya AI",
      desc: "Ask legal questions and get concise, citation-backed outputs.",
      img: nyayaWelcomeImg,
      pill: "AI Chat",
      bullets: ["Trusted sources", "Sample prompts", "Structured answers"],
    },
    {
      icon: Search,
      title: "AI Legal Research",
      desc: "Advanced mode with extracted paragraphs, timelines, and conflict detection.",
      img: researchAdvancedImg,
      pill: "Research",
      bullets: ["Tags & references", "Chronological timeline", "Conflict detection"],
    },
    {
      icon: Layers,
      title: "Smart Compliance Checklists",
      desc: "Generate live-verified compliance tasks with evidence and notes.",
      img: complianceImg,
      pill: "Compliance",
      bullets: ["Risk tagging", "Notes & proof", "Saved checklists"],
    },
    {
      icon: Files,
      title: "Train Your Drafts",
      desc: "Teach Chakshi your firm’s SOPs, templates, and past drafts.",
      img: trainDraftsImg,
      pill: "Personalization",
      bullets: ["Drag & drop uploads", "Up to 10 docs", "Applies automatically"],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <Section
      id="capabilities"
      kicker="Designed for modern legal teams"
      title="The AI Hub capabilities"
      description="Not a bundle of features—one coherent workflow. Explore what’s inside the Chakshi AI Hub." 
    >
      <div className="grid gap-8 lg:grid-cols-[340px,1fr]">
        <div className="relative">
          <div className="sticky top-24">
            <div className="rounded-[22px] border bg-white/60 p-2 shadow-sm backdrop-blur">
              {items.map((it, idx) => {
                const Icon = it.icon;
                const selected = idx === active;
                return (
                  <button
                    key={it.title}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded-[18px] border border-transparent px-3 py-3 text-left transition",
                      selected
                        ? "bg-white shadow-sm [border-color:rgba(0,0,0,0.06)]"
                        : "hover:bg-white/70",
                    )}
                    onClick={() => setActive(idx)}
                    data-testid={`button-capability-${idx}`}
                    type="button"
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid h-9 w-9 place-items-center rounded-xl border bg-[hsl(var(--background))]",
                        selected ? "border-[hsl(var(--primary))]/25" : "border-black/10",
                      )}
                    >
                      <Icon className={cn("h-4.5 w-4.5", selected ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]/75")} />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-semibold" data-testid={`text-capability-title-${idx}`}>
                          {it.title}
                        </span>
                        <Badge
                          variant="secondary"
                          className={cn(
                            "rounded-full bg-white text-[hsl(var(--foreground))]/70",
                            selected ? "border border-[hsl(var(--primary))]/20" : "border border-black/5",
                          )}
                          data-testid={`badge-capability-pill-${idx}`}
                        >
                          {it.pill}
                        </Badge>
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-[hsl(var(--muted-foreground))]" data-testid={`text-capability-desc-${idx}`}>
                        {it.desc}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-[22px] border bg-[hsl(var(--card))]/60 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-capability-note-title">
                <ShieldCheck className="h-4 w-4 text-[hsl(var(--primary))]" />
                Built for clarity
              </div>
              <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]" data-testid="text-capability-note">
                Each module is designed to be explainable, structured, and easy to cite—so output is usable in real legal workflows.
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[28px] border bg-white shadow-[0_20px_60px_-36px_rgba(31,40,57,0.55)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-capability-preview-title">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                Live UI preview
              </div>
              <div className="flex items-center gap-2">
                <Badge className="rounded-full" data-testid="badge-capability-status">
                  AI Hub
                </Badge>
                <span className="text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-capability-status">
                  Real screens
                </span>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <div className="relative overflow-hidden rounded-[22px] border bg-[hsl(var(--background))]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={items[active].title}
                    src={items[active].img}
                    alt={items[active].title}
                    className="block w-full"
                    data-testid="img-capability"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {items[active].bullets.map((b, i) => (
                  <div
                    key={b}
                    className="rounded-2xl border bg-white/60 p-4 shadow-sm"
                    data-testid={`card-capability-bullet-${i}`}
                  >
                    <div className="flex items-start gap-2 text-sm font-semibold">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--primary))]/12">
                        <Check className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                      </span>
                      <span className="text-pretty">{b}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Bring your inputs",
      desc: "Upload reference docs, paste facts, or start from a blank document.",
      icon: Files,
      img: draftModalImg,
    },
    {
      title: "Draft with AI assistance",
      desc: "Generate drafts with structure, clarity, and research support.",
      icon: FileText,
      img: editorResearchImg,
    },
    {
      title: "Research + validate",
      desc: "Use advanced legal research with citations, timelines, and contradictions.",
      icon: Search,
      img: researchAdvancedImg,
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <Section
      id="how-it-works"
      kicker="Practical, not theoretical"
      title="How the AI Hub works"
      description="A clean flow that mirrors how lawyers actually work—inputs, drafting, and verification." 
    >
      <div className="grid gap-8 lg:grid-cols-[1fr,420px] lg:items-start">
        <div className="rounded-[28px] border bg-white shadow-[0_20px_60px_-36px_rgba(31,40,57,0.55)]">
          <div className="border-b px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-how-preview-title">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
              Flow preview
            </div>
          </div>
          <div className="p-4 md:p-6">
            <div className="relative overflow-hidden rounded-[22px] border">
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[active].title}
                  src={steps[active].img}
                  alt={steps[active].title}
                  className="block w-full"
                  data-testid="img-how-preview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {steps.map((s, i) => {
                const selected = i === active;
                const Icon = s.icon;
                return (
                  <button
                    key={s.title}
                    className={cn(
                      "rounded-2xl border bg-white/60 p-4 text-left shadow-sm transition hover:bg-white",
                      selected ? "border-[hsl(var(--primary))]/25" : "border-black/10",
                    )}
                    onClick={() => setActive(i)}
                    data-testid={`button-how-step-${i}`}
                    type="button"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold" data-testid={`text-how-step-title-${i}`}>
                      <Icon className={cn("h-4 w-4", selected ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]/75")} />
                      Step {i + 1}
                    </div>
                    <div className="mt-2 text-xs text-[hsl(var(--muted-foreground))]" data-testid={`text-how-step-desc-${i}`}>
                      {s.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border bg-[hsl(var(--card))]/60 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-how-right-title">
            <BookOpen className="h-4 w-4 text-[hsl(var(--primary))]" />
            What you get
          </div>

          <ul className="mt-4 space-y-3">
            {[
              "Structured outputs you can directly use in practice",
              "Citations and sources surfaced alongside answers",
              "Saved notes across research and drafting",
              "A workspace that scales from solo to teams",
            ].map((t, idx) => (
              <li key={t} className="flex items-start gap-2" data-testid={`row-how-benefit-${idx}`}>
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--primary))]/12">
                  <Check className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                </span>
                <span className="text-sm text-[hsl(var(--foreground))]/85">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border bg-white/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold" data-testid="text-how-cta-title">Start with AI Hub</div>
                <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-how-cta-sub">
                  Explore modules and workflows.
                </div>
              </div>
              <Button className="rounded-full" data-testid="button-how-cta" type="button">
                Get started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AiHub() {
  const groups = useMemo(
    () => [
      {
        title: "Drafting",
        icon: Wand2,
        items: [
          {
            title: "AI Legal Drafting",
            desc: "Draft with an integrated research panel and structured prompts.",
            video: "",
            points: ["Integrated research panel", "Structured prompts", "Clean export-ready drafting"],
          },
          {
            title: "Empty Document",
            desc: "Start from a blank doc and build with AI assistance.",
            video: "",
            points: ["Blank doc to draft", "Quick sections", "Context-aware suggestions"],
          },
          {
            title: "Custom Drafting",
            desc: "Upload your format/template and generate in your structure.",
            video: "",
            points: ["Template-first drafting", "Format retention", "Consistent styling"],
          },
          {
            title: "Train Your Drafts",
            desc: "Teach Chakshi your firm’s SOPs, templates, and past drafts.",
            video: "",
            points: ["Firm SOP training", "Reusable templates", "Style alignment"],
          },
        ],
      },
      {
        title: "AI Chat",
        icon: MessageSquareText,
        items: [
          {
            title: "CNR Chatbot",
            desc: "Case status lookup using a CNR number.",
            video: "",
            points: ["Fast lookups", "Clear status summaries", "Less manual searching"],
          },
          {
            title: "DocuChat",
            desc: "Upload documents and extract timelines, issues, and evidence.",
            video: "",
            points: ["Large doc support", "Issue extraction", "Evidence finder"],
          },
          {
            title: "Nyaya AI",
            desc: "Ask legal questions and get concise, citation-backed outputs.",
            video: "",
            points: ["Citation-backed answers", "Structured responses", "Trusted sources"],
          },
        ],
      },
      {
        title: "Research",
        icon: Search,
        items: [
          {
            title: "AI Research Assistant",
            desc: "Advanced research with citations, timelines, and conflict detection.",
            video: "",
            points: ["Citations & references", "Chronological timeline", "Conflict detection"],
          },
          {
            title: "Legal Memo Generator",
            desc: "Generate IRAC/CRAC/CREAC memos from facts and sources.",
            video: "",
            points: ["IRAC/CRAC formats", "Clear issue framing", "Export-ready memos"],
          },
          {
            title: "Compliance Checklist",
            desc: "Live-verified compliance tasks with evidence and notes.",
            video: "",
            points: ["Risk tagging", "Notes & proof", "Saved checklists"],
          },
          {
            title: "Saved Notes",
            desc: "Save findings and reuse them across drafts and research.",
            video: "",
            points: ["Reusable notes", "Quick retrieval", "Cross-workflow continuity"],
          },
        ],
      },
    ],
    [],
  );

  const [g, setG] = useState(0);
  const [i, setI] = useState(0);

  const activeGroup = groups[g];
  const activeItem = activeGroup.items[i] ?? activeGroup.items[0];

  return (
    <Section
      id="ai-hub"
      kicker="All features, one hub"
      title="Inside Chakshi AI Hub"
      description="Browse the modules the way users experience them: categories, tools, and real screens."
    >
      <div className="rounded-[30px] border bg-white/55 p-2 shadow-sm backdrop-blur">
        <div className="rounded-[26px] border bg-white px-4 py-4 md:px-6 md:py-5">
          <div className="text-xs font-semibold text-[hsl(var(--foreground))]/70" data-testid="text-hub-tabs-title">
            Modules
          </div>

          <div className="mt-3" data-testid="panel-hub-tabs">
            <div className="rounded-full border bg-[hsl(var(--card))]/70 p-1 shadow-sm backdrop-blur">
              <div className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                <div className="flex w-max items-center gap-1" data-testid="row-hub-tabs">
                  {groups.map((grp, idx) => {
                    const selected = idx === g;
                    const Icon = grp.icon;
                    return (
                      <button
                        key={grp.title}
                        className={cn(
                          "relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition",
                          selected
                            ? "bg-white shadow-sm"
                            : "text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))]/90",
                        )}
                        onClick={() => {
                          setG(idx);
                          setI(0);
                        }}
                        data-testid={`tab-hub-module-${idx}`}
                        type="button"
                      >
                        <span
                          className={cn(
                            "grid h-7 w-7 place-items-center rounded-full border bg-[hsl(var(--background))] transition",
                            selected ? "border-[hsl(var(--primary))]/25" : "border-black/10",
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-4 w-4",
                              selected ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]/70",
                            )}
                          />
                        </span>
                        <span data-testid={`text-hub-tab-title-${idx}`}>{grp.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[340px,1fr] lg:items-start">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold" data-testid="text-hub-active-group">{activeGroup.title}</div>
                  <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-hub-active-group-sub">
                    Choose a tool to preview
                  </div>
                </div>
                <Badge className="rounded-full" data-testid="badge-hub">
                  AI Hub
                </Badge>
              </div>

              <div className="mt-4 space-y-2" data-testid="list-hub-tools">
                {activeGroup.items.map((it, idx) => {
                  const selected = idx === i;
                  return (
                    <button
                      key={it.title}
                      className={cn(
                        "group w-full rounded-2xl border bg-white/60 px-4 py-3 text-left shadow-sm transition hover:bg-white",
                        selected ? "border-[hsl(var(--primary))]/25" : "border-black/10",
                      )}
                      onClick={() => setI(idx)}
                      data-testid={`button-hub-item-${idx}`}
                      type="button"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold" data-testid={`text-hub-item-title-${idx}`}>{it.title}</div>
                          <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid={`text-hub-item-desc-${idx}`}>{it.desc}</div>
                        </div>
                        <span className={cn(
                          "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border bg-white transition",
                          selected ? "border-[hsl(var(--primary))]/25" : "border-black/10",
                        )}>
                          <ChevronRight className={cn("h-4 w-4", selected ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]")} />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative" data-testid="panel-hub-preview">
              <div className="rounded-[22px] border bg-[hsl(var(--background))] p-2 md:p-3">
                <div className="rounded-[18px] border bg-white shadow-sm">
                  <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
                    <div className="text-sm font-semibold" data-testid="text-hub-preview-title">{activeItem.title}</div>
                    <Badge variant="secondary" className="rounded-full bg-white" data-testid="badge-hub-preview">
                      Video preview
                    </Badge>
                  </div>

                  <div className="p-3 md:p-4">
                    <div className="relative overflow-hidden rounded-2xl border bg-[hsl(var(--card))]/60" data-testid="video-hub-container">
                      {activeItem.video ? (
                        <motion.video
                          key={activeItem.title}
                          src={activeItem.video}
                          className="block w-full"
                          controls
                          playsInline
                          preload="metadata"
                          data-testid="video-hub-preview"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                        />
                      ) : (
                        <div className="grid aspect-video w-full place-items-center bg-white/60" data-testid="placeholder-hub-video">
                          <div className="text-center">
                            <div className="text-sm font-semibold" data-testid="text-hub-placeholder-title">Add a video for this feature</div>
                            <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-hub-placeholder-sub">
                              Upload an .mp4 and we’ll wire it in.
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 rounded-2xl border bg-white/60 p-4" data-testid="panel-hub-points">
                      <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-hub-points-title">
                        <Check className="h-4 w-4 text-[hsl(var(--primary))]" />
                        Key highlights
                      </div>
                      <ul className="mt-3 space-y-2">
                        {(activeItem.points ?? []).map((p: string, idx: number) => (
                          <li key={p} className="flex items-start gap-2" data-testid={`row-hub-point-${idx}`}>
                            <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--primary))]/12">
                              <Check className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                            </span>
                            <span className="text-sm text-[hsl(var(--foreground))]/85" data-testid={`text-hub-point-${idx}`}>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Comparison() {
  const rows = [
    { label: "Time spent on repetitive tasks", a: "Hours per week", b: "Minutes per week" },
    { label: "Response speed to research questions", a: "Minutes to days", b: "Instant" },
    { label: "Draft iteration cycles", a: "Back-and-forth", b: "Structured outputs" },
    { label: "Citations & sources", a: "Manual hunting", b: "Built-in" },
    { label: "Compliance tracking", a: "Spreadsheets", b: "Live checklists" },
  ];

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[34px] border bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(31,40,57,0.55),transparent)] p-8 text-white shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)] md:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.22]" style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.16) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }} />
          <div className="relative">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium"
              data-testid="badge-compare"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Stay ahead with AI
            </div>
            <h2 className="mt-4 text-balance text-3xl font-[750] tracking-[-0.03em] md:text-5xl" data-testid="text-compare-title">
              Your team is already using AI for a reason
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base" data-testid="text-compare-sub">
              Chakshi AI Hub reduces repetitive work and keeps knowledge structured, searchable, and ready to cite.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="text-sm font-semibold" data-testid="text-compare-left-title">Without Chakshi</div>
                  <span className="text-xs text-white/60" data-testid="text-compare-left-sub">Traditional workflow</span>
                </div>
                <div className="divide-y divide-white/10">
                  {rows.map((r, idx) => (
                    <div key={r.label} className="px-5 py-4" data-testid={`row-compare-left-${idx}`}>
                      <div className="text-xs text-white/65">{r.label}</div>
                      <div className="mt-2 text-sm font-semibold">{r.a}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[hsl(var(--primary))]/35 bg-[linear-gradient(180deg,rgba(182,157,116,0.18),rgba(255,255,255,0.02))]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="text-sm font-semibold" data-testid="text-compare-right-title">With Chakshi AI Hub</div>
                  <Badge className="rounded-full" data-testid="badge-compare-right">Recommended</Badge>
                </div>
                <div className="divide-y divide-white/10">
                  {rows.map((r, idx) => (
                    <div key={r.label} className="px-5 py-4" data-testid={`row-compare-right-${idx}`}>
                      <div className="text-xs text-white/70">{r.label}</div>
                      <div className="mt-2 text-sm font-semibold">{r.b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="rounded-full" data-testid="button-compare-primary" type="button">
                Explore AI Hub
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
                data-testid="button-compare-secondary"
                type="button"
              >
                Request a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What is Chakshi AI Hub?",
      a: "Chakshi AI Hub is a complete legal AI workspace that brings drafting, chat, research, memo generation, and compliance into one place.",
    },
    {
      q: "Does Chakshi provide citations and trusted sources?",
      a: "Yes. Research and assistant outputs are designed to surface sources so teams can validate and use results confidently.",
    },
    {
      q: "Can I train Chakshi on my firm’s drafting style?",
      a: "Yes. Upload SOPs, templates, and past drafts so outputs align with your preferred structure, language, and tone.",
    },
    {
      q: "Can we use it for document-heavy cases?",
      a: "DocuChat supports large uploads and helps extract timelines, issues, and relevant evidence across documents.",
    },
    {
      q: "Can I save notes and reuse findings?",
      a: "Yes. Notes and saved items are designed to keep research reusable and accessible across workflows.",
    },
  ];

  return (
    <Section
      id="faq"
      kicker="Answers, clearly"
      title="Frequently asked questions"
      description="Everything you need to understand the AI Hub and how it fits into your practice." 
    >
      <div className="rounded-[28px] border bg-white/60 p-2 shadow-sm backdrop-blur">
        <div className="rounded-[22px] border bg-white px-4 py-2 md:px-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem key={f.q} value={`item-${idx}`} className="border-b last:border-b-0">
                <AccordionTrigger data-testid={`button-faq-${idx}`} className="text-left text-sm md:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent data-testid={`text-faq-${idx}`} className="text-sm text-[hsl(var(--muted-foreground))]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white/40 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex items-center gap-2" data-testid="text-footer-brand">
              <span className="grid h-9 w-9 place-items-center rounded-xl border bg-white shadow-sm">
                <Scale className="h-5 w-5 text-[hsl(var(--primary))]" />
              </span>
              <div>
                <div className="text-sm font-semibold">Chakshi AI Hub</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">A complete legal AI workspace</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-[hsl(var(--muted-foreground))]" data-testid="text-footer-desc">
              Draft, research, and validate with structured AI assistance designed for real legal workflows.
            </div>
          </div>

          <div className="md:text-right">
            <div className="inline-flex flex-wrap items-center gap-2">
              <Button className="rounded-full" data-testid="button-footer-primary" type="button">
                Get started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full bg-white/60 backdrop-blur"
                data-testid="button-footer-secondary"
                type="button"
              >
                Talk to us
              </Button>
            </div>
            <div className="mt-4 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} Chakshi. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AiHubLanding() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Nav />
      <Hero />
      <Capabilities />
      <HowItWorks />
      <AiHub />
      <Comparison />
      <FAQ />
      <Footer />
    </div>
  );
}
