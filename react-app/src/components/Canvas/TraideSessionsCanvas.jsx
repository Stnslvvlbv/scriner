import React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';


const TraideSessionsCanvas = () => {

  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const startXY =useRef();

  const canvWidth = 880;
  const ROW_HEIGHT = 24;
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [TraideSessions, setTraideSessions] = useState([
    {name: "GMT", color: "gray", time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]},
    {name: "Wellington", color: "green", time: [0, 1, 2, 3, 4, 20, 21, 22, 23]},
    {name: "Sydney", color: "green", time: [0,1,2,3,4,5,6,22,23]},
    {name: "Tokyo", color: "yellow", time: [0,1,2,3,4,5,6,7]},
    {name: "Hong Kong, Singapore", color: "yellow", time: [1,2,3,4,5,6,7,8]},
    {name: "Frankfurt, Zurich, Paris", color: "blue", time: [7,8,9,10,11,12,13,14,15]},
    {name: "London", color: "blue", time: [8,9,10,11,12,13,14,15,16]},
    {name: "New York", color: "red", time: [13,14,15,16,17,18,19,20,21]},
    {name: "Chicago", color: "red", time: [14,15,16,17,18,19,20,21,22]},
  ])

  useEffect(() =>{
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
      const startX= canvasRef.current.getBoundingClientRect();

      TraideSessions.forEach((item, i) => {
        ctx.current.beginPath()
        ctx.current.strokeStyle = 'gray';
        ctx.current.lineWidth = 1;
        ctx.current.lineJoin = 'round';
        ctx.current.moveTo(0, i*ROW_HEIGHT+ROW_HEIGHT);
        ctx.current.lineTo(canvWidth, i*ROW_HEIGHT+ROW_HEIGHT);
        ctx.current.moveTo(200, i*ROW_HEIGHT);
        ctx.current.lineTo(200, i*ROW_HEIGHT+ROW_HEIGHT);

        //ctx.current.moveTo(200+item.time[item.time.length()-1]*ROW_HEIGHT, i*ROW_HEIGHT);
        // ctx.current.lineTo(200+item.time[item.time.length()-1]*ROW_HEIGHT, i*ROW_HEIGHT+ROW_HEIGHT);

        ctx.current.stroke();
        ctx.current.closePath();
        ctx.current.fillStyle = "green";
        ctx.current.font = '14px Georgia';
        ctx.current.fillText(item.name, 10, i*ROW_HEIGHT+19);

        item.time.forEach((hour, h, arr) =>{
          ctx.current.beginPath()
          ctx.current.strokeStyle = 'gray';
          ctx.current.lineWidth = 1;
          ctx.current.lineJoin = 'round';
          ctx.current.moveTo(200+hour*ROW_HEIGHT, i*ROW_HEIGHT);
          ctx.current.lineTo(200+hour*ROW_HEIGHT+ROW_HEIGHT, i*ROW_HEIGHT);
          ctx.current.lineTo(200+hour*ROW_HEIGHT+ROW_HEIGHT, i*ROW_HEIGHT+ROW_HEIGHT);
          ctx.current.lineTo(200+hour*ROW_HEIGHT, i*ROW_HEIGHT+ROW_HEIGHT);

          ctx.current.lineTo(200+hour*ROW_HEIGHT, i*ROW_HEIGHT);
          ctx.current.fillStyle = item.color;
          ctx.current.fill();

          ctx.current.stroke();
          ctx.current.closePath();
          if (i == 0) {
            ctx.current.fillStyle = "green";
            ctx.current.font = '14px Georgia';
            ctx.current.fillText(hour, 200+hour*ROW_HEIGHT+5, i*ROW_HEIGHT+19)
          }
        });
      });
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

  const onMouseMove = (e) => {
    draw(
      (e.pageX - canvasRef.current.offsetLeft),
      (e.pageY - canvasRef.current.offsetTop)
     )
  }

  return (
    <canvas className='TraideSessionsCanvas'
      width={canvWidth}
      height={330}
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
    </canvas>
)}

export default TraideSessionsCanvas;
