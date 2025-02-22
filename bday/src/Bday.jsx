import { useEffect } from "react";
import './cake.scss';
import 'animate.css';
import confetti from 'canvas-confetti';

function Bday() {
  useEffect(() => {
    const animateText = (id, delay) => {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.remove("animate__tada"); // Reset animation
          void element.offsetWidth; // Force reflow
          element.classList.add("animate__animated", "animate__tada"); // Reapply animation
        }
      }, delay);
    };

    // Animate text with delay
    animateText("hbd", 500);  // "Happy Birthday!" animates after 500ms
    animateText("hbd2", 1500); // "Ronald" animates after 1500ms

    // Trigger confetti after the second text animation
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 2000); // Confetti fires after 2 seconds

  }, []);

  return (
    <>
      <h1 id="hbd">Happy Birthday!</h1>
      <h1 id="hbd2">Ronald</h1>

      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>
    </>
  );
}

export default Bday;
