// Single source of truth for the TOC, the sidebar and the section order.
export const SECTIONS = [
    { id: 'section-what', toc: '1. What is Vibe Coding?' },
    { id: 'section-workspace', toc: '2. Download & Setup' },
    { id: 'section-models', toc: '3. Real Models & Guide' },
    { id: 'section-prompting', toc: '4. The 3-Step PCE Formula' },
    { id: 'section-debugging', toc: '5. Easy Bug Fixing' },
    { id: 'section-quiz', toc: '6. Quick Knowledge Check' },
    { id: 'section-test', toc: '7. Practical Test & UI Polish' },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export const MODULES = [
    { n: 1, title: 'Intro to Vibe Coding', state: 'current' },
    { n: 2, title: 'Handling Git with AI 🐙', state: 'next', note: '📅 Coming in Next Class' },
    { n: 3, title: 'Terminal Agent Workflows', state: 'upcoming', lockedMsg: 'Complete Lesson 2 in next class to unlock!' },
    { n: 4, title: 'Multi-file Debugging', state: 'upcoming', lockedMsg: 'Upcoming lesson!' },
    { n: 5, title: 'Deploying Live Web Apps', state: 'upcoming', lockedMsg: 'Upcoming capstone!' },
];

export const MODELS = [
    {
        key: 'flash',
        icon: '⚡',
        name: 'Gemini 3.8 Flash',
        subname: 'Sub-second • High Rate Limit',
        tags: [
            { label: 'High Priority', cls: 'badge-high' },
            { label: '✓ Default', style: { background: 'rgba(16,185,129,0.15)', color: '#10b981' } },
        ],
        bestFor: 'Instant UI styling, CSS tweaks, typo fixes, and rapid iteration.',
        stats: [
            ['Response', '< 0.8s'],
            ['Speed', 'Ultra Fast'],
        ],
        scenario: {
            title: 'Gemini 3.8 Flash (High Priority • Default)',
            desc: "Sub-second speed and highest throughput. Perfect when you're tweaking button hover effects, changing Tailwind color palettes, or making fast edits without waiting.",
            example:
                'Example prompt: "Make the primary CTA button have a glowing emerald border and a smooth hover scale animation."',
        },
    },
    {
        key: 'argon',
        icon: '🧠',
        name: 'Gemini 4 Argon',
        subname: 'Multimodal Reasoning',
        tags: [
            { label: 'Medium', cls: 'badge-med' },
            { label: 'New', cls: 'badge-new' },
        ],
        bestFor: 'System planning, reading reference screenshots, and full-stack architecture.',
        stats: [
            ['Response', '2–3s'],
            ['Vision', 'Exceptional'],
        ],
        scenario: {
            title: 'Gemini 4 Argon (Medium • New)',
            desc: "Google's cutting-edge multimodal reasoning model. Ideal for analyzing reference images & screenshots, architecting multi-step workflows, and complex reasoning.",
            example:
                'Example prompt: "Analyze this uploaded UI screenshot and rebuild the hero layout using semantic HTML and Tailwind CSS."',
        },
    },
    {
        key: 'sonnet',
        icon: '🎨',
        name: 'Claude Sonnet 5.5',
        subname: 'Frontend & Aesthetics Maestro',
        tags: [
            { label: 'Medium', cls: 'badge-med' },
            { label: 'New', cls: 'badge-new' },
        ],
        bestFor: 'Modern aesthetics, typography, polished layouts, and surgical refactors.',
        stats: [
            ['Response', '2–3s'],
            ['Aesthetic', 'Top-Tier'],
        ],
        scenario: {
            title: 'Claude Sonnet 5.5 (Medium • New)',
            desc: 'World-class front-end design sensibility. Best for clean UI aesthetics, refined typography, spring micro-interactions, and surgical code refactoring.',
            example:
                'Example prompt: "Refactor this hero card to have a subtle frosted glass effect, 1px gradient border, and polished responsive typography."',
        },
    },
    {
        key: 'opus',
        icon: '🏗️',
        name: 'Claude Opus 5.5',
        subname: 'Deep Architecture Powerhouse',
        tags: [
            { label: 'Medium', cls: 'badge-med' },
            { label: 'New', cls: 'badge-new' },
        ],
        bestFor: 'Large multi-file codebases, database schemas, and deep algorithmic debugging.',
        stats: [
            ['Response', '4–6s'],
            ['Depth', 'Maximum'],
        ],
        scenario: {
            title: 'Claude Opus 5.5 (Medium • New)',
            desc: 'Maximum depth and extended reasoning tokens. Best for architecting full multi-file codebases, complex database schemas, and hard algorithmic systems.',
            example:
                'Example prompt: "Design an end-to-end full-stack state management architecture with offline sync and optimistic UI updates."',
        },
    },
    {
        key: 'gptoss',
        icon: '🌐',
        name: 'GPT-OSS 120B',
        subname: 'Open Weights (Medium)',
        tags: [
            { label: 'Medium', cls: 'badge-med' },
            { label: 'Notice ⓘ', cls: 'badge-notice' },
        ],
        bestFor: 'Open-source ecosystems, local execution, and zero-lock-in utilities.',
        stats: [
            ['Response', '1.5s'],
            ['Ecosystem', 'Open'],
        ],
        scenario: {
            title: 'GPT-OSS 120B (Medium • Notice ⓘ)',
            desc: 'Massive open-weight powerhouse. Best for transparent workflows, self-hosted and private developer environments, and zero vendor lock-in.',
            example:
                'Example prompt: "Generate an isolated, dependency-free utility to parse and validate client-side portfolio submission schemas."',
        },
    },
];
