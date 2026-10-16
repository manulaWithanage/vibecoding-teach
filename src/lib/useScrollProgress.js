import { useEffect, useState } from 'react';

// Tracks page scroll for the top reading bar and works out which lesson
// section is currently in comfortable viewing range.
export function useScrollProgress(sectionIds) {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        function update() {
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollPercent(height > 0 ? Math.min(100, Math.max(0, Math.round((top / height) * 100))) : 0);

            let active = 0;
            sectionIds.forEach((id, idx) => {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
                    active = idx;
                }
            });
            setActiveIdx(active);
        }

        update();
        window.addEventListener('scroll', update);
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [sectionIds]);

    return { scrollPercent, activeIdx };
}
