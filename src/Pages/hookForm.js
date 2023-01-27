import { useForm } from "react-hook-form"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));}

 // watch input value by passing the name of it

  return (
    <div className='container'>
    <h1 className='mb-5'> Input hasil kalibrasi anda</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
{/* Leader Form Group 1 */}
      <Row className="mb-5">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>User</Form.Label>
          <Form.Control {...register("user")}  placeholder="isi data user" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Room Degree</Form.Label>
          <Form.Select  defaultValue="Choose..." {...register("room_degree")}  placeholder="isi data suhu ruangan">
            <option>....</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>No Reg Old</Form.Label>
          <Form.Control {...register("no_reg_old")}  placeholder="isi data no reg old" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Calibration Date</Form.Label>
          <Form.Control {...register("calibration_date")}  placeholder="isi data tanggal kalibrasi" />
        </Form.Group>

        </Row>

{/* Group-1 */}
      <Row className="mb-">
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>R1 10</Form.Label>
          <Form.Control {...register("R110")} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 10</Form.Label>
          <Form.Control {...register("R210")} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 10</Form.Label>
          <Form.Control {...register("R310")} />
        </Form.Group>

      </Row>

{/* Group-2 */}
     <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 50</Form.Label>
          <Form.Control {...register("R150")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 50</Form.Label>
          <Form.Control {...register("R250")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 50</Form.Label>
          <Form.Control {...register("R350")}/>
        </Form.Group>

      </Row>

{/* Group-3 */}
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 100</Form.Label>
          <Form.Control {...register("R1100")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 100</Form.Label>
          <Form.Control {...register("R2100")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 100</Form.Label>
          <Form.Control {...register("R3100")}/>
        </Form.Group>

      </Row>

{/* Group-4 */}
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 150</Form.Label>
          <Form.Control {...register("R1150")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 150</Form.Label>
          <Form.Control {...register("R2150")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 150</Form.Label>
          <Form.Control {...register("R3150")}/>
        </Form.Group>

      </Row>

{/* Group-5 */}
      <Row className="mb-5 ">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 300</Form.Label>
          <Form.Control {...register("R1300")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 300</Form.Label>
          <Form.Control {...register("R2300")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 300</Form.Label>
          <Form.Control {...register("R3300")}/>
        </Form.Group>

      </Row>

      <Button  variant="primary" type="submit">
        Submit
      </Button>
 </form>
    </div>
  );
}

export default HookForm

/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input {...register("example")} />
      
    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input {...register("exampleRequired", { required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}
      
    //   <input type="submit" />
    // </form>