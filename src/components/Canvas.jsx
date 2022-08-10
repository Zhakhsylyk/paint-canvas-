import React, { useEffect } from "react";
import "../assets/styles/canvas.scss";
import {observer} from 'mobx-react-lite';
import canvasState from "../store/canvasState";
import { useRef } from "react";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const Canvas =  observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTools(new Brush(canvasRef.current));
  },[])

  return (
    <div className="canvas">
      <canvas  ref={canvasRef} width={600} height={400} />
    </div>
  );
});

export default Canvas;
