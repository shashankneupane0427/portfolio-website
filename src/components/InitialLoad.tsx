import gsap from 'gsap';
import React, { useEffect } from 'react';
import { TextAnimate } from './ui/text-animate';
import { LeftLogo, RightLogo } from '@/utils/logo';

interface InitialLoadProps {
    onComplete?: () => void;
}

const InitialLoad: React.FC<InitialLoadProps> = ({ onComplete }) => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        gsap.set('#left-logo', {
            opacity: 0,
            x: -50,
        });
        gsap.set('#right-logo', {
            opacity: 0,
            x: 50,
        });

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.classList.remove('overflow-hidden');
                if (onComplete) {
                    onComplete();
                }
            },
        });

        tl.to('#left-logo', {
            opacity: 1,
            x: 20,
            duration: 0.3,
            ease: 'power4.out',
        }).to('#right-logo', {
            opacity: 1,
            x: 15,
            duration: 0.3,
            ease: 'power4.out',
        });

        tl.to('#left-logo', {
            x: 50,
            duration: 0.3,
            ease: 'power4.out',
        }).to('#right-logo', {
            x: -65,
            duration: 0.3,
            ease: 'power4.out',
        });

        tl.to('#logo', {
            y: -80,
            duration: 0.3,
            ease: 'power4.out',
        });

        tl.fromTo(
            '#name span',
            {
                visibility: 'hidden',
                opacity: 0,
                y: '-100%',
                stagger: 0.05,
                duration: 0.1,
                ease: 'bounce.inOut',
            },
            {
                visibility: 'visible',
                opacity: 1,
                y: '0%',
                duration: 0.1,
                stagger: 0.05,
            }
        );
        tl.to('#name span', {
            y: '100%',
            duration: 1,
            stagger: 0.05,
            opacity: 0,
            visibility: 'hidden',
            display: 'none',
            ease: 'bounce.inOut',
        });

        tl.to(
            '#logo-top',
            {
                top: '1rem',
                left: '0',
                xPercent: 0,
                yPercent: 0,
                scale: 0.4,
                duration: 0.5,
                ease: 'power4.inOut',
            },
            '-=1.3'
        );

        tl.to('#logo-top', {
            opacity: 0,
            duration: 0.3,
            ease: 'power4.inOut',
        });

        tl.to('#initial-load', {
            display: 'none',
            duration: 0.1,
        });

        gsap.set('#logo-top', {
            position: 'absolute',
            top: '50%',
            left: '50%',
            xPercent: -50,
            yPercent: -50,
        });
    }, [onComplete]);

    return (
        <div
            className='relative flex h-dvh justify-center items-center'
            id='initial-load'
        >
            <div id='logo-top'>
                <div className='flex justify-center items-center' id='logo'>
                    <div id='left-logo'>
                        <LeftLogo />
                    </div>

                    <div id='right-logo'>
                        <RightLogo />
                    </div>
                </div>
            </div>

            <div id='name' className='absolute'>
                <span className='text-xl'>
                    <TextAnimate animation='blurInUp' by='character'>
                        Abhishek Shrestha/Porfolio
                    </TextAnimate>
                </span>
            </div>
        </div>
    );
};

export default InitialLoad;
