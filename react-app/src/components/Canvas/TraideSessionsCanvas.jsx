import React from 'react';
import { useRef, useEffect, useState } from 'react';


const TraideSessionsCanvas = () => {

  const canvasRef = useRef();
  const ctx = useRef();

  const [isDrawing, setIsDrawing] = useState();


  const draw = (x, y) => {
    ctx.beginPath();
    ctx.current.strokStyle = 'black';
    ctx.current.lineWidth = 10;
    ctx.current.lineJoin = 'round';
    ctx.current.moveTo(lastPosition.x, lastPosition.y)
    ctx.current.lineTo(x, y);
    ctx.current.closePath();
    ctx.current.stroke();
  }


  useEffect(() =>{
    console.log(canvasRef);
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');

    }
  }, []);

  const startDrawing = (nativeEvent) => {

  }

  const stopDrawing = (nativeEvent) => {

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
