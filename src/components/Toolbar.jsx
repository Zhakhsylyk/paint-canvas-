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
      <button className="tool-bar__btn image-1" />
      <input type="color" style={{ marginLeft: 10 }} />
      <button className="tool-bar__btn undo" />
      <button className="tool-bar__btn redo" />
      <button className="tool-bar__btn save" />
    </div>
  );
};

export default Toolbar;
