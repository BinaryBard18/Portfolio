import React from "react"
import image from "../img/purpleCoder.jpg"
import {motion} from "framer-motion"
import {useState,useEffect,useRef} from "react"



export default function Hero(){

    const [isVisible, setIsVisible] = useState(false);
        const ref = useRef(null);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
              }
            },
            { threshold: 1} // Adjust threshold as needed
          );
      
          if (ref.current) {
            observer.observe(ref.current);
          }
      
          return () => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          };
        }, []);

    return( 
        <div ref={ref}>
            <div className="maincontent">
                <div className="main-text">
                    <motion.div 
                    className="text1"
                    initial={{x:-100,y:-50,opacity:0}}
                    animate={isVisible?{x:0,y:0,opacity:1}:{}}
                    transition={{duration:2,type:'spring',stiffness:120}}
                    >
                        <h1>I make <span>Playful</span><br/>Experiences</h1>
                    </motion.div>
                    <motion.div 
                    className="text2"
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,y:0,opacity:1}}
                    transition={{delay:0.5,duration:2,type:'spring',stiffness:100}}
                    >
                        <h3>Ritesh Yadav /FrontEnd Developer</h3>
                    </motion.div>
                </div>
                <div>
                    <motion.img src = {image} 
                    className="main-image"
                    initial={{opacity:0,originX:0}} 
                    animate={{opacity:1}}
                    transition={{delay:0.5,duration:1}}
                    />
                </div>
            </div>
            {/* <div className="prodown">
                <h3 className="project">Project</h3>
                <i class='bx bxs-chevron-down' id="down"></i>
            </div> */}
                <div class="prodown">
                    <div class="pro">
                        <motion.h4
                            initial={{x:-50,opacity:0}}
                            animate={isVisible?{x:0,opacity:1}:{}}
                            transition={{delay:1,duration:1}} 
                        >
                            Projects
                        </motion.h4>
                    </div>
                    <div class="down1">
                    <i 
                    class='bx bxs-chevron-down' 
                    id="down"
                    initial={{x:-50,opacity:0}}
                    animate={isVisible?{x:0,opacity:1}:{}}
                    transition={{delay:1,duration:1}} 
                    ></i>
                </div>
            </div>
        </div>
    )
}