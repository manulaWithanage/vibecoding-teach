import { useState } from 'react';
import Section from '../components/Section.jsx';
import { useApp } from '../AppContext.jsx';

const OPTIONS = [
    { label: 'A) ⚡ Gemini 3.8 Flash (High priority, sub-second response)', correct: true },
    { label: 'B) ⏳ Waiting 5 minutes for a heavyweight offline database reasoning model', correct: false },
];

export default function Quiz() {
    // Tracks which options have been clicked, so a wrong guess stays marked.
    const [picked, setPicked] = useState([]);
    const { play, showToast, launchConfetti } = useApp();

    function answer(idx, correct) {
        if (picked.includes(idx)) return;
        setPicked((prev) => [...prev, idx]);

        if (correct) {
            play('correct');
            launchConfetti();
            showToast('🎉 Correct! Gemini 3.8 Flash is ideal for rapid styling.');
        } else {
            play('click');
            showToast('Try the other option! 😊');
        }
    }

    return (
        <Section id="section-quiz" title="6. Quick Knowledge Check ✨" tag="Test Your Vibe">
            <p>Answer this quick check to test your understanding before starting the hands-on project (sound on!):</p>

            <div className="quiz-card">
                <div className="quiz-question">
                    Question: Inside Antigravity, which model has High priority and is best for rapid UI iterations and
                    instant CSS tweaks?
                </div>
                {OPTIONS.map((o, idx) => {
                    const chosen = picked.includes(idx);
                    const cls = ['quiz-option'];
                    if (chosen) cls.push(o.correct ? 'correct' : 'wrong');
                    return (
                        <button className={cls.join(' ')} key={idx} onClick={() => answer(idx, o.correct)}>
                            <span>
                                {o.label}
                                {chosen && o.correct ? ' ✓ Exactly right!' : ''}
                            </span>
                        </button>
                    );
                })}
            </div>
        </Section>
    );
}
