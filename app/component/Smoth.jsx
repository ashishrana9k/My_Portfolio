'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Smoth({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.2,       
            easing: (t) => t,     
            smooth: true,
            smoothTouch: true,    
            direction: 'vertical',
            gestureOrientation: 'vertical',
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return <>{children}</>;
}
