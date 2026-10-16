import { useApp } from '../AppContext.jsx';

export default function Navbar() {
    const { soundEnabled, toggleSound, theme, toggleTheme, openSidebar, play } = useApp();

    return (
        <header className="top-navbar">
            <div className="nav-left">
                <button
                    className="icon-btn mobile-toggle-btn"
                    title="Open Navigation Menu"
                    onClick={openSidebar}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <a href="#top" className="brand-link">
                    <div className="brand-icon">⚡</div>
                    <span>Vibe Academy</span>
                </a>
                <span className="course-badge">Lesson 1 of 5</span>
            </div>

            <div className="nav-right">
                <button className="icon-btn" title="Toggle Sound" onClick={toggleSound}>
                    <span>{soundEnabled ? '🔊' : '🔇'}</span>
                </button>

                <button className="icon-btn" title="Toggle Light/Dark Theme" onClick={toggleTheme}>
                    <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
                </button>

                <a href="#section-test" className="btn-jump-test" onClick={() => play('click')}>
                    <span>First Test</span> 🧪
                </a>
            </div>
        </header>
    );
}
