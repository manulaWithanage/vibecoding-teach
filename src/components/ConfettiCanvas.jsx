import { useEffect, useRef } from 'react';
import { createConfetti } from '../lib/confetti.js';
import { useApp } from '../AppContext.jsx';

export default function ConfettiCanvas() {
    const canvasRef = useRef(null);
    const { confettiRef } = useApp();

    useEffect(() => {
        const confetti = createConfetti(canvasRef.current);
        confettiRef.current = confetti;
        return () => {
            confetti.destroy();
            confettiRef.current = null;
        };
    }, [confettiRef]);

    return <canvas id="confetti-canvas" ref={canvasRef} />;
}
