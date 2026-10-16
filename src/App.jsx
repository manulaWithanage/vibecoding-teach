import { AppProvider } from './AppContext.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Toast from './components/Toast.jsx';
import NextClassModal from './components/NextClassModal.jsx';
import ConfettiCanvas from './components/ConfettiCanvas.jsx';
import WhatIsVibeCoding from './sections/WhatIsVibeCoding.jsx';
import Workspace from './sections/Workspace.jsx';
import Models from './sections/Models.jsx';
import Prompting from './sections/Prompting.jsx';
import Debugging from './sections/Debugging.jsx';
import Quiz from './sections/Quiz.jsx';
import PracticalTest from './sections/PracticalTest.jsx';
import { SECTION_IDS } from './data/lesson.js';
import { useScrollProgress } from './lib/useScrollProgress.js';

function Lesson() {
    const { scrollPercent, activeIdx } = useScrollProgress(SECTION_IDS);

    return (
        <>
            <div id="progress-bar" style={{ width: `${scrollPercent}%` }} />
            <ConfettiCanvas />
            <NextClassModal />
            <Navbar />

            <div className="layout-wrapper">
                <Sidebar activeIdx={activeIdx} />

                <main className="content-container" id="top">
                    <header className="lesson-header">
                        <div className="lesson-meta-bar">
                            <span className="meta-pill difficulty">🟢 Beginner</span>
                            <span className="meta-pill time">⏱️ 12 min read + test</span>
                            <span>•</span>
                            <span>Antigravity &amp; Agent 2.0</span>
                        </div>
                        <h1 className="lesson-title">Lesson 1: Introduction to Vibe Coding 👋</h1>
                        <p className="lesson-subtitle">
                            Welcome! In this lesson, you'll learn how to build real software by directing AI agents in
                            plain English. No syntax memorization. Just clear ideas, quick feedback, and fast building.
                        </p>
                    </header>

                    <WhatIsVibeCoding />
                    <Workspace />
                    <Models />
                    <Prompting />
                    <Debugging />
                    <Quiz />
                    <PracticalTest />
                </main>
            </div>

            <Toast />
        </>
    );
}

export default function App() {
    return (
        <AppProvider>
            <Lesson />
        </AppProvider>
    );
}
