import { useEffect, useRef, useState } from 'react';

/**
 * Returns true when the element (ref) enters the viewport.
 */
export function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

/**
 * Animates a number from 0 to `target` over `duration` ms.
 */
export function useCountUp(target: number, duration = 2000, trigger = false): number {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (!trigger) return;
        let start: number | null = null;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(+(eased * target).toFixed(target % 1 !== 0 ? 1 : 0));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            }
        };

        rafRef.current = requestAnimationFrame(step);
        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [target, duration, trigger]);

    return count;
}

/**
 * Simple typewriter hook — cycles through an array of strings.
 */
export function useTypewriter(strings: string[], speed = 60, pause = 2000): string {
    const [displayed, setDisplayed] = useState('');
    const [strIdx, setStrIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = strings[strIdx];
        let delay = deleting ? speed / 2 : speed;

        if (!deleting && charIdx === current.length) {
            delay = pause;
            setTimeout(() => setDeleting(true), delay);
            return;
        }

        if (deleting && charIdx === 0) {
            setDeleting(false);
            setStrIdx((prev) => (prev + 1) % strings.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCharIdx((prev) => prev + (deleting ? -1 : 1));
            setDisplayed(current.slice(0, charIdx + (deleting ? -1 : 1)));
        }, delay);

        return () => clearTimeout(timeout);
    }, [charIdx, deleting, strIdx, strings, speed, pause]);

    return displayed;
}
