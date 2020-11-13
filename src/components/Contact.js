import React from "react";
import { Container, Row, Col, Card, Button, CardBody,
    CardTitle, CardText,CardImg}  from 'reactstrap';
import ContactHeader from './ContactHeader';
import NavLink from "./Navlink";
import '../styles/Contact.css';
import Footer from "./Footer";
import emailme from "../images/emailme.jpg";



 


const Contact= () => {
  return (


<div>





    < NavLink /> 
   
     
  


    <ContactHeader /> 
   <Container  >
   

    <div>

    

      <Card className="card">
     

     <div className="cardhide">
      <h2> <b> Contact </b>  </h2> 
      </div> 


        <img className="thecardsize" src={emailme}  alt="Card image cap" />
        <CardBody>
          
        <a href="mailto:crhebeler@gmail.com" ><Button  color="primary" size="lg">Click Here <br/> Send Me an Email </Button></a>
        </CardBody>
      </Card>
      
    </div>
  


    
   
 
    <Footer />

</Container> 



     
      </div> 
  );
};

export default Contact;
