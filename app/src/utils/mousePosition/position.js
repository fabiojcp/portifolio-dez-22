import { useEffect, useState } from "react";

export function MousePositionX() {
  const [mousePos, setMousePos] = useState();
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos(event.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePos;
}

export function MousePositionY() {
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePos.y;
}
