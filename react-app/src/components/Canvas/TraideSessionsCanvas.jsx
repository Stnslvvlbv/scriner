import React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';


const TraideSessionsCanvas = () => {

  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() =>{
    console.log(canvasRef);
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback((x, y) => {
    if (mouseDown) {
        ctx.current.beginPath();
        ctx.current.strokStyle = 'black';
        ctx.current.lineWidth = 10;
        ctx.current.lineJoin = 'round';
        ctx.current.moveTo(lastPosition.x, lastPosition.y)
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();
        setPosition({x, y});
    }
  }, [lastPosition, mouseDown, setPosition])

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    });
    setMouseDown(true);
  }

  const onMouseUp = (e) => {
    setMouseDown(false);
  }
  console.log(mouseDown, lastPosition)
  return (
    <canvas className='TraideSessionsCanvas'
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseMove={draw}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      dfthjhlk
    </canvas>
)}

export default TraideSessionsCanvas;
