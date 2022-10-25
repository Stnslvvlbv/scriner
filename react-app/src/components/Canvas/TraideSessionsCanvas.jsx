import React from 'react';
import { useRef, useEffect, } from 'react';


const TraideSessionsCanvas = () => {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() =>{
    const canvas =canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getcontext("2d");
    content.lineCap = "round";
    context.strokeStile = "black";
    context.lineWidth = 5;
    contextRef.current = contect;
  }, []);

  const startDrawing = (nativeEvent) => {
    const {offsetX, offsetY} = nativeEvent;
  }

  const draw = () => {

  }

  const stopDrawing = () => {

  }

  return (
    <canvas className='TraideSessionsCanvas'
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
    >
      dfthjhlk
    </canvas>
)}

export default TraideSessionsCanvas;
