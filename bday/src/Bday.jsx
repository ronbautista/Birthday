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
          element.classList.remove("animate__tada"); 
          void element.offsetWidth; 
          element.classList.add("animate__animated", "animate__tada"); 
        }
      }, delay);
    };

    animateText("hbd", 500);  
    animateText("hbd2", 1500); 

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 2000); 

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
