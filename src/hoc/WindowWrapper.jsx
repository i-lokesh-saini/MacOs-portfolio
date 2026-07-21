import usewindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import Draggable from "gsap/Draggable";

function WindowWrapper(Component, windowKey) {
    const Wrapped = (props) => {
        const { isMobile } = props;
        const { focusWindow, windows } = usewindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;

            if (!el || !isOpen) return;

            el.style.display = isMobile ? "flex" : "block";

            gsap.fromTo(el,
                { scale: isMobile ? 1 : 0.8, opacity: 0, y: isMobile ? 0 : 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
            )
        }, [isOpen, isMobile]);

        useGSAP(() => {
            const el = ref.current;

            if (!el || isMobile) return;

            const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) });

            return () => instance.kill();
        }, [isMobile]);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen) {
                el.style.display = isMobile ? "flex" : "block";
            } else {
                el.style.display = "none";
            }
        }, [isOpen, isMobile]);

        const mobileClass = isMobile ? "window-mobile" : "absolute";

        return <section id={windowKey} ref={ref} style={{ zIndex }} className={mobileClass}>
            <Component {...props} />
        </section>
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
}
export default WindowWrapper;