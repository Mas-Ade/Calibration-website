import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import axios from "axios";
import React, { useState, useEffect } from "react";
import BASE_URLAPI from "../../config/URLAPI";
import { Table, Input, Modal, message } from "antd";

// method ini menggunakan libary react-hook-form dimana semua data yang dideclare disimpan di state useForm() [bawaan dari library]
// state input disimpan di register dan di fetch atau di gabung di useForm

function InputTempPress() {
  // works
  // deklarasi state
  const { register, handleSubmit, setValue } = useForm();
  // state untuk memanpung data dalam table Modal
  const [validno, setValidno] = useState([]);
  const [staff, setStaff] = useState([]);
  // const [name, setName] = useState([]);
  //logic kondisi Modal diatur dalam state tipe boolean
  const [isEditing, setIsEditing] = useState(false);
  // const [isEditing2, setIsEditing2] = useState(false);
  const [isEditing3, setIsEditing3] = useState(false);
  // state untuk memanpung data pencarian
  const [searchText, setSearchText] = useState("");
  // state untuk memanpung data pencarian yang sudah dipilih
  const [filter, setFilter] = useState("");
  // state untuk memanpung data pencarian yang sudah dipilih
  const [filter2, setFilter2] = useState("");
  // state untuk menampung text untuk message
  const [messageApi, contextHolder] = message.useMessage();
  // state untuk simpan data ke local storage
  const [formValues, setFormValues] = useState([]);
  const [enableButton, setEnableButton] = useState(true);

  const getNo = async () => {
    const response = await axios.get(
      `${BASE_URLAPI}/api/getdata_devicemaster_calibration`
    );
    setValidno(response.data.data);
  };

  const getStaff = async () => {
    const response = await axios.get(`${BASE_URLAPI}/api/getdata_staff`);
    setStaff(response.data.data);
  };

  const showModal = async (record) => {
    setIsEditing(true);
  };
  // const showModal2 = async (record) => {
  //   setIsEditing2(true);
  // };
  // const showModal3 = async (record) => {
  //   setIsEditing3(true);
  // };

  const filterData = (record) => {
    setFilter(record.new_reg_no);
    setFilter2(record.machine_no);
    setIsEditing(true);
    messageApi.info(`${record.new_reg_no} berhasil dipilih `);
  };

  // tidak digunakan karena auto dengan no reg
  // const filterData2 = (record) => {
  //   setFilter2(record.machine_no);
  //   setIsEditing2(true);
  //   messageApi.info(`${record.machine_no} berhasil dipilih `);
  // };

  useEffect(() => {
    getNo();
    getStaff();
  }, []);

  const onSubmitState = async (datas) => {
    // console.log(datas);
    setFormValues(datas);
    setIsEditing3(true);
  };

  // fungsi onsubmit + alert
  const onSubmit = async (datas) => {
    const data = formValues;
    axios.post(
      "http://10.202.100.84:3003/api/postdata_calibration_pressgauge",
      data
    );
    alert(JSON.stringify("Data berhasil diinput"));
    // script timeout dan pindah halaman
    setTimeout(() => {
      console.log("update berhasil");
      window.location.href = "/inputTempPress";
    }, 1000);
  };

  const column = [
    {
      title: "No Reg New",
      dataIndex: "new_reg_no",
      align: "center",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return (
          String(record.reg_no).toLowerCase().includes(value.toLowerCase()) ||
          String(record.new_reg_no)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.calibration_date)
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      },
      // onclick:(value, record) => {
      // setDataNoreg(record.new_reg_no)
      // }
    },
    {
      title: "Device Name",
      dataIndex: "device_name",
      align: "center",
    },
    {
      title: "Machine No",
      dataIndex: "machine_no",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Button
          onClick={() => {
            filterData(record);
          }}
        >
          Choose
        </Button>
      ),
      align: "center",
    },
  ];

  // const column2 = [
  //   {
  //     title: "Machine No",
  //     dataIndex: "machine_no",
  //     align: "center",
  //     filteredValue: [searchText],
  //     onFilter: (value, record) => {
  //       return (
  //         String(record.machine_no)
  //           .toLowerCase()
  //           .includes(value.toLowerCase()) ||
  //         String(record.new_reg_no)
  //           .toLowerCase()
  //           .includes(value.toLowerCase()) ||
  //         String(record.calibration_date)
  //           .toLowerCase()
  //           .includes(value.toLowerCase())
  //       );
  //     },
  //     // onclick:(value, record) => {
  //     // setDataNomach(record.machine_no)
  //     // }
  //   },

  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (record) => (
  //       <Button
  //         onClick={() => {
  //           filterData2(record);
  //         }}
  //       >
  //         Choose
  //       </Button>
  //     ),
  //     align: "center",
  //   },
  // ];

  const column3 = [
    {
      title: "R1 10",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds1_r1",
      widht: 100,
    },
    {
      title: "R2 10",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds1_r2",
    },
    {
      title: "R3 10",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds1_r3",
    },
    {
      title: "R1 50",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds2_r1",
    },
    {
      title: "R2 50",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds2_r2",
    },
    {
      title: "R3 50",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds2_r3",
    },
    {
      title: "R1 100",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds3_r1",
    },
    {
      title: "R2 100",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds3_r2",
    },
    {
      title: "R3 100",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds3_r3",
    },
    {
      title: "R1 150",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds4_r1",
    },
    {
      title: "R2 150",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds4_r2",
    },
    {
      title: "R3 150",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds4_r3",
    },
    {
      title: "R1 300",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds5_r1",
    },
    {
      title: "R2 300",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds5_r2",
    },
    {
      title: "R3 300",
      key: "action",
      align: "center",
      dataIndex: "stdup_ds5_r3",
    },

    // nilai standard bawah
    {
      title: "R1 10",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds1_r1",
      widht: 100,
    },
    {
      title: "R2 10",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds1_r2",
    },
    {
      title: "R3 10",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds1_r3",
    },
    {
      title: "R1 50",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds2_r1",
    },
    {
      title: "R2 50",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds2_r2",
    },
    {
      title: "R3 50",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds2_r3",
    },
    {
      title: "R1 100",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds3_r1",
    },
    {
      title: "R2 100",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds3_r2",
    },
    {
      title: "R3 100",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds3_r3",
    },
    {
      title: "R1 150",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds4_r1",
    },
    {
      title: "R2 150",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds4_r2",
    },
    {
      title: "R3 150",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds4_r3",
    },
    {
      title: "R1 300",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds5_r1",
    },
    {
      title: "R2 300",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds5_r2",
    },
    {
      title: "R3 300",
      key: "action",
      align: "center",
      dataIndex: "stddwn_ds5_r3",
    },
  ];

  return (
    <div className="container">
      <h1
        style={{ fontFamily: "Segoe UI" }}
        className="mb-4 mt-4 mb-4 fw-bold text-center"
      >
        Input Result Calibration of Pressure Gauge
      </h1>

      <form onSubmit={handleSubmit(onSubmitState)}>
        {/* Leader Form Group 1 */}
        <Row className="mb-3 border p-2">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="fw-bold text-primary">User</Form.Label>
            <Form.Select
              defaultValue="...."
              {...register("updated_staff", { required: true })}
              placeholder="isi data suhu ruangan"
            >
              {staff.map((row) => {
                return <option> {row.staff_name} </option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="fw-bold text-primary">
              Room Degree
            </Form.Label>
            <Form.Select
              defaultValue=""
              {...register("room_temperature", { required: true })}
              placeholder="isi data suhu ruangan"
            >
              <option>....</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="fw-bold text-primary">No Reg Old</Form.Label>
            {contextHolder}
            <Modal
              title="Pilih No Reg Old "
              open={isEditing}
              onCancel={() => {
                setIsEditing(false);
              }}
              onOk={() => {
                setValue("new_reg_no", `${filter}`);
                setValue("machine_no", `${filter2}`);
                setIsEditing(false);
              }}
            >
              <div>
                <Input.Search
                  placeholder="cari device"
                  onSearch={(value) => {
                    setSearchText(value);
                  }}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  allowClear
                  type="text"
                />
                <Table
                  key={"action"}
                  columns={column}
                  dataSource={validno}
                  bordered
                  scroll={{ x: true }}
                  size="small"
                ></Table>
              </div>
            </Modal>
            <Form.Control
              onClick={showModal}
              className="mb-2"
              {...register("new_reg_no", { required: true })}
              placeholder="isi data user"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="fw-bold text-primary">No Machine</Form.Label>

            <Form.Control
              className="mb-2"
              {...register("machine_no", { required: true })}
              placeholder="No Machine"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="fw-bold text-primary">
              Calibration Date
            </Form.Label>
            <Form.Control
              type="date"
              {...register("calibration_date", { required: true })}
              placeholder="isi data tanggal kalibrasi"
            />
          </Form.Group>
        </Row>
        <div className="border p-4">
          <h5 className="mb-3">Nilai standard atas</h5>
          {/* Group-1 */}
          <Row className="mb-">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 10</Form.Label>
              <Form.Control {...register("stdup_ds1_r1", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 10</Form.Label>
              <Form.Control {...register("stdup_ds1_r2", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 10</Form.Label>
              <Form.Control {...register("stdup_ds1_r3", { required: true })} />
            </Form.Group>
          </Row>

          {/* Group-2 */}
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 50</Form.Label>
              <Form.Control {...register("stdup_ds2_r1", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 50</Form.Label>
              <Form.Control {...register("stdup_ds2_r2", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 50</Form.Label>
              <Form.Control {...register("stdup_ds2_r3", { required: true })} />
            </Form.Group>
          </Row>

          {/* Group-3 */}
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 100</Form.Label>
              <Form.Control {...register("stdup_ds3_r1", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 100</Form.Label>
              <Form.Control {...register("stdup_ds3_r2", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 100</Form.Label>
              <Form.Control {...register("stdup_ds3_r3", { required: true })} />
            </Form.Group>
          </Row>

          {/* Group-4 */}
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 150</Form.Label>
              <Form.Control {...register("stdup_ds4_r1", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 150</Form.Label>
              <Form.Control {...register("stdup_ds4_r2", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 150</Form.Label>
              <Form.Control {...register("stdup_ds4_r3", { required: true })} />
            </Form.Group>
          </Row>

          {/* Group-5 */}
          <Row className="mb-2 ">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 300</Form.Label>
              <Form.Control {...register("stdup_ds5_r1", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 300</Form.Label>
              <Form.Control {...register("stdup_ds5_r2", { required: true })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 300</Form.Label>
              <Form.Control {...register("stdup_ds5_r3", { required: true })} />
            </Form.Group>
          </Row>
        </div>

        {/* { nilai standard bawah} */}
        <div className="border p-4 mt-3">
          <h5 className="mb-3">Nilai standard bawah</h5>

          {/* Group-1 */}
          <Row className="mb-2 mt-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 10</Form.Label>
              <Form.Control
                {...register("stddwn_ds1_r1", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 10</Form.Label>
              <Form.Control
                {...register("stddwn_ds1_r2", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 10</Form.Label>
              <Form.Control
                {...register("stddwn_ds1_r3", { required: true })}
              />
            </Form.Group>
          </Row>

          {/* Group-2 */}
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 50</Form.Label>
              <Form.Control
                {...register("stddwn_ds2_r1", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 50</Form.Label>
              <Form.Control
                {...register("stddwn_ds2_r2", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 50</Form.Label>
              <Form.Control
                {...register("stddwn_ds2_r3", { required: true })}
              />
            </Form.Group>
          </Row>

          {/* Group-3 */}
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 100</Form.Label>
              <Form.Control
                {...register("stddwn_ds3_r1", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 100</Form.Label>
              <Form.Control
                {...register("stddwn_ds3_r2", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 100</Form.Label>
              <Form.Control
                {...register("stddwn_ds3_r3", { required: true })}
              />
            </Form.Group>
          </Row>

          {/* Group-4 */}
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 150</Form.Label>
              <Form.Control
                {...register("stddwn_ds4_r1", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 150</Form.Label>
              <Form.Control
                {...register("stddwn_ds4_r2", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 150</Form.Label>
              <Form.Control
                {...register("stddwn_ds4_r3", { required: true })}
              />
            </Form.Group>
          </Row>

          {/* Group-5 */}
          <Row className="mb-5 ">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R1 300</Form.Label>
              <Form.Control
                {...register("stddwn_ds5_r1", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R2 300</Form.Label>
              <Form.Control
                {...register("stddwn_ds5_r2", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold text-primary">R3 300</Form.Label>
              <Form.Control
                {...register("stddwn_ds5_r3", { required: true })}
              />
            </Form.Group>
          </Row>
        </div>
        <div>
          <h6 className="text-end text-warning fw-bold">
            *mohon untuk diperiksa kembali hasil input anda
          </h6>
        </div>
        <Button variant="warning" type="submit">
          <Modal
            title="Result"
            open={isEditing3}
            onCancel={() => {
              setIsEditing3(false);
            }}
            onOk={() => {
              setEnableButton(false);
              setIsEditing3(false);
            }}
          >
            <div>
              <Table
                columns={column3}
                dataSource={[formValues]}
                bordered
                scroll={{ x: true }}
                size="small"
              ></Table>
            </div>
          </Modal>
          Validate
        </Button>

        <Button
          disabled={enableButton}
          style={{ marginLeft: 15 }}
          variant="primary"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default InputTempPress;
