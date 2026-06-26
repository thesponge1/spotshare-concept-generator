import React, { useState, useEffect } from 'react'
import { PAGES, DEFAULT_SELECTIONS, RESIDENT_NARRATIVES, PROPERTY_MANAGER_NARRATIVES, HOA_NARRATIVES } from './data'
import type { Variant, Page } from './data'
import './styles.css'

// ================================================================
// STATE
// ================================================================

interface AppState {
  activePage: string
  selections: Record<string, Record<string, number>>
  // Active narrative per page. '' or missing = fall back to section-variant system.
  activeNarratives: Record<string, string>
}

const STORAGE_KEY = 'spotshare-v4'

function loadState(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved) as AppState
  } catch {}
  return {
    activePage: 'resident',
    selections: structuredClone(DEFAULT_SELECTIONS),
    activeNarratives: {},
  }
}

// ================================================================
// SECTION RENDERER
// Renders a variant object based on its layoutType.
// All layouts get: eyebrow, title, body, optional bullets, cta button.
// The page's color classes (textClass, bgClass, etc.) control accent color.
// ================================================================

function SectionBlock({
  variant,
  page,
  isHero,
}: {
  variant: Variant
  page: Page
  isHero: boolean
}) {
  const titleSize = isHero ? 'text-5xl md:text-6xl font-bold leading-tight' : 'text-3xl font-bold'
  const bodySize = isHero ? 'text-xl' : 'text-base'
  const padding = isHero ? 'py-24' : 'py-16'
  const maxWidth = isHero ? 'max-w-4xl' : 'max-w-3xl'

  const Eyebrow = () =>
    variant.eyebrow ? (
      <p className={`${page.textClass} text-sm font-semibold uppercase tracking-widest mb-4`}>
        {variant.eyebrow}
      </p>
    ) : null

  const Bullets = ({ className = '' }: { className?: string }) =>
    variant.bullets ? (
      <ul className={`space-y-2 mb-8 ${className}`}>
        {variant.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`${page.textClass} mt-1 flex-shrink-0`}>✓</span>
            <span className="text-gray-700 text-sm">{b}</span>
          </li>
        ))}
      </ul>
    ) : null

  const BulletCards = () =>
    variant.bullets ? (
      <div className="space-y-3">
        {variant.bullets.map((b, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${page.lightClass} rounded-xl p-4 border ${page.borderClass}`}
          >
            <span className={`${page.textClass} mt-0.5 flex-shrink-0`}>✓</span>
            <span className="text-gray-700 text-sm">{b}</span>
          </div>
        ))}
      </div>
    ) : null

  const ListCards = () =>
    variant.bullets ? (
      <ul className="space-y-3 mb-8">
        {variant.bullets.map((b, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border-l-4 ${page.borderClass} border border-gray-100`}
          >
            <span className={`${page.textClass} mt-0.5 flex-shrink-0`}>✓</span>
            <span className="text-gray-700">{b}</span>
          </li>
        ))}
      </ul>
    ) : null

  const CtaButton = ({ className = '' }: { className?: string }) => (
    <button className={`${page.bgClass} text-white font-semibold px-8 py-3 rounded-full transition-all ${className}`}>
      {variant.cta}
    </button>
  )

  // ---- STEPS layout ----
  if (variant.layoutType === 'steps') {
    const cols = variant.bullets && variant.bullets.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
    return (
      <section className={`${padding} px-8 bg-white`}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow />
          <h2 className={`${titleSize} text-gray-900 mb-4 text-center`}>{variant.title}</h2>
          <p className={`${bodySize} text-gray-600 mb-12 text-center max-w-2xl mx-auto`}>{variant.body}</p>
          {variant.bullets && (
            <div className={`grid gap-5 ${cols} mb-10`}>
              {variant.bullets.map((b, i) => (
                <div key={i} className={`${page.lightClass} border ${page.borderClass} rounded-2xl p-6`}>
                  <div className={`w-9 h-9 ${page.bgClass} text-white rounded-xl flex items-center justify-center font-bold text-sm mb-4 flex-shrink-0`}>
                    {i + 1}
                  </div>
                  <p className="text-gray-800 font-medium leading-snug text-sm">{b}</p>
                </div>
              ))}
            </div>
          )}
          <div className="text-center"><CtaButton /></div>
        </div>
      </section>
    )
  }

  // ---- QUOTE layout ----
  if (variant.layoutType === 'quote') {
    return (
      <section className={`${padding} px-8 bg-gray-50`}>
        <div className={`${maxWidth} mx-auto`}>
          <div className={`${page.textClass} text-9xl font-black leading-none mb-0 opacity-10 select-none -mb-6`}>"</div>
          {variant.eyebrow && (
            <p className={`${page.textClass} text-sm font-semibold uppercase tracking-widest mb-4`}>
              {variant.eyebrow}
            </p>
          )}
          <h2 className={`${titleSize} text-gray-900 mb-6`}>{variant.title}</h2>
          <p className={`${bodySize} text-gray-600 mb-8 max-w-2xl`}>{variant.body}</p>
          {variant.bullets && (
            <ul className="space-y-4 mb-8 max-w-2xl">
              {variant.bullets.map((b, i) => (
                <li key={i} className={`border-l-4 ${page.borderClass} pl-4 text-gray-600 text-sm`}>
                  {b}
                </li>
              ))}
            </ul>
          )}
          <CtaButton />
        </div>
      </section>
    )
  }

  // ---- DARK layout ----
  if (variant.layoutType === 'dark') {
    return (
      <section className={`${padding} px-8 bg-gray-950 text-white`}>
        <div className={`${maxWidth} mx-auto text-center`}>
          {variant.eyebrow && (
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
              {variant.eyebrow}
            </p>
          )}
          <h2 className={`${titleSize} text-white mb-6`}>{variant.title}</h2>
          <p className={`${bodySize} text-gray-400 mb-8`}>{variant.body}</p>
          {variant.bullets && (
            <ul className="text-left max-w-xl mx-auto mb-8 space-y-2">
              {variant.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          )}
          <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
            {variant.cta}
          </button>
        </div>
      </section>
    )
  }

  // ---- HIGHLIGHT layout ----
  if (variant.layoutType === 'highlight') {
    return (
      <section className={`${padding} px-8 ${page.lightClass}`}>
        <div className={`${maxWidth} mx-auto text-center`}>
          <Eyebrow />
          <h2 className={`${titleSize} text-gray-900 mb-6`}>{variant.title}</h2>
          <p className={`${bodySize} text-gray-600 mb-8`}>{variant.body}</p>
          <Bullets className="text-left max-w-xl mx-auto" />
          <CtaButton />
        </div>
      </section>
    )
  }

  // ---- SPLIT layout ----
  if (variant.layoutType === 'split') {
    return (
      <section className={`${padding} px-8 bg-white`}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow />
            <h2 className={`${titleSize} text-gray-900 mb-6`}>{variant.title}</h2>
            <p className={`${bodySize} text-gray-600 mb-8`}>{variant.body}</p>
            <CtaButton />
          </div>
          <BulletCards />
        </div>
      </section>
    )
  }

  // ---- LIST layout ----
  if (variant.layoutType === 'list') {
    return (
      <section className={`${padding} px-8 bg-gray-50`}>
        <div className={`${maxWidth} mx-auto`}>
          <Eyebrow />
          <h2 className={`${titleSize} text-gray-900 mb-4`}>{variant.title}</h2>
          <p className={`${bodySize} text-gray-600 mb-8`}>{variant.body}</p>
          <ListCards />
          <CtaButton />
        </div>
      </section>
    )
  }

  // ---- CENTERED layout (default) ----
  return (
    <section className={`${padding} px-8 bg-white`}>
      <div className={`${maxWidth} mx-auto text-center`}>
        <Eyebrow />
        <h2 className={`${titleSize} text-gray-900 mb-6`}>{variant.title}</h2>
        <p className={`${bodySize} text-gray-600 mb-8`}>{variant.body}</p>
        <Bullets className="text-left max-w-xl mx-auto" />
        <CtaButton />
      </div>
    </section>
  )
}

// ================================================================
// APP
// ================================================================

export default function App() {
  const [state, setState] = useState<AppState>(loadState)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Persist to localStorage on every state change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const activePage = PAGES.find((p) => p.id === state.activePage) ?? PAGES[0]
  const pageSelections = state.selections[state.activePage] ?? {}

  // Switch the active page tab
  function setPage(pageId: string) {
    setState((s) => ({ ...s, activePage: pageId }))
  }

  // Change a single section's variant on the active page
  function setVariant(sectionId: string, index: number) {
    setState((s) => ({
      ...s,
      selections: {
        ...s.selections,
        [s.activePage]: { ...s.selections[s.activePage], [sectionId]: index },
      },
    }))
  }

  // Randomly pick a variant for every section on every page
  function randomize() {
    const newSelections = structuredClone(DEFAULT_SELECTIONS)
    for (const page of PAGES) {
      for (const section of page.sections) {
        newSelections[page.id][section.id] = Math.floor(Math.random() * section.variants.length)
      }
    }
    setState((s) => ({
      ...s,
      activeNarratives: { ...s.activeNarratives, [s.activePage]: '' },
      selections: newSelections,
    }))
  }

  // Reset everything back to defaults
  function reset() {
    setState({
      activePage: 'resident',
      selections: structuredClone(DEFAULT_SELECTIONS),
      activeNarratives: {},
    })
  }

  // Switch which narrative is showing for the active page ('' = none, use section variants)
  function setNarrative(narrativeId: string) {
    setState((s) => ({
      ...s,
      activeNarratives: { ...s.activeNarratives, [s.activePage]: narrativeId },
    }))
  }

  const pageNarratives =
    activePage.id === 'resident' ? RESIDENT_NARRATIVES :
    activePage.id === 'propertyManager' ? PROPERTY_MANAGER_NARRATIVES :
    activePage.id === 'hoa' ? HOA_NARRATIVES : []
  const currentNarrativeId = state.activeNarratives[state.activePage] ?? ''
  const activeNarrative = pageNarratives.find((n) => n.id === currentNarrativeId)
  const headerBadgeLabel = activeNarrative ? `${activeNarrative.label} (Narrative)` : undefined

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">

      {/* ---- HEADER ---- */}
      <header className="flex items-center gap-3 px-4 py-2.5 bg-white border-b border-gray-200 flex-shrink-0 shadow-sm z-20">
        {/* Sidebar toggle */}
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          title="Toggle sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <span className="font-bold text-gray-800 text-sm">
          SpotShare <span className="text-gray-400 font-normal">/ Concept Generator</span>
        </span>

        {/* Page tabs */}
        <div className="flex items-center gap-0.5 ml-4 bg-gray-100 rounded-xl p-1">
          {PAGES.map((page) => (
            <button
              key={page.id}
              onClick={() => setPage(page.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                state.activePage === page.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {page.icon} {page.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          {headerBadgeLabel && (
            <span className="hidden md:inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              {headerBadgeLabel}
            </span>
          )}
          <button
            onClick={randomize}
            className="text-xs font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all"
          >
            🎲 Shuffle
          </button>
          <button
            onClick={reset}
            className="text-xs font-medium text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all"
          >
            ↺ Reset
          </button>
        </div>
      </header>

      {/* ---- BODY ---- */}
      <div className="flex flex-1 overflow-hidden">

        {/* ---- SIDEBAR ---- */}
        <aside
          className={`flex-shrink-0 transition-all duration-300 overflow-hidden border-r border-gray-200 bg-white ${
            sidebarOpen ? 'w-72' : 'w-0'
          }`}
        >
          <div className="w-72 h-full overflow-y-auto p-4 space-y-6">

            {/* Narrative Strategies — Resident, Property Manager, and HOA pages. See NARRATIVES.md. */}
            {pageNarratives.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Narrative Strategies
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setNarrative('')}
                    className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${
                      !currentNarrativeId
                        ? 'border-blue-400 bg-blue-50 text-blue-900'
                        : 'border-gray-100 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">Section Variants</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                      Use the presets &amp; per-section variants below.
                    </div>
                  </button>
                  {pageNarratives.map((narrative) => (
                    <button
                      key={narrative.id}
                      onClick={() => setNarrative(narrative.id)}
                      className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${
                        currentNarrativeId === narrative.id
                          ? 'border-blue-400 bg-blue-50 text-blue-900'
                          : 'border-gray-100 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="font-semibold text-sm">{narrative.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">{narrative.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Variant selectors for the active page — hidden while a Narrative is active or on resident page */}
            {activeNarrative || activePage.id === 'resident' ? (
              activeNarrative ? (
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  {activePage.label} — Sections
                </h3>
                <p className="text-xs text-gray-400 italic leading-snug">
                  Showing the "{activeNarrative.label}" narrative. Switch to "Section Variants" above to edit individual sections.
                </p>
              </div>
              ) : null
            ) : (
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                {activePage.label} — Sections
              </h3>
              <div className="space-y-5">
                {activePage.sections.map((section) => {
                  const selectedIndex = pageSelections[section.id] ?? 0
                  return (
                    <div key={section.id}>
                      <div className="text-xs font-semibold text-gray-500 mb-1.5">{section.label}</div>
                      <div className="flex flex-wrap gap-1 mb-1">
                        {section.variants.map((v, i) => (
                          <button
                            key={i}
                            onClick={() => setVariant(section.id, i)}
                            title={v.label}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                              selectedIndex === i
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                      <div className="text-xs text-gray-400 italic">
                        {section.variants[selectedIndex]?.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            )}

          </div>
        </aside>

        {/* ---- PAGE PREVIEW ---- */}
        <main className="flex-1 overflow-y-auto bg-gray-50">

          {/* Status bar */}
          <div className="sticky top-0 z-10 bg-gray-100/95 backdrop-blur-sm border-b border-gray-200 px-6 py-2 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Previewing: <span className="font-semibold text-gray-800">{activePage.label}</span>
            </span>
            <span className="text-xs font-mono text-gray-400 hidden md:block">
              {activeNarrative
                ? `Narrative: ${activeNarrative.label}`
                : activePage.sections
                    .map((s) => {
                      const v = pageSelections[s.id] ?? 0
                      return `${s.label}:V${v + 1}`
                    })
                    .join(' · ')}
            </span>
          </div>

          {/* Simulated website */}
          <div className="bg-white min-h-full shadow-sm">

            {/* Simulated nav */}
            <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white">
              <span className="font-bold text-xl text-blue-600">SpotShare</span>
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
                <span>Residents</span>
                <span>Property Managers</span>
                <span>HOA Boards</span>
              </div>
              <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Schedule Walkthrough
              </button>
            </nav>

            {/* Sections */}
            {activePage.sections.map((section, i) => {
              const narrativeVariant = activeNarrative?.sections[section.id]
              const variantIndex = pageSelections[section.id] ?? 0
              const variant = narrativeVariant ?? section.variants[variantIndex] ?? section.variants[0]
              return (
                <SectionBlock
                  key={section.id}
                  variant={variant}
                  page={activePage}
                  isHero={i === 0}
                />
              )
            })}

          </div>
        </main>
      </div>
    </div>
  )
}
