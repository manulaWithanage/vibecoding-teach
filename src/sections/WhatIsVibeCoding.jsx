import Section, { InfoCard } from '../components/Section.jsx';

export default function WhatIsVibeCoding() {
    return (
        <Section id="section-what" title="1. What is Vibe Coding?" tag="Mindset">
            <p>
                Traditional coding meant typing every bracket and semicolon manually. Vibe coding turns you into the{' '}
                <strong>Product Architect</strong>: you describe what you want, review the result, and ask for tweaks.
            </p>

            <div className="grid-cards">
                <InfoCard title="⌨️ Traditional Way">
                    Memorizing syntax rules, reading documentation manuals, and fighting syntax typos for hours.
                </InfoCard>
                <InfoCard
                    title="🚀 The Vibe Way"
                    style={{ borderLeft: '3px solid var(--primary)', background: 'var(--primary-light)' }}
                    titleStyle={{ color: 'var(--primary)' }}
                >
                    Express your ideas in natural language. The autonomous agent writes the code and installs the assets.
                </InfoCard>
                <InfoCard title="👑 Your Job">
                    Focus on UX, aesthetics, features, and testing the live app in your browser.
                </InfoCard>
            </div>
        </Section>
    );
}
