# SpotShare Website Concept Generator

An interactive playground for testing different website copy directions for SpotShare.

---

## The files that matter

| File | What it does |
|------|--------------|
| `src/data.ts` | **All the copy.** Edit titles, body text, bullets, CTAs here. Add new variants here. |
| `src/App.tsx` | Renders the app. Controls how sections look on screen. |
| `src/styles.css` | Global styles and Tailwind import. |

Everything else (config files, `package.json`, `index.html`) you can ignore.

---

## How to run it

```bash
npm install
npm run dev
```

Open http://localhost:5173 — the page hot-reloads as you save files.

---

## How to edit copy

Open `src/data.ts`. Find the section you want to change. Edit the text directly.

Example — changing the Home hero:

```ts
{
  id: 'hero',
  label: 'Hero',
  variants: [
    {
      label: 'Problem-First',
      eyebrow: 'Guest parking is a building-wide problem',
      title: "Your building has parking. Guests just can't use it.",   // ← change this
      body: "Reserved spots sit empty while guests circle the block.", // ← and this
      cta: 'Schedule a Walkthrough',                                   // ← and this
      layoutType: 'centered',
    },
    ...
  ],
}
```

Save the file. The browser updates instantly.

---

## How to add a section variant

Find the section in `src/data.ts` and add a new object to the `variants` array:

```ts
variants: [
  // existing variants...
  {
    label: 'My New Angle',           // name shown in the sidebar
    eyebrow: 'Optional small text',  // appears above the headline (leave out if not needed)
    title: 'Your new headline here.',
    body: 'Supporting paragraph that explains the value.',
    bullets: [                       // optional — leave out if you don't want a list
      'First point',
      'Second point',
      'Third point',
    ],
    cta: 'Button text here',
    layoutType: 'centered',          // see layout options below
  },
],
```

The control panel sidebar will show a new numbered button automatically.

### Layout options

| `layoutType` | Description |
|---|---|
| `'centered'` | Headline and body centered on a white background |
| `'split'` | Text on the left, bullet cards on the right |
| `'dark'` | Dark charcoal background — good for contrast sections |
| `'highlight'` | Light accent-color background — good for warm/community sections |
| `'list'` | Left-aligned with bullet points rendered as cards |

---

## Pages & sections

| Page | Sections |
|------|----------|
| Home | Hero, Problem, How It Works, Social Proof, Audience Router, Final CTA |
| Resident | Hero, Pain Points, Benefits, How It Works, Objections, CTA |
| Property Manager | Hero, Pain Points, Operational Benefits, Implementation, Proof, CTA |
| HOA Board | Hero, Board Concerns, Value Proposition, Risk Reduction, Approval Process, CTA |

Each section has 3 variants. Presets pick specific variants across all pages at once.

---

## Presets

Presets are at the bottom of `src/data.ts`. They map page → section → variant index (0-based).

To create a new preset, copy an existing one and change the numbers:

```ts
{
  id: 'my-preset',
  label: 'My Preset',
  description: 'What this messaging angle is about.',
  selections: {
    home: { hero: 0, problem: 1, howItWorks: 2, socialProof: 0, audienceRouter: 0, finalCta: 1 },
    resident: { hero: 1, painPoints: 0, benefits: 0, howItWorks: 0, objections: 0, cta: 0 },
    propertyManager: { hero: 0, painPoints: 0, operationalBenefits: 1, implementation: 0, proof: 0, cta: 0 },
    hoa: { hero: 0, boardConcerns: 0, valueProposition: 0, riskReduction: 0, approvalProcess: 0, cta: 0 },
  },
},
```

---

## Tech

- Vite + React + TypeScript
- Tailwind CSS v4
- No backend — state saved in `localStorage`
