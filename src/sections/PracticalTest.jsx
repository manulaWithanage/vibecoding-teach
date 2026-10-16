import { useState } from 'react';
import Section from '../components/Section.jsx';
import { useApp } from '../AppContext.jsx';

const AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';

// Each preset is a complete style set, so switching between them is
// predictable instead of layering leftovers from the previous pick.
const PRESETS = {
    none: { toast: '↩️ Back to the default hero.' },
    glow: {
        glow: {
            background:
                'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(139, 92, 246, 0.4) 40%, transparent 70%)',
        },
        img: { border: '3px solid #ec4899', boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)' },
        btnPrimary: { background: 'linear-gradient(135deg, #ec4899, #8b5cf6)' },
        toast: '✨ Applied Glow Aura Polish!',
    },
    glass: {
        glow: { background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, transparent 70%)' },
        img: { border: '3px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)' },
        badge: { background: 'rgba(255, 255, 255, 0.2)' },
        toast: '✨ Applied Glassmorphism Polish!',
    },
    cyber: {
        canvas: { background: 'linear-gradient(135deg, #020617 0%, #050515 100%)' },
        glow: { background: 'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 70%)' },
        img: { border: '3px solid #10b981', boxShadow: '0 0 25px rgba(16, 185, 129, 0.6)' },
        title: {
            background: 'linear-gradient(90deg, #34d399, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        btnPrimary: { background: 'linear-gradient(135deg, #10b981, #06b6d4)' },
        toast: '✨ Applied Cyber Neon Polish!',
    },
    clean: {
        canvas: { background: '#090d16' },
        glow: { background: 'transparent' },
        img: { border: '2px solid #334155', boxShadow: 'none', borderRadius: '12px' },
        title: { background: 'none', WebkitTextFillColor: '#ffffff' },
        btnPrimary: { background: '#ffffff', color: '#000000' },
        toast: '✨ Applied Clean Minimal Polish!',
    },
};

const POLISH_BUTTONS = [
    ['none', '↩️ Default'],
    ['glow', '🔮 Glow Aura'],
    ['glass', '🪟 Glassmorphism'],
    ['cyber', '⚡ Cyber Neon'],
    ['clean', '📐 Clean Minimal'],
];

const PROMPT_CHIPS = [
    {
        title: '🔮 Glow Aura',
        preview: '"Add a glowing radial backdrop aura behind the avatar..."',
        full: 'Add a glowing radial backdrop aura behind the avatar image with smooth blur.',
    },
    {
        title: '🪟 Glassmorphism',
        preview: '"Convert the hero container to frosted glass with blur..."',
        full: 'Convert the hero container to frosted glass with backdrop-filter blur(16px) and a subtle 1px border.',
    },
    {
        title: '✨ Button Lift & Glow',
        preview: '"Make CTA button have rounded pill shape & hover scale..."',
        full: 'Make the primary CTA button have a rounded pill shape, gradient background, and a 1.05x hover scale transition.',
    },
    {
        title: '📱 Mobile Responsive',
        preview: '"Ensure layout collapses cleanly on mobile screens..."',
        full: 'Ensure the layout collapses into a clean centered vertical column on mobile screens under 640px.',
    },
];

const MASTER_PROMPT = `"Act as a senior frontend developer with a strong eye for modern web design. I'm attaching my photo — build it into a portfolio hero section as the face of the page, the first thing anyone sees, not a small avatar tucked in a corner.

Follow the PCE formula, and stop after each step so I can review:

PLAN — outline the hero's structure and the visual direction you'd choose: layout, type scale, colour palette, and how my photo anchors the composition. No code yet.

CONSTRAIN — a single Hero.jsx component in a React + Vite project, styled with Tailwind CSS, using my attached photo. Function components and hooks only, no extra dependencies.

EXECUTE — build one piece at a time: the JSX structure first, then the Tailwind styling, then the hover and entrance motion.

Design direction: make it look like a real designer's portfolio, not a template. Give my photo generous scale and a composition that feels deliberate — soft ambient light behind it, a sense of depth, and plenty of breathing room. Pair it with a bold headline, one clear line about what I do, and two CTA buttons with smooth hover transitions. Fully responsive, collapsing to a centered single column under 640px."`;

const REFERENCE_PROMPT =
    'Match the layout, spacing, and modern color palette of this reference screenshot, but adapt it for my developer portfolio.';

export default function PracticalTest() {
    const [polish, setPolish] = useState('none');
    const { play, showToast, copyText, lessonCompleted, completeLesson } = useApp();

    const style = PRESETS[polish];

    function applyPolish(key) {
        play(key === 'none' ? 'click' : 'magic');
        setPolish(key);
        showToast(PRESETS[key].toast);
    }

    return (
        <Section
            id="section-test"
            title="7. First Practical Test: Portfolio Hero Section"
            tag="Interactive Project"
        >
            <p>
                Your first test is to build a responsive <strong>Portfolio Hero Section</strong> with an image,
                headline, and call-to-action, and practice <strong>iterative AI polishing</strong> with feedback &amp;
                reference images!
            </p>

            <div className="test-box">
                <div className="test-box-header">
                    <div>
                        <span className="live-tag">Live Interactive Sandbox</span>
                        <h3>Portfolio Hero Section Builder</h3>
                    </div>
                    <span style={{ fontSize: '1.5rem' }}>🧪</span>
                </div>

                <div className="preview-chrome">
                    <div className="preview-chrome-dots">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="preview-chrome-url">localhost:3000 — index.html</span>
                </div>

                <div className="hero-preview" style={style.canvas}>
                    <div className="hero-glow" style={style.glow} />

                    <img src={AVATAR} alt="Profile Photo" className="hero-avatar" style={style.img} />

                    <div className="hero-badge" style={style.badge}>Available for new projects</div>
                    <h2 className="hero-name" style={style.title}>Alex Rivera</h2>
                    <p className="hero-bio">
                        Full-Stack AI Creator crafting autonomous agent workflows and clean modern web experiences.
                    </p>

                    <div className="hero-actions">
                        <button
                            className="btn-preview-primary"
                            style={style.btnPrimary}
                            onClick={() => {
                                play('click');
                                showToast('Action: View Projects Clicked!');
                            }}
                        >
                            View My Work ➔
                        </button>
                        <button
                            className="btn-preview-secondary"
                            onClick={() => {
                                play('click');
                                showToast('Action: Contact Clicked!');
                            }}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="test-controls">
                    <div>
                        <div className="control-label">
                            Try an iterative polish style — this is what prompting a refinement looks like
                        </div>
                        <div className="polish-grid">
                            {POLISH_BUTTONS.map(([key, label]) => (
                                <button
                                    className={`btn-polish${polish === key ? ' active' : ''}`}
                                    key={key}
                                    onClick={() => applyPolish(key)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div
                        style={{
                            borderTop: '1px dashed var(--border)',
                            paddingTop: '1rem',
                            marginTop: '0.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                        }}
                    >
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                            📸 Drop your own photo into Antigravity, then paste this:
                        </span>
                        <button
                            className="btn-polish"
                            style={{ background: 'var(--primary)', color: 'white', border: 'none' }}
                            onClick={() => copyText(MASTER_PROMPT)}
                        >
                            📋 Copy Master Prompt
                        </button>
                    </div>
                </div>
            </div>

            <div className="polish-guide-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>🎨</span>
                    <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                            How to Polish Your UI with AI (The Real Workflow)
                        </h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            In actual vibe coding, you don't stop at v1 — you guide the AI with feedback &amp; reference
                            images!
                        </span>
                    </div>
                </div>

                <div className="polish-step-card">
                    <h4><span>👀 Step 1:</span> Inspect Your First Draft in the Browser</h4>
                    <p>
                        When you run your initial prompt in Antigravity, the AI produces a functional first draft. Open
                        it in your browser and check:
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '1.2rem', lineHeight: 1.6 }}>
                        <li><strong>Spacing &amp; Padding:</strong> Does the layout feel cramped? Give elements room to breathe.</li>
                        <li><strong>Typography Contrast:</strong> Is the headline bold and readable against the background?</li>
                        <li><strong>Hover &amp; Micro-interactions:</strong> Do buttons respond when hovered, or do they feel flat?</li>
                    </ul>
                </div>

                <div className="polish-step-card">
                    <h4><span>💬 Step 2:</span> Prompt Specific Micro-Refinements</h4>
                    <p>
                        Instead of generic prompts, ask for specific design upgrades. Click any prompt chip below to
                        copy it:
                    </p>

                    <div className="prompt-chip-grid">
                        {PROMPT_CHIPS.map((chip) => (
                            <div className="prompt-chip" key={chip.title} onClick={() => copyText(chip.full)}>
                                <div>
                                    <span style={{ fontWeight: 700, display: 'block', fontSize: '0.82rem' }}>
                                        {chip.title}
                                    </span>
                                    <span className="prompt-chip-text">{chip.preview}</span>
                                </div>
                                <span>📋</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ref-image-box">
                    <div className="ref-image-icon">📸</div>
                    <div className="ref-image-content">
                        <h4>Pro Tip: Use Reference Images! (The Vibe Coder Secret)</h4>
                        <p>
                            Found a website, Dribbble shot, or portfolio on Twitter with an aesthetic you love?{' '}
                            <strong>Take a screenshot (Win+Shift+S or Cmd+Shift+4)</strong> and drag &amp; drop it
                            directly into your Antigravity chat!
                        </p>
                        <p style={{ marginBottom: '0.75rem' }}>
                            Multimodal models like <strong>Gemini 4 Argon</strong> and <strong>Claude Sonnet 5.5</strong>{' '}
                            can inspect the screenshot, extract colors, typography, and spacing, and reproduce the look
                            in your project.
                        </p>
                        <button className="ref-copy-chip" onClick={() => copyText(REFERENCE_PROMPT)}>
                            <span>
                                💡 Click to copy: "Match the layout, spacing, and color palette of this reference
                                screenshot..."
                            </span>
                            <span>📋</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="complete-box">
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.4rem', color: '#065f46' }}>
                    Finished Building Your Hero Section?
                </h3>
                <p style={{ color: '#047857', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                    Tap below to mark Lesson 1 as complete and see what's coming up in next class!
                </p>
                <button
                    className="btn-finish"
                    style={lessonCompleted ? { background: '#059669' } : undefined}
                    onClick={completeLesson}
                >
                    {lessonCompleted ? (
                        <>
                            <span>✓</span> <span>Lesson 1 Completed! 🚀</span>
                        </>
                    ) : (
                        <>
                            <span>🎉</span> <span>Complete Lesson 1</span>
                        </>
                    )}
                </button>
            </div>

            {lessonCompleted && <NextClassCard />}
        </Section>
    );
}

function NextClassCard() {
    const { openModal } = useApp();

    return (
        <div
            style={{
                marginTop: '1.5rem',
                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(245, 158, 11, 0.08))',
                border: '2px dashed var(--primary)',
                borderRadius: 16,
                padding: '1.75rem',
                textAlign: 'center',
            }}
        >
            <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>📅 🐙</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                Next Class: How to Handle Git with AI Agents!
            </h3>
            <p
                style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem',
                    maxWidth: 520,
                    margin: '0 auto 1.25rem',
                }}
            >
                Great work today! In our next class, you'll learn how to commit, branch, and push your code to GitHub
                with simple plain-English AI prompts. No scary terminal commands!
            </p>
            <button
                className="btn-jump-test"
                style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}
                onClick={openModal}
            >
                <span>Preview Next Class Syllabus</span> ➔
            </button>
        </div>
    );
}
