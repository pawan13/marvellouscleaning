import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";

export default function HomeScreens() {
  return (
    <div> <Row>
    <Card style={{width:'35rem', marginLeft:"2.5rem"}}> 
<Card.Img variant="top" src="../images/logo.jpg" height={250} alt="logo" />
<Card.Body>
  <Card.Title>Marvellous Cleaning Services</Card.Title>
  <Card.Text>
  Marvellous Cleaning Services have professionals with many years
   of residential and commercial cleaning experience and offer a professional, 
   efficient and reliable cleaning service. We provide commercial
   cleaning services. We serve at <b>Schools, Child care or Age care,
    Hospitals, Office and shopping center, Restaurant and Bar, Strata Cleaning, Construction
    and Real estate.
    </b><br/>  
  </Card.Text>
</Card.Body>
</Card>
<Card style={{width: "40rem", marginLeft: "2.5rem"}}>
<Card.Img variant="top" src="../images/Services.jpg" height={450} alt="logo" />   
</Card>
</Row></div>
  )
}
