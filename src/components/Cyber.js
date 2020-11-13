import React from "react";
import { Container, Row, Col,Jumbotron, Card, Button, CardBody,
    CardTitle, CardText,CardImg}  from 'reactstrap';
import CyberHeader from './CyberHeader';
import NavLink from "./Navlink";
import underconstuction from "../images/underconstuction.jpg";


import Footer from "./Footer";




 


const Cyber= () => {
  return (


<div>





    < NavLink /> 
   
     
  


    <CyberHeader /> 
  
   

    <div>


    <Card >  
      
      <CardImg top width="100%" src={underconstuction} alt="Under Constuction"  />
  
      </Card>
     
   
   
       

      
    </div>
  


    
   
 
    <Footer />




     
      </div> 
  );
};

export default Cyber;
