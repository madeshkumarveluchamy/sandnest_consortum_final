import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './css/ProofSection.css'; 

// --- 1. Slot Counter Animation Component ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const chars = Array.from(String(value));

  let digitIndex = 0;

  return (
    <span ref={ref} className="slot-wrapper-inline">
      {chars.map((char, i) => {
        // Handle static characters like "." or "M"
        if (isNaN(parseInt(char))) {
          return (
            <span key={i} className="slot-static-char">
              {char}
            </span>
          );
        }

        const isOdd = digitIndex % 2 !== 0;
        const finalDirection = isOdd
          ? baseDirection === "up"
            ? "down"
            : "up"
          : baseDirection;

        digitIndex++;

        return (
          <span key={i} className="digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={
                isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}
              }
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1, 
              }}
              className="digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <span key={num} className="plus-font">
                      {num}
                    </span>
                  ))}
                  <span className="plus-font">{char}</span>
                </>
              ) : (
                <>
                  <span className="plus-font">{char}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
                    <span key={num} className="plus-font">
                      {num}
                    </span>
                  ))}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

// --- 2. Counter Stat Component (Matched to your layout) ---
const CounterStat = ({ count, suffix, label }) => {
  return (
    <div className="col-6 col-md-3 mb-4 mb-md-0 story-counter-item">
      <h3 className="story-counter-number d-flex justify-content-center align-items-center">
        <SlotCounter value={count} baseDirection="up" />
        <span className="stat-suffix plus-font">{suffix}</span>
      </h3>
      <p className="story-counter-label plus-font">{label}</p>
    </div>
  );
};

// --- 3. Main Proof Section ---
const ProofSection = () => {
  // Counter data array
  const counters = [
    { count: "08", suffix: "+", label: "YEARS OF EXCELLENCE" },
    { count: "125", suffix: "+", label: "COMPLETED PROJECTS" },
    { count: "1.5", suffix: "M+", label: "SQ. FT. DESIGNED" },
    { count: "07", suffix: "+", label: "DESIGN AWARDS" }
  ];

  return (
    <section className="story-counter-wrapper font-sans">
      <div className="container-fluid story-counter-container">
        
        {/* Top Section: Title & Subtitle */}
        <div className="row mb-5">
          <div className="col-12">
            
            <h2 className="story-counter-title mb-4 plus-font">
              The proof behind <br className="d-none d-sm-block" />
              our work
            </h2>
            
            <div className="d-flex align-items-start mt-3">
              {/* Brown Horizontal Line */}
              <div className="story-counter-line mt-2 me-3"></div>
              {/* Paragraph Text */}
              <p className="story-counter-desc mb-0 plus-font des">
                From first launches to lasting collaborations, we're trusted to <br className="d-none d-lg-block" />
                <span className="second-line">deliver on time and at quality.</span>
              </p>
            </div>
            
          </div>
        </div>

        {/* Bottom Section: Animated Counters */}
        <div className="row mt-3 mt-md-5 justify-content-between pt-md-3">
          {counters.map((item, index) => (
            <CounterStat 
              key={index}
              count={item.count} 
              suffix={item.suffix} 
              label={item.label} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProofSection;