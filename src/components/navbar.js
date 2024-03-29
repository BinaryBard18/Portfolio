import React from "react"
import logo from "../img/logo.png"
import {motion} from "framer-motion"
import {useState,useEffect,useRef} from "react"


export default function Navbar() {

    const [isVisible, setIsVisible] = React.useState(false);
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
        <nav ref={ref}>
            {isVisible&&(<motion.img 
            src = {logo} 
            className="mainlogo"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}} 
            />)}
            {isVisible&&(<motion.div 
            className="links"
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{delay:0.3,duration:1}} 
            >
                <a href="https://drive.google.com/file/d/17iltF0lutdzufwPildscWnvuDIKD3sK9/view?usp=drive_link" className="resume" id="resume" target="blank">Resume</a>
                <a href="https://github.com/riteshy1802" target="blank" ><i class="bx bxl-github" id="git" /></a>
                <a href="https://www.linkedin.com/in/ritesh-yadav-2a5a03289/" target="blank" ><i class="bx bxl-linkedin-square" id="lin" /></a>
            </motion.div>)}
        </nav>
    )
}