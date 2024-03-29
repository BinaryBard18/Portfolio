import React from "react"
import {motion} from "framer-motion"
import {useEffect,useRef} from "react"

export default function Projects(props){


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

    const tools = props.langs.map((tool) => {
        return(
            <div ref={ref} className="langused">
                <motion.li 
                    className="element"
                    initial={{y:50,opacity:0}}
                    animate={isVisible?{opacity:1,y:0}:{}}
                    transition={{delay:1,duration:0.7}}
                >
                    {tool}
                </motion.li>
            </div>
        )
    })
    return (
        <div ref={ref} className="pros">
                <motion.img 
                src={props.image} 
                className="img"
                initial={{x:-100,opacity:0}}
                animate={isVisible?{x:0,opacity:1}:{}}
                transition={{duration:2,type:'spring',stiffness:150}}
                />
            <div className="info">
                <motion.div 
                    className="title-go"
                    initial={{y:50,opacity:0}}
                    animate={isVisible?{opacity:1,y:0}:{}}
                    transition={{delay:0.3,duration:0.7}}
                >
                    <h1 className="title">{props.title}</h1>
                    <a href={props.link} target="blank"><i class='bx bxs-right-arrow' id="arrow"></i></a>
                </motion.div>
                <motion.div 
                    className="abt"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.7}}
                >
                    <p>{props.about}</p>
                </motion.div>
                
                    <div className="lang-links">
                        {tools}
                    </div>
                
                <motion.div 
                    className="view"
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:5,type:'spring',stiffness:120}}
                >
                    <a href={props.code}>View Code</a>
                </motion.div>
            </div>
        </div>
    )
}