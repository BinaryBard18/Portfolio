import React from "react"
import {motion} from "framer-motion"
import {useState,useEffect,useRef} from "react"


export default function Footer(){
        const variants = {
            visible : {y:0,opacity:1},
            hidden : {y:50,opacity:0}
        }

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
            { threshold: 0.1 } // Adjust threshold as needed
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
        <motion.div
            ref={ref}
            className="connect"
            animate={{}}
        >
            {isVisible&&(<motion.h1 
            className="connect-text"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{duration:1}}
            >
                Connect with me
            </motion.h1>)}
            <div className="connect-links">
                <motion.a 
                href="https://drive.google.com/file/d/1EjK-qb6OEGxtlWl2tvPNVAt7874DBHsY/view?usp=sharing" 
                className="resume" 
                target="blank"
                initial={{y:100,opacity:0}}
                animate={isVisible?{y:0,opacity:1}:{}}
                transition={{delay:0.5,duration:0.5}}
                >
                    Resume
                </motion.a>

                <motion.a 
                href="https://github.com/riteshy1802" 
                target="blank"
                initial={{y:100,opacity:0}}
                animate={isVisible?{y:0,opacity:1}:{}}
                transition={{delay:1,duration:0.5}}
                >
                    <i class="bx bxl-github" id="git"/>
                </motion.a>

                <motion.a 
                href="https://www.linkedin.com/in/ritesh-yadav-2a5a03289/"
                target="blank"
                initial={{y:100,opacity:0}}
                animate={isVisible?{y:0,opacity:1}:{}}
                transition={{delay:1.5,duration:0.5}}
                >
                    <i class="bx bxl-linkedin-square" id="lin"/>
                </motion.a>
            </div>
        </motion.div>
    )
}