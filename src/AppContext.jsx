import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { playUiSound } from './lib/sound.js';

const AppContext = createContext(null);

export function useApp() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [theme, setTheme] = useState(() => localStorage.getItem('vibe_theme') || 'light');
    const [toast, setToast] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [lessonCompleted, setLessonCompleted] = useState(false);

    const toastTimer = useRef(null);
    const confettiRef = useRef(null);
    const soundRef = useRef(soundEnabled);
    soundRef.current = soundEnabled;

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('vibe_theme', theme);
    }, [theme]);

    useEffect(() => () => clearTimeout(toastTimer.current), []);

    // Reads the ref so callers never need the latest-state dance.
    const play = useCallback((type) => {
        if (soundRef.current) playUiSound(type);
    }, []);

    const showToast = useCallback((msg) => {
        setToast(msg);
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(''), 2400);
    }, []);

    const launchConfetti = useCallback(() => {
        confettiRef.current?.launch();
    }, []);

    const copyText = useCallback(
        (text) => {
            play('click');
            navigator.clipboard.writeText(text).then(() => {
                play('magic');
                showToast('📋 Copied to clipboard!');
            });
        },
        [play, showToast]
    );

    const closeSidebar = useCallback(() => setSidebarOpen(false), []);

    const openSidebar = useCallback(() => {
        play('click');
        setSidebarOpen(true);
    }, [play]);

    const openModal = useCallback(() => {
        play('magic');
        setSidebarOpen(false);
        setModalOpen(true);
    }, [play]);

    const closeModal = useCallback(() => {
        play('click');
        setModalOpen(false);
    }, [play]);

    const toggleSound = useCallback(() => {
        setSoundEnabled((prev) => {
            const next = !prev;
            soundRef.current = next;
            showToast(next ? 'Sound Effects: ON 🔊' : 'Sound Effects: MUTED 🔇');
            if (next) playUiSound('magic');
            return next;
        });
    }, [showToast]);

    const toggleTheme = useCallback(() => {
        play('click');
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, [play]);

    const completeLesson = useCallback(() => {
        setLessonCompleted(true);
        play('fanfare');
        launchConfetti();
        showToast('🎉 Lesson 1 Completed! Lesson 2 scheduled for next class.');
        setTimeout(() => openModal(), 1200);
    }, [play, launchConfetti, showToast, openModal]);

    const value = useMemo(
        () => ({
            soundEnabled,
            toggleSound,
            theme,
            toggleTheme,
            toast,
            showToast,
            play,
            copyText,
            confettiRef,
            launchConfetti,
            modalOpen,
            openModal,
            closeModal,
            sidebarOpen,
            openSidebar,
            closeSidebar,
            lessonCompleted,
            completeLesson,
        }),
        [
            soundEnabled,
            toggleSound,
            theme,
            toggleTheme,
            toast,
            showToast,
            play,
            copyText,
            launchConfetti,
            modalOpen,
            openModal,
            closeModal,
            sidebarOpen,
            openSidebar,
            closeSidebar,
            lessonCompleted,
            completeLesson,
        ]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
