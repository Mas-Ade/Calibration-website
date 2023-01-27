import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tempcont3 from '../Assets/pictures/tempcont3.jpg';
import pressgauge3 from '../Assets/pictures/pressgauge3.jpg';
import temp_recorder3 from '../Assets/pictures/temp_recorder3.jpg';
import { Link } from "react-router-dom";



class Input extends Component {
    render(){
    return (
        <Container>
      <Row>
        <Col sm={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tempcont3} />
      <Card.Body>
        <Card.Title>Temperature Control</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><Link class="nav-link px-2 text-secondary" to="/Input/form1">Input Data</Link></Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pressgauge3} />
      <Card.Body>
        <Card.Title>Pressure Gauge</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Input Data</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={temp_recorder3} />
      <Card.Body>
        <Card.Title>Temp Recorder</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Input Data</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
        
    )
}
}

export default Input;