import { useEffect, useRef } from 'react';

interface ScrollState {
    velocity: number;
    lastScrollY: number;
    lastScrollTime: number;
    targetY: number;
    rafId: number | null;
}

export const useMomentumScroll = () => {
    const scrollState = useRef<ScrollState>({
        velocity: 0,
        lastScrollY: 0,
        lastScrollTime: 0,
        targetY: 0, // Initialize as 0
        rafId: null,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return; // Ensure it's running on client side

        scrollState.current.targetY = window.scrollY; // Safe to access now

        const calculateMomentum = (deltaY: number, deltaTime: number) => {
            const velocity = deltaY / Math.max(deltaTime, 16);
            return velocity * 5;
        };

        const applyFriction = (velocity: number) => {
            return velocity * 0.9;
        };

        const animate = () => {
            const state = scrollState.current;

            if (Math.abs(state.velocity) > 0.1) {
                state.velocity = applyFriction(state.velocity);
                state.targetY += state.velocity;

                state.targetY = Math.max(
                    0,
                    Math.min(state.targetY, document.documentElement.scrollHeight - window.innerHeight)
                );

                window.scrollTo({
                    top: state.targetY,
                    behavior: 'auto',
                });

                state.rafId = requestAnimationFrame(animate);
            } else {
                state.velocity = 0;
                state.rafId = null;
            }
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const state = scrollState.current;
            const now = performance.now();
            const deltaY = e.deltaY;

            const newVelocity = calculateMomentum(deltaY, now - state.lastScrollTime);
            state.velocity += newVelocity;

            state.velocity = Math.min(Math.max(state.velocity, -150), 150);
            state.lastScrollTime = now;
            state.lastScrollY = window.scrollY;

            if (!state.rafId) {
                state.rafId = requestAnimationFrame(animate);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            if (scrollState.current.rafId) {
                cancelAnimationFrame(scrollState.current.rafId);
            }
        };
    }, []);
};
