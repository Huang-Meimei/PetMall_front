import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { render } from "@testing-library/react";
import { allImages } from "./utils/image";
import img1 from './utils/1.jpeg';
import img2 from './utils/2.jpeg';
import img3 from './utils/3.jpeg';
import { useEffect } from "react";

export const Skills = () => {

  const fairies = [];
  const user = "default"
  const [role,setRole] = useEffect([])

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

  useEffect(() => {
    
  }
  ,[role]);

  const renderFairyImages = () => {
    fairies.push(<img src={img1}></img>)
    fairies.push(<img src={img2}></img>)
    fairies.push(<img src={img3}></img>)
    return(
      <div>
        {fairies.map((item,index)=>{
          return item
        })}
      </div>

    )
      
  }

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My Collection of Fairies</h2>
                        <p>Tell me where their home is,
                          <br></br>Is it in the garden? ‘Neath the clustering vine?
                          <br></br>Is it in the meadow, ‘Mid the grasses tall?
                          <br></br>Is it by the brookside, Sweetest place of all?
                          <br></br>Pretty little maidens,
                          <br></br>Curled among the roseleaves, Stretched along the fern,
                          <br></br>Not within the meadow, Not in woodland gloom,
                          <br></br>But in brightest sunshine, In this very room.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {
                              useEffect()
                          }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
