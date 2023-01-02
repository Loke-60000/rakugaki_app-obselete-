import React from "react";
import "../css/ToolBar.css";

function ToolBar(){
    return(
        <>
            <div className="Tools">
                <button >🏠</button>
                <button >🔎</button>
                <button className="upload">+</button>
                <button >🔔</button>
                <button >❤️</button>
            </div>
        </>
    )
}

export default ToolBar;