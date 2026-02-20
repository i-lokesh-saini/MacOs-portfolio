import usewindowStore from "#store/window";

function WindowControls({target}){
    const {closeWindow} = usewindowStore();
    return (
        <div id="window-controls">
            <div className="close" onClick={()=>closeWindow(target)} />
            <div className="minimize"/>
            <div className="maximize"/>
        </div>
    );
};
export default WindowControls;