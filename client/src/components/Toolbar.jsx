import React from "react";
import "../assets/styles/toolbar.scss";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import toolState from "../store/toolState";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import Circle from "../tools/Circle";

const Toolbar = () => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };
  return (
    <div className="tool-bar">
      <button
        className="tool-bar__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      />
      <button
        className="tool-bar__btn rect"
        onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
      />
      <button
        className="tool-bar__btn circle"
        onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
      />
      <button
        className="tool-bar__btn eraser"
        onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
      />
      <button
        className="tool-bar__btn line"
        onClick={() => toolState.setTool(new Line(canvasState.canvas))}
      />
      <input
        onChange={(e) => changeColor(e)}
        type="color"
        style={{ marginLeft: 10 }}
      />
      <button
        className="tool-bar__btn undo"
        onClick={() => canvasState.undo()}
      />
      <button
        className="tool-bar__btn redo"
        onClick={() => canvasState.redo()}
      />
      <button className="tool-bar__btn save" />
    </div>
  );
};

export default Toolbar;
