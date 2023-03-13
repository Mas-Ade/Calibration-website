import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tempcont3 from "../../Assets/pictures/tempcont3.jpg";
import pressgauge3 from "../../Assets/pictures/pressgauge3.png";
import temp_recorder3 from "../../Assets/pictures/temp_recorder3.png";
import documentLogo from "../../Assets/pictures/logo-document.png";
import { Link } from "react-router-dom";
import "../../App.css";
import { useEffect, useState } from "react";
import BASE_URLAPI from "../../config/URLAPI";
import axios from "axios";

function Input() {
  const tempCont = () => {
    window.location.replace(
      "http://10.202.100.84:3003/api/download/file/collection_document/1"
    );
  };
  const pressGauge = () => {
    window.location.replace(
      "http://10.202.100.84:3003/api/download/file/collection_document/2"
    );
  };
  return (
    <div>
      <Container className="mt-4">
        <div>
          <h2
            style={{ fontFamily: "Segoe UI" }}
            className=" text-center mb-4 fw-bold"
          >
            SELECT DEVICE TO INPUT
          </h2>
        </div>
        <Row>
          <Col sm={4}>
            <Card className="container shadow" style={{ width: "20rem" }}>
              <Card.Img
                className="mt-2"
                height={250}
                variant="top"
                src={tempcont3}
              />
              <Card.Body>
                <Card.Title>Temperature Control</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/inputTempCont">
                  <Button style={{ marginRight: 15 }} variant="outline-primary">
                    Input Data
                  </Button>
                </Link>
                <Link to="/downloadtemp">
                  <Button style={{ marginRight: 15 }} variant="success">
                    Download
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="container shadow " style={{ width: "20rem" }}>
              <Card.Img
                className="mt-2"
                height={250}
                variant="top"
                src={pressgauge3}
              />
              <Card.Body>
                <Card.Title>Pressure Gauge</Card.Title>

                <Link to="/inputTempPress">
                  <Button style={{ marginRight: 15 }} variant="outline-primary">
                    Input Data
                  </Button>
                </Link>
                <Link to="/downloadpress">
                  <Button style={{ marginRight: 15 }} variant="success">
                    Download
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className=" container shadow" style={{ width: "20rem" }}>
              <Card.Img
                className="mt-2"
                height={250}
                variant="top"
                src={temp_recorder3}
              />
              <Card.Body>
                <Card.Title>Temp Recorder</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/inputTempRecord">
                  <Button style={{ marginRight: 15 }} variant="outline-primary">
                    Input Data
                  </Button>
                </Link>
                <Link to="/downloadrecord">
                  <Button style={{ marginRight: 15 }} variant="success">
                    Download
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="container mt-5 ">
          <h4 className="container">Please Check Our Calibration Procedure </h4>
          <Row className="mt-3">
            <Col sm={6}>
              <Card className="shadow" style={{ width: "33rem" }}>
                <Card.Body>
                  <Row>
                    <Col sm={10}>
                      <Card.Title>
                        Temperature Control & Recorder Procedure
                      </Card.Title>
                      <Card.Text>
                        <Button
                          variant="link"
                          class="btn btn-link"
                          onClick={tempCont}
                        >
                          Download
                        </Button>
                      </Card.Text>
                    </Col>
                    <Col sm={2}>
                      <img
                        src={documentLogo}
                        style={{ height: 50, width: 50 }}
                      ></img>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6}>
              <Card className="container shadow " style={{ width: "33rem" }}>
                {/* <Card.Img className='mt-2' height={120} variant="top" src={pressgauge3} /> */}
                <Card.Body>
                  <Row>
                    <Col sm={10}>
                      <Card.Title>Pressure Gauge Procedure</Card.Title>
                      <Card.Text>
                        <Button
                          variant="link"
                          class="btn btn-link"
                          onClick={pressGauge}
                        >
                          Download
                        </Button>
                      </Card.Text>
                    </Col>
                    <Col sm={2}>
                      <img
                        src={documentLogo}
                        style={{ height: 50, width: 50 }}
                      ></img>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Input;
