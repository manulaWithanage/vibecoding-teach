import { useApp } from '../AppContext.jsx';
import { MODULES, SECTIONS } from '../data/lesson.js';

export default function Sidebar({ activeIdx }) {
    const { sidebarOpen, closeSidebar, openModal, showToast, play, lessonCompleted } = useApp();

    // 7 sections map onto ~14% … 95%; completing the lesson pins it at 100%.
    const stepPercent = Math.min(95, Math.max(14, Math.round(((activeIdx + 1) / SECTIONS.length) * 100)));
    const percent = lessonCompleted ? 100 : stepPercent;

    return (
        <>
            <div
                className={`sidebar-backdrop${sidebarOpen ? ' active' : ''}`}
                onClick={closeSidebar}
            />

            <aside className={`sidebar${sidebarOpen ? ' mobile-open' : ''}`} id="sidebar">
                <div className="sidebar-header-mobile">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                        <div className="brand-icon" style={{ width: 28, height: 28, fontSize: '1rem' }}>⚡</div>
                        <span>Course Curriculum</span>
                    </div>
                    <button className="icon-btn" style={{ width: 32, height: 32 }} onClick={closeSidebar}>✕</button>
                </div>

                <div>
                    <h4 className="sidebar-heading">Course Track</h4>
                    <ul className="module-list">
                        {MODULES.map((m) => {
                            if (m.state === 'current') {
                                return (
                                    <li className="module-item active" key={m.n}>
                                        <a
                                            href="#top"
                                            onClick={() => {
                                                closeSidebar();
                                                play('click');
                                            }}
                                        >
                                            <span
                                                className="module-status status-current"
                                                style={lessonCompleted ? { background: '#10b981' } : undefined}
                                            >
                                                {lessonCompleted ? '✓' : m.n}
                                            </span>
                                            <span>{m.title}</span>
                                        </a>
                                    </li>
                                );
                            }

                            if (m.state === 'next') {
                                return (
                                    <li className="module-item next-class" key={m.n}>
                                        <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
                                            <span className="module-status status-next">{m.n}</span>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{m.title}</span>
                                                <span style={{ fontSize: '0.72rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                                                    {m.note}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                );
                            }

                            return (
                                <li className="module-item" key={m.n}>
                                    <a
                                        href="#"
                                        style={{ opacity: 0.55, cursor: 'not-allowed' }}
                                        onClick={(e) => { e.preventDefault(); showToast(m.lockedMsg); }}
                                    >
                                        <span className="module-status status-upcoming">{m.n}</span>
                                        <span>{m.title}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div>
                    <h4 className="sidebar-heading">In This Lesson</h4>
                    <ul className="toc-list">
                        {SECTIONS.map((s, idx) => {
                            const classes = ['toc-item'];
                            if (idx === activeIdx) classes.push('active');
                            if (idx < activeIdx || lessonCompleted) classes.push('passed');
                            return (
                                <li className={classes.join(' ')} key={s.id}>
                                    <a href={`#${s.id}`} onClick={closeSidebar}>{s.toc}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="course-progress-box">
                    <div className="progress-label-row">
                        <span>Lesson 1 Progress</span>
                        <span>{lessonCompleted ? '100% Completed! 🎉' : `${percent}%`}</span>
                    </div>
                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${percent}%`,
                                background: lessonCompleted ? 'linear-gradient(90deg, #10b981, #059669)' : undefined,
                            }}
                        />
                    </div>
                </div>
            </aside>
        </>
    );
}
