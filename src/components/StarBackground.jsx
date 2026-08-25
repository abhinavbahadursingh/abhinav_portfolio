import { useEffect, useRef, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    // Cursor-reactive parallax + glow (no re-renders, driven by CSS vars)
    const container = containerRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let rafId;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    const animate = () => {
      // Ease current values toward the cursor for a smooth trailing feel
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (container) {
        container.style.setProperty("--mx", currentX.toFixed(4));
        container.style.setProperty("--my", currentY.toFixed(4));
        container.style.setProperty("--cx", cursorX.toFixed(1) + "px");
        container.style.setProperty("--cy", cursorY.toFixed(1) + "px");
      }

      rafId = requestAnimationFrame(animate);
    };

    if (!reduceMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        depth: Math.random() * 35 + 10,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Soft glow that follows the cursor */}
      <div className="cursor-glow" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            transform:
              "translate(calc(var(--mx, 0) * " +
              star.depth +
              "px), calc(var(--my, 0) * " +
              star.depth +
              "px))",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
