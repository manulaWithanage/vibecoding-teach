// Fullscreen confetti particles drawn on a canvas the component owns.

const COLORS = ['#4f46e5', '#9333ea', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'];

export function createConfetti(canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId = null;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = 0;
        particles.forEach((p) => {
            if (p.life > 0) {
                active++;
                p.x += p.dx;
                p.y += p.dy;
                p.dy += 0.35;
                p.life--;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
        });
        if (active > 0) {
            animId = requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            animId = null;
        }
    }

    function launch() {
        particles = [];
        for (let i = 0; i < 75; i++) {
            particles.push({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                r: Math.random() * 6 + 3,
                dx: (Math.random() - 0.5) * 14,
                dy: (Math.random() - 0.7) * 16,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                life: 100,
            });
        }
        if (!animId) render();
    }

    function destroy() {
        if (animId) cancelAnimationFrame(animId);
        animId = null;
        particles = [];
    }

    resize();
    window.addEventListener('resize', resize);

    return {
        launch,
        destroy() {
            window.removeEventListener('resize', resize);
            destroy();
        },
    };
}
