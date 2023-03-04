import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tempcont3 from '../../Assets/pictures/tempcont3.jpg';
import pressgauge3 from '../../Assets/pictures/pressgauge3.png';
import temp_recorder3 from '../../Assets/pictures/temp_recorder3.png';
import { Link } from 'react-router-dom';
import '../../App.css'


function Input () {
    return (
      <div>
        <Container className='mt-4'>
        <div>
          <h2 style={{fontFamily: 'Segoe UI'}} className=' text-center mb-4 fw-bold'>SELECT DEVICE TO INPUT</h2>
        </div>
      <Row>
        <Col sm={4}>
        <Card className='container shadow' style={{ width: '20rem' }}>
      <Card.Img className='mt-2' height={250} variant="top" src={tempcont3} />
      <Card.Body>
        <Card.Title>Temperature Control</Card.Title>
        <Card.Text>

        </Card.Text>
        <Link to='/inputTempCont'>
        <Button style={{marginRight: 15}}  variant="outline-primary">Input Data</Button>
        </Link>
        <Link to='/downloadtemp'>
        <Button style={{marginRight: 15}}  variant="success">Download</Button>
        </Link> 
      </Card.Body>
    </Card>
        </Col>
        <Col  sm={4}>
        <Card className='container shadow ' style={{ width: '20rem' }}>
      <Card.Img className='mt-2' height={250} variant="top" src={pressgauge3} />
      <Card.Body>
        <Card.Title>Pressure Gauge</Card.Title>
        
        <Link to='/inputTempPress'> 
        <Button style={{marginRight: 15}}  variant="outline-primary">Input Data</Button>
        </Link>
        <Link to='/downloadpress'>
        <Button style={{marginRight: 15}}  variant="success">Download</Button>
        </Link> 
      </Card.Body>
    </Card>
        </Col>
        <Col  sm={4}>
        <Card className=' container shadow' style={{ width: '20rem' }}>
      <Card.Img className='mt-2' height={250} variant="top" src={temp_recorder3} />
      <Card.Body>
        <Card.Title>Temp Recorder</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Link to='/inputTempRecord'>
        <Button style={{marginRight: 15}}  variant="outline-primary">Input Data</Button>
        </Link>
        <Link to='/downloadrecord'>
        <Button style={{marginRight: 15}}  variant="success">Download</Button>
        </Link> 
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