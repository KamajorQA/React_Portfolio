import { useEffect, useContext } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { CursorContext } from '../../context/CursorContext';
import './cursorCompanion.css';

function CursorCompanion() {
  const { cursorBallHidden } = useContext(CursorContext);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 35,
    stiffness: 700,
    mass: 1,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="cursorCompanion"
    >
      {cursorBallHidden === false ? (
        <motion.div layoutId="cursor" className="ballPointer"></motion.div>
      ) : null}
    </motion.div>
  );
}

export default CursorCompanion;
