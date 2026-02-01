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
  X,
  CheckCircle2,
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

function Proof() {
  const stats = [
    { label: "Trusted sources only", value: "Less noise", icon: ShieldCheck },
    { label: "CNR status lookup", value: "Seconds", icon: Search },
    { label: "Document-first work", value: "Upload & extract", icon: Files },
    { label: "Drafting outputs", value: "Structured", icon: FileText },
  ];

  return (
    <Section
      id="proof"
      kicker="Built for high-stakes work"
      title="Less switching. More certainty."
      description="Chakshi AI Hub keeps research, drafting, and case lookups in one place—so teams move faster with less noise."
    >
      <div className="rounded-[30px] border bg-white/55 p-2 shadow-sm backdrop-blur">
        <div
          className="relative overflow-hidden rounded-[26px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.70))] p-6 md:p-8"
          data-testid="card-proof"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{ backgroundImage: "url(/images/noise-cream.jpg)", backgroundSize: "520px 520px" }}
          />
          <div className="relative grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div>
              <div className="text-sm font-semibold" data-testid="text-proof-title">
                What changes for your team
              </div>
              <div className="grid gap-2" data-testid="stack-proof-copy">
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]" data-testid="text-proof-sub">
                  Fewer tabs, fewer copy-pastes, and fewer dead-ends. Each module is designed to be explainable, structured, and easy to cite.
                </p>
                <div className="flex flex-wrap gap-2" data-testid="row-proof-badges">
                {["Trusted sources", "Citations", "CNR", "Document chat", "Compliance"].map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full bg-white" data-testid={`badge-proof-${t.toLowerCase().replaceAll(" ", "-")}`}>
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2" data-testid="grid-proof-stats">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="rounded-2xl border bg-white/70 p-4 shadow-sm" data-testid={`card-proof-stat-${idx}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-[hsl(var(--muted-foreground))]" data-testid={`text-proof-stat-label-${idx}`}>{s.label}</div>
                        <div className="mt-1 text-sm font-semibold" data-testid={`text-proof-stat-value-${idx}`}>{s.value}</div>
                      </div>
                      <span className="grid h-9 w-9 place-items-center rounded-xl border bg-[hsl(var(--background))]">
                        <Icon className="h-4 w-4 text-[hsl(var(--primary))]" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Highlights() {
  const items = [
    {
      title: "Multilingual drafting & translation",
      desc: "Translate and draft across multiple languages without leaving the workspace.",
      video: "/videos/Upload ref docs demo final - Made with Clipchamp.mp4",
    },
    {
      title: "AI assistance inside the editor",
      desc: "Context-aware help while you draft—so you stay in flow, not in prompts.",
      video: "/videos/empty doc+ ai assis demo final - Made with Clipchamp.mp4",
    },
    {
      title: "Nyaya AI where you need it",
      desc: "Get Nyaya AI help via hover and directly inside DocuChat for faster answers.",
      video: "/videos/Nyaya ai demo final - Made with Clipchamp.mp4",
    },
    {
      title: "Research panel (Standard + Advanced)",
      desc: "Switch between quick research and advanced mode with citations, timelines, and contradictions.",
      video: "/videos/Research demo final - Made with Clipchamp.mp4",
    },
    {
      title: "Notes that stay connected",
      desc: "Capture notes during research and drafting so context is always reusable.",
      video: "/videos/Legal Memo demo final - Made with Clipchamp.mp4",
    },
    {
      title: "Calendar sync + compliance deadlines",
      desc: "Connect Google Calendar to sync Chakshi deadlines and keep compliance dates updated.",
      video: "/videos/Checklist demo final - Made with Clipchamp.mp4",
    },
    {
      title: "Live in-app notifications",
      desc: "Get live updates inside the app so tasks and deadlines don’t get missed.",
      video: "/videos/Checklist demo final - Made with Clipchamp.mp4",
    },
  ];

  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <Section
      id="highlights"
      kicker="Premium capabilities"
      title="Chakshi Highlights"
      description="Advanced features designed for modern legal teams—built into the workspace, not bolted on."
    >
      <div className="rounded-[30px] border bg-white/55 p-2 shadow-sm backdrop-blur">
        <div className="grid gap-0 rounded-[26px] border bg-white p-2 [@media(min-width:720px)]:grid-cols-[1.25fr,0.75fr]">
          <div className="rounded-[22px] border bg-[hsl(var(--background))] p-2 md:p-3" data-testid="panel-highlights-video">
            <div className="rounded-[18px] border bg-white shadow-sm overflow-hidden">
              <div className="flex items-start justify-between gap-3 border-b px-4 py-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold" data-testid="text-highlights-title">{current.title}</div>
                  <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-highlights-desc">{current.desc}</div>
                </div>
                <Badge variant="secondary" className="rounded-full bg-white" data-testid="badge-highlights-preview">
                  Video demo
                </Badge>
              </div>

              <div className="sr-only" data-testid="text-highlights-active-video-src">{current.video || ""}</div>

              <div className="p-3 md:p-4">
                <div className="relative overflow-hidden rounded-2xl border bg-[hsl(var(--card))]/60" data-testid="video-highlights-container">
                  {current.video ? (
                    <motion.video
                      key={current.title}
                      src={current.video}
                      className="block w-full"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      data-testid="video-highlights-preview"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    />
                  ) : (
                    <div className="grid aspect-video w-full place-items-center bg-white/60" data-testid="placeholder-highlights-video">
                      <div className="text-center">
                        <div className="text-sm font-semibold" data-testid="text-highlights-placeholder-title">Add a video for this feature</div>
                        <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-highlights-placeholder-sub">
                          Upload an .mp4 and we’ll wire it in.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border bg-[hsl(var(--background))] p-2 md:p-3" data-testid="panel-highlights-list">
            <div className="rounded-[18px] border bg-white shadow-sm overflow-hidden">
              <div className="border-b px-4 py-3">
                <div className="text-xs font-semibold text-[hsl(var(--foreground))]/70" data-testid="text-highlights-list-title">Highlights</div>
              </div>

              <div className="p-2">
                <div className="grid gap-1" data-testid="list-highlights">
                  {items.map((it, idx) => {
                    const selected = idx === active;
                    return (
                      <button
                        key={it.title}
                        className={cn(
                          "w-full rounded-2xl border px-3 py-2.5 text-left transition",
                          selected
                            ? "bg-[hsl(var(--background))] shadow-sm border-[hsl(var(--primary))]/25"
                            : "bg-white hover:bg-[hsl(var(--background))] border-black/10",
                        )}
                        onClick={() => setActive(idx)}
                        type="button"
                        data-testid={`button-highlights-item-${idx}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-sm font-semibold" data-testid={`text-highlights-item-title-${idx}`}>{it.title}</div>
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
            video: "/videos/Upload ref docs demo final - Made with Clipchamp.mp4",
            points: ["Integrated research panel", "Structured prompts", "Clean export-ready drafting"],
          },
          {
            title: "Empty Document",
            desc: "Start from a blank doc and build with AI assistance.",
            video: "/videos/empty doc+ ai assis demo final - Made with Clipchamp.mp4",
            points: ["Blank doc to draft", "Quick sections", "Context-aware suggestions"],
          },
          {
            title: "Custom Drafting",
            desc: "Upload your format/template and generate in your structure.",
            video: "/videos/Upload ref docs demo final - Made with Clipchamp.mp4",
            points: ["Template-first drafting", "Format retention", "Consistent styling"],
          },
          {
            title: "Train Your Drafts",
            desc: "Teach Chakshi your firm’s SOPs, templates, and past drafts.",
            video: "/videos/Train your drafts demo final - Made with Clipchamp.mp4",
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
            video: "/videos/cnr demo final - Made with Clipchamp.mp4",
            points: ["CNR-based case lookup", "Fast status summaries", "Less manual searching"],
          },
          {
            title: "DocuChat",
            desc: "Upload documents and extract timelines, issues, and evidence.",
            video: "/videos/Docuchat demo final - Made with Clipchamp.mp4",
            points: ["Large doc support", "Issue extraction", "Evidence finder"],
          },
          {
            title: "Nyaya AI",
            desc: "Ask legal questions and get concise, citation-backed outputs.",
            video: "/videos/Nyaya ai demo final - Made with Clipchamp.mp4",
            points: ["Trusted sources", "Citation-backed answers", "Structured outputs"],
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
            video: "/videos/Research demo final - Made with Clipchamp.mp4",
            points: ["Trusted sources only", "Citations & references", "Conflict detection"],
          },
          {
            title: "Legal Memo Generator",
            desc: "Generate IRAC/CRAC/CREAC memos from facts and sources.",
            video: "/videos/Legal Memo demo final - Made with Clipchamp.mp4",
            points: ["IRAC/CRAC formats", "Clear issue framing", "Export-ready memos"],
          },
          {
            title: "Compliance Checklist",
            desc: "Live-verified compliance tasks with evidence and notes.",
            video: "/videos/Checklist demo final - Made with Clipchamp.mp4",
            points: ["Live verification", "Risk tagging", "Notes & proof"],
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

          <div className="mt-5 flex flex-col gap-0 [@media(min-width:960px)]:flex-row [@media(min-width:960px)]:items-stretch" data-testid="layout-hub">
            <div className="w-full [@media(min-width:960px)]:w-[340px]">
              <div className="rounded-[22px] border bg-[hsl(var(--background))] p-2 md:p-3" data-testid="panel-hub-left">
                <div className="rounded-[18px] border bg-white shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between gap-3 border-b px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold" data-testid="text-hub-active-group">{activeGroup.title}</div>
                      <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-hub-active-group-sub">
                        Choose a tool to preview
                      </div>
                    </div>
                    <Badge className="rounded-full" data-testid="badge-hub">AI Hub</Badge>
                  </div>

                  <div className="p-2" data-testid="list-hub-tools">
                    <div className="grid gap-2">
                      {activeGroup.items.map((it, idx) => {
                        const selected = idx === i;
                        return (
                          <button
                            key={it.title}
                            className={cn(
                              "group w-full rounded-2xl border px-4 py-3 text-left transition",
                              selected
                                ? "bg-[hsl(var(--background))] shadow-sm border-[hsl(var(--primary))]/25"
                                : "bg-white hover:bg-[hsl(var(--background))] border-black/10",
                            )}
                            onClick={() => setI(idx)}
                            data-testid={`button-hub-item-${idx}`}
                            type="button"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <div className="text-sm font-semibold" data-testid={`text-hub-item-title-${idx}`}>{it.title}</div>
                              </div>
                              <span
                                className={cn(
                                  "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border bg-white transition",
                                  selected ? "border-[hsl(var(--primary))]/25" : "border-black/10",
                                )}
                              >
                                <ChevronRight className={cn("h-4 w-4", selected ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]")} />
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" data-testid="panel-hub-preview">
              <div className="rounded-[22px] border bg-[hsl(var(--background))] p-2 md:p-3 [@media(min-width:960px)]:-ml-px" data-testid="panel-hub-right">
                <div className="rounded-[18px] border bg-white shadow-sm overflow-hidden">
                  <div className="flex items-start justify-between gap-3 border-b px-4 py-3">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold" data-testid="text-hub-preview-title">{activeItem.title}</div>
                      <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]" data-testid="text-hub-preview-desc">{activeItem.desc}</div>
                    </div>
                    <Badge variant="secondary" className="rounded-full bg-white" data-testid="badge-hub-preview">
                      Video preview
                    </Badge>
                  </div>

                  <div className="sr-only" data-testid="text-hub-active-video-src">{activeItem.video || ""}</div>

                  <div className="p-3 md:p-4">
                    <div className="grid gap-4">
                      <div>
                        <div className="relative overflow-hidden rounded-2xl border bg-[hsl(var(--card))]/60" data-testid="video-hub-container">
                          {activeItem.video ? (
                            <motion.video
                              key={activeItem.title}
                              src={activeItem.video}
                              className="block w-full"
                              autoPlay
                              muted
                              loop
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
                          <div className="flex items-center justify-between gap-3" data-testid="row-hub-points-header">
                            <div className="flex items-center gap-2 text-sm font-semibold" data-testid="text-hub-points-title">
                              <Check className="h-4 w-4 text-[hsl(var(--primary))]" />
                              Key highlights
                            </div>
                          </div>
                          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2" data-testid="grid-hub-points">
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
        </div>
      </div>
    </Section>
  );
}

function Comparison() {
  const rows = [
    { label: "Does legal drafting for you", a: "Does not do Legal Drafting", b: "Does Legal Drafting for you" },
    { label: "Drafting from uploaded PDFs/Word", a: "Does not do Legal Drafting based on uploaded pdf/word", b: "Does Legal Drafting based on uploaded pdf/word" },
    { label: "Automatic legal research", a: "Does not do automatic Legal Research", b: "Does accurate automatic Legal Research" },
    { label: "Legal research inside the app", a: "Does not allow you to do Legal Research", b: "Allows you to do Legal Research" },
    { label: "Read a case within app", a: "Does not allow you to read cases", b: "Allows you to read cases inside app" },
    { label: "Generate arguments", a: "Does not allow you to generate arguments", b: "Allows you to generate arguments" },
    { label: "Generate summaries", a: "Does not allow you to generate summaries", b: "Allows you to generate summaries" },
    { label: "Prepare case notes", a: "Does not allow you to prepare case notes", b: "Allows you to prepare case notes" },
    { label: "Extract dates from PDFs", a: "Does not allow you to prepare list of dates from a pdf automatically", b: "Allows you to prepare list of dates from a pdf automatically" },
    { label: "Expert legal memos", a: "Does not prepare expert legal memos for you", b: "Prepares expert legal memos for you" },
  ];

  return (
    <section className="py-14 md:py-20" data-testid="section-comparison">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[34px] border bg-[radial-gradient(1200px_520px_at_50%_-12%,rgba(31,40,57,0.62),transparent)] p-8 text-white shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)] md:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{ backgroundImage: "url(/images/noise-cream.jpg)", backgroundSize: "520px 520px" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.52),rgba(0,0,0,0.20),rgba(0,0,0,0.36))]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.22),transparent)]" />

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium"
              data-testid="badge-compare"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Stay ahead with AI
            </div>
            <h2 className="mt-4 text-balance text-3xl font-[750] tracking-[-0.03em] md:text-5xl" data-testid="text-compare-title">
              Your competitors are already using AI for a reason
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base" data-testid="text-compare-sub">
              Chakshi AI Hub reduces repetitive work and keeps knowledge structured, searchable, and ready to cite.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2" data-testid="grid-compare">
              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur" data-testid="card-compare-without">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="text-sm font-semibold" data-testid="text-compare-left-title">Without Chakshi</div>
                  <span className="text-xs text-white/65" data-testid="text-compare-left-sub">Traditional workflow</span>
                </div>
                <div className="divide-y divide-white/10">
                  {rows.map((r, idx) => (
                    <div key={r.label} className="grid grid-cols-[16px,1fr] gap-3 px-5 py-4" data-testid={`row-compare-left-${idx}`}>
                      <X className="mt-0.5 h-4 w-4 text-red-400" />
                      <div className="min-w-0">
                        <div className="text-xs text-white/70" data-testid={`text-compare-left-label-${idx}`}>{r.label}</div>
                        <div className="mt-2 text-sm font-semibold text-white" data-testid={`text-compare-left-value-${idx}`}>{r.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl border border-[hsl(var(--primary))]/45 bg-[linear-gradient(180deg,rgba(182,157,116,0.22),rgba(255,255,255,0.04))] backdrop-blur"
                data-testid="card-compare-with"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="text-sm font-semibold" data-testid="text-compare-right-title">With Chakshi AI Hub</div>
                  <Badge className="rounded-full" data-testid="badge-compare-right">Recommended</Badge>
                </div>
                <div className="divide-y divide-white/10">
                  {rows.map((r, idx) => (
                    <div key={r.label} className="grid grid-cols-[16px,1fr] gap-3 px-5 py-4" data-testid={`row-compare-right-${idx}`}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                      <div className="min-w-0">
                        <div className="text-xs text-white/75" data-testid={`text-compare-right-label-${idx}`}>{r.label}</div>
                        <div className="mt-2 text-sm font-semibold text-white" data-testid={`text-compare-right-value-${idx}`}>{r.b}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3" data-testid="row-compare-cta-buttons">
              <Button className="rounded-full" data-testid="button-compare-primary" type="button">
                Explore AI Hub
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white/15"
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
      a: "Chakshi AI Hub is a complete legal AI workspace that brings drafting, document chat, research, memo generation, CNR lookup, and compliance into one place.",
    },
    {
      q: "Does Chakshi search the entire internet?",
      a: "No. Chakshi is designed to focus on trusted sources so results are practical, reference-first, and less noisy.",
    },
    {
      q: "Can I check case status with a CNR number?",
      a: "Yes. Use the CNR chatbot to pull a case status quickly without jumping between portals.",
    },
    {
      q: "Can I train Chakshi on my firm’s drafting style?",
      a: "Yes. Upload SOPs, templates, and past drafts so outputs align with your preferred structure, language, and tone.",
    },
    {
      q: "Can we use it for document-heavy cases?",
      a: "Yes. DocuChat supports large uploads and helps extract timelines, issues, and evidence across documents.",
    }
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
      <Proof />
      <AiHub />
      <Highlights />
      <Comparison />
      <FAQ />
      <Footer />
    </div>
  );
}
