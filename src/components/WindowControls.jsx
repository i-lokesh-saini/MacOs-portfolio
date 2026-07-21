import { ChevronLeft } from "lucide-react";

import usewindowStore from "#store/window";

function WindowControls({ target, isMobile }) {
    const { closeWindow } = usewindowStore();
    return (
        <>
            <div id="window-controls">
                {!isMobile ?
                    <><div className="close" onClick={() => closeWindow(target)} />
                        <div className="minimize" />
                        <div className="maximize" /></>
                    :
                    <div className="back" onClick={() => closeWindow(target)}><ChevronLeft className="icon" /> <span>Go Back</span></div>
                }
            </div>
        </>
    );
};
export default WindowControls;