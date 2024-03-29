import './App.css';
import {motion} from "framer-motion"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Footer from "./components/footer"
import Projects from "./components/projects"
import Data from "./components/data"

function App() {

  const pro = Data.map((proj) => {
    return <Projects 
              image = {proj.image}
              title = {proj.title}
              about = {proj.about}
              langs = {proj.langs}
              link = {proj.link}
              code = {proj.code}
          />
  })

  return (
    <div>
      {/* <div className='ball--div'>
        <motion.div 
        className='secondary--ball'
        initial={{y:-150}}
        animate={{y:0}}
        transition={{duration:1.5,type:'spring',stiffness:110}}
        >
          <motion.div 
          className='ball'
          >
          </motion.div>
        </motion.div>
      </div> */}
      <Navbar />
      <Hero />
      {pro}
      <Footer />
    </div>
  );
}

export default App;
