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
            label: 'Easiest Amenity',
            eyebrow: 'For Property Managers',
            title: 'The easiest amenity upgrade you\'ll ever add.',
            body: 'Send us a spreadsheet. Hang a poster. You\'re done.',
            cta: 'Book a 20-Minute Call',
            layoutType: 'centered',
          },
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
              'Manager Dashbord for visibility',
              'Usage reports',
              'Residents manage their own spots',
            ],
            cta: 'Request a Demo',
            layoutType: 'split',
          },
        ],
      },
      {
        id: 'painPoints',
        label: 'Pain Points',
        variants: [
          {
            label: 'Easiest Amenity',
            title: 'Slothicorn power is working at Bayside. It has been so great not to see building link emails asking for parking spots or getting residents coming up to ask us for spots.',
            body: '- Property Manager at Bayside',
            cta: 'See How It Works',
            layoutType: 'quote',
          },
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
        label: 'Getting Started',
        variants: [
          {
            label: 'Easiest Amenity',
            eyebrow: 'Getting started',
            title: 'We do the heavy lifting. Really.',
            body: 'Most properties are live within a week. Here\'s all it takes.',
            bullets: [
              'Send us your list — share a spreadsheet of your residents, units, and spots',
              'We handle setup — we upload everything and send residents an invite link',
              'Hang the poster — we send you materials to get residents in the loop',
              'You\'re live — that\'s genuinely it',
            ],
            cta: 'Let\'s Get My Property Set Up',
            layoutType: 'steps',
          },
          {
            label: 'Feature List',
            eyebrow: 'What you actually get',
            title: 'A guest parking system that runs itself — and reports to you.',
            body: 'SpotShare handles the operational complexity of guest parking so you can focus on everything else.',
            bullets: [
              'Real-time availability — no manual tracking, no passes, no calls',
              'Usage logs and reports sent quarterly',
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
        ],
      },
      {
        id: 'implementation',
        label: 'Day to Day',
        variants: [
          {
            label: 'Easiest Amenity',
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
          {
            label: 'Quiet Inbox',
            eyebrow: 'What changes after launch',
            title: 'You stop getting parking calls. That\'s the whole point.',
            body: 'Residents request spots through the app. Guests find their own parking. The system enforces the rules. By the time the weekend rolls around, your phone stays quiet — because there\'s nothing left for anyone to call you about.',
            cta: 'See How It Works',
            layoutType: 'centered',
          },
          {
            label: 'Dashboard Check',
            eyebrow: 'Your daily routine',
            title: 'A 30-second dashboard check. Then you move on with your day.',
            body: 'Log in and see who\'s parked, what\'s available, and whether anything needs your attention. Most days, nothing does. That\'s not a bug — that\'s SpotShare doing its job.',
            bullets: [
              'See active parking sessions across your lot in real time',
              'Know which spots are available before a guest even asks',
              'Anything unusual gets flagged — so you only act when it actually matters',
            ],
            cta: 'See the Dashboard',
            layoutType: 'list',
          },
        ],
      },
      {
        id: 'towing',
        label: 'Towing / Enforcement',
        variants: [
          {
            label: 'Easiest Amenity',
            eyebrow: 'Enforcement',
            title: 'We handle a lot. You handle the rest.',
            body: 'When issues come up, most are resolved right in the app. For violations that require towing, that decision stays with you — because you know your community best.',
            cta: 'Learn More About Enforcement',
            layoutType: 'highlight',
          },
          {
            label: 'Prevention-First',
            eyebrow: 'Built-in prevention',
            title: 'Most parking problems resolve before they ever reach you.',
            body: 'SpotShare logs every session in real time. When something looks wrong, the app surfaces it first — before it becomes a complaint in your inbox. Towing decisions stay with you, but you\'ll need them far less often than you do today.',
            cta: 'See How Enforcement Works',
            layoutType: 'centered',
          },
          {
            label: 'Full Visibility',
            eyebrow: 'You stay in control',
            title: 'Every session is logged. Violations are visible. The call is always yours.',
            body: 'SpotShare doesn\'t automate towing — it gives you the visibility to make smart decisions. You see who\'s parked, when they arrived, and whether they\'re authorized. If enforcement is needed, you have everything you need to act.',
            bullets: [
              'Real-time session log for your entire lot',
              'Unauthorized parking flagged automatically in the dashboard',
              'Full session history available if you need to document a violation',
            ],
            cta: 'See the Enforcement Dashboard',
            layoutType: 'list',
          },
        ],
      },
      {
        id: 'pricing',
        label: 'Pricing',
        variants: [
          {
            label: 'Easiest Amenity',
            eyebrow: 'Pricing',
            title: 'Surprisingly simple pricing.',
            body: 'SpotShare is billed per resident parking spot.  No setup fees. No per-user charges.',
            bullets: [
              '50 cents per spot per month',
              'Pay quarterly, or go annual and get one month free.',
              '"One resident parking complaint takes 20 minutes to resolve. At that rate, SpotShare pays for itself before the end of January."',
            ],
            cta: 'See Pricing for My Building',
            layoutType: 'list',
          },
          {
            label: 'ROI Framing',
            eyebrow: 'The math is simple',
            title: 'One parking complaint takes 20 minutes to resolve. SpotShare costs 50 cents per spot per month.',
            body: 'Do the math for your building. At even one complaint per week, SpotShare pays for itself in hours. Most properties report far fewer parking-related calls within the first 30 days of launch.',
            cta: 'See Pricing for My Building',
            layoutType: 'centered',
          },
          {
            label: 'No Capital Required',
            eyebrow: 'Compared to every other option',
            title: 'No construction. No IT project. No capital expenditure.',
            body: 'Adding spots costs five figures. Changing parking policy requires resident votes. SpotShare launches in a week and costs less than a gym membership per spot — your board approves the program, not a budget line.',
            bullets: [
              'No setup fees — ever',
              'No per-user charges — flat rate based on spots, not headcount',
              '50 cents per spot per month — $150/quarter or $550/year for a 100-spot building',
              'Go annual and get one month free',
            ],
            cta: 'Request Pricing for My Building',
            layoutType: 'split',
          },
        ],
      },
      {
        id: 'proof',
        label: 'Proof',
        variants: [
          {
            label: 'Easiest Amenity',
            eyebrow: 'Don\'t just take our word for it.',
            title: '"[Property manager testimonial — worth capturing from early adopters during onboarding.]"',
            body: 'Buildings that have added SpotShare consistently report the same outcome: fewer calls, happier residents, and one less thing to manage every week.',
            cta: 'Read More Stories',
            layoutType: 'quote',
          },
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
        ],
      },
      {
        id: 'cta',
        label: 'CTA',
        variants: [
          {
            label: 'Easiest Amenity',
            eyebrow: 'Let\'s do this',
            title: 'Ready to make parking the easiest part of your job?',
            body: 'No pressure, no commitment — just a quick look at how it works for your building.',
            cta: 'Book a 20-Minute Call',
            layoutType: 'dark',
          },
          {
            label: 'Demo Request',
            eyebrow: 'Ready to fix parking for real?',
            title: 'Schedule a management demo. See SpotShare configured for your building type.',
            body: 'We\'ll walk you through the admin controls, show you what residents see, and help you think through how to present it to your board. You\'ll leave knowing exactly what to expect.',
            cta: 'Schedule a Management Demo',
            layoutType: 'dark',
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
            label: '60-Day Free Trial',
            eyebrow: '60-day free trial',
            title: 'Give your community better parking. Free for the first 60 days.',
            body: 'SpotShare turns the parking spots your neighbors already own into a shared resource everyone can count on — with zero risk to the association budget.',
            cta: 'Download the Board Presentation',
            layoutType: 'centered',
          },
          {
            label: 'Problem-Led',
            eyebrow: 'For HOA Boards',
            title: 'Your neighbors deserve a real parking solution. SpotShare is it.',
            body: 'Every quarter, your board revisits the same guest parking problem with no resolution. SpotShare gives your community a permanent fix — with zero capital expenditure and a 60-day free trial to prove it works.',
            cta: 'Request Board Materials',
            layoutType: 'dark',
          },
          {
            label: 'Community Credit',
            eyebrow: 'For HOA Boards',
            title: 'A guest parking solution your community will actually thank you for.',
            body: 'SpotShare gives your neighbors a fair, modern parking system — with full board control over the rules. Your community gets something that works. Your board gets credit for making it happen.',
            cta: 'Request a Board Presentation',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'boardConcerns',
        label: 'Board Concerns',
        variants: [
          {
            label: '60-Day Free Trial',
            eyebrow: 'Before anything else',
            title: 'The two questions every board asks before bringing this to their community.',
            body: 'Every board wants to know the same two things before they can say yes to their neighbors.',
            bullets: [
              '"What does this cost?" — SpotShare is billed per resident parking spot, quarterly or annually. For a community with 100 parking spots, that\'s $150 a quarter or $550 a year — just 50 cents per spot per month. Go annual and get one month free. Your first 60 days are completely free.',
              '"Will our neighbors actually use it?" — Yes. Communities using SpotShare see [X] parking requests in their first month alone. When parking is easy and fair, neighbors use it.',
            ],
            cta: 'See Full Pricing',
            layoutType: 'list',
          },
          {
            label: 'Cost & Usage — ROI',
            eyebrow: 'The two questions boards always ask',
            title: 'Probably less than you think. And your neighbors will use it.',
            body: 'Here are the honest answers — with context that tends to change how boards think about both.',
            bullets: [
              'On cost: 50 cents per spot per month. A 100-spot community pays $150/quarter — and the first 60 days are free. For context: one hour of staff time handling neighbor parking complaints costs more than a full month of SpotShare.',
              'On usage: Every community that launches SpotShare sees neighbors using it in the first week. When you give your community a fair, simple system, they use it. The better question is why they\'d ever go back.',
            ],
            cta: 'See the Full Pricing Breakdown',
            layoutType: 'list',
          },
          {
            label: 'Risk Reframe',
            eyebrow: 'A different way to think about risk',
            title: 'Every year without a solution is another year your neighbors wait.',
            body: 'Every year without a real guest parking solution is another year of neighbor complaints, board meetings spent on parking, and a community that doesn\'t have what it deserves. SpotShare has a lower risk profile than the status quo — and a 60-day free trial means you can prove it to your community before you commit.',
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
            label: '60-Day Free Trial',
            eyebrow: 'Why boards say yes',
            title: 'A real upgrade for your community. A genuinely easy board decision.',
            body: 'This isn\'t a long-shot proposal or a major systems overhaul. It\'s a parking upgrade that makes your neighbors\' lives easier, your property manager\'s job simpler, and your board look like the ones who finally fixed it.',
            bullets: [
              'Reduces parking complaints that reach the board',
              'Gives your community a modern, fair system neighbors actually like',
              'No extra work for board members — operations run through your property manager',
              'Completely free for every neighbor in your community',
              '60-day free trial so you can see it working before you commit',
            ],
            cta: 'Download the Board Presentation',
            layoutType: 'list',
          },
          {
            label: 'Triple Win',
            eyebrow: 'Why boards approve SpotShare',
            title: 'One decision that makes three parts of your community happy at once.',
            body: 'SpotShare is rare: it solves the same parking problem for neighbors, property managers, and the board at once — and gives everyone in your community a reason to say yes.',
            bullets: [
              'Neighbors get the parking solution they\'ve been asking for at every meeting',
              'Management handles dramatically fewer complaints from the community each week',
              'The board gets credit for permanently solving a problem the whole community felt',
            ],
            cta: 'See Full Value Summary',
            layoutType: 'list',
          },
          {
            label: 'Simple Board Case',
            eyebrow: 'The board case in one sentence',
            title: 'A better community. Fewer complaints. No capital expenditure.',
            body: 'There\'s a direct line from better guest parking to happier neighbors to a stronger community. SpotShare is one of the highest-impact, lowest-cost improvements your board can make for the people who live here.',
            cta: 'See the Numbers',
            layoutType: 'centered',
          },
        ],
      },
      {
        id: 'approvalProcess',
        label: 'Approval Process',
        variants: [
          {
            label: '60-Day Free Trial',
            eyebrow: 'How it gets approved',
            title: 'We make it easy to bring this to your community.',
            body: 'You shouldn\'t have to build the case alone. Download our board presentation and bring it to your next meeting — or invite us to present directly. We\'ve helped boards get to yes before, and we\'ll make your community feel confident about it.',
            cta: 'Download the Board Presentation',
            layoutType: 'highlight',
          },
          {
            label: 'Step by Step',
            eyebrow: 'From first conversation to launch',
            title: 'Most communities are up and running within 30 days of board approval.',
            body: 'The process is simpler than most boards expect. Here\'s exactly what it looks like for your community.',
            bullets: [
              'Intro call — we learn about your community and answer your board\'s questions',
              'Board review — we provide everything your board needs to evaluate and present confidently',
              'Approval meeting — we can join virtually to answer objections in real time',
              'Launch — neighbors get invited, spots go live, your community starts using it',
            ],
            cta: 'Start the Conversation',
            layoutType: 'steps',
          },
          {
            label: 'Board Champion',
            eyebrow: 'If you\'re the board champion',
            title: 'Be the board member who brought better parking to your community.',
            body: 'Whether you\'re the board member ready to call for a vote or the neighbor trying to get board buy-in — SpotShare\'s team supports your internal process so you can show up to your community with a real solution.',
            bullets: [
              'We can join your board meeting (virtually) to answer objections live',
              'We provide all collateral your board needs for the vote',
              'We answer written objections on your timeline',
            ],
            cta: 'Let\'s Build Your Case',
            layoutType: 'split',
          },
        ],
      },
      {
        id: 'riskReduction',
        label: 'Board Role',
        variants: [
          {
            label: '60-Day Free Trial',
            eyebrow: 'What the board does (and doesn\'t do)',
            title: 'You approve it. Your community benefits. We handle everything else.',
            body: 'Once the board gives the green light, your property manager takes it from there. SpotShare handles setup, onboarding, and day-to-day operations. Board members don\'t manage the system — you just get to take credit for a parking experience your neighbors actually love.',
            cta: 'Learn How Implementation Works',
            layoutType: 'centered',
          },
          {
            label: 'Low Risk List',
            eyebrow: 'Built for board approval',
            title: 'Low risk for the board. High reward for your community.',
            body: 'Every feature exists because an HOA board asked for it — to protect the board while delivering real value to the people who live in the community.',
            bullets: [
              'No infrastructure investment — ever',
              'No change to existing community parking assignments or rules',
              'Full usage logs available for board review at any time',
              'Neighbors opt in voluntarily — no mandates, no community friction',
              'Easy to pause or modify if your community\'s needs change',
            ],
            cta: 'Review the Risk Profile',
            layoutType: 'list',
          },
          {
            label: 'You Stay in Control',
            eyebrow: 'Complete board control',
            title: 'You set the rules for your community. The system enforces them.',
            body: 'Every SpotShare configuration reflects your community\'s values and policies — set by the board, enforced automatically. Neighbors can\'t override the rules. Guests can\'t bypass them. Your community gets a fair system and your board retains complete visibility.',
            cta: 'See the Admin Controls',
            layoutType: 'dark',
          },
        ],
      },
      {
        id: 'cta',
        label: 'CTA',
        variants: [
          {
            label: '60-Day Free Trial',
            eyebrow: 'Ready to bring this to your community?',
            title: '60 days free. No commitment. Just better parking for your neighbors.',
            body: '"[X] parking requests handled in the first 30 days at [Building Name]." ⭐ Placeholder — replace with real data when available',
            bullets: [
              '50 cents per spot per month — $150/quarter or $550/year for a 100-spot community',
              'Go annual and get one month free',
              'First 60 days free — no credit card required',
            ],
            cta: 'Download the Board Presentation',
            layoutType: 'dark',
          },
          {
            label: 'Low Pressure',
            eyebrow: 'Not sure it\'s right for your community yet?',
            title: 'Start with a conversation about your community. No agenda required.',
            body: 'A 30-minute call is enough to know whether SpotShare fits your community — your neighbor mix, your property type, your board situation. We\'ll give you an honest answer either way.',
            cta: 'Schedule a 30-Minute Call',
            layoutType: 'centered',
          },
          {
            label: 'Social Proof',
            eyebrow: 'Other communities have been through this',
            title: 'Communities in [X] cities are already using SpotShare. Here\'s what their boards found.',
            body: 'Every board that\'s approved SpotShare says the same thing: the process was easier than expected, and their community noticed the difference immediately.',
            bullets: [
              'No infrastructure investment required — ever',
              'Implementation support included from day one',
              'Ongoing board reporting and community usage data built in',
            ],
            cta: 'See What Other Communities Did',
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

export const PROPERTY_MANAGER_NARRATIVES: HomeNarrative[] = []

// ================================================================
// RESIDENT NARRATIVES — Full, hand-written resident page stories.
// Section keys: hero, painPoints, benefits, howItWorks, objections, cta
// ================================================================

// ================================================================
// HOA BOARD NARRATIVES — Full, hand-written HOA Board page stories.
// Section keys: hero, boardConcerns, valueProposition, riskReduction,
//               approvalProcess, cta
// ================================================================

export const HOA_NARRATIVES: HomeNarrative[] = []

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
