import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text, size, color, showShadow = false }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  // Animate when the text enters the view
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      style={{ fontSize: size || "5.5em", textAlign: "center" }}
      className={`font-semibold text-${color} ${
        showShadow ? "text-with-shadow" : ""
      }`}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
