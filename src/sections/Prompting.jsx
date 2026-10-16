import Section from '../components/Section.jsx';
import { useApp } from '../AppContext.jsx';

const STEPS = [
    { badge: 'P', title: 'Plan First', body: <>Ask for a clear outline before generating any code.</> },
    {
        badge: 'C',
        title: 'Constrain',
        body: (
            <>
                Set clear tech limits: <em>"One React component with Tailwind CSS and my own photo."</em>
            </>
        ),
    },
    { badge: 'E', title: 'Execute', body: <>Instruct the AI to build one section at a time.</> },
];

const PCE_TEMPLATE = `"Act as a Senior Frontend Developer.
1. Plan: outline the structure of a clean portfolio hero section before writing any code.
2. Constrain: a single Hero.jsx component in a React + Vite project, Tailwind CSS for styling, and a placeholder profile image. Function components and hooks only.
3. Execute: build step 1 only — the JSX structure with the heading and call-to-action buttons."`;

export default function Prompting() {
    const { copyText } = useApp();

    return (
        <Section id="section-prompting" title="4. The 3-Step PCE Formula" tag="Prompting Secret">
            <p>
                Never ask AI to build an entire massive application in one prompt. Use the <strong>PCE Framework</strong>:
            </p>

            {STEPS.map((s) => (
                <div className="step-item" key={s.badge}>
                    <div className="step-badge">{s.badge}</div>
                    <div className="step-content">
                        <h4>{s.title}</h4>
                        <p>{s.body}</p>
                    </div>
                </div>
            ))}

            <div className="code-container">
                <div className="code-header">
                    <span>PCE MASTER PROMPT TEMPLATE</span>
                    <button className="btn-copy" onClick={() => copyText(PCE_TEMPLATE)}>📋 Copy Prompt</button>
                </div>
                <pre><code>{PCE_TEMPLATE}</code></pre>
            </div>
        </Section>
    );
}
