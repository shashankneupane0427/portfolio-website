'use client';

import React, { useEffect, useRef } from 'react';

const MouseTrail: React.FC = () => {
    const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
    const coordinatesRef = useRef<{ x: number; y: number }[]>(
        Array(20).fill({
            x: typeof window !== 'undefined' ? window.innerWidth / 0.1 : 0,
            y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
        })
    );

    useEffect(() => {
        let isPointerVisible = false;

        const handleMouseMove = (e: MouseEvent) => {
            isPointerVisible = true;
            // Calculate position relative to the viewport
            coordinatesRef.current[0] = {
                x: e.clientX,
                y: e.clientY
            };
        };

        const handleMouseLeave = () => {
            isPointerVisible = false;
        };

        const animateCircles = () => {
            if (!isPointerVisible) {
                requestAnimationFrame(animateCircles);
                return;
            }

            coordinatesRef.current.forEach((_, index) => {
                if (!circlesRef.current[index]) return;

                const circle = circlesRef.current[index];
                if (index === 0) {
                    const coord = coordinatesRef.current[0];
                    circle.style.transform = `translate3d(${coord.x - 12}px, ${coord.y - 12}px, 0) scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;
                } else {
                    const prevCoord = coordinatesRef.current[index - 1];
                    const currentCoord = coordinatesRef.current[index];

                    const newX = currentCoord.x + (prevCoord.x - currentCoord.x) * 0.75;
                    const newY = currentCoord.y + (prevCoord.y - currentCoord.y) * 0.75;

                    coordinatesRef.current[index] = { x: newX, y: newY };
                    
                    circle.style.transform = `translate3d(${newX - 12}px, ${newY - 12}px, 0) scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;
                }
            });

            requestAnimationFrame(animateCircles);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        animateCircles();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className='fixed mix-blend-difference z-50 top-0 left-0 w-full h-full pointer-events-none'>
            {[...Array(20)].map((_, index) => (
                <div
                    key={index}
                    ref={(el) => {
                        circlesRef.current[index] = el;
                    }}
                    className='fixed rounded-full w-6 h-6 pointer-events-none bg-white dark:bg-white'
                    style={{ willChange: 'transform' }}
                />
            ))}
        </div>
    );
};

export default MouseTrail;