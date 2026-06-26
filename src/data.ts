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
            label: 'Direct',
            eyebrow: 'For your community',
            title: 'Neighbors helping neighbors — one parking spot at a time.',
            body: 'When a neighbor is away, their empty spot can help your guest find a place. When you\'re away, yours does the same for someone else. SpotShare makes it automatic, fair, and free — the way good neighbors already want to work.',
            cta: 'Ask Your Property Manager',
            layoutType: 'centered',
          },
          {
            label: 'Guest Problem',
            eyebrow: 'For your building\'s community',
            title: 'Your community already has enough parking. SpotShare just helps you share it.',
            body: 'Spots in your building sit empty every day — while guests circle the block. SpotShare connects the two: your neighbors\' unused spots become available when they\'re away, and yours does the same for them.',
            bullets: [
              'No spending hours circiling the block for parking',
              'No calls to make before guests arrive',
              'No extra work for you or your neighbors',
            ],
            cta: 'Bring SpotShare to My Building',
            layoutType: 'split',
          },
          {
            label: 'Community',
            eyebrow: 'For your building\'s residents',
            title: 'When you look out for your neighbors, they look out for you. Now that includes parking.',
            body: 'SpotShare turns the parking your community already has into a resource everyone can rely on. Your spot stays yours — and when you\'re away, it quietly helps a neighbor. When you need it, the community returns the favor.',
            cta: 'Share This With Your Property Manager',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'whatIsSpotShare',
        label: 'What Is SpotShare?',
        variants: [
          {
            label: 'Simple',
            eyebrow: 'What is SpotShare?',
            title: 'SpotShare is your community\'s shared parking amenity — built on the idea that neighbors take care of each other.',
            body: 'When your spot sits empty, a neighbor\'s guest can use it. When you have guests, someone else\'s spot is there for you. It\'s parking the way a good community naturally works — just made automatic.',
            cta: 'See How It Works',
            layoutType: 'highlight',
          },
          {
            label: 'Community Framing',
            eyebrow: 'The idea behind SpotShare',
            title: 'Your community already has more parking than it uses. SpotShare makes sure everyone benefits from that.',
            body: 'Reserved spots sit empty more than half the time. SpotShare is what lets your community actually use what it has — without anyone giving up their spot permanently or doing any extra work.',
            cta: 'Learn More',
            layoutType: 'centered',
          },
          {
            label: 'Community Statement',
            eyebrow: 'Built for communities like yours',
            title: 'SpotShare works because your neighbors are good people — it just gives them an easy way to show it.',
            body: 'Most residents would happily share their spot when they\'re away, if there were a simple way to do it. SpotShare is that simple way. No coordination needed, no awkward asks — just a community that naturally takes care of itself.',
            cta: 'Bring This to My Building',
            layoutType: 'dark',
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
            title: 'Simple for everyone — because a good community resource has to be.',
            body: 'SpotShare is designed to be effortless for guests and residents alike. The easier it is, the more your whole community benefits.',
            bullets: [
              'Request — Need a spot? Grab one now or schedule ahead',
              'Automatically you are matched with an available spot',
              'Done — That\'s genuinely it',
            ],
            cta: 'Bring This to My Building',
            layoutType: 'steps',
          },
          {
            label: 'Easy Setup',
            eyebrow: 'Getting started',
            title: 'Your building sends you a link. You click it. You\'re part of the community.',
            body: 'Setting up SpotShare takes less than a minute. Click the invite link from your building, create your account, and your unit and spot information are already connected. After that, requesting or sharing a spot is just a tap — for you and every neighbor who does the same.',
            cta: 'Ask Your Property Manager About SpotShare',
            layoutType: 'centered',
          },
          {
            label: 'Resident Setup',
            eyebrow: 'When you want to contribute',
            title: 'Going away? Let your spot keep working for your community while you\'re gone.',
            body: 'It takes 30 seconds to mark your spot available. The system handles requests, confirmations, and an automatic reset when your window closes — so contributing to your building\'s shared parking takes almost no effort at all.',
            bullets: [
              'Set a one-time or recurring availability window',
              'Your spot auto-resets the moment your window closes',
              'You\'re notified when your spot is in use',
            ],
            cta: 'See It In Action',
            layoutType: 'split',
          },
        ],
      },
      {
        id: 'availability',
        label: 'Availability',
        variants: [
          {
            label: 'Property Managed',
            eyebrow: 'Will I actually get a spot?',
            title: 'Your community\'s parking is managed by your property team — so what you see is what\'s actually there.',
            body: 'No double bookings, no surprises. Your property manager configures which community spots are eligible and sets the rules. SpotShare enforces them automatically, so every available spot is genuinely available.',
            cta: 'See How It Works',
            layoutType: 'list',
          },
          {
            label: 'Reassurance',
            eyebrow: 'How SpotShare handles availability',
            title: 'Real spots. Real availability. No one in your community gets left circling.',
            body: 'SpotShare only shows spots that are actually open. Community spots are only available when residents have explicitly shared them. You\'ll never show up to find someone else already there.',
            bullets: [
              'Claim a spot in advance or on arrival',
              'Confirmed spots are locked to you for your window',
              'The system enforces it — no manual policing needed',
            ],
            cta: 'Bring SpotShare to My Building',
            layoutType: 'centered',
          },
          {
            label: 'Building Control',
            eyebrow: 'Your community sets the rules',
            title: 'Every community configures SpotShare around how they actually live and park.',
            body: 'Your property manager decides which spots are eligible, how long guests can stay, and how far in advance they can book. SpotShare enforces those community rules automatically — you just see what\'s available.',
            cta: 'Ask Your Property Manager',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'itsFree',
        label: 'It\'s Free',
        variants: [
          {
            label: 'Free Amenity',
            eyebrow: 'One more thing',
            title: 'SpotShare is a community amenity — already included with your home. No fees, no catch.',
            body: 'Access SpotShare from any browser. Your building handles the setup. You just show up and benefit from a community that takes care of its own.',
            bullets: [
              'Free — covered by your building, like any other community amenity',
              'Works from any browser on any device',
              'Mobile app coming soon',
            ],
            cta: 'Ask My Property Manager to Set This Up',
            layoutType: 'dark',
          },
          {
            label: 'No Friction',
            eyebrow: 'Nothing to download or sign up for',
            title: 'No app. No account. No friction. Just a community that makes parking easy.',
            body: 'SpotShare works from any browser on any device. Your guest gets a link, sees what\'s available in your community, and claims a spot. That\'s the whole experience. Nothing to install, nothing to remember — because access should always feel this simple.',
            cta: 'Bring SpotShare to My Building',
            layoutType: 'centered',
          },
          {
            label: 'Value',
            eyebrow: 'What\'s included',
            title: 'The community amenity your building was waiting for.',
            body: 'SpotShare is included as a building amenity — same as the gym, the package room, or the bike storage. You pay nothing extra. You just benefit from a community system that turns parking into something everyone can rely on.',
            bullets: [
              'Completely free for all residents',
              'Works from any browser, any device',
              'Your property team handles setup and configuration',
              'Mobile app coming soon',
            ],
            cta: 'Ask Your Property Manager to Add SpotShare',
            layoutType: 'highlight',
          },
        ],
      },
      {
        id: 'cta',
        label: 'CTA',
        variants: [
          {
            label: 'Advocacy',
            eyebrow: 'Ready to make it happen?',
            title: 'Help your community get this. It starts with one ask.',
            body: 'SpotShare is easy for your building to set up and free for every resident. Share this page with your property manager or HOA board — and be the neighbor who made parking better for everyone.',
            bullets: [
              'Forward this page to your property manager',
              'Share with your HOA board contact',
              'Or let us reach out on your behalf',
            ],
            cta: 'Tell My Building About SpotShare',
            layoutType: 'highlight',
          },
          {
            label: 'Direct',
            eyebrow: 'Make it happen',
            title: 'Your community can have this. You just have to be the one who asks.',
            body: 'Share this page with your property manager or HOA board. We handle everything from there — setup, onboarding, resident communication. One resident who speaks up is all it takes to get it on the agenda.',
            cta: 'Share With My Building',
            layoutType: 'dark',
          },
          {
            label: 'Soft Ask',
            eyebrow: 'No pressure',
            title: 'Find out if SpotShare is right for your community.',
            body: 'Every building is different. Send us your info and we\'ll tell you honestly whether SpotShare is a good fit — and if it is, we\'ll handle reaching out to your property manager directly. No pressure, just a real conversation.',
            cta: 'Check If My Building Qualifies',
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
  resident: { hero: 0, whatIsSpotShare: 0, howItWorks: 0, availability: 0, itsFree: 0, cta: 0 },
  propertyManager: { hero: 0, painPoints: 0, operationalBenefits: 0, implementation: 0, towing: 0, pricing: 0, proof: 0, cta: 0 },
  hoa: { hero: 0, boardConcerns: 0, valueProposition: 0, riskReduction: 0, approvalProcess: 0, cta: 0 },
}

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
