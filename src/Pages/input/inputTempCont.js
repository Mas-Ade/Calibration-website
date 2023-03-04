import { useForm } from "react-hook-form"
import React, { useState, useEffect , } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import BASE_URLAPI from '../../config/URLAPI'
import { Table, Input, Modal, message, } from "antd";
import '../../App.css'


// method ini menggunakan libary react-hook-form dimana semua data yang dideclare disimpan di state useForm() [bawaan dari library]
// state input disimpan di register dan di fetch atau di gabung di useForm

function InputTempCont() {
 // works
 // deklarasi state
  const { register, handleSubmit, setValue } = useForm();
 // state untuk memanpung data dalam table Modal
  const [validno, setValidno] = useState([]) 
  const [staff , setStaff] = useState([])
 //logic kondisi Modal diatur dalam state tipe boolean
  const [isEditing, setIsEditing] = useState(false)
  const [isEditing2, setIsEditing2] = useState(false)
 // state untuk memanpung data pencarian
  const [searchText, setSearchText] =useState("")
 // state untuk memanpung data pencarian yang sudah dipilih 
  const [filter, setFilter] = useState("")
 // state untuk memanpung data pencarian yang sudah dipilih
  const [filter2, setFilter2] = useState("")
 // state untuk menampung text untuk message
  const [messageApi, contextHolder] = message.useMessage();
 // state untuk memanpung data Noreg
 // const [dataNoreg, setDataNoreg] = useState({})
 // state untuk memanpung data nomach
 // const [dataNomach, setDataNomach] = useState({})

  const getNo = async () => {
    const response = await axios.get(`${BASE_URLAPI}/api/getdata_devicemaster_calibration`)
    setValidno(response.data.data)
  }

  const getStaff = async () => {
    const response = await axios.get(`${BASE_URLAPI}/api/getdata_staff`)
    setStaff(response.data.data)
  }

  

  const onClickButton = async (record) => {
            setIsEditing(true)
            }

  const onClickButton2 = async (record) => {
            setIsEditing2(true)
            }

  const onClickFilter = (record) => {
             setFilter(record.new_reg_no)
             setIsEditing(true)
             messageApi.info(`${record.new_reg_no} berhasil dipilih `)
            }
  
  const onClickFilter2 = (record) => {
             setFilter2(record.machine_no)
             setIsEditing2(true)
             messageApi.info(`${record.machine_no} berhasil dipilih `)
            }
            // console.log('data : ', filter)

 
  useEffect(() => {
    getNo()
    getStaff()
}, [])

// console.log("data no reg new :" , validno)

  // fungsi onsubmit + alert
  const onSubmit = async datas => {
    console.log(datas);
    await axios.post('http://10.202.100.84:3003/api/postdata_calibration_tempctrl_temprec', datas)
    alert(JSON.stringify("Data berhasil diinput"));

    // script timeout dan pindah halaman
    const timeout = await setTimeout(() => {
    console.log('update berhasil');
    window.location.href='/inputTempCont'
  }, 1000);
  }

  const column  = [
                {
                title: 'New Reg No',
                dataIndex: "new_reg_no",
                align: 'center',
                filteredValue: [searchText],
                onFilter:(value,record) => {
                return String(record.reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.new_reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.calibration_date)
                .toLowerCase()
                .includes(value.toLowerCase())
                },
                // onclick:(value, record) => {
                // setDataNoreg(record.new_reg_no)
                // }
                }, 
                {
                title: 'Action',
                key:'action',
                render: (record) => (
                <Button onClick={ () => {
                  onClickFilter(record)
                }} >Choose
                </Button>
                ),
                align: 'center'
                }
              ]

  const column2  = [
                {
                title: 'Machine No',
                dataIndex: "machine_no",
                align: 'center',
                filteredValue: [searchText],
                onFilter:(value,record) => {
                return String(record.machine_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.new_reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.calibration_date)
                .toLowerCase()
                .includes(value.toLowerCase())
                },
                // onclick:(value, record) => {
                // setDataNomach(record.machine_no)
                // }
                },
                
                {
                title: 'Action',
                key:'action',
                render: (record) => (
                <Button onClick={ () => {
                  onClickFilter2(record)
                }} >Choose
                </Button>
                ),
                align: 'center'
                }
              ]

  return (
    <div className='container'>
    <h1 style={{fontFamily: 'Segoe UI'}} className='mb-4 mt-4 mb-4 fw-bold'> Input Result Calibration of Temperature Control </h1>

    <form onSubmit={handleSubmit(onSubmit)} >
{/* Leader Form Group 1 */}
      <Row className="mb-5 border p-2">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="fw-bold text-primary">User</Form.Label>
            <Form.Select defaultValue="...." {...register("updated_staff", { required: true })} placeholder="isi data suhu ruangan">
            {staff.map(row => {
              return (
              <option> {row.staff_name} </option>)
            })}
            </Form.Select>
          </Form.Group>
          
        {/* <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">User</Form.Label>
          <Form.Control className="mb-2" {...register("updated_staff" , { required: true})}  placeholder="isi data user" />
        </Form.Group> */}

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">Room Degree</Form.Label>
          <Form.Select  defaultValue="" {...register("room_temperature" , { required: true})}  placeholder="isi data suhu ruangan">
            {filter}
            <option>....</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group  as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">No Reg New</Form.Label>
          {contextHolder}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
              <Modal 
                        
                        title="Pilih No Reg New "
                        open={isEditing}
                        onCancel={() => {
                        setIsEditing(false)
                        }}
                        onOk= {()=> {
                        {setValue('new_reg_no',`${filter}`)}
                        setIsEditing(false)
                        }}
                    >
                    <div>
                    <Input.Search
                placeholder="cari device"
                onSearch={(value) => {
                setSearchText(value)
                }}
                onChange= {(e) => {
                setSearchText(e.target.value)
                }}
                allowClear
                type="text"
                />
                    <Table 
                        key={'action'}
                        columns={column}
                        dataSource={validno}
                        bordered
                        scroll={{ x: true}}
                        size= "small"
                    ></Table>
                    </div>
                    </Modal>
          <Form.Control onClick={onClickButton} className="mb-2" {...register("new_reg_no" , )}  placeholder="isi data user" />
        </Form.Group>

        <Form.Group  as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">No Machine</Form.Label>
          <Modal key={'action'}
                        title="Choose No Machine "
                        open={isEditing2}
                        onCancel={() => {
                        setIsEditing2(false)
                        }}
                        onOk= {()=> {
                        {setValue('machine_no',`${filter2}`)}
                        setIsEditing2(false)
                        }}
                    >
                    <div>
                    <Input.Search
                placeholder="cari device"
                onSearch={(value) => {
                setSearchText(value)
                }}
                onChange= {(e) => {
                setSearchText(e.target.value)
                }}
                allowClear
                type="text"
                />
                    <Table 
                        columns={column2}
                        dataSource={validno}
                        bordered
                        scroll={{ x: true}}
                        size= "small"
                    ></Table>
                    </div>
                    </Modal>
          <Form.Control onClick={onClickButton2} className="mb-2" {...register("machine_no" , )}  placeholder="No Machine" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label className="fw-bold text-primary">Calibration Date</Form.Label>
          <Form.Control type="date" {...register("calibration_date", { required: true})}  placeholder="isi data tanggal kalibrasi" />
        </Form.Group>

        </Row>
<div className="border p-4">

{/* Group-1 */}
      <Row className="mb-2" >
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label className="fw-bold text-primary">R1 10</Form.Label>
          <Form.Control {...register("std_ds1_r1", { required: true})} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R2 10</Form.Label>
          <Form.Control {...register("std_ds1_r2", { required: true})} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R3 10</Form.Label>
          <Form.Control {...register("std_ds1_r3", { required: true})} />
        </Form.Group>

      </Row>
{/* Group-2 */}
     <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R1 50</Form.Label>
          <Form.Control {...register("std_ds2_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R2 50</Form.Label>
          <Form.Control {...register("std_ds2_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R3 50</Form.Label>
          <Form.Control {...register("std_ds2_r3", { required: true})}/>
        </Form.Group>

      </Row>

{/* Group-3 */}
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R1 100</Form.Label>
          <Form.Control {...register("std_ds3_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R2 100</Form.Label>
          <Form.Control {...register("std_ds3_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R3 100</Form.Label>
          <Form.Control {...register("std_ds3_r3", { required: true})}/>
        </Form.Group>

      </Row>

{/* Group-4 */}
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R1 150</Form.Label>
          <Form.Control {...register("std_ds4_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R2 150</Form.Label>
          <Form.Control {...register("std_ds4_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R3 150</Form.Label>
          <Form.Control {...register("std_ds4_r3", { required: true})}/>
        </Form.Group>

      </Row>

{/* Group-5 */}
      <Row className="mb-5 ">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R1 300</Form.Label>
          <Form.Control {...register("std_ds5_r1", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R2 300</Form.Label>
          <Form.Control {...register("std_ds5_r2", { required: true})}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="fw-bold text-primary">R3 300</Form.Label>
          <Form.Control {...register("std_ds5_r3", { required: true})}/>
        </Form.Group>
      </Row>
      </div>
      <div>
        <h6 className="text-end text-warning fw-bold"> *mohon untuk diperiksa kembali hasil input anda</h6>
      </div>
  

    {/* <Button  variant="primary" type="submit" onClick="setTimeout(movePage, 200);"> */}
      <Button  variant="primary" type="submit" >
      {/* <Button  variant="primary" type="submit"> */}
        Submit
      </Button>

      
 </form>
    </div>
  );
}

export default InputTempCont



