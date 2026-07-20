import useWindowStore from "#store/window.js";

const QuickAccess = () => {
    const { openWindow } = useWindowStore();

    return (
        <section id="quick-access">
            <button
                type="button"
                onClick={() => openWindow('resume')}
                aria-label="Open Resume"
                className="transition-transform active:scale-95"
            >
                <img src="/icons/file.svg" alt="Resume" loading="lazy" />
            </button>
            <button
                type="button"
                onClick={() => openWindow('terminal')}
                aria-label="Open Skills"
                className="transition-transform active:scale-95"
            >
                <img src="/icons/terminal.png" alt="Skills" loading="lazy" />
            </button>
        </section>
    );
};

export default QuickAccess;