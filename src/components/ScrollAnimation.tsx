/** @format */

"use client";
import { useEffect, useRef, useState } from "react";

const ScrollAnimation = () => {
  const [scrollX, setScrollX] = useState(0);
  const sectionRef: any = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop: any = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollTop = window.scrollY;
        const scrollBottom = scrollTop + window.innerHeight;

        // Check if section is in view
        if (
          scrollBottom > sectionTop &&
          scrollTop < sectionTop + sectionHeight
        ) {
          // Calculate the scroll position within the section
          const sectionScrollTop = scrollTop - sectionTop;
          setScrollX(sectionScrollTop); // Adjust multiplier if needed
        } else {
          // Reset the scroll position when the section is out of view
          setScrollX(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-100 p-4">
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${scrollX * 0.5}px)` }}
      >
        <h1 className="text-4xl font-bold">Scrolling Animation</h1>
      </div>
      {/* Additional content */}
    </section>
  );
};

export default ScrollAnimation;
