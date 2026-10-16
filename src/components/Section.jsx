export default function Section({ id, title, tag, children }) {
    return (
        <section className="lesson-section" id={id}>
            <div className="section-header-row">
                <h2 className="section-title">{title}</h2>
                <span className="section-tag">{tag}</span>
            </div>
            {children}
        </section>
    );
}

export function InfoCard({ title, style, titleStyle, children }) {
    return (
        <div className="info-card" style={style}>
            <h4 style={titleStyle}>{title}</h4>
            <p>{children}</p>
        </div>
    );
}
