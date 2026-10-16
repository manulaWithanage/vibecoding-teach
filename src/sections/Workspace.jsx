import Section, { InfoCard } from '../components/Section.jsx';
import CopyRow from '../components/CopyRow.jsx';
import { useApp } from '../AppContext.jsx';

const DOWNLOAD_URL = 'https://antigravity.google/download';

const DOWNLOADS = [
    {
        highlight: true,
        badge: '🌟 Recommended — Start Here',
        badgeClass: 'download-badge',
        emoji: '🚀',
        name: 'Antigravity App',
        desc: 'The main Antigravity application. The autonomous agent writes, runs, and fixes your code while you describe what you want in plain English.',
        features: [
            'Native Autonomous Agent with File Read/Write',
            'Visual Diff Review & 1-Click Code Revert',
            'Live Browser Preview with Hot Reload',
            <>Shortcut: <code>Ctrl + /</code> to Switch Models</>,
        ],
        btnClass: 'btn-download',
        btnLabel: '⬇️ Download Antigravity App',
        toast: 'Opening the Antigravity download page!',
        meta: 'v2.24.0 · Windows, macOS & Linux',
    },
    {
        highlight: false,
        badge: '🖥️ For the Full Editor Experience',
        badgeClass: 'download-badge alt',
        emoji: '💻',
        name: 'Antigravity IDE',
        desc: 'The dedicated desktop editor: native windowing, integrated agent panels, and a full execution workspace with explorer, chat, and terminal side by side.',
        features: [
            'Standalone Desktop Application',
            'Integrated Agent Panels & Execution Workspace',
            'Explorer + AI Chat + Terminal in One Window',
            'Extensions also available for VS Code & JetBrains',
        ],
        btnClass: 'btn-download alt',
        btnLabel: '⬇️ Download Antigravity IDE',
        toast: 'Opening the Antigravity IDE download page!',
        meta: 'v2.5.5 · Windows, macOS & Linux',
    },
];

export default function Workspace() {
    const { play, showToast } = useApp();

    return (
        <Section id="section-workspace" title="2. Download & Setup Antigravity" tag="Downloads & Setup">
            <p>
                Google Antigravity is the autonomous AI-first coding environment. Both downloads live on the same page:
                grab the <strong>Antigravity App</strong> to start vibe coding right away, or the standalone{' '}
                <strong>Antigravity IDE</strong> if you want the full desktop editor workspace.
            </p>

            <div className="download-grid">
                {DOWNLOADS.map((d) => (
                    <div className={`download-card${d.highlight ? ' highlight' : ''}`} key={d.name}>
                        <div className={d.badgeClass}>{d.badge}</div>
                        <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>{d.emoji}</div>
                        <h3>{d.name}</h3>
                        <p className="download-desc">{d.desc}</p>

                        <div className="download-features">
                            {d.features.map((f, i) => (
                                <span key={i}>✓ {f}</span>
                            ))}
                        </div>

                        <div>
                            <a
                                href={DOWNLOAD_URL}
                                target="_blank"
                                rel="noreferrer"
                                className={d.btnClass}
                                onClick={() => {
                                    play('click');
                                    showToast(d.toast);
                                }}
                            >
                                <span>{d.btnLabel}</span>
                            </a>
                            <span className="download-meta">{d.meta}</span>
                        </div>
                    </div>
                ))}
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '1.25rem 0 0.5rem 0' }}>
                Set Up Your Project Folder First
            </h3>
            <p>
                Before you prompt anything, give your project its own folder. Create it from the terminal, or make it
                normally in Explorer / Finder — then open that folder in Antigravity.
            </p>

            <div className="code-install-box">
                <CopyRow label="1. Create & name your project folder:" command="mkdir my-portfolio" />
                <CopyRow label="2. Move into that folder:" command="cd my-portfolio" labelStyle={{ marginTop: '0.6rem' }} />
                <div className="code-install-label" style={{ marginTop: '0.6rem' }}>3. Open it in Antigravity:</div>
                <div className="code-install-row">
                    <code>File → Open Folder → my-portfolio</code>
                </div>
            </div>

            <div
                className="info-card"
                style={{
                    borderLeft: '3px solid var(--accent-amber)',
                    background: 'var(--accent-amber-light)',
                    marginTop: '0.75rem',
                }}
            >
                <h4 style={{ color: '#b45309' }}>📂 Name It Properly</h4>
                <p>
                    Use <strong>lowercase letters and hyphens</strong> — <code>my-portfolio</code>,{' '}
                    <code>coffee-shop-site</code>. No spaces, no capitals, no <code>New Folder (2)</code>. The agent
                    reads your folder name as context, so a clear name gives you better code from the very first prompt.
                </p>
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '1.25rem 0 0.5rem 0' }}>
                Inside the Antigravity IDE Workspace
            </h3>
            <div className="grid-cards">
                <InfoCard title="📁 Left: Explorer">
                    Your project directory. Watch files appear live as the agent generates them.
                </InfoCard>
                <InfoCard title="🤖 Right: AI Chat">
                    Your command center. Prompt the agent, request tweaks, or drop reference screenshots.
                </InfoCard>
                <InfoCard title="💻 Bottom: Terminal">
                    Where your local server runs. When errors happen, the agent can auto-fix them.
                </InfoCard>
            </div>

            <div className="callout-box">
                <div style={{ fontSize: '1.4rem' }}>💡</div>
                <div>
                    <strong>Golden Rule for Friends:</strong> Always create a clean, dedicated folder for each project
                    before opening it in Antigravity. That keeps the AI focused 100% on your project without clutter!
                </div>
            </div>
        </Section>
    );
}
