import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Card2 = () => {
  const cardRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);
  const picRef = useRef(null);
  const socialRef = useRef(null);
  const iconsRef = useRef([]);
  const textRef = useRef(null); 
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(headingRef.current, { fontSize: "48px" }, )
      .to(buttonRef.current, { scale: 16.5 }, "-=0.4")
      .to(textRef.current, { color: "#fff" }, "-=0.4")
      .to(arrowRef.current, { opacity: 1 , color:"#fff"}, "-=0.4")
      .to(picRef.current, { filter: "grayscale(0)" }, "-=0.2")
      .to(socialRef.current, { opacity: 1, y: 0, stagger: 0.1 }, "-=0.1")

    const cardEl = cardRef.current;

    const handleMouseEnter = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    cardEl.addEventListener("mouseenter", handleMouseEnter);
    cardEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardEl.removeEventListener("mouseenter", handleMouseEnter);
      cardEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
     <div className="container">
        <div className="card" ref={cardRef}>
      <h2 ref={headingRef}>Project2</h2>
      <i ref={arrowRef}className="fas fa-arrow-right"></i>
      <p ref={textRef}>some text.</p>
      <div className="pic" ref={picRef}></div>
      <div className="social" ref={socialRef}>
        <i ref={(el) => (iconsRef.current[0] = el)} className="fab fa-github"></i>
      </div>
      <button ref={buttonRef}></button>
    </div>
     </div>
  );
};


