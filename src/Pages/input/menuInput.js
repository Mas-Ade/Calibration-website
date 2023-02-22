import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tempcont3 from '../../Assets/pictures/tempcont3.jpg';
import pressgauge3 from '../../Assets/pictures/pressgauge3.jpg';
import temp_recorder3 from '../../Assets/pictures/temp_recorder3.jpg';


function Input () {
    return (
      <div>
        <Container className='mt-4'>
        <div>
          <h2 className='text-center mb-4 fw-bold'>Select Device to Input</h2>
        </div>
      <Row>
        <Col sm={4}>
        <Card className='shadow' style={{ width: '18rem' }}>
      <Card.Img height={250} variant="top" src={tempcont3} />
      <Card.Body>
        <Card.Title>Temperature Control</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={()=> {window.location.href='/inputTempCont'}}  variant="outline-primary" > Input Data </Button>
        <Button onClick={()=> {window.location.href='/downloadtemp'}} style={{marginLeft: 15}}  variant="success"> Download </Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card className='shadow' style={{ width: '18rem' }}>
      <Card.Img height={250} variant="top" src={pressgauge3} />
      <Card.Body>
        <Card.Title>Pressure Gauge</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={()=> {window.location.href='/inputTempPress'}} variant="outline-primary" >Input Data </Button>
        <Button onClick={()=> {window.location.href='/downloadpress'}} style={{marginLeft: 15}}  variant="success"> Download </Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card className='shadow' style={{ width: '18rem' }}>
      <Card.Img height={250} variant="top" src={temp_recorder3} />
      <Card.Body>
        <Card.Title>Temp Recorder</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={()=> {window.location.href='/inputTempRecord'}} variant="outline-primary" >Input Data</Button>
        <Button onClick={()=> {window.location.href='/downloadrecord'}} style={{marginLeft: 15}}  variant="success"> Download </Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </div>
        
    )
}

// class Input extends Component {
//     render(){
//     return (
//       <div>
//         <Container className='mt-3'>
//       <Row>
//         <Col sm={4}>
//         <Card style={{ width: '20rem' }}>
//       <Card.Img variant="top" src={tempcont3} />
//       <Card.Body>
//         <Card.Title>Temperature Control</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="outline-primary" ><Link className="nav-link px-2 text-secondary" to="/inputTempCont">Input Data</Link></Button>
//       </Card.Body>
//     </Card>
//         </Col>
//         <Col sm={4}>
//         <Card style={{ width: '20rem' }}>
//       <Card.Img width={50} variant="top" src={pressgauge3} />
//       <Card.Body>
//         <Card.Title>Pressure Gauge</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="outline-primary" ><Link className="nav-link px-2 text-secondary" to="/inputTempPress">Input Data</Link></Button>
//       </Card.Body>
//     </Card>
//         </Col>
//         <Col sm={4}>
//         <Card style={{ width: '20rem' }}>
//       <Card.Img variant="top" src={temp_recorder3} />
//       <Card.Body>
//         <Card.Title>Temp Recorder</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="outline-primary" ><Link className="nav-link px-2 text-secondary" to="/inputTempRecord">Input Data</Link></Button>
//       </Card.Body>
//     </Card>
//         </Col>
//       </Row>
//     </Container>
//     <div className='container mt-4 border border-info'>
//       <h3>Download File</h3>
//       <div className='border'>
//         <h4>pilih device</h4>
//       </div>
//     </div>
//     </div>
        
//     )
// }
// }

export default Input;