import { useApp } from '../AppContext.jsx';

export default function NextClassModal() {
    const { modalOpen, closeModal } = useApp();

    return (
        <div className={`modal-overlay${modalOpen ? ' open' : ''}`}>
            <div className="modal-card">
                <div className="modal-icon-badge">🐙</div>
                <h3 className="modal-title">Next Class: How to Handle Git!</h3>
                <p className="modal-body-text">
                    Awesome work finishing Lesson 1! We'll cover <strong>Lesson 2 in our next class</strong>. You won't
                    have to fear confusing terminal commands ever again!
                </p>
                <div className="next-class-points">
                    <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>
                        What you'll master in the next session:
                    </strong>
                    <li><span>✅</span> How to use AI agents to write git commits &amp; push to GitHub</li>
                    <li><span>✅</span> How to create feature branches without breaking your main app</li>
                    <li><span>✅</span> How to deploy your live portfolio online for free with GitHub Pages</li>
                </div>
                <button className="btn-modal-close" onClick={closeModal}>Awesome, Got It! 🙌</button>
            </div>
        </div>
    );
}
