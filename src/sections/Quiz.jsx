import { useState } from 'react';
import Section from '../components/Section.jsx';
import { useApp } from '../AppContext.jsx';

// Each question covers one of the earlier sections, in lesson order.
const QUESTIONS = [
    {
        q: 'Inside Antigravity, which model has High priority and is best for rapid UI iterations and instant CSS tweaks?',
        options: [
            { label: '⚡ Gemini 3.8 Flash (High priority, sub-second response)', correct: true },
            { label: '⏳ A heavyweight reasoning model you wait five minutes for', correct: false },
        ],
        onCorrect: 'Gemini 3.8 Flash is ideal for rapid styling.',
    },
    {
        q: 'You want the AI to rebuild a layout from a screenshot you found on Dribbble. Which model fits best?',
        options: [
            { label: '🧠 Gemini 4 Argon — multimodal, reads reference images', correct: true },
            { label: '⚡ Gemini 3.8 Flash — fastest, so always the right pick', correct: false },
        ],
        onCorrect: 'Multimodal models can inspect the screenshot itself.',
    },
    {
        q: 'What does the C in the PCE formula stand for?',
        options: [
            { label: '🧱 Constrain — set clear tech limits before building', correct: true },
            { label: '📋 Copy — paste the AI output straight into your editor', correct: false },
        ],
        onCorrect: 'Plan, Constrain, Execute.',
    },
    {
        q: 'A red error appears in your browser console. What is the fastest first move?',
        options: [
            { label: '📋 Copy the error and paste it to the AI with "keep existing styles"', correct: true },
            { label: '🔍 Search forums for an hour and rewrite the file by hand', correct: false },
        ],
        onCorrect: 'That is the whole debug loop.',
    },
    {
        q: 'What should you do before opening a new project in Antigravity?',
        options: [
            { label: '📂 Create a clean, clearly named folder for it', correct: true },
            { label: '🗂️ Point it at your Downloads folder and start prompting', correct: false },
        ],
        onCorrect: 'A clean folder keeps the agent focused.',
    },
];

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
    // picked[i] is the option index chosen for question i, or undefined.
    const [picked, setPicked] = useState({});
    const { play, showToast, launchConfetti } = useApp();

    const solved = QUESTIONS.filter((q, i) => q.options[picked[i]]?.correct).length;
    const allSolved = solved === QUESTIONS.length;

    function answer(qIdx, optIdx) {
        // One shot per question: answering reveals which option was right.
        if (picked[qIdx] !== undefined) return;

        const question = QUESTIONS[qIdx];
        setPicked((prev) => ({ ...prev, [qIdx]: optIdx }));

        if (question.options[optIdx].correct) {
            play('correct');
            if (solved + 1 === QUESTIONS.length) {
                launchConfetti();
                showToast('🎉 All five correct — you know your vibe!');
            } else {
                showToast(`✓ ${question.onCorrect}`);
            }
        } else {
            play('click');
            showToast(`✗ Not quite — ${question.onCorrect}`);
        }
    }

    return (
        <Section id="section-quiz" title="6. Quick Knowledge Check ✨" tag="Test Your Vibe">
            <p>
                Five quick questions on what you just read, before the hands-on project (sound on!):
            </p>

            <div className="quiz-progress">
                <span>
                    {solved} of {QUESTIONS.length} correct
                </span>
                <div className="quiz-progress-track">
                    <div
                        className="quiz-progress-fill"
                        style={{ width: `${(solved / QUESTIONS.length) * 100}%` }}
                    />
                </div>
            </div>

            {QUESTIONS.map((question, qIdx) => {
                const chosen = picked[qIdx];
                const answered = chosen !== undefined;
                const gotIt = question.options[chosen]?.correct;

                return (
                    <div
                        className={`quiz-card${answered ? (gotIt ? ' solved' : ' missed') : ''}`}
                        key={question.q}
                    >
                        <div className="quiz-question">
                            <span className="quiz-number">{qIdx + 1}</span>
                            {question.q}
                        </div>

                        {question.options.map((o, optIdx) => {
                            const isChosen = chosen === optIdx;
                            const cls = ['quiz-option'];
                            // Once answered, the right option always goes green and
                            // a wrong pick goes red, so the answer is never left hidden.
                            if (answered && o.correct) cls.push('correct');
                            else if (answered && isChosen) cls.push('wrong');

                            return (
                                <button
                                    className={cls.join(' ')}
                                    key={o.label}
                                    disabled={answered}
                                    onClick={() => answer(qIdx, optIdx)}
                                >
                                    <span>
                                        {LETTERS[optIdx]}) {o.label}
                                    </span>
                                    {answered && o.correct && <span className="quiz-mark">✓</span>}
                                    {answered && isChosen && !o.correct && <span className="quiz-mark">✗</span>}
                                </button>
                            );
                        })}
                    </div>
                );
            })}

            {allSolved && (
                <div className="quiz-done">🎉 All five correct — on to the practical test below!</div>
            )}
        </Section>
    );
}
