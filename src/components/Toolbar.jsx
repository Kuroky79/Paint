import React from 'react';
import "../styles/toolbar.scss"
import toolStore from "../store/toolStore";
import Brush from "../Tools/Brush";
import canvas from "./Canvas";
import canvasState from "../store/CanvasState";
import Rect from "../Tools/Rect";
import Circle from "../Tools/Circle";
import Eraser from "../Tools/Eraser";
import Line from "../Tools/Line";





const Toolbar = () => {
    const changeColor = e => {
        toolStore.setStrokeColor(e.target.value)
        toolStore.setFillColor(e.target.value)
    }

    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => toolStore.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
            <button className="toolbar__btn rect" onClick={() => toolStore.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
            <button className="toolbar__btn circle" onClick={() => toolStore.setTool(new Circle(canvasState.canvas))}/>
            <button className="toolbar__btn eraser" onClick={() => toolStore.setTool(new Eraser(canvasState.canvas))}/>
            <button className="toolbar__btn line" onClick={() => toolStore.setTool(new Line(canvasState.canvas))}/>
            <input type="color" onChange={e => changeColor(e)} style={{marginLeft: 10}}/>
            <button className="toolbar__btn undo" onClick={() => canvasState.undo()}></button>
            <button className="toolbar__btn redo" onClick={() => canvasState.redo()}></button>
            <button className="toolbar__btn save"></button>
        </div>
    );
};

export default Toolbar;
