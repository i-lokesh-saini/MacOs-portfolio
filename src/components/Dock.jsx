import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import gsap from 'gsap';

import { dockApps } from '#constants';
import { useGSAP } from '@gsap/react';
import usewindowStore from "#store/window.js";



const Dock = ({ ismobile }) => {

    const { openWindow, closeWindow, windows } = usewindowStore()
    const dockRef = useRef(null);
    const visibleApps = ismobile ? dockApps.slice(0, 4) : dockApps;

    useGSAP(() => {
        const Dock = dockRef.current;
        if (!Dock) return () => { };

        const icons = Dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX) => {
            const { left } = Dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.5) / 20000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out"
                })
            });
        };

        const handleMouseMove = (e) => {
            const { left } = Dock.getBoundingClientRect();

            animateIcons(e.clientX - left);
        };

        const resetIcons = () =>
            icons.forEach((icon) => gsap.to(icon, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "Power1.out",
            }),
            );

        Dock.addEventListener("mousemove", handleMouseMove);
        Dock.addEventListener("mouseleave", resetIcons);


        return () => {
            Dock.addEventListener("mousemove", handleMouseMove);
            Dock.addEventListener("mouseleave", resetIcons)
        };

    }, []);

    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const window = windows[app.id];

        if (!window) {
            console.error(`Window not found for app: ${app.id}`);
            return;

        }

        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
    };

    return (
        <section id='dock'>
            <div ref={dockRef} className='dock-conatiner flex bg-white/30 p-1 rounded-xl gap-2 '>
                {visibleApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className='relative flex justify-center '>
                        <button
                            type='button'
                            className='dock-icon sm:w-14 sm:h-14 w-20 h-20'
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img src={`/images/${icon}`}
                                alt={name}
                                loading='lazy'
                                className={canOpen ? '' : 'opacity-60'}
                            />
                        </button>
                    </div>
                ))}

                <Tooltip id='dock-tooltip' place='top' className='tooltip' />
            </div>
        </section>
    )
}

export default Dock
