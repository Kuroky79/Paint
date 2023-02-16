import React, {useEffect, useRef} from 'react';
import "../styles/canvas.scss"
import {observer} from "mobx-react-lite";
import canvasState from "../store/CanvasState";
import toolStore from "../store/toolStore";
import Brush from "../Tools/Brush";
const Canvas = observer(() => {
    const canvasRef = useRef()
    useEffect(() =>{

        canvasState.setCanvas(canvasRef.current)
        toolStore.setTool(new Brush(canvasRef.current))
    }, [])

    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={800} height={550}></canvas>
        </div>
    );
});

export default Canvas;
