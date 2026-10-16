import Section, { InfoCard } from '../components/Section.jsx';

export default function Debugging() {
    return (
        <Section id="section-debugging" title="5. Easy Bug Fixing (The Debug Loop)" tag="No Stress">
            <p>
                Encountered a red error in your browser console? Don't spend hours searching forums. Use the 3-step
                debug loop:
            </p>

            <div className="grid-cards">
                <InfoCard title="1. Copy Error">
                    Open Developer Tools (F12) and copy the red error message.
                </InfoCard>
                <InfoCard title="2. Paste to AI">
                    Type: <em>"Fix this error while keeping existing styles: [paste error]"</em>.
                </InfoCard>
                <InfoCard title="3. Test & Enjoy">
                    Refresh your browser. The AI fixes the code automatically.
                </InfoCard>
            </div>
        </Section>
    );
}
