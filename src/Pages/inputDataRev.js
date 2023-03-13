import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";

function FormInput1() {
  const [getinput, setGetInput] = useState({});

  const formik = useFormik({
    initialValues: {
      user: "",
      room_degree: "",
      no_reg_old: "",
      calibration_date: "",
      R110: "",
      R210: "",
      R310: "",
      R150: "",
      R250: "",
      R350: "",
      R1100: "",
      R2100: "",
      R3100: "",
      R1150: "",
      R2150: "",
      R3150: "",
      R1300: "",
      R2300: "",
      R3300: "",
    },

    onSubmit: (values) => {
      console.log(getinput);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container">
      <h1 className="mb-5"> Input hasil kalibrasi anda</h1>

      <Form onSubmit={formik.handleSubmit}>
        {/* Leader Form Group 1 */}
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>User</Form.Label>
            <Form.Control
              name="user"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.user}
              placeholder="isi data user"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Room Degree</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="room_degree"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.room_degree}
            >
              <option>....</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="xs={7}" controlId="formGridZip">
            <Form.Label>No Reg Old</Form.Label>
            <Form.Control
              name="no_reg_old"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.no_reg_old}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Calibration Date</Form.Label>
            <Form.Control
              name="calibration_date"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.calibration_date}
            />
          </Form.Group>
        </Row>
        {/*End Leader Form Group 1 */}

        {/* Group-1 */}
        {/* <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>R1 10</Form.Label>
          <Form.Control name='R110' onChange={formik.handleChange} value={formik.values.R110} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 10</Form.Label>
          <Form.Control name='R210'onChange={formik.handleChange} value={formik.values.R210}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 10</Form.Label>
          <Form.Control name='R310' onChange={formik.handleChange} value={formik.values.R310}/>
        </Form.Group>

      </Row> */}

        {/* Group-2 */}
        {/* <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 50</Form.Label>
          <Form.Control name='R150' onChange={formik.handleChange} value={formik.values.R150}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 50</Form.Label>
          <Form.Control name='R250' onChange={formik.handleChange} value={formik.values.R250}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 50</Form.Label>
          <Form.Control name='R350' onChange={formik.handleChange} value={formik.values.R350}/>
        </Form.Group>

      </Row> */}

        {/* Group-3 */}
        {/* <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 100</Form.Label>
          <Form.Control name='R1100' onChange={formik.handleChange} value={formik.values.R1100}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 100</Form.Label>
          <Form.Control name='R2100' onChange={formik.handleChange} value={formik.values.R2100}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 100</Form.Label>
          <Form.Control name='R3100' onChange={formik.handleChange} value={formik.values.R3100}/>
        </Form.Group>

      </Row> */}

        {/* Group-4 */}
        {/* <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 150</Form.Label>
          <Form.Control name='R1150' onChange={formik.handleChange} value={formik.values.R1150}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 150</Form.Label>
          <Form.Control name='R2150' onChange={formik.handleChange} value={formik.values.R2150}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 150</Form.Label>
          <Form.Control name='R3150' onChange={formik.handleChange} value={formik.values.R3150}/>
        </Form.Group>

      </Row> */}

        {/* Group-5 */}
        {/* <Row className="mb-5 ">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 300</Form.Label>
          <Form.Control name='R1300' onChange={formik.handleChange} value={formik.values.R1300}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 300</Form.Label>
          <Form.Control name='R2300' onChange={formik.handleChange} value={formik.values.R2300}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 300</Form.Label>
          <Form.Control name='R3300' onChange={formik.handleChange} value={formik.values.R3300}/>
        </Form.Group>

      </Row> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormInput1;
