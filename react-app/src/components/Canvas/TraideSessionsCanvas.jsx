import React from 'react';
import { useRef, useEffect, useState } from 'react';


const TraideSessionsCanvas = () => {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState();

  useEffect(() =>{
    const canvas =canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getcontext("2d");
    context.lineCap = "round";
    context.strokeStile = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = (nativeEvent) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  }

  const draw = (nativeEvent) => {
    if (!isDrawing) {
      return;
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  }

  const stopDrawing = (nativeEvent) => {
    contextRef.current.closePath();
    setIsDrawing(false);

  }

  return (
    <canvas className='TraideSessionsCanvas'
      ref={canvasRef}
    >
      dfthjhlk
    </canvas>
)}

export default TraideSessionsCanvas;
