import { useApp } from '../AppContext.jsx';

export default function Toast() {
    const { toast } = useApp();
    return (
        <div id="toast" className={toast ? 'show' : ''}>
            {toast}
        </div>
    );
}
