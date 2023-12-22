import rasim11 from "./img/rasim11.png";
import rasim12 from "./img/rasim12.png";
import rasim13 from "./img/rasim13.png";
import rasim14 from "./img/rasim14.png";
import rasim15 from "./img/rasim15.png";
import rasim16 from "./img/rasim16.png";
import rasim18 from "./img/rasim18.png";
import rasim19 from "./img/rasim19.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function AboutUse() {
  return (
    <div className="container">
      <Section1 />
      <div className="Card">
        <Card btn={"KEEP READING"} rasim={rasim12} name={"OUR STORY"} namep={"In 2002, Elisabeth Pruiett and Chad Robertson came into San Francisco for dinner from their home and small bakery in Point Reyes. On the corner of 18th and Guerrero they spotted a baker sitting outside. He was ready to retire, but didn't want the neighborhood to lose a corner bakery. It felt like fate."} />
        <Card btn={"LEARN MORE"} rasim={rasim13} name={"OUR BREAD"} namep={"What made us we make everyday. It’s our job as bakers to make it count by making it good. As farmers across the country plant different varieties of grains, we as bakers will have more choice in the flour we’re able to work with. There’s a world of flavors most of us have yet to taste. But we like will."} />
      </div>
      <div className="one">
        <One />
      </div>
      <div className="imm">
        <Img/>
      </div>
      <div className="rasimm">
        <Imgg rasim={rasim16}/>
        <Imgg rasim={rasim18}/>
        <Imgg rasim={rasim19}/>
      </div>
    </div>
  )
}

export default AboutUse

export function Section1() {
  return (
    <div className="section1">
      <img src={rasim11} alt="rasim11" />
    </div>
  )
}

export function Card({ rasim, name, namep, btn }) {
  return (
    <div className="section2">
      <img src={rasim} alt="rasim12" />
      <h2>{name}</h2>
      <p>{namep}</p>
      <h5>{btn}<FaLongArrowAltRight /></h5>
    </div>
  )
}
export function One() {
  return (
    <div className="section3">
      <h3>WORK WITH US</h3>
      <p>We’re looking for talented bakers, managers, and more to help us grow our business and spread our culture of craft to new countries and states.</p>
      <button>OUR JOBS</button>
      <button>PRESS</button>
    </div>
  )
}
export function Img() {
  return (
    <div className="image">
      <div className="box1">
        <img src={rasim14} alt="salom" />
      </div>
      <div className="box2">
        <img src={rasim15} alt="rasim" />
      </div>
    </div>
  )
}
export function Imgg({rasim}){
  return(
      <div className="rasim">
        <img src={rasim} alt="mmmm" />
      </div>
  )
}

