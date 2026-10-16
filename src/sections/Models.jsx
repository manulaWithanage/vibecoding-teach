import { useState } from 'react';
import Section from '../components/Section.jsx';
import { useApp } from '../AppContext.jsx';
import { MODELS } from '../data/lesson.js';

// The mock of Antigravity's own Ctrl+/ model menu, in its real display order.
const MENU_ORDER = ['argon', 'flash', 'opus', 'sonnet', 'gptoss'];
const MENU_LABELS = {
    argon: 'Gemini 4 Argon',
    flash: 'Gemini 3.8 Flash',
    opus: 'Claude Opus 5.5',
    sonnet: 'Claude Sonnet 5.5',
    gptoss: 'GPT-OSS 120B (Medium)',
};

export default function Models() {
    const [selected, setSelected] = useState('flash');
    const { play, showToast } = useApp();

    function pick(key) {
        play('click');
        setSelected(key);
        showToast(`Selected ${key.toUpperCase()} model!`);
    }

    const active = MODELS.find((m) => m.key === selected);

    return (
        <Section id="section-models" title="3. Model Names: Which One Is Best For Which?" tag="Model Guide">
            <p>
                Antigravity gives you direct access to the latest frontier models. Tap any model card below to see its
                exact strengths, latency, and real-world prompt examples:
            </p>

            <div className="model-cards-grid">
                {MODELS.map((m) => (
                    <div
                        className={`model-tier-card${selected === m.key ? ' active' : ''}`}
                        key={m.key}
                        onClick={() => pick(m.key)}
                    >
                        <div>
                            <div className="model-top">
                                <div className="model-tags-row">
                                    {m.tags.map((t) => (
                                        <span className={`model-badge-tag${t.cls ? ` ${t.cls}` : ''}`} style={t.style} key={t.label}>
                                            {t.label}
                                        </span>
                                    ))}
                                </div>
                                <span>{m.icon}</span>
                            </div>
                            <div className="model-name-title">{m.name}</div>
                            <div className="model-subname">{m.subname}</div>
                            <p className="model-best-for">
                                <strong>Best for:</strong> {m.bestFor}
                            </p>
                        </div>
                        <div className="model-footer-stats">
                            {m.stats.map(([label, value]) => (
                                <span key={label}>
                                    {label}: <strong>{value}</strong>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ margin: '1.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span
                    style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.5rem',
                    }}
                >
                    Exact Menu Inside Antigravity (Press{' '}
                    <kbd
                        style={{
                            background: 'var(--border)',
                            padding: '0.15rem 0.4rem',
                            borderRadius: 4,
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-main)',
                        }}
                    >
                        Ctrl + /
                    </kbd>
                    )
                </span>

                <div className="model-menu-mockup">
                    <div className="menu-mock-header">Model</div>
                    {MENU_ORDER.map((key) => {
                        const isFlash = key === 'flash';
                        return (
                            <div
                                className={`menu-mock-item${isFlash ? ' active' : ''}`}
                                key={key}
                                onClick={() => pick(key)}
                            >
                                <span
                                    className="menu-mock-name"
                                    style={isFlash ? { fontWeight: 700, color: '#ffffff' } : undefined}
                                >
                                    {MENU_LABELS[key]}
                                </span>
                                <div className="menu-mock-tags">
                                    {isFlash ? (
                                        <>
                                            <span className="menu-tag-pill" style={{ color: '#34d399' }}>High</span>
                                            <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                                        </>
                                    ) : key === 'gptoss' ? (
                                        <span className="menu-tag-pill">Notice ⓘ</span>
                                    ) : (
                                        <>
                                            <span className="menu-tag-pill">Medium</span>
                                            <span className="menu-tag-pill new">New</span>
                                            <span style={{ opacity: 0.4 }}>›</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    <div className="menu-mock-shortcut">
                        <span>Select Model</span>
                        <kbd>Ctrl+/</kbd>
                    </div>
                </div>
            </div>

            <div className="scenario-box">
                <div className="scenario-title">
                    <span>{active.icon}</span>
                    <span>{active.scenario.title}</span>
                </div>
                <p style={{ fontSize: '0.875rem', marginBottom: '0.35rem' }}>{active.scenario.desc}</p>
                <div className="scenario-prompt">{active.scenario.example}</div>
            </div>
        </Section>
    );
}
