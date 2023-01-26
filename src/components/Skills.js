import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import CircularProgressBar from "./CircularProgressBar";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My techincal level<br></br>  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                              <CircularProgressBar value={85}/>
                                <h5 style={{marginTop:"10px"}} >Web Development</h5>
                            </div>
                            <div className="item">
                              <CircularProgressBar value={85}/>
                                <h5 style={{marginTop:"10px"}} >HTML</h5>
                            </div>
                            <div className="item">
                            <CircularProgressBar value={90}/>
                                <h5 style={{marginTop:"10px"}} >CSS</h5>
                            </div>
                            <div className="item">
                            <CircularProgressBar value={88}/>
                                <h5 style={{marginTop:"10px"}} >Javascript</h5>
                            </div>
                            <div className="item">
                            <CircularProgressBar value={90}/>
                                <h5 style={{marginTop:"10px"}} >React Js</h5>
                            </div>
                            <div className="item">
                            <CircularProgressBar value={85}/>
                                <h5 style={{marginTop:"10px"}} >jQuery</h5>
                            </div>
                            <div className="item">
                            <CircularProgressBar value={90}/>
                                <h5 style={{marginTop:"10px"}} >Node Js</h5>
                            </div>
                            <div className="item">
                            <CircularProgressBar value={95}/>
                                <h5 style={{marginTop:"10px"}} >Express Js</h5>
                            </div>
                            <div className="item">
                            <CircularProgressBar value={90}/>
                                <h5 style={{marginTop:"10px"}} >Mongo DB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}
