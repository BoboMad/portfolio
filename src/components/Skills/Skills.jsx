import {Container, Row, Col} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import { FaCss3Alt,FaHtml5,FaReact,FaDatabase } from "react-icons/fa";
import { SiCsharp, SiDotnet} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDotnet } from "react-icons/di";
import styles from './Skills.module.css';
import 'react-multi-carousel/lib/styles.css';

import React from 'react'

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className={styles.skillSection} id='skills'>
        <Container className={styles.skills}>
            <h2>
                 Skills
            </h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit natus, ipsa consequatur, aperiam vitae eos mollitia minima soluta, officia corrupti vero aspernatur quia adipisci dolore distinctio consequuntur? Magnam, quod delectus!
            </p>
            <Carousel  
            responsive={responsive}
            infinite={true}
            customTransition='all 1000ms linear'
            transitionDuration={1000}
            arrows={false}
            pauseOnHover
            autoPlay
            autoPlaySpeed={10000}
            >
                <div>
                <IoLogoJavascript className={styles.jsIcon}/>
                <h5>Javascript</h5>
                </div>    
                
                <div>
                <FaHtml5 className={styles.htmlIcon} /><FaCss3Alt className={styles.cssIcon}/>
                <h5>html/css</h5>   
                </div>
                
                <div>
                <SiCsharp className={styles.csharpIcon}/>
                <h5>C#</h5>
                </div>
                
                <div>
                <FaReact className={styles.reactIcon}/>
                <h5>React</h5>
                </div>        
                
                <div>
                <DiDotnet className={styles.entityframeworkIcon}/>
                <SiDotnet className={styles.dotNetIcon}/>
                <h5>ASP.NET</h5>
                </div>
                
                <div>
                <FaDatabase className={styles.sqlIcon}/>
                <h5>SQL</h5>
                </div>
                
                <div>
                <DiDotnet className={styles.entityframeworkIcon}/>
                <SiDotnet className={styles.dotNetIcon}/>
                <h5>Entity Framework</h5>
                </div>
                
            </Carousel>
        </Container>
    </section>
  )
}

export default Skills
