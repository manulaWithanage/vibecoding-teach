import { useApp } from '../AppContext.jsx';

// A labelled command line inside a dark install box, with a copy button.
export default function CopyRow({ label, command, labelStyle }) {
    const { copyText } = useApp();

    return (
        <>
            <div className="code-install-label" style={labelStyle}>{label}</div>
            <div className="code-install-row">
                <code>{command}</code>
                <button className="btn-copy-sm" onClick={() => copyText(command)}>📋</button>
            </div>
        </>
    );
}
