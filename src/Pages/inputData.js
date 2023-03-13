import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormInput1() {
  return (
    <div className="container">
      <h1 className="mb-5"> Input hasil kalibrasi anda</h1>
      <Form>
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>User</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Room Degree</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>....</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>No Reg Old</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Calibration Date</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        {/* Group-1 */}
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R1 50</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R1 100</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R1 150</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>R1 200</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>R1 300</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        {/* Group-2 */}
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R2 50</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R2 100</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R2 150</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>R2 200</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>R2 300</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        {/* Group-3 */}
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R3 10</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R3 50</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>R3 100</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>R3 150</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>R3 300</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        {/* Group-4 */}
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>RAVE 10</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>RAVE 50</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>RAVE 100</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>RAVE 150</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>RAVE 300</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormInput1;
