import React from "react";
import HeaderPort from './HeaderPort';
import NavLink from "./Navlink";
import Footer from "./Footer";
import '../styles/Port.css';
import { Container, Row, Col,Button } from 'reactstrap';
//import '../styles/Center.css';
import  Picture1803 from "../images/1803pic.png";
import Desktop1 from "../images/Desktop1.jpg";
import mobile1 from "../images/mobile1.png";
import mobile2 from "../images/mobile2.png";
import mobile3 from "../images/mobile3.png";
import mobile4 from "../images/mobile4.png";
import mobile5 from "../images/mobile5.png";
import mobile6 from "../images/mobile6.png";
import mobile7 from "../images/mobile7.png";
import mobile8 from "../images/mobile8.png";



const Porfolio = (props) => {

  

  return (


<div> 
        < NavLink /> 
        <HeaderPort /> 


<Container className="PortContainer">




    <Row>
    <section className="Style1803">
    <h2> 
 Location Trends App 
  </h2> 
  <p> M.E.R.N Stack App </p> 
  <p> MongoDb, Express,React.Js , Node.js (just to name a few)</p> 
  <a href="https://location-trend-app.herokuapp.com/" ><Button  color="primary" size="lg">Click Here to View Live  App</Button></a>

      <Col > <img className="LocationTrends" src={Desktop1} alt="Location Trends"  />
<a href="https://github.com/crhebeler/LocationTrendsAPP/" ><Button  color="primary" size="lg">Click Here to Check out the Code</Button></a>
    </Col> 
  <br/> 
    </section> 
     
 
    </Row>


        <Row>
   <section className="Style1803"> 
<h2> www.1803pizzakitchen.com</h2> 
<p> Html,Css,Javascript,Json,Various Api's</p> 

     
      <Col ><img className="Picture1803style" src={Picture1803} alt="1803 Pizza Kitchen"  />
      
      <a href="https://1803pizzakitchen.com/" ><Button  color="primary" size="lg">Click Here to View Live Website </Button></a>
    </Col> 
<br/> 
    </section> 
     
 
    </Row>
    <section className="mobilescreenshot"> 
    <h2> www.1803pizzakitchen.com - Mobile Version</h2>
    <h3> Easy Navigation ,User Friendly and Designed with Mobile in Mind</h3> 
        <Row>
          <Col><img className="mobilescreenshotstyle" src={mobile1} alt="Christopher"  /></Col>
          <Col><img className="mobilescreenshotstyle" src={mobile2} alt="Christopher"  /></Col>
          <Col><img className="mobilescreenshotstyle" src={mobile3} alt="Christopher"  /></Col>
          <Col><img className="mobilescreenshotstyle" src={mobile4} alt="Christopher"  /></Col>
        </Row>
        <br/> 
        <Row>
          <Col><img className="mobilescreenshotstyle" src={mobile5} alt="Christopher"  /></Col>
          <Col><img className="mobilescreenshotstyle" src={mobile6} alt="Christopher"  /></Col>
          <Col><img className="mobilescreenshotstyle" src={mobile7} alt="Christopher"  /></Col>
          <Col><img className="mobilescreenshotstyle" src={mobile8} alt="Christopher"  /></Col>
        </Row>
    <br/>
        <a href="https://1803pizzakitchen.com/" ><Button  color="primary" size="lg">Click Here to Check out the Code</Button></a>
<br/>
<br/>
  </section> 
  
  <section className="mobilescreenshot"> 

    <br/> 
    <div className="mobilescreenshot2"> 

    <h2> Want to Check out the Code to this Website?</h2>
    <h5> Made with Html,Css,Javascript,React.Js,etc. </h5> 
        <Row>
         <Col>
         <br/> 
         <a href="https://github.com/crhebeler/ChristopherHebeler.Com" ><Button  color="danger" size="lg">See the Source Code For <br/>ChristopherHebeler.com</Button></a>
        
         <br/> 
       <br/> 
       

         </Col> 
         <br/> 
       <br/> 

        </Row>
       
     </div> 
  </section> 
</Container> 


<Footer />
</div> 
  
);
};

export default Porfolio;
