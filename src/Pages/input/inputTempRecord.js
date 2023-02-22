import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import axios from "axios";
// import Alert from 'react-bootstrap/Alert';


// method ini menggunakan libary react-hook-form dimana semua data yang dideclare disimpan di state useForm() [bawaan dari library]
// state input disimpan di register dan di fetch atau di gabung di useForm

function InputTempRecord() {
 // works
  // deklarasi state
  const { register, handleSubmit } = useForm();

  // fungsi onsubmit + alert
  const onSubmit = async datas => {
    console.log(datas);
    await axios.post('http://10.202.100.84:3003/api/postdata_calibration_tempctrl_temprec', datas)
    alert(JSON.stringify("Data berhasil diinput"));

    // script timeout dan pindah halaman
    const timeout = await setTimeout(() => {
    console.log('update berhasil');
    window.location.href='/hookform'
  }, 1000);
  }
  
 // watch input value by passing the name of it

  return (
    <div className='container'>
       <h1 className='mb-4 mt-4'> Input hasil kalibrasi Temperature Recorder </h1>

    <form onSubmit={handleSubmit(onSubmit)} >
{/* Leader Form Group 1 */}
      <Row className="mb-5">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>User</Form.Label>
          <Form.Control {...register("updated_staff" , { required: true})}  placeholder="isi data user" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Room Degree</Form.Label>
          <Form.Select  defaultValue="" {...register("room_temperature" , { required: true})}  placeholder="isi data suhu ruangan">
            <option>....</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>No Reg New</Form.Label>
          <Form.Control {...register("new_reg_no", { required: true})}  placeholder="isi data no reg old" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>No Machine</Form.Label>
          <Form.Control {...register("machine_no", { required: true})}  placeholder="isi data no reg old" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Calibration Date</Form.Label>
          <Form.Control type="date" {...register("calibration_date", { required: true})}  placeholder="isi data tanggal kalibrasi" />
        </Form.Group>

        </Row>

{/* Group-1 */}
      <Row className="mb-">
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>R1 10</Form.Label>
          <Form.Control {...register("std_ds1_r1", { required: true})} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 10</Form.Label>
          <Form.Control {...register("std_ds1_r2", { required: true})} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 10</Form.Label>
          <Form.Control {...register("std_ds1_r3", { required: true})} />
        </Form.Group>

      </Row>

{/* Group-2 */}
     <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 50</Form.Label>
          <Form.Control {...register("std_ds2_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 50</Form.Label>
          <Form.Control {...register("std_ds2_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 50</Form.Label>
          <Form.Control {...register("std_ds2_r3", { required: true})}/>
        </Form.Group>

      </Row>

{/* Group-3 */}
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 100</Form.Label>
          <Form.Control {...register("std_ds3_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 100</Form.Label>
          <Form.Control {...register("std_ds3_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 100</Form.Label>
          <Form.Control {...register("std_ds3_r3", { required: true})}/>
        </Form.Group>

      </Row>

{/* Group-4 */}
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 150</Form.Label>
          <Form.Control {...register("std_ds4_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 150</Form.Label>
          <Form.Control {...register("std_ds4_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 150</Form.Label>
          <Form.Control {...register("std_ds4_r3", { required: true})}/>
        </Form.Group>

      </Row>

{/* Group-5 */}
      <Row className="mb-5 ">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R1 300</Form.Label>
          <Form.Control {...register("std_ds5_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R2 300</Form.Label>
          <Form.Control {...register("std_ds5_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>R3 300</Form.Label>
          <Form.Control {...register("std_ds5_r3", { required: true})}/>
        </Form.Group>

      </Row>

    {/* <Button  variant="primary" type="submit" onClick="setTimeout(movePage, 200);"> */}
      <Button  variant="primary" type="submit" >
      {/* <Button  variant="primary" type="submit"> */}
        Submit
      </Button>
 </form>
    </div>
  );
}

export default InputTempRecord

