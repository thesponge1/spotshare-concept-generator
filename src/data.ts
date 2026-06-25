// ================================================================
// src/data.ts — All copy lives here. This is the main file to edit.
// ================================================================
//
// HOW TO EDIT COPY:
//   Find the section you want to change, edit title/body/bullets/cta.
//   Save the file — the browser hot-reloads instantly.
//
// HOW TO ADD A VARIANT:
//   Copy an existing variant object, change the copy, add it to the
//   variants array. The control panel will show the new button automatically.
//
// LAYOUT TYPES (controls the visual layout of a section):
//   'centered'  — headline + body centered on white background
//   'split'     — text on left, bullet cards on right
//   'dark'      — dark gray/charcoal background
//   'highlight' — light accent-color background
//   'list'      — left-aligned with checklist cards below
//   'steps'     — numbered card grid for process/how-it-works sections
//   'quote'     — editorial quote layout with large decorative quotation mark
// ================================================================

// ----- TYPES (don't need to edit these) -----

export type LayoutType = 'centered' | 'split' | 'dark' | 'highlight' | 'list' | 'steps' | 'quote'

export type Variant = {
  label: string       // Short name shown in the control panel
  eyebrow?: string    // Small text above the title (optional, leave out to omit)
  title: string       // Main headline
  body: string        // Supporting paragraph
  bullets?: string[]  // Optional bullet list or feature points
  cta: string         // Button text
  layoutType: LayoutType
}

export type Section = {
  id: string
  label: string       // Shown in the control panel sidebar
  variants: Variant[]
}

export type Page = {
  id: string
  label: string
  icon: string
  // Tailwind color classes — change these to switch the accent color
  textClass: string   // e.g. 'text-blue-600'
  bgClass: string     // e.g. 'bg-blue-600 hover:bg-blue-700'
  lightClass: string  // e.g. 'bg-blue-50'
  borderClass: string // e.g. 'border-blue-200'
  sections: Section[]
}

export type Preset = {
  id: string
  label: string
  description: string
  // Maps page id → section id → variant index (0-based)
  selections: Record<string, Record<string, number>>
}

// A PageNarrative is a complete, hand-written take on an entire page —
// one fixed Variant per section, written together so the story flows from
// section to section. Unlike Presets (which just pick existing variants),
// each narrative's sections are unique to that narrative.
// See NARRATIVES.md for the full list of strategies and their build prompts.
export type HomeNarrative = {
  id: string
  label: string
  description: string
  // Keys vary by page. Home: hero, problem, howItWorks, socialProof, audienceRouter, finalCta
  // Resident: hero, painPoints, benefits, howItWorks, objections, cta
  sections: Record<string, Variant>
}

// ================================================================
// PAGES
// ================================================================

export const PAGES: Page[] = [

  // ---------------------------------------------------------------
  // HOME PAGE
  // ---------------------------------------------------------------
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    textClass: 'text-blue-600',
    bgClass: 'bg-blue-600 hover:bg-blue-700',
    lightClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    sections: [
      {
        id: 'hero',
        label: 'Hero',
        variants: [
          {
            label: 'Problem-First',
            eyebrow: 'The parking is there. The system isn\'t.',
            title: 'Your building has 40 empty spots right now. Your guests can\'t use any of them.',
            body: 'Reserved parking sits idle for hours every day while guests circle the block. SpotShare makes those spots available — automatically, without changing your building\'s rules.',
            cta: 'Schedule a Walkthrough',
            layoutType: 'centered',
          },
          {
            label: 'Outcome-First',
            eyebrow: 'Smart parking for residential buildings',
            title: 'Guest parking that works before your guests arrive.',
            body: 'SpotShare shows available reserved spots in real time. Guests claim one from the app, pull straight in, and never look for street parking again.',
            bullets: [
              'Guests find parking before they leave home',
              'No construction, no hardware, no IT project',
              'Building rules stay in control — always',
            ],
            cta: 'See How It Works',
            layoutType: 'split',
          },
          {
            label: 'Community-Focused',
            eyebrow: 'For residents who share',
            title: 'When you\'re not using your spot, your neighbor\'s guest can use it. And vice versa.',
            body: 'SpotShare turns unused reserved parking into a shared community resource — fairly, temporarily, and entirely under building control.',
            cta: 'Bring SpotShare to Your Building',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        variants: [
          {
            label: 'The Irony',
            eyebrow: 'The parking math',
            title: 'Buildings aren\'t short on parking. They\'re short on access.',
            body: 'Reserved spots are empty 60%+ of the time. Meanwhile, guests spend 20 minutes looking for street parking. The capacity exists. SpotShare unlocks it.',
            bullets: [
              'Reserved spots sit empty for hours every day ⭐ placeholder stat',
              'Guests circle for 20+ minutes before giving up ⭐ placeholder stat',
              'Property managers field the same complaint every weekend',
              'Every building has this problem. Almost none have a solution.',
            ],
            cta: 'See How SpotShare Fixes It',
            layoutType: 'list',
          },
          {
            label: 'Resident Story',
            title: '"My parents drove two hours to visit. They spent 40 minutes trying to park. I was mortified."',
            body: 'This happens every weekend in buildings everywhere. Empty reserved spots, frustrated guests, embarrassed residents. SpotShare makes those spots available — temporarily, controlled, and without taking anything from the residents who own them.',
            cta: 'Fix Parking in My Building',
            layoutType: 'quote',
          },
          {
            label: 'Data-Led',
            eyebrow: 'The numbers behind the problem',
            title: '60% of reserved spots are empty right now. ⭐ Your guests just don\'t know it.',
            body: 'SpotShare bridges the gap between parking that exists and guests who need it — with no infrastructure changes, no policy rewrites, and no resident mandates.',
            bullets: [
              '60%+ vacancy rate on reserved spots during business hours ⭐ placeholder',
              '1 in 3 residents report a guest parking complaint in the last 3 months ⭐ placeholder',
              '0 building modifications needed to launch',
            ],
            cta: 'Schedule a Demo',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'howItWorks',
        label: 'How It Works',
        variants: [
          {
            label: 'Three Steps',
            eyebrow: 'Simple by design',
            title: 'Three steps. No training required.',
            body: 'SpotShare works the way parking should — residents set availability, guests claim spots, buildings stay in control.',
            bullets: [
              'Residents mark their spot available when they\'re away — takes 30 seconds',
              'Guests open the building link and claim a spot before they leave home',
              'The building\'s rules run automatically — time limits, caps, access requirements',
            ],
            cta: 'See a Live Demo',
            layoutType: 'steps',
          },
          {
            label: 'Before & After',
            eyebrow: 'What actually changes',
            title: 'Before SpotShare, your guests called. After, they just park.',
            body: 'The difference is a 10-second app interaction instead of a 20-minute parking search.',
            bullets: [
              'Before: guests call the front desk, pray for street parking',
              'After: guests open the link, see available spots, pull straight in',
              'Before: property managers field weekend parking calls constantly',
              'After: parking complaints drop to near zero ⭐ placeholder stat',
            ],
            cta: 'Watch How It Works',
            layoutType: 'split',
          },
          {
            label: 'Building in Control',
            eyebrow: 'For buildings that need control',
            title: 'SpotShare runs within your building\'s existing rules. Not around them.',
            body: 'The building configures everything once: eligible spots, time windows, guest limits, registration requirements. After that, the system enforces it without anyone lifting a finger.',
            bullets: [
              'Set time windows and per-day usage limits',
              'Require guest registration if your building needs it',
              'Full usage reports and audit logs for management',
            ],
            cta: 'Request a Configuration Walkthrough',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'socialProof',
        label: 'Social Proof',
        variants: [
          {
            label: 'Testimonials',
            eyebrow: 'From residents and managers',
            title: '"Before SpotShare, I dreaded having people over. Now my guests text me when they\'ve parked — not when they\'re still looking."',
            body: 'This is what buildings experience after launching SpotShare. Residents stop apologizing. Managers stop fielding calls. Boards get thanked.',
            bullets: [
              '"Zero infrastructure changes. The HOA loved that." — ⭐ [Property Manager, City]',
              '"Guest parking complaints dropped to near zero within a month." — ⭐ [Property Manager]',
              '"It\'s now one of the most-mentioned amenities in our building surveys." — ⭐ [HOA Board President]',
            ],
            cta: 'Read More Stories',
            layoutType: 'quote',
          },
          {
            label: 'Stats-Led',
            eyebrow: '⭐ Placeholder — replace with real numbers when available',
            title: 'The results buildings see after launching.',
            body: 'SpotShare is live in buildings across [X] cities. Here\'s what happens in the first 90 days.',
            bullets: [
              '[XX]% reduction in parking-related complaints ⭐',
              '[X,XXX]+ successful guest parking sessions ⭐',
              '[XX]% of residents actively using the app ⭐',
              '[X]+ buildings launched without a single rollback ⭐',
            ],
            cta: 'Schedule a Walkthrough',
            layoutType: 'centered',
          },
          {
            label: 'Dark Trust',
            eyebrow: 'Trusted by residential buildings',
            title: 'Property managers, HOA boards, and residents all say the same thing: it just works.',
            body: 'From luxury condos to mid-rise apartments — in buildings that tried everything else and got tired of workarounds — SpotShare is the first guest parking solution that actually sticks.',
            cta: 'Join Them',
            layoutType: 'dark',
          },
        ],
      },
      {
        id: 'audienceRouter',
        label: 'Audience Router',
        variants: [
          {
            label: 'Who Are You?',
            eyebrow: 'For every role in your building',
            title: 'Your role determines your path. All roads lead to better parking.',
            body: 'Whether you\'re frustrated as a resident, stretched thin as a property manager, or evaluating risk as a board — SpotShare has something specific to say to you.',
            bullets: [
              '🏠 Residents — Stop apologizing to your guests about parking',
              '🏢 Property Managers — Eliminate the complaint that never goes away',
              '🏛️ HOA Boards — Approve a solution that\'s lower risk than the status quo',
            ],
            cta: 'Choose Your Path',
            layoutType: 'list',
          },
          {
            label: 'Simple Paths',
            eyebrow: 'Find your angle',
            title: 'See SpotShare from where you sit.',
            body: 'The resident experience, the management controls, and the board governance are all worth understanding — but they\'re different conversations. Pick yours.',
            bullets: [
              'I\'m a resident tired of the parking situation for my guests',
              'I manage a property and parking complaints are constant',
              'I\'m on the HOA board and need to evaluate this properly',
            ],
            cta: 'Start Here',
            layoutType: 'centered',
          },
          {
            label: 'Whole Building',
            eyebrow: 'One solution for the whole building',
            title: 'Every stakeholder has a reason to say yes.',
            body: 'SpotShare isn\'t a compromise where someone loses. Residents get the parking they\'ve been asking for. Managers get fewer calls. Boards get credit for solving it. Everyone wins.',
            cta: 'See How It Works for Your Role',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'finalCta',
        label: 'Final CTA',
        variants: [
          {
            label: 'Direct Ask',
            eyebrow: 'Ready to fix parking?',
            title: 'Schedule a walkthrough. See SpotShare in your building\'s context.',
            body: 'We\'ll show you exactly how SpotShare maps to your existing setup, answer the board questions you\'re already thinking about, and help you plan a launch that feels effortless for everyone.',
            cta: 'Schedule a Walkthrough',
            layoutType: 'dark',
          },
          {
            label: 'Low-Pressure',
            eyebrow: 'No commitment. No pitch.',
            title: 'Curious what SpotShare would look like in your building?',
            body: 'A 30-minute walkthrough shows you the product, answers your questions, and tells you honestly if SpotShare is a fit. We won\'t push you toward anything that doesn\'t make sense.',
            cta: 'Book a 30-Minute Demo',
            layoutType: 'centered',
          },
          {
            label: 'Community Angle',
            eyebrow: 'Join buildings that solved it',
            title: 'Your parking problem has a permanent fix. Not a workaround.',
            body: 'Buildings that launch SpotShare don\'t look back. Residents stop complaining. Managers stop fielding calls. Boards get compliments instead of complaints.',
            bullets: [
              'Typical launch: one weekend, no construction',
              'No hardware, no IT project, no resident mandate',
              'Board-approval support included at every step',
            ],
            cta: 'Schedule a Walkthrough',
            layoutType: 'highlight',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // RESIDENT PAGE
  // ---------------------------------------------------------------
  {
    id: 'resident',
    label: 'Resident',
    icon: '🏠',
    textClass: 'text-blue-600',
    bgClass: 'bg-blue-600 hover:bg-blue-700',
    lightClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    sections: [
      {
        id: 'hero',
        label: 'Hero',
        variants: [
          {
            label: 'Problem-First',
            eyebrow: 'For Residents',
            title: 'Having guests over shouldn\'t come with a 20-minute parking disclaimer.',
            body: 'SpotShare makes unused reserved spots available to your guests — so parking is handled before they even leave home.',
            cta: 'Tell My Building About SpotShare',
            layoutType: 'centered',
          },
          {
            label: 'Outcome-First',
            eyebrow: 'For Residents',
            title: 'Your guests park in seconds. Not circles.',
            body: 'SpotShare shows available spots in your building in real time. Guests claim one before they leave, pull straight in, and you actually get to enjoy their visit.',
            bullets: [
              'Guests find a spot from their phone before they arrive',
              'Claim it with one tap — no calls, no passes, no confusion',
              'You get notified when your spot is in use',
            ],
            cta: 'Share With My Building',
            layoutType: 'split',
          },
          {
            label: 'Community',
            eyebrow: 'For neighbors who look out for each other',
            title: 'When you\'re away, your spot helps someone. When you have guests, their spot helps you.',
            body: 'SpotShare is built around a simple idea: your building has enough parking. It just needs a smarter way to share it — temporarily, fairly, and with full resident control.',
            cta: 'Join My Building\'s Waitlist',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'painPoints',
        label: 'Pain Points',
        variants: [
          {
            label: 'The Struggle',
            eyebrow: 'Sound familiar?',
            title: 'Hosting guests in your building is more complicated than it should be.',
            body: 'You know the routine — and it shouldn\'t be a routine.',
            bullets: [
              'Guests arrive and spend 30 minutes looking for parking',
              'Building visitor spots are always full or nonexistent',
              'You end up moving your own car to create a spot for them',
              'You apologize about the parking situation on every visit',
            ],
            cta: 'There\'s a Better Way',
            layoutType: 'list',
          },
          {
            label: 'Resident Story',
            title: '"I dread having people over because of the parking. I actually started telling guests to take an Uber."',
            body: 'This is what SpotShare is designed to fix. Your building has spots — they\'re just reserved for residents, even when those residents aren\'t home. SpotShare makes them available for your guests, temporarily and with full control.',
            cta: 'Fix This in My Building',
            layoutType: 'quote',
          },
          {
            label: 'Root Cause',
            eyebrow: 'Why guest parking fails everywhere',
            title: 'Reserved spots are designed for residents. Not for the guests residents actually invite over.',
            body: 'The system works exactly as designed — which is the problem. SpotShare adds the layer that was always missing: a way for unused spots to be temporarily available without giving anything up permanently.',
            bullets: [
              'Guests have no way to know what spots are available',
              'Reserved spots sit empty while guests circle for 20 minutes',
              'There\'s no system today — just workarounds that don\'t work',
            ],
            cta: 'See How SpotShare Fixes This',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        variants: [
          {
            label: 'Feature List',
            eyebrow: 'What you actually get',
            title: 'Guest parking that works like the rest of your life — through an app, in seconds.',
            body: 'Open the building link. See what\'s available. Your guest claims a spot. That\'s the entire experience.',
            bullets: [
              'Real-time availability for every shareable spot in your building',
              'Guests claim spots from their phone before they leave home',
              'You\'re notified when your spot is being used (if you\'ve shared it)',
              'Time windows close automatically — no need to remember',
            ],
            cta: 'Learn More',
            layoutType: 'list',
          },
          {
            label: 'You Stay in Control',
            eyebrow: 'Your spot. Your rules.',
            title: 'Full control over your spot. Zero friction for your guests.',
            body: 'You decide when your spot is available — for an evening, a weekend, or a recurring schedule. Set it once, and the system handles the rest. Your spot is always yours. SpotShare just makes it useful when you\'re not.',
            bullets: [
              'You control exactly when your spot is sharable',
              'Guests get a clean, self-serve parking experience',
              'Your spot auto-resets the moment your window closes',
            ],
            cta: 'See It in Action',
            layoutType: 'split',
          },
          {
            label: 'Community',
            eyebrow: 'Good for you. Better for everyone.',
            title: 'You help a neighbor\'s guest. A neighbor helps yours.',
            body: 'When you mark your spot available while you\'re away, your neighbors\' guests benefit. When you have guests, you benefit from neighbors who did the same. That\'s the whole idea.',
            cta: 'Join My Building',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'howItWorks',
        label: 'How It Works',
        variants: [
          {
            label: 'Three Steps',
            eyebrow: 'How it works',
            title: 'Two minutes to set up. Zero effort to explain.',
            body: 'SpotShare is designed so your guests never need instructions — they just get a link and park.',
            bullets: [
              'You mark your spot available in the app — takes 30 seconds',
              'You share the building link with your guest (or they already have it)',
              'Your guest claims a spot and pulls straight in — no calls, no confusion',
            ],
            cta: 'See It Work',
            layoutType: 'steps',
          },
          {
            label: 'Resident Control',
            eyebrow: 'You\'re always in charge',
            title: 'Your spot stays yours. SpotShare just makes it smarter when you\'re away.',
            body: 'Going on vacation? Mark your spot available for the week. Out for an evening? Set a 6-hour window. The spot is yours the second the window closes — automatically.',
            cta: 'Set Up My Spot',
            layoutType: 'centered',
          },
          {
            label: 'Simple Explainer',
            eyebrow: 'The plain-English version',
            title: 'Unused spots become available. That\'s it.',
            body: 'When you\'re not using your spot, other residents\' guests can use it temporarily. When you\'re back, it\'s yours again. No apps for your guests to download. No calls to make. No passes to print.',
            cta: 'Get My Building Set Up',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'objections',
        label: 'Objections',
        variants: [
          {
            label: 'FAQ Style',
            eyebrow: 'Common concerns',
            title: 'What actually happens to your spot?',
            body: 'Your reserved spot stays yours — always. SpotShare only makes it available when you explicitly choose to share it. Here are the questions we hear most.',
            bullets: [
              '"What if someone doesn\'t leave on time?" — Sessions are tracked. Your building handles violations the same way it does today.',
              '"What if I forget to mark it available?" — Nothing happens automatically. SpotShare only acts on your explicit input.',
              '"Do I have to participate?" — Residents opt in. There is no requirement, ever.',
            ],
            cta: 'Learn More About How It Works',
            layoutType: 'list',
          },
          {
            label: 'Reassurance',
            eyebrow: 'We built this with resident trust in mind',
            title: 'Your spot is sacred. We treat it that way.',
            body: 'SpotShare was designed with one priority: residents should never feel like they\'ve lost control of their space. You decide everything. You can un-decide everything. Nothing changes without your say-so.',
            cta: 'See How Spot Control Works',
            layoutType: 'centered',
          },
          {
            label: 'Clear & Direct',
            eyebrow: 'Straight answers',
            title: 'You are always in control of your spot. Full stop.',
            body: 'Your spot is only available to guests when you explicitly mark it as such. You set the time window. The spot resets the moment the window closes. Every session is logged.',
            bullets: [
              'Opt-in only — participation is never required',
              'You set your availability windows, always',
              'Spot auto-resets at the end of your window',
              'Full session history available in the app',
            ],
            cta: 'Schedule a Walkthrough',
            layoutType: 'dark',
          },
        ],
      },
      {
        id: 'cta',
        label: 'CTA',
        variants: [
          {
            label: 'Advocacy CTA',
            eyebrow: 'Make it happen',
            title: 'Your building can have this. You just have to ask.',
            body: 'SpotShare works with your building\'s existing setup. Share this page with your property manager or HOA board and let\'s get it on the agenda.',
            bullets: [
              'Forward this page to your property manager',
              'Share with your HOA board contact',
              'Or sign up and we\'ll reach out on your behalf',
            ],
            cta: 'Tell My Building About SpotShare',
            layoutType: 'highlight',
          },
          {
            label: 'Direct',
            eyebrow: 'Ready to fix parking?',
            title: 'Let\'s bring SpotShare to your building.',
            body: 'Drop your info and we\'ll connect with your property manager directly. You don\'t have to do the legwork — we will. This is the part where it gets easy.',
            cta: 'Request SpotShare for My Building',
            layoutType: 'dark',
          },
          {
            label: 'Soft Ask',
            eyebrow: 'No pressure',
            title: 'See if SpotShare makes sense for your building.',
            body: 'Every building is different. We\'ll tell you honestly whether SpotShare is a fit for your size, parking situation, and resident mix. No pitch. Just an honest look.',
            cta: 'Chat With Us',
            layoutType: 'centered',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // PROPERTY MANAGER PAGE
  // ---------------------------------------------------------------
  {
    id: 'propertyManager',
    label: 'Property Manager',
    icon: '🏢',
    textClass: 'text-emerald-600',
    bgClass: 'bg-emerald-600 hover:bg-emerald-700',
    lightClass: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
    sections: [
      {
        id: 'hero',
        label: 'Hero',
        variants: [
          {
            label: 'Problem-First',
            eyebrow: 'For Property Managers',
            title: 'Stop managing parking complaints. Start pointing to the app.',
            body: 'SpotShare gives you a real guest parking system — not another workaround. Configurable, automated, and something residents will actually thank you for.',
            cta: 'Schedule a Management Demo',
            layoutType: 'centered',
          },
          {
            label: 'Operational',
            eyebrow: 'For Property Managers',
            title: 'Turn your parking headache into your highest-rated amenity.',
            body: 'SpotShare gives property managers a structured, self-running guest parking program built around how your building already works.',
            bullets: [
              'No infrastructure changes — ever',
              'Board-configurable rules, limits, and blackout windows',
              'Full audit trail and usage reports on demand',
              'Residents manage their own spots — you only handle exceptions',
            ],
            cta: 'Request a Demo',
            layoutType: 'split',
          },
          {
            label: 'Amenity Angle',
            eyebrow: 'The amenity that solves a real problem',
            title: 'SpotShare shows up as a top amenity in building surveys within 90 days of launch.',
            body: 'It\'s not just a parking fix. It\'s the thing residents tell their friends about, mention in reviews, and bring up at renewal time. That\'s the kind of win that compounds.',
            cta: 'See How It Works',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'painPoints',
        label: 'Pain Points',
        variants: [
          {
            label: 'The Complaints',
            eyebrow: 'The parking complaint cycle',
            title: 'You\'ve tried everything. The guest parking complaints never stop.',
            body: 'It\'s not a building problem. It\'s a system problem. Paper passes get lost. Visitor spots get abused. And you\'re the one fielding the calls every weekend.',
            bullets: [
              'Residents call or text every Friday about guest parking',
              'Visitor spots are first-come first-served — and always full',
              'Paper visitor passes are borrowed, duplicated, and abused',
              'The same complaints appear in every resident survey, every year',
            ],
            cta: 'Break the Cycle',
            layoutType: 'list',
          },
          {
            label: 'Manager Frustration',
            title: '"I handle the same guest parking complaint every single weekend. I know the residents by name at this point."',
            body: 'This is what SpotShare is built to fix. Not with another policy change or a new sign in the garage. With an actual system that handles guest parking automatically — so you don\'t have to.',
            cta: 'See How SpotShare Handles This',
            layoutType: 'quote',
          },
          {
            label: 'Root Cause',
            eyebrow: 'The real diagnosis',
            title: 'The parking problem isn\'t about space. It\'s about access.',
            body: 'Your building almost certainly has enough spots. They\'re just locked to their assigned residents — even when those residents are out of town. SpotShare fixes the access problem, permanently, without touching the space problem.',
            cta: 'Learn How',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'operationalBenefits',
        label: 'Operational Benefits',
        variants: [
          {
            label: 'Feature List',
            eyebrow: 'What you actually get',
            title: 'A guest parking system that runs itself — and reports to you.',
            body: 'SpotShare handles the operational complexity of guest parking so you can focus on everything else.',
            bullets: [
              'Real-time availability — no manual tracking, no passes, no calls',
              'Configurable rules: time limits, guest caps, blackout dates, approval requirements',
              'Usage logs and reports ready whenever your board asks',
              'Residents manage their own spot availability — you only handle edge cases',
            ],
            cta: 'See Full Feature List',
            layoutType: 'list',
          },
          {
            label: 'Before & After',
            eyebrow: 'What changes when you launch',
            title: 'Before: parking complaints. After: parking compliments.',
            body: 'Property managers who launch SpotShare report a measurable drop in parking-related communications within the first 30 days.',
            bullets: [
              'Before: weekend calls about guests who need parking',
              'After: guests self-serve through the app without calling you',
              'Before: parking complaints in every resident survey',
              'After: SpotShare mentioned as a top-ranked building amenity',
            ],
            cta: 'See the Outcomes',
            layoutType: 'split',
          },
          {
            label: 'ROI',
            eyebrow: 'The business case',
            title: 'Resident satisfaction directly impacts renewal rates. SpotShare improves both.',
            body: 'There\'s a clear line from better guest parking → happier residents → better lease renewal numbers. SpotShare is one of the highest-impact, lowest-cost building improvements you can make.',
            bullets: [
              'Higher resident satisfaction scores ⭐ placeholder',
              'Measurable reduction in parking complaints to management ⭐ placeholder',
              'A real amenity to highlight for prospective residents',
            ],
            cta: 'Request an ROI Conversation',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'implementation',
        label: 'Implementation',
        variants: [
          {
            label: 'Timeline',
            eyebrow: 'How fast can you launch?',
            title: 'Most buildings go live within two weeks.',
            body: 'No construction. No IT project. No hardware. Just a configuration call and a resident launch.',
            bullets: [
              'Configuration call — we map SpotShare to your building\'s rules and layout',
              'Resident onboarding — invite email templates, setup guides, everything provided',
              'Soft launch — early adopters go first, bugs caught early, confidence builds',
              'Full launch — all residents onboarded, system running on its own',
            ],
            cta: 'Start the Process',
            layoutType: 'steps',
          },
          {
            label: 'Simple',
            eyebrow: 'No IT project. No construction.',
            title: 'Setup takes hours. The system runs for years.',
            body: 'SpotShare works with your existing parking assignments and building rules. We configure it to match your building — not the other way around. You make one configuration call. It handles the rest.',
            cta: 'See How Implementation Works',
            layoutType: 'centered',
          },
          {
            label: 'We Do the Heavy Lifting',
            eyebrow: 'We handle everything except your rules',
            title: 'You tell us how your building works. We make SpotShare match.',
            body: 'Our implementation team handles technical setup, resident communication templates, and onboarding logistics. Your job is one configuration call.',
            bullets: [
              'Full technical setup — included',
              'Resident communication templates — provided',
              'Board presentation support — available',
              'Ongoing support post-launch — standard',
            ],
            cta: 'Schedule an Implementation Call',
            layoutType: 'split',
          },
        ],
      },
      {
        id: 'towing',
        label: 'Towing / Enforcement',
        variants: [
          {
            label: 'Honest & Confident',
            eyebrow: 'Enforcement',
            title: 'We handle a lot. You handle the rest.',
            body: 'When issues come up, most are resolved right in the app. For violations that require towing, that decision stays with you — because you know your community best.',
            cta: 'See How It Works',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'pricing',
        label: 'Pricing',
        variants: [
          {
            label: 'Flat Rate',
            eyebrow: 'Pricing',
            title: 'Surprisingly simple pricing.',
            body: 'SpotShare is billed per resident parking spot, quarterly or annually. No setup fees. No per-user charges. One flat rate based on your property size.',
            bullets: [
              '$150 / quarter or $500 / year for a building with 100 spots',
              'Less than $1.50 per spot per month',
              '"One resident parking complaint takes 20 minutes to resolve. At that rate, SpotShare pays for itself before the end of January."',
            ],
            cta: 'See Pricing for My Building',
            layoutType: 'list',
          },
        ],
      },
      {
        id: 'proof',
        label: 'Proof',
        variants: [
          {
            label: 'Testimonials',
            eyebrow: 'From property managers like you',
            title: '"We launched on a Saturday. By Monday I had three residents email to say thank you. I\'ve been in property management for 12 years and that never happens."',
            body: '"Zero infrastructure changes. The board had nothing to approve except the policy, which we already had. It was the easiest win I\'ve had all year." — ⭐ [Property Manager, City]',
            bullets: [
              '"Guest parking complaints dropped to near zero within the first month." — ⭐ [Property Manager]',
              '"The board had nothing but compliments at the first post-launch meeting." — ⭐ [HOA Board President]',
            ],
            cta: 'Read More Stories',
            layoutType: 'quote',
          },
          {
            label: 'Stats',
            eyebrow: '⭐ Replace with real numbers when available',
            title: 'The numbers property managers care about.',
            body: 'These are the outcomes buildings see after launching SpotShare. All figures are placeholders until verified data is available.',
            bullets: [
              '[XX]% reduction in parking-related resident complaints ⭐',
              '[X]+ buildings currently running SpotShare ⭐',
              '[XX]% property manager satisfaction rate ⭐',
              'Average launch time: [X] weeks from first call to live ⭐',
            ],
            cta: 'Schedule a Demo',
            layoutType: 'centered',
          },
          {
            label: 'Dark Trust',
            eyebrow: 'Trusted by property managers',
            title: 'Property managers in [X] cities chose SpotShare over every workaround they\'d already tried.',
            body: 'From boutique buildings to large residential complexes — managers who launch SpotShare don\'t go back to paper passes. The system handles guest parking so they can handle everything else.',
            cta: 'Join Them',
            layoutType: 'dark',
          },
        ],
      },
      {
        id: 'cta',
        label: 'CTA',
        variants: [
          {
            label: 'Demo Request',
            eyebrow: 'Ready to fix parking for real?',
            title: 'Schedule a management demo. See SpotShare configured for your building type.',
            body: 'We\'ll walk you through the admin controls, show you what residents see, and help you think through how to present it to your board. You\'ll leave knowing exactly what to expect.',
            cta: 'Schedule a Management Demo',
            layoutType: 'dark',
          },
          {
            label: 'Board Support',
            eyebrow: 'Getting board approval is easier than you think',
            title: 'We make the board case for you.',
            body: 'SpotShare provides everything you need for a smooth board presentation — so you can walk into the meeting confident.',
            bullets: [
              'Board presentation deck — editable, ready to customize',
              'FAQ document addressing every common board objection',
              'Implementation timeline formatted for a board resolution',
            ],
            cta: 'Get the Board Materials',
            layoutType: 'highlight',
          },
          {
            label: 'Soft Ask',
            eyebrow: 'Not sure if it\'s the right fit?',
            title: 'Let\'s talk before you decide.',
            body: 'A 20-minute call is enough to understand whether SpotShare makes sense for your property type, resident mix, and board situation. No commitment. No pitch. Just an honest conversation.',
            cta: 'Book a 20-Minute Conversation',
            layoutType: 'centered',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // HOA BOARD PAGE
  // ---------------------------------------------------------------
  {
    id: 'hoa',
    label: 'HOA Board',
    icon: '🏛️',
    textClass: 'text-purple-600',
    bgClass: 'bg-purple-600 hover:bg-purple-700',
    lightClass: 'bg-purple-50',
    borderClass: 'border-purple-200',
    sections: [
      {
        id: 'hero',
        label: 'Hero',
        variants: [
          {
            label: 'Board-Focused',
            eyebrow: 'For HOA Boards',
            title: 'A guest parking solution your board can approve in one meeting.',
            body: 'SpotShare gives HOA boards a structured, policy-compliant guest parking system — with full board control over rules, eligibility, and usage limits. Nothing changes without a board decision.',
            cta: 'Request a Board Presentation',
            layoutType: 'centered',
          },
          {
            label: 'Governance',
            eyebrow: 'For HOA Boards',
            title: 'Board-configured. Resident-managed. Complaint-eliminating.',
            body: 'SpotShare puts the HOA board in control at every level. You set the rules once. Residents manage their own spots within those rules. The system enforces everything automatically.',
            bullets: [
              'Board sets all eligibility rules — no resident overrides',
              'No change to existing parking assignments or policies',
              'Full audit trail for board review at any time',
              'No infrastructure investment required',
            ],
            cta: 'See How It Works',
            layoutType: 'split',
          },
          {
            label: 'Problem-Led',
            eyebrow: 'For HOA Boards',
            title: 'Guest parking complaints are on every board agenda. SpotShare gets them off — permanently.',
            body: 'Instead of revisiting the same parking problem every quarter with no resolution, SpotShare gives your board a structured, permanent solution with complete oversight and zero capital expenditure.',
            cta: 'Request Board Materials',
            layoutType: 'dark',
          },
        ],
      },
      {
        id: 'boardConcerns',
        label: 'Board Concerns',
        variants: [
          {
            label: 'FAQ Style',
            eyebrow: 'What every board asks us',
            title: 'The questions boards ask. The answers that get them to yes.',
            body: 'We\'ve supported many board approval processes. Here\'s what comes up every time.',
            bullets: [
              '"Will residents lose control of their spots?" — No. Participation is opt-in. Residents control their own availability windows.',
              '"What if someone abuses the system?" — Every session is logged. Violations are handled through your existing enforcement, same as today.',
              '"What does this cost?" — Pricing is based on building size. We\'re happy to share numbers on a call.',
              '"Do we need to change our parking rules?" — No. SpotShare operates within your existing policy framework.',
            ],
            cta: 'Get Full FAQ Document',
            layoutType: 'list',
          },
          {
            label: 'Governance Focus',
            eyebrow: 'Board governance, protected',
            title: 'The HOA stays in control. That\'s not a feature — it\'s the design.',
            body: 'SpotShare is architected around HOA governance, not in spite of it. Every rule you set is a rule the system enforces. No resident can override it. No guest can bypass it. The board has complete visibility at every moment.',
            cta: 'See the Board Controls',
            layoutType: 'centered',
          },
          {
            label: 'Risk Reframe',
            eyebrow: 'A different way to think about risk',
            title: 'The risk of doing nothing is higher than you think.',
            body: 'Every year without a real guest parking solution is another year of complaints, board meeting time spent on parking, residents frustrated with the building, and a problem that compounds. SpotShare has a lower risk profile than the status quo.',
            cta: 'Let\'s Talk Through It',
            layoutType: 'dark',
          },
        ],
      },
      {
        id: 'valueProposition',
        label: 'Value Proposition',
        variants: [
          {
            label: 'Triple Win',
            eyebrow: 'Why boards approve SpotShare',
            title: 'One solution. Three groups that all benefit.',
            body: 'SpotShare is rare: it solves the same problem for residents, property managers, and the board at the same time — and gives everyone a reason to say yes.',
            bullets: [
              'Residents get the parking solution they\'ve been asking for at every meeting',
              'Management handles dramatically fewer complaints each week',
              'The board gets credit for permanently solving a standing problem',
            ],
            cta: 'See Full Value Summary',
            layoutType: 'list',
          },
          {
            label: 'Amenity',
            eyebrow: 'The amenity that keeps paying off',
            title: 'SpotShare becomes the building\'s most-mentioned positive feature within 90 days.',
            body: 'HOA boards that launch SpotShare consistently hear about it in building surveys and annual meetings — not as a complaint, but as a genuine compliment. It becomes a retention driver that compounds over time.',
            cta: 'Request a Board Presentation',
            layoutType: 'highlight',
          },
          {
            label: 'Simple Case',
            eyebrow: 'The board case in one sentence',
            title: 'Fewer complaints. Higher satisfaction. No capital expenditure.',
            body: 'There\'s a direct line from better guest parking to happier residents to higher renewal rates. SpotShare is one of the highest-impact, lowest-cost improvements a building can make — and one of the easiest to approve.',
            cta: 'See the Numbers',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'riskReduction',
        label: 'Risk Reduction',
        variants: [
          {
            label: 'Low Risk List',
            eyebrow: 'Built for board approval',
            title: 'SpotShare is designed to minimize board risk at every step.',
            body: 'Every feature exists because an HOA board asked for it.',
            bullets: [
              'No infrastructure investment — ever',
              'No change to existing parking assignments or rules',
              'Full usage logs available for board review at any time',
              'Residents opt in voluntarily — no mandates, no friction',
              'Rollback is simple if the board ever wants to pause or modify the program',
            ],
            cta: 'Review the Risk Profile',
            layoutType: 'list',
          },
          {
            label: 'Comparison',
            eyebrow: 'Compared to your other options',
            title: 'SpotShare has a lower risk profile than every alternative — including doing nothing.',
            body: 'When you lay out the options side by side, SpotShare is the only path that doesn\'t require a capital project, a policy vote, or continued tolerance of the status quo.',
            bullets: [
              'vs. Building new visitor spots: No construction, no budget, no timeline risk',
              'vs. Changing parking policy: No resident vote required, no implementation hassle',
              'vs. Status quo: Complaints stop compounding, satisfaction improves',
            ],
            cta: 'Compare Your Options',
            layoutType: 'split',
          },
          {
            label: 'You Stay in Control',
            eyebrow: 'Complete board control',
            title: 'You set the rules. The system enforces them. Nothing changes without board approval.',
            body: 'Every SpotShare configuration is set by the board and managed through a dedicated admin dashboard. Residents can\'t modify rules. Guests can\'t bypass them. You have complete, auditable visibility into every session.',
            cta: 'See the Admin Controls',
            layoutType: 'dark',
          },
        ],
      },
      {
        id: 'approvalProcess',
        label: 'Approval Process',
        variants: [
          {
            label: 'What We Provide',
            eyebrow: 'Board approval support',
            title: 'We\'ve helped boards approve SpotShare before. We\'ve built a package that makes it easy.',
            body: 'Everything your board needs — from initial review to final resolution.',
            bullets: [
              'Board presentation deck — fully editable for your building',
              'FAQ document addressing the objections boards raise most often',
              'Implementation timeline formatted for a board resolution',
              'Sample resolution language, reviewed by HOA attorneys ⭐',
              'Reference calls with HOA board members who\'ve been through it',
            ],
            cta: 'Request the Board Package',
            layoutType: 'list',
          },
          {
            label: 'Simple Path',
            eyebrow: 'From first conversation to launch',
            title: 'Most boards go from first call to approved resolution in 30 days.',
            body: 'The process is simpler than most boards expect. We\'ve mapped it out so you know exactly what\'s coming.',
            bullets: [
              'Intro call — we answer your questions, share materials, calibrate to your board',
              'Board review — we provide everything your board needs to evaluate independently',
              'Approval meeting — we can join virtually and handle objections in real time',
              'Launch — your property manager configures, residents onboard, system goes live',
            ],
            cta: 'Start the Conversation',
            layoutType: 'steps',
          },
          {
            label: 'For Champions',
            eyebrow: 'If you\'re the board champion',
            title: 'You don\'t have to build the case alone. We\'ll help you make it.',
            body: 'Whether you\'re the board member ready to call for a vote or the property manager trying to get board buy-in — SpotShare\'s team supports your internal process, not just the product demo.',
            bullets: [
              'We can join your board meeting (virtually) to answer objections live',
              'We provide all collateral needed for the vote',
              'We answer written objections on your timeline',
            ],
            cta: 'Let\'s Build Your Case',
            layoutType: 'split',
          },
        ],
      },
      {
        id: 'cta',
        label: 'CTA',
        variants: [
          {
            label: 'Board Request',
            eyebrow: 'Ready to put it on the agenda?',
            title: 'Request a board presentation. Get everything your board needs to say yes.',
            body: 'We\'ll prepare materials tailored to your building — anticipated objections, implementation timeline, and resolution language. You walk in prepared. The board walks out with a plan.',
            cta: 'Request a Board Presentation',
            layoutType: 'dark',
          },
          {
            label: 'Low Pressure',
            eyebrow: 'Not ready for a vote yet?',
            title: 'Start with a conversation. No agenda required.',
            body: 'A 30-minute call with our team is all it takes to know whether SpotShare is worth bringing to a board vote. We\'ll answer your questions and give you what you need to evaluate it honestly.',
            cta: 'Schedule a 30-Minute Call',
            layoutType: 'centered',
          },
          {
            label: 'Social Proof',
            eyebrow: 'You won\'t be the first',
            title: 'HOA boards in [X] cities have approved SpotShare. Here\'s what they found.',
            body: 'Every board that\'s gone through the approval process says the same thing: it was easier than expected and the results were better than projected.',
            bullets: [
              'No infrastructure investment required — ever',
              'Implementation support included from day one',
              'Ongoing board reporting and usage data built in',
            ],
            cta: 'See What Other Boards Did',
            layoutType: 'highlight',
          },
        ],
      },
    ],
  },
]

// ================================================================
// DEFAULT SELECTIONS — Which variant shows first (0 = first variant)
// ================================================================

export const DEFAULT_SELECTIONS: Record<string, Record<string, number>> = {
  home: { hero: 0, problem: 0, howItWorks: 0, socialProof: 0, audienceRouter: 0, finalCta: 0 },
  resident: { hero: 0, painPoints: 0, benefits: 0, howItWorks: 0, objections: 0, cta: 0 },
  propertyManager: { hero: 0, painPoints: 0, operationalBenefits: 0, implementation: 0, towing: 0, pricing: 0, proof: 0, cta: 0 },
  hoa: { hero: 0, boardConcerns: 0, valueProposition: 0, riskReduction: 0, approvalProcess: 0, cta: 0 },
}

// ================================================================
// PRESETS — Messaging strategies that set variants across all pages
// ================================================================

export const PRESETS: Preset[] = [
  {
    id: 'balanced',
    label: 'Balanced',
    description: 'A well-rounded mix that works for all audiences.',
    selections: {
      home: { hero: 0, problem: 0, howItWorks: 0, socialProof: 0, audienceRouter: 0, finalCta: 0 },
      resident: { hero: 0, painPoints: 0, benefits: 0, howItWorks: 0, objections: 0, cta: 0 },
      propertyManager: { hero: 0, painPoints: 0, operationalBenefits: 0, implementation: 0, towing: 0, pricing: 0, proof: 0, cta: 0 },
      hoa: { hero: 0, boardConcerns: 0, valueProposition: 0, riskReduction: 0, approvalProcess: 0, cta: 0 },
    },
  },
  {
    id: 'hoa-buyer',
    label: 'HOA Buyer Focus',
    description: 'Emphasizes governance, board control, and risk reduction.',
    selections: {
      home: { hero: 0, problem: 0, howItWorks: 2, socialProof: 2, audienceRouter: 0, finalCta: 0 },
      resident: { hero: 0, painPoints: 0, benefits: 0, howItWorks: 0, objections: 2, cta: 0 },
      propertyManager: { hero: 0, painPoints: 0, operationalBenefits: 0, implementation: 2, towing: 0, pricing: 0, proof: 0, cta: 1 },
      hoa: { hero: 1, boardConcerns: 1, valueProposition: 0, riskReduction: 2, approvalProcess: 0, cta: 0 },
    },
  },
  {
    id: 'pm-champion',
    label: 'Property Manager Champion',
    description: 'Operational and efficiency-focused. Built for property managers.',
    selections: {
      home: { hero: 1, problem: 0, howItWorks: 1, socialProof: 0, audienceRouter: 0, finalCta: 1 },
      resident: { hero: 1, painPoints: 0, benefits: 1, howItWorks: 0, objections: 0, cta: 0 },
      propertyManager: { hero: 1, painPoints: 1, operationalBenefits: 0, implementation: 0, towing: 0, pricing: 0, proof: 0, cta: 0 },
      hoa: { hero: 0, boardConcerns: 0, valueProposition: 0, riskReduction: 0, approvalProcess: 2, cta: 0 },
    },
  },
  {
    id: 'resident-advocacy',
    label: 'Resident Advocacy',
    description: 'Leads with emotional connection and community benefit.',
    selections: {
      home: { hero: 2, problem: 1, howItWorks: 0, socialProof: 0, audienceRouter: 0, finalCta: 2 },
      resident: { hero: 2, painPoints: 1, benefits: 2, howItWorks: 2, objections: 1, cta: 0 },
      propertyManager: { hero: 2, painPoints: 0, operationalBenefits: 2, implementation: 0, towing: 0, pricing: 0, proof: 0, cta: 2 },
      hoa: { hero: 0, boardConcerns: 0, valueProposition: 1, riskReduction: 0, approvalProcess: 0, cta: 2 },
    },
  },
  {
    id: 'premium-amenity',
    label: 'Premium Amenity',
    description: 'Positions SpotShare as a high-end building feature.',
    selections: {
      home: { hero: 1, problem: 2, howItWorks: 2, socialProof: 2, audienceRouter: 2, finalCta: 0 },
      resident: { hero: 1, painPoints: 0, benefits: 1, howItWorks: 1, objections: 0, cta: 1 },
      propertyManager: { hero: 2, painPoints: 0, operationalBenefits: 2, implementation: 2, towing: 0, pricing: 0, proof: 1, cta: 0 },
      hoa: { hero: 0, boardConcerns: 0, valueProposition: 1, riskReduction: 0, approvalProcess: 0, cta: 0 },
    },
  },
]

// ================================================================
// HOME NARRATIVES — Full, hand-written homepage stories.
// See NARRATIVES.md for the complete list of strategies and what
// each section is supposed to do under that strategy.
// ================================================================

export const HOME_NARRATIVES: HomeNarrative[] = [
  {
    id: 'problem-first',
    label: 'Problem-First',
    description: 'Makes the reader feel the problem before any solution appears.',
    sections: {
      hero: {
        label: 'Problem-First — Hero',
        eyebrow: 'Something is wrong with this picture',
        title: 'Your building has parking. Your guests still can\'t find a spot.',
        body: 'Forty reserved spaces sit empty most of the day. Meanwhile a guest is circling the block for the third time, phone in hand, about to give up and park four streets away. This isn\'t a parking shortage. It\'s something else — and it\'s happening in buildings just like yours, every single weekend.',
        cta: 'See Why This Keeps Happening',
        layoutType: 'dark',
      },
      problem: {
        label: 'Problem-First — Problem',
        eyebrow: 'The cost nobody adds up',
        title: 'It\'s not one bad weekend. It\'s every weekend, multiplied.',
        body: 'Reserved spots sit empty 60%+ of the time ⭐ placeholder stat, while guests spend 20+ minutes searching for a place to park ⭐ placeholder stat. Residents apologize before guests even arrive. Property managers field the same complaint on a loop. Boards watch it resurface on every meeting agenda, year after year, with no real fix on the table.',
        bullets: [
          'Reserved spots sit empty for hours at a time, every day ⭐ placeholder stat',
          'Guests give up looking and park blocks away — or don\'t come at all',
          'The same complaint shows up in every resident survey, every year',
          'No one has offered a real fix. Just workarounds that don\'t hold up.',
        ],
        cta: 'So What\'s Actually Going On?',
        layoutType: 'list',
      },
      howItWorks: {
        label: 'Problem-First — How It Works',
        eyebrow: 'Here\'s what was missing',
        title: 'SpotShare makes those forty empty spots available — without changing who they belong to.',
        body: 'The parking already exists. It\'s just locked to residents who aren\'t using it right now. SpotShare unlocks it temporarily, automatically, and only on the building\'s terms — no construction, no new policy vote, no hardware.',
        bullets: [
          'Residents mark their spot available when they\'re away — takes 30 seconds',
          'Guests claim an open spot from their phone before they even leave home',
          'The spot resets automatically the moment the window closes',
        ],
        cta: 'See It in Action',
        layoutType: 'steps',
      },
      socialProof: {
        label: 'Problem-First — Social Proof',
        eyebrow: 'The complaint that finally stopped',
        title: '"I used to dread having people over. Now my guests text me when they\'ve parked — not when they\'re still looking."',
        body: 'This is what changes after SpotShare launches. Residents stop apologizing. Property managers stop fielding the same call every weekend. Boards stop seeing it on the agenda.',
        bullets: [
          '"Guest parking complaints dropped to near zero within a month." — ⭐ [Property Manager]',
          '"It\'s now one of the most-mentioned amenities in our resident surveys." — ⭐ [HOA Board President]',
        ],
        cta: 'Read More Stories',
        layoutType: 'quote',
      },
      audienceRouter: {
        label: 'Problem-First — Audience Router',
        eyebrow: 'However you experience this problem',
        title: 'The pain looks a little different depending on where you sit. The fix is the same.',
        body: 'Residents feel it when guests arrive. Property managers feel it every weekend. Boards feel it every meeting. SpotShare was built to answer all three at once.',
        bullets: [
          '🏠 Residents — Stop apologizing to guests about parking',
          '🏢 Property Managers — Eliminate the complaint that never goes away',
          '🏛️ HOA Boards — Close the agenda item for good',
        ],
        cta: 'Find Your Fix',
        layoutType: 'list',
      },
      finalCta: {
        label: 'Problem-First — Final CTA',
        eyebrow: 'The empty spots are still there',
        title: 'Forty spots. Zero changes to your building\'s rules. One walkthrough to see how.',
        body: 'We\'ll show you exactly how SpotShare maps onto your building\'s existing parking setup — no guesswork, no commitment, just a clear look at what changes and what doesn\'t.',
        cta: 'Schedule a Walkthrough',
        layoutType: 'dark',
      },
    },
  },
  {
    id: 'outcome-first',
    label: 'Outcome-First',
    description: 'Opens with the resolved future state; explains the mechanism only after the reader wants it.',
    sections: {
      hero: {
        label: 'Outcome-First — Hero',
        eyebrow: 'The destination, not the journey',
        title: 'Your guest pulls up. Taps once. Parks. That\'s the whole story.',
        body: 'No circling the block. No frantic call to the front desk. No apologizing before they\'ve even arrived. In the buildings already living this way, guest parking stopped being a thing anyone thinks about.',
        cta: 'See How Buildings Get Here',
        layoutType: 'highlight',
      },
      problem: {
        label: 'Outcome-First — Problem',
        eyebrow: 'Meanwhile, in most buildings',
        title: 'That\'s not what most guests experience today.',
        body: 'Right now, in most buildings, getting a guest parked means a call to the front desk, a paper pass, or twenty minutes circling the block while reserved spots sit empty the whole time ⭐ placeholder stat. It doesn\'t have to stay that way.',
        cta: 'Show Me the Fix',
        layoutType: 'centered',
      },
      howItWorks: {
        label: 'Outcome-First — How It Works',
        eyebrow: 'Here\'s the mechanism',
        title: 'SpotShare is what turns "guests just park" from a nice idea into what actually happens.',
        body: 'It works by making the building\'s unused reserved spots temporarily available — automatically, and entirely within the rules the building already has.',
        bullets: [
          'Residents mark their spot available when they\'re away — takes 30 seconds',
          'Guests open the building link and claim an open spot before they leave home',
          'The spot resets automatically the moment the window closes',
        ],
        cta: 'See a Live Demo',
        layoutType: 'steps',
      },
      socialProof: {
        label: 'Outcome-First — Social Proof',
        eyebrow: 'Buildings already living this way',
        title: '"My guests park before I even hear they\'ve arrived. I used to dread visitors. Now I don\'t think about it at all."',
        body: 'This is the outcome buildings reach within weeks of launching SpotShare — not a someday promise, but what\'s already true for residents, managers, and boards right now.',
        bullets: [
          '"Guest parking complaints dropped to near zero within a month." — ⭐ [Property Manager]',
          '"It\'s the smoothest part of having people over now." — ⭐ [Resident]',
        ],
        cta: 'Read More Stories',
        layoutType: 'quote',
      },
      audienceRouter: {
        label: 'Outcome-First — Audience Router',
        eyebrow: 'What this looks like from where you sit',
        title: 'The outcome is the same. What it looks like to get there depends on your role.',
        body: 'Whether you\'re hosting guests, running the building, or sitting on the board — reaching "guests just park" looks a little different depending on where you start.',
        bullets: [
          '🏠 Residents — Stop thinking about your guests\' parking at all',
          '🏢 Property Managers — Stop fielding the call that always comes',
          '🏛️ HOA Boards — Close the loop on the complaint that never goes away',
        ],
        cta: 'Find Your Path There',
        layoutType: 'list',
      },
      finalCta: {
        label: 'Outcome-First — Final CTA',
        eyebrow: 'Start reaching that outcome',
        title: 'Your guests could be parking like this by next weekend.',
        body: 'We\'ll walk you through exactly how SpotShare gets your building from where it is now to guests who just park — no guesswork, no commitment, just a clear path there.',
        cta: 'Schedule a Walkthrough',
        layoutType: 'dark',
      },
    },
  },
  {
    id: 'story-first',
    label: 'Story-First',
    description: 'Opens with one concrete, specific scene and lets everything else unfold from it.',
    sections: {
      hero: {
        label: 'Story-First — Hero',
        eyebrow: '6:47pm, Saturday',
        title: 'Her parents are circling the block for the third time. She\'s standing in the lobby, phone buzzing, trying to explain where to go.',
        body: '"Just turn around again — no, past the mailboxes — okay, there\'s really nowhere?" Forty reserved spots sit behind her, every one of them empty. Her parents don\'t know that. They just know they\'re late for dinner and still haven\'t parked.',
        cta: 'See What Happens Next',
        layoutType: 'dark',
      },
      problem: {
        label: 'Story-First — Problem',
        eyebrow: 'This isn\'t just her story',
        title: 'Zoom out, and this is happening in buildings everywhere, every weekend.',
        body: 'Swap her parents for someone else\'s — a contractor, a babysitter, an old friend visiting for the night. The scene barely changes. Reserved spots sit empty 60%+ of the time ⭐ placeholder stat while a guest who was told "there\'s parking" can\'t find any of it.',
        bullets: [
          'A different name, a different building, the same phone call every weekend ⭐ placeholder stat',
          'Residents start the visit apologizing instead of welcoming someone in',
          'The spots were never the problem. Nobody could get to them.',
        ],
        cta: 'So How Does Her Story End?',
        layoutType: 'list',
      },
      howItWorks: {
        label: 'Story-First — How It Works',
        eyebrow: 'Back to 6:47pm',
        title: 'Here\'s the version of that night with SpotShare already running.',
        body: 'Before she even called them, she\'d marked her spot available from her phone. Her parents got a link, claimed it from the car, and pulled straight in. No call, no circling, no apology at the door — just dinner, on time.',
        bullets: [
          'She marks her spot available when she\'s expecting guests — takes 30 seconds',
          'They claim it from their phone before they even arrive',
          'The spot resets automatically once the visit\'s over',
        ],
        cta: 'See It Work in Real Time',
        layoutType: 'steps',
      },
      socialProof: {
        label: 'Story-First — Social Proof',
        eyebrow: 'A few more nights like that one',
        title: '"My babysitter used to park three blocks away and walk in the dark. Now she pulls right into a spot I opened for her."',
        body: 'Every building has its own version of the 6:47pm story. Here\'s what changed once a few of them started using SpotShare.',
        bullets: [
          '"My in-laws actually arrive in a good mood now." — ⭐ [Resident]',
          '"The front desk stopped getting the \'where do I park\' call every Friday night." — ⭐ [Property Manager]',
        ],
        cta: 'Read More Stories',
        layoutType: 'quote',
      },
      audienceRouter: {
        label: 'Story-First — Audience Router',
        eyebrow: 'Whose story is this?',
        title: 'Maybe it\'s your night. Maybe it\'s a resident you manage, or a building you\'re responsible for.',
        body: 'The lobby scene plays out a little differently depending on where you stand in it — but it\'s always the same call, the same circling, the same apology.',
        bullets: [
          '🏠 Residents — You\'re the one standing in the lobby, phone in hand',
          '🏢 Property Managers — You\'re the one who gets the call when she can\'t reach you either',
          '🏛️ HOA Boards — You\'re the one who hears about it the next morning',
        ],
        cta: 'Find Your Version of This Story',
        layoutType: 'list',
      },
      finalCta: {
        label: 'Story-First — Final CTA',
        eyebrow: 'Write a different ending',
        title: 'Next Saturday doesn\'t have to start with a phone call from the curb.',
        body: 'We\'ll show you exactly how SpotShare fits into your building\'s parking setup — no guesswork, no commitment, just a clear look at how the story changes.',
        cta: 'Schedule a Walkthrough',
        layoutType: 'dark',
      },
    },
  },
  {
    id: 'heros-journey',
    label: "Hero's Journey",
    description: 'Maps building life onto the classic mythic arc — ordinary world, call to adventure, trials, and transformation.',
    sections: {
      hero: {
        label: "Hero's Journey — Hero",
        eyebrow: 'Every building has this same story',
        title: 'For years, the routine never changed: forty reserved spots, and guests who still couldn\'t park. Then something forced the question — does it have to stay this way?',
        body: 'Maybe it was a board meeting that went sideways over the same complaint for the third year running. Maybe it was a new manager who refused to accept "that\'s just how it is." Whatever the trigger, every building\'s story starts the same way — life with the problem, and the moment someone finally decides to do something about it.',
        cta: 'See What Came Next',
        layoutType: 'dark',
      },
      problem: {
        label: "Hero's Journey — Problem",
        eyebrow: 'The struggle before the fix',
        title: 'Most buildings try everything before they try the right thing.',
        body: 'Paper passes that guests lose before they reach the gate. A new policy proposed, debated, and quietly shelved. A resident group chat standing in for a real system. None of it holds up past the first busy weekend.',
        bullets: [
          'Paper guest passes — easy to lose, easy to forge, easy to forget',
          'A policy change proposed at the board meeting — stuck in committee ever since',
          'Residents trading spots informally over text — works until it doesn\'t',
          'Every workaround buys a little time and solves nothing for good',
        ],
        cta: 'Meet the Guide',
        layoutType: 'list',
      },
      howItWorks: {
        label: "Hero's Journey — How It Works",
        eyebrow: 'The plan, handed over',
        title: 'SpotShare is the guide that hands your building a method that actually works.',
        body: 'Not another policy to enforce or pass to print. A clear, simple plan: residents open their own spot when they\'re away, guests claim it from their phone, and the spot returns home automatically when they\'re done.',
        bullets: [
          'Residents mark their spot available when they\'re away — takes 30 seconds',
          'Guests claim an open spot from their phone before they arrive',
          'The spot resets automatically the moment the window closes',
        ],
        cta: 'See the Plan in Motion',
        layoutType: 'steps',
      },
      socialProof: {
        label: "Hero's Journey — Social Proof",
        eyebrow: 'Buildings that made it through',
        title: '"We tried the policy route for two years and got nowhere. SpotShare took two weeks." — ⭐ [HOA Board President]',
        body: 'These are the buildings that went through the same struggle — the failed passes, the shelved policies — and came out the other side with something that actually holds.',
        bullets: [
          '"Our board stopped debating this and started pointing people to the app." — ⭐ [HOA Board President]',
          '"The complaint that used to open every meeting just... stopped." — ⭐ [Property Manager]',
        ],
        cta: 'Read More Stories',
        layoutType: 'quote',
      },
      audienceRouter: {
        label: "Hero's Journey — Audience Router",
        eyebrow: 'Choose your path forward',
        title: 'From here, the road forward looks a little different depending on which seat you\'re in.',
        body: 'Every journey has someone who takes the first step. In your building, that might be you.',
        bullets: [
          '🏠 Residents — Start by opening your own spot for the next guest',
          '🏢 Property Managers — Start by rolling SpotShare out building-wide',
          '🏛️ HOA Boards — Start by putting this on the agenda instead of the complaint',
        ],
        cta: 'Find Your Path',
        layoutType: 'list',
      },
      finalCta: {
        label: "Hero's Journey — Final CTA",
        eyebrow: 'The return, transformed',
        title: 'Same building, same forty spots — except now guests just park, and nobody\'s still fighting about it at board meetings.',
        body: 'We\'ll show you exactly how SpotShare maps onto your building\'s existing setup — no guesswork, no commitment, just a clear look at what changes.',
        cta: 'Schedule a Walkthrough',
        layoutType: 'dark',
      },
    },
  },
  {
    id: 'vision-first',
    label: 'Vision-First',
    description: 'Opens with a big-picture belief about the future and positions SpotShare as part of getting there.',
    sections: {
      hero: {
        label: 'Vision-First — Hero',
        eyebrow: 'Where this is all headed',
        title: 'Buildings are starting to treat space the way cities treat traffic — as something to manage intelligently, not lock down and hope for the best.',
        body: 'Every reserved spot, every storage closet, every amenity room that sits empty most of the day is space a building already owns but isn\'t using. The buildings getting ahead of this aren\'t building more. They\'re using what they have, better.',
        cta: 'See Where This Is Going',
        layoutType: 'highlight',
      },
      problem: {
        label: 'Vision-First — Problem',
        eyebrow: 'The gap between vision and Tuesday',
        title: 'Most buildings are nowhere close to that yet.',
        body: 'Reserved parking still means locked to one resident, all day, every day, whether they\'re home or not ⭐ placeholder stat. The space sits idle while a guest outside can\'t find anywhere to park. The vision is shared, intelligent use of space — today\'s reality is a hundred locked doors nobody\'s using.',
        cta: 'Show Me the Bridge',
        layoutType: 'centered',
      },
      howItWorks: {
        label: 'Vision-First — How It Works',
        eyebrow: 'The bridge to get there',
        title: 'SpotShare is the practical first step from locked-down space to intelligently shared space.',
        body: 'It starts small and concrete: the parking spots your building already has, made temporarily available the moment they\'re not in use.',
        bullets: [
          'Residents mark their spot available when they\'re away — takes 30 seconds',
          'Guests claim an open spot from their phone before they arrive',
          'The spot resets automatically the moment the window closes',
        ],
        cta: 'See the First Step',
        layoutType: 'steps',
      },
      socialProof: {
        label: 'Vision-First — Social Proof',
        eyebrow: 'Already happening, building by building',
        title: '"We used to think our parking lot was full. It turns out it was just locked." — ⭐ [Property Manager]',
        body: 'The shift toward intelligent, shared space isn\'t theoretical — it\'s already showing up in the buildings that started with something as simple as their guest parking.',
        bullets: [
          '"Once residents saw it work for parking, they started asking what else could work this way." — ⭐ [HOA Board President]',
          '"It changed how we think about every underused space in the building, not just parking." — ⭐ [Property Manager]',
        ],
        cta: 'Read More Stories',
        layoutType: 'quote',
      },
      audienceRouter: {
        label: 'Vision-First — Audience Router',
        eyebrow: 'Your part in that future',
        title: 'Getting there takes someone in every seat pushing it forward.',
        body: 'Whichever seat you\'re in, there\'s a concrete part of this future that starts with you.',
        bullets: [
          '🏠 Residents — Be the first to open your spot and show your neighbors how it works',
          '🏢 Property Managers — Be the one who brings your building into the shared-space model',
          '🏛️ HOA Boards — Be the board that got ahead of this instead of catching up to it',
        ],
        cta: 'Find Your Part',
        layoutType: 'list',
      },
      finalCta: {
        label: 'Vision-First — Final CTA',
        eyebrow: 'Be early to this',
        title: 'The buildings that get there first aren\'t smarter. They just started sooner.',
        body: 'We\'ll show you exactly how SpotShare turns your building\'s existing parking into the first piece of that future — no guesswork, no commitment, just a clear look at what changes.',
        cta: 'Schedule a Walkthrough',
        layoutType: 'dark',
      },
    },
  },
]

// ================================================================
// PROPERTY MANAGER NARRATIVES
// Section keys: hero, painPoints, operationalBenefits, implementation,
//               towing, pricing, proof, cta
// ================================================================

export const PROPERTY_MANAGER_NARRATIVES: HomeNarrative[] = [
  {
    id: 'easiest-amenity',
    label: 'Easiest Amenity',
    description: 'Leads with simplicity and self-setup. Built for the busy PM who\'s heard too many pitches.',
    sections: {
      hero: {
        label: 'Easiest Amenity — Hook',
        eyebrow: 'For Property Managers',
        title: 'The easiest amenity upgrade you\'ll ever add.',
        body: 'Send us a spreadsheet. Hang a poster. You\'re done.',
        cta: 'Book a 20-Minute Call',
        layoutType: 'centered',
      },
      painPoints: {
        label: 'Easiest Amenity — Problem',
        title: 'Managing guest parking is one of those things that sounds simple until it isn\'t.',
        body: 'Wrong spots, resident complaints, zero visibility, and somehow it always lands in your inbox. SpotShare takes the whole thing off your plate — and sets itself up while it\'s at it.',
        cta: 'See How It Works',
        layoutType: 'quote',
      },
      operationalBenefits: {
        label: 'Easiest Amenity — Onboarding',
        eyebrow: 'Getting started',
        title: 'We do the heavy lifting. Really.',
        body: 'Most properties are live within a week. Here\'s all it takes.',
        bullets: [
          'Send us your list — share a spreadsheet of your residents, units, and spots',
          'We handle setup — we upload everything and get your community configured',
          'Hang the poster — we send you materials to get residents in the loop',
          'You\'re live — that\'s genuinely it',
        ],
        cta: 'Let\'s Get My Property Set Up',
        layoutType: 'steps',
      },
      implementation: {
        label: 'Easiest Amenity — Day to Day',
        eyebrow: 'Day to day',
        title: 'Less chaos. Full visibility.',
        body: 'Once you\'re live, SpotShare runs itself. Here\'s what your day looks like.',
        bullets: [
          'Real-time dashboard so you always know what\'s happening in your lot',
          'Residents self-manage their own parking requests — without calling you',
          'When issues come up, most are resolved right in the app. For violations that require towing, that decision stays with you — because you know your community best.',
          'No more spreadsheets, sticky notes, or crossed fingers',
        ],
        cta: 'See the Dashboard',
        layoutType: 'list',
      },
      towing: {
        label: 'Easiest Amenity — Towing',
        eyebrow: 'Enforcement',
        title: 'We handle a lot. You handle the rest.',
        body: 'When issues come up, most are resolved right in the app. For violations that require towing, that decision stays with you — because you know your community best.',
        cta: 'Learn More About Enforcement',
        layoutType: 'highlight',
      },
      pricing: {
        label: 'Easiest Amenity — Pricing',
        eyebrow: 'Pricing',
        title: 'Surprisingly simple pricing.',
        body: 'SpotShare is billed per resident parking spot, quarterly or annually. No setup fees. No per-user charges. One flat rate based on your property size.',
        bullets: [
          '$150 per quarter or $500 per year for a building with 100 spots',
          'Less than $1.50 per spot per month',
          '"One resident parking complaint takes 20 minutes to resolve. At that rate, SpotShare pays for itself before the end of January."',
        ],
        cta: 'See Pricing for My Building',
        layoutType: 'list',
      },
      proof: {
        label: 'Easiest Amenity — Social Proof',
        eyebrow: 'Don\'t just take our word for it.',
        title: '"[Property manager testimonial — worth capturing from early adopters during onboarding.]"',
        body: 'Buildings that have added SpotShare consistently report the same outcome: fewer calls, happier residents, and one less thing to manage every week.',
        cta: 'Read More Stories',
        layoutType: 'quote',
      },
      cta: {
        label: 'Easiest Amenity — CTA',
        eyebrow: 'Let\'s do this',
        title: 'Ready to make parking the easiest part of your job?',
        body: 'No pressure, no commitment — just a quick look at how it works for your building.',
        cta: 'Book a 20-Minute Call',
        layoutType: 'dark',
      },
    },
  },
]

// ================================================================
// RESIDENT NARRATIVES — Full, hand-written resident page stories.
// Section keys: hero, painPoints, benefits, howItWorks, objections, cta
// ================================================================

// ================================================================
// HOA BOARD NARRATIVES — Full, hand-written HOA Board page stories.
// Section keys: hero, boardConcerns, valueProposition, riskReduction,
//               approvalProcess, cta
// ================================================================

export const HOA_NARRATIVES: HomeNarrative[] = [
  {
    id: 'low-risk-high-reward',
    label: '60-Day Free Trial',
    description: 'Answers the two questions boards ask first, then makes saying yes feel like the obvious move.',
    sections: {
      hero: {
        label: '60-Day Free Trial — Hero',
        eyebrow: '60-day free trial',
        title: 'Try it free for 60 days. No board drama required.',
        body: 'SpotShare gives your community a better parking experience — with zero risk to the association budget.',
        cta: 'Download the Board Presentation',
        layoutType: 'centered',
      },
      boardConcerns: {
        label: '60-Day Free Trial — Two Questions',
        eyebrow: 'Before anything else',
        title: 'The two questions every board asks first. Let\'s answer them now.',
        body: 'Every board wants to know the same two things before they go any further.',
        bullets: [
          '"What does this cost?" — SpotShare is billed per resident parking spot, quarterly or annually. For a community with 100 parking spots, that\'s $150 a quarter — less than $1.50 per spot per month. Your first 60 days are completely free.',
          '"Will people actually use it?" — Yes. Communities using SpotShare see [X] parking requests in their first month alone. When parking is easy, residents use it.',
        ],
        cta: 'See Full Pricing',
        layoutType: 'list',
      },
      valueProposition: {
        label: '60-Day Free Trial — Why Boards Say Yes',
        eyebrow: 'Why boards say yes',
        title: 'A real amenity upgrade. A real easy decision.',
        body: 'This isn\'t a long-shot proposal or a major systems overhaul. It\'s a parking upgrade that makes your residents happy, your property manager\'s job easier, and your board look good for approving it.',
        bullets: [
          'Reduces parking complaints to the board',
          'Gives your community a modern, fair system',
          'No extra work for board members — operations run through your property manager',
          'Completely free for residents',
          '60-day free trial so you can see it working before you commit',
        ],
        cta: 'Download the Board Presentation',
        layoutType: 'list',
      },
      approvalProcess: {
        label: '60-Day Free Trial — How It Gets Approved',
        eyebrow: 'How it gets approved',
        title: 'We make the conversation easy.',
        body: 'You shouldn\'t have to sell this yourself. Download our board presentation and bring it to your next meeting — or invite us to present directly. We\'ve done this before and we\'ll make your board feel confident.',
        cta: 'Download the Board Presentation',
        layoutType: 'highlight',
      },
      riskReduction: {
        label: '60-Day Free Trial — Board Role',
        eyebrow: 'What the board does (and doesn\'t do)',
        title: 'You approve it. We handle everything else.',
        body: 'Once the board gives the green light, your property manager takes it from there. SpotShare handles setup, onboarding, and day-to-day operations. Board members don\'t manage the system — you just get to take credit for a parking experience your residents actually love.',
        cta: 'Learn How Implementation Works',
        layoutType: 'centered',
      },
      cta: {
        label: '60-Day Free Trial — CTA',
        eyebrow: 'Ready to bring this to your board?',
        title: '60 days free. No commitment. Just a better parking experience for your community.',
        body: '"[X] parking requests handled in the first 30 days at [Building Name]." ⭐ Placeholder — replace with real data when available',
        bullets: [
          '$150/quarter or $500/year for a 100-spot community',
          'First 60 days free — no credit card required',
          'Cancel any time during the trial, no questions asked',
        ],
        cta: 'Download the Board Presentation',
        layoutType: 'dark',
      },
    },
  },
]

// ================================================================
// RESIDENT NARRATIVES — Full, hand-written resident page stories.
// Section keys: hero, painPoints, benefits, howItWorks, objections, cta
// ================================================================

export const RESIDENT_NARRATIVES: HomeNarrative[] = [
  {
    id: 'resident-advocate',
    label: 'Resident Advocate',
    description: 'For a resident who wants to bring SpotShare to their building.',
    sections: {
      hero: {
        label: 'Advocate — Hook',
        eyebrow: 'For Residents',
        title: 'Your building has parking spots sitting empty. Now you can actually use them.',
        body: 'SpotShare turns unused reserved spots into guest parking your neighbors and guests can actually access — no passes, no calls, no circling the block.',
        cta: 'Ask Your Property Manager',
        layoutType: 'centered',
      },
      painPoints: {
        label: 'Advocate — What It Is',
        eyebrow: 'What is SpotShare?',
        title: 'SpotShare is your building\'s guest parking system — simple, fair, and free for residents.',
        body: 'When your spot sits empty, a neighbor\'s guest can use it temporarily. When you have guests, you benefit from neighbors who did the same. The building stays in control the whole time.',
        cta: 'See How It Works',
        layoutType: 'highlight',
      },
      benefits: {
        label: 'Advocate — How It Works',
        eyebrow: 'How it works',
        title: 'Three steps. That\'s genuinely it.',
        body: 'SpotShare is designed to be effortless — for you and for your guests.',
        bullets: [
          'Request — Need a spot? Grab one now or schedule ahead',
          'Show up — Your spot is waiting, no guessing, no circling',
          'Done — That\'s genuinely it',
        ],
        cta: 'Bring This to My Building',
        layoutType: 'steps',
      },
      howItWorks: {
        label: 'Advocate — Availability',
        eyebrow: 'Will I actually get a spot?',
        title: 'Spots are managed by your property team — so availability is always accurate.',
        body: 'No double bookings, no surprises. Your property manager configures which spots are eligible and sets the rules. SpotShare enforces them automatically, so what you see is what\'s actually available.',
        cta: 'See How It Works',
        layoutType: 'list',
      },
      objections: {
        label: 'Advocate — It\'s Free',
        eyebrow: 'One more thing',
        title: 'SpotShare is a free amenity included with your home. No fees, no catch.',
        body: 'Access SpotShare from any browser — no app download needed. Your building handles the setup. You just show up. (Mobile app coming soon!)',
        bullets: [
          'Free — covered by your building, like any other amenity',
          'No app required — works from any browser on any device',
          'Mobile app coming soon',
        ],
        cta: 'Ask My Property Manager to Set This Up',
        layoutType: 'dark',
      },
      cta: {
        label: 'Advocate — CTA',
        eyebrow: 'Ready to make it happen?',
        title: 'Ask your property manager to get started.',
        body: 'SpotShare is easy for your building to set up and free for you as a resident. Share this page with your property manager or HOA board and get it on the agenda.',
        bullets: [
          'Forward this page to your property manager',
          'Share with your HOA board contact',
          'Or let us reach out on your behalf',
        ],
        cta: 'Tell My Building About SpotShare',
        layoutType: 'highlight',
      },
    },
  },
]
