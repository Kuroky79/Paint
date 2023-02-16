import React from 'react';
import "../styles/toolbar.scss"
import toolStore from "../store/toolStore";
import Brush from "../Tools/Brush";
import canvas from "./Canvas";
import canvasState from "../store/CanvasState";


const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={()=>toolStore.setTool(new Brush((canvasState.canvas)))}></button>
            <button className="toolbar__btn rect"></button>
            <button className="toolbar__btn circle"></button>
            <button className="toolbar__btn eraser"></button>
            <button className="toolbar__btn line"></button>
            <input type="color" style={{marginLeft: 10}}/>
            <button className="toolbar__btn undo"></button>
            <button className="toolbar__btn redo"></button>
            <button className="toolbar__btn save"></button>
        </div>
    );
};

export default Toolbar;
