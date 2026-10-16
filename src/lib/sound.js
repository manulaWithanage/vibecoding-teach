// Audio synthesizer (Web Audio API - instant, lightweight sound).
// Mute state lives in React; this module just plays notes on request.

let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

// Each entry: [frequencies, waveform, gain, step between notes, note length].
// A single-note "click" is the same shape with one frequency.
const VOICES = {
    correct: { freqs: [523.25, 659.25, 783.99, 1046.5], type: 'triangle', gain: 0.12, step: 0.07, hold: 0.22 },
    magic: { freqs: [659, 880, 1174, 1318, 1760], type: 'sine', gain: 0.1, step: 0.05, hold: 0.25 },
    fanfare: { freqs: [523.25, 659.25, 783.99, 1046.5], type: 'triangle', gain: 0.2, step: 0.12, hold: 0.5 },
};

export function playUiSound(type) {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        if (type === 'click') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
            return;
        }

        const voice = VOICES[type];
        if (!voice) return;

        voice.freqs.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = voice.type;
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(voice.gain, now + idx * voice.step);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * voice.step + voice.hold);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * voice.step);
            osc.stop(now + idx * voice.step + voice.hold);
        });
    } catch (e) {}
}
