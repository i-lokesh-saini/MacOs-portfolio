import useWindowStore from "#store/window.js";

const QuickAccess = () => {
    const { openWindow } = useWindowStore();

    return (
        <section id="quick-access">
            <div className="flex">
                <button
                    type="button"
                    onClick={() => openWindow('resume')}
                    className='dock-icon '
                >
                    <img src="/images/pages.png" alt="Resume" loading="lazy" />
                </button>
                <button
                    type='button'
                    className='dock-icon'
                    onClick={() => openWindow('terminal')}
                >
                    <img src={`/images/terminal.png`} alt="terminal" loading='lazy' className="size-22" />
                </button>
            </div>
        </section>
    );
};

export default QuickAccess;