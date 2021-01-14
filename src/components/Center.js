import React from "react";
import Chris from "../images/profilepic.jpg";
import { Container, Row, Col } from 'reactstrap';
import '../styles/Center.css';



const Center = () => (
  <div>
  
          <Container>
    <Row>
    <section className="probackround">
      <Col ><img className="chris" src={Chris} alt="Christopher"  />
    </Col> 
    </section> 
     
 
    </Row>
    <Row>
 
 <Col>

<h3>
<br></br><b>Hello, My name is Christopher Hebeler.</b>
 


Thank you, for visiting my website<br></br>
<br></br>

</h3>


 
   
 </Col>

</Row>

</Container> 

  </div>
)
export default Center;
