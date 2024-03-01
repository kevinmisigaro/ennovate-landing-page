import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const addListeners = () => {
      document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div').forEach((element) => {
        element.addEventListener('mouseenter', textEnter);
        element.addEventListener('mouseleave', textLeave);
      });
    };

    const removeListeners = () => {
      document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div').forEach((element) => {
        element.removeEventListener('mouseenter', textEnter);
        element.removeEventListener('mouseleave', textLeave);
      });
    };

    addListeners();

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      removeListeners();
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="App">
      <motion.div
        className="cursor"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          height: cursorVariant === "text" ? 150 : 32,
          width: cursorVariant === "text" ? 150 : 32,
          backgroundColor: cursorVariant === "text" ? "yellow" : "white",
          mixBlendMode: cursorVariant === "text" ? "difference" : "normal"
        }}
      />
    </div>
  );
}

export default CursorTrail;
