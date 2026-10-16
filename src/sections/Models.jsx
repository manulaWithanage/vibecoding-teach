import { useState } from 'react';
import Section from '../components/Section.jsx';
import { useApp } from '../AppContext.jsx';
import { MODELS } from '../data/lesson.js';

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
                Antigravity gives you direct access to the latest frontier models. Tap any card to see its strengths
                and a real prompt example:
            </p>

            <div className="model-list">
                {MODELS.map((m) => {
                    const [responseLabel, responseValue] = m.stats[0];
                    return (
                        <button
                            className={`model-row${selected === m.key ? ' active' : ''}`}
                            key={m.key}
                            onClick={() => pick(m.key)}
                        >
                            <span className="model-row-icon">{m.icon}</span>

                            <span>
                                <span className="model-row-head">
                                    <span className="model-row-name">{m.name}</span>
                                    {m.tags.map((t) => (
                                        <span
                                            className={`model-badge-tag${t.cls ? ` ${t.cls}` : ''}`}
                                            style={t.style}
                                            key={t.label}
                                        >
                                            {t.label}
                                        </span>
                                    ))}
                                </span>
                                <span className="model-row-desc">
                                    <strong>Best for:</strong> {m.bestFor}
                                </span>
                            </span>

                            <span className="model-row-meta">
                                {responseLabel}
                                <strong>{responseValue}</strong>
                            </span>
                        </button>
                    );
                })}
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
