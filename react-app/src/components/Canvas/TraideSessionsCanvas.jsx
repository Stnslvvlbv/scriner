import React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';


const TraideSessionsCanvas = () => {

  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const startXY =useRef();

  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() =>{
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
      const startX= canvasRef.current.getBoundingClientRect();
      console.log(canvasRef.current.offsetTop)
    }
  }, []);

  const draw = useCallback((x, y) => {
    if (mouseDown) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = 'red';
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
      x: (e.pageX - canvasRef.current.offsetLeft),
      y: (e.pageY - canvasRef.current.offsetTop)
    });
    setMouseDown(true);
  }

  const onMouseUp = (e) => {
    setMouseDown(false);
  }

  console.log(mouseDown, lastPosition);

  const onMouseMove = (e) => {
    draw(
      (e.pageX - canvasRef.current.offsetLeft),
      (e.pageY - canvasRef.current.offsetTop)
     )
  }

  return (
    <canvas className='TraideSessionsCanvas'
      width={500}
      height={500}
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
    </canvas>
)}

export default TraideSessionsCanvas;
