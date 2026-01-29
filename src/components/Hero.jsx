import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const tilt = tiltRef.current;
    const profile = profileRef.current;

    if (!hero || !tilt || !profile) return;

    const handleMove = (e) => {
      const { offsetWidth: width, offsetHeight: height } = hero;
      const { pageX, pageY } = e;

      const xVal = (pageX - width / 2) / width;
      const yVal = (pageY - height / 2) / height;

      const moveX = xVal * 20;
      const moveY = yVal * 20;
      const rotateY = xVal * 15;
      const rotateX = yVal * -15;

      requestAnimationFrame(() => {
        tilt.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        profile.style.transform = `translateZ(30px) translateX(${-moveX}px) translateY(${-moveY}px)`;
      });
    };

    const handleLeave = () => {
      tilt.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      profile.style.transform = `translateZ(0px)`;
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-image reveal">
            <div className="tilt-wrapper" ref={tiltRef}>
              {/* PROFILE IMAGE REMOVED */}
              {/*
            <img
              src="/Profile.png"
              alt="Srihari Eerla Profile"
              className="profile-img"
            />
            */}
            </div>
          </div>

          <div className="hero-text reveal">
            <h1>
              Architecting the <br />
              <span className="highlight">Future of AI</span>
            </h1>
            <p className="hero-description">
              Full Stack Engineer building high-performance systems with
              neon-sharp precision.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
