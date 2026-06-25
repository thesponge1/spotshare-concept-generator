# Component Guide — Adding New Variants

## Architecture Overview

Each section is a React component that accepts a `variant: number` prop (0-indexed).
Variants are rendered from an array of sub-components using `VARIANTS[variant] ?? VARIANTS[0]`.

## File Locations

```
src/
  components/
    sections/
      home/
        HeroSection.tsx         ← 10 variants (V0–V9)
        ProblemSection.tsx
        HowItWorksSection.tsx
        SocialProofSection.tsx
        AudienceRouterSection.tsx
        FinalCtaSection.tsx
      resident/
        ResidentSections.tsx    ← All 6 resident sections in one file
      propertyManager/
        PropertyManagerSections.tsx
      hoa/
        HOASections.tsx
```

## How to Add a New Variant

### 1. Open the relevant section file

For example, to add an 11th Home Hero variant, open:
`src/components/sections/home/HeroSection.tsx`

### 2. Create the variant component

Add a new function `V10` before the `VARIANTS` array:

```tsx
const V10 = ({ onNavigate }: Props) => (
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-8 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Your new headline here.
      </h1>
      <p className="text-xl text-gray-500 mb-10">
        Supporting copy.
      </p>
      <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full">
        CTA Text
      </button>
    </div>
  </section>
)
```

### 3. Add to the VARIANTS array

```tsx
const VARIANTS = [V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10]
```

### 4. Update the variant count in pages.ts

```ts
// src/data/pages.ts
{ id: 'hero', label: 'Hero', variantCount: 11 },  // was 10
```

### 5. Add a label (optional)

Each section file exports a `*_VARIANT_LABELS` array. Add your label:

```tsx
export const HERO_VARIANT_LABELS = [
  'Problem-First', ..., 'Your New Variant Name',
]
```

## Using Shared Data

Pull copy from `src/data/copy.ts`:

```tsx
import { BRAND, TESTIMONIALS, STATS, PLACEHOLDER } from '../../../data/copy'
```

- `BRAND` — name, tagline, CTA text
- `TESTIMONIALS` — 4 placeholder testimonials
- `STATS` — 4 placeholder metrics
- `PLACEHOLDER` — placeholder value strings (marked with ⭐)

## Design Guidelines

### Colors
- Home sections: blue accent (`blue-600`, `blue-50`)
- Resident sections: blue accent
- Property Manager sections: emerald accent (`emerald-600`, `emerald-50`)
- HOA Board sections: purple accent (`purple-600`, `purple-50`)

### Layout patterns available
- Full-width centered text (`max-w-3xl mx-auto text-center`)
- Two-column split (`grid md:grid-cols-2`)
- Card grid (`grid md:grid-cols-3 gap-8`)
- Dark background (`bg-gray-900 text-white`)
- Gradient background (`bg-gradient-to-br from-blue-50 to-white`)

### Placeholder labels
Always mark placeholder data:
```tsx
const PBadge = () => (
  <span className="text-xs font-mono text-amber-600 bg-amber-50 border border-dashed border-amber-300 px-1.5 py-0.5 rounded ml-1">
    placeholder
  </span>
)
```

## Adding a New Preset

Open `src/data/presets.ts` and add a new entry to the `PRESETS` array:

```ts
{
  id: 'my-new-preset' as PresetId,
  label: 'My New Preset',
  description: 'What this preset is for.',
  selections: {
    home: { hero: 2, problem: 4, howItWorks: 1, socialProof: 3, audienceRouter: 5, finalCta: 2 },
    resident: { hero: 0, painPoints: 1, benefits: 2, howItWorks: 0, objections: 3, cta: 1 },
    propertyManager: { hero: 4, painPoints: 2, operationalBenefits: 1, implementation: 0, proof: 3, cta: 2 },
    hoa: { hero: 1, boardConcerns: 4, valueProposition: 2, riskReduction: 0, approvalProcess: 1, cta: 3 },
  },
}
```

Also add `'my-new-preset'` to the `PresetId` union type in `src/types/index.ts`.

## State & localStorage

All selections are stored in `localStorage` under the key `spotshare-concept-gen-state`.
To clear state, call the Reset button in the UI or run:

```js
localStorage.removeItem('spotshare-concept-gen-state')
```
