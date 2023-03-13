import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, Table, Modal } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import BASE_URLAPI from "../../config/URLAPI";
import moment from "moment";

function DownloadRecord() {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  // const [tempData, setTempData] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [editing, setEditing] = useState([]);
  // let filteredData = useState()
  const [getlink, setGetLink] = useState("");

  useEffect(() => {
    loadData();
    // callDataTemp()
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axios.get(
      `${BASE_URLAPI}/api/getdata_calibration_tempctrl_temprec`
    );
    setLoading(false);
    setGridData(
      response.data.data.map((row) => ({
        caltempctrl_rec_id: row.caltempctrl_rec_id,
        reg_no: row.reg_no,
        new_reg_no: row.new_reg_no,
        machine_no: row.machine_no,
        calibration_date: moment(row.calibration_date).format("YYYY-MM-DD"),
        next_calibration: moment(row.next_calibration).format("YYYY-MM-DD"),
        room_temperature: row.room_temperature,

        std_ds1_r1: row.std_ds1_r1,
        std_ds1_r2: row.std_ds1_r2,
        std_ds1_r3: row.std_ds1_r3,

        std_ds2_r1: row.std_ds2_r1,
        std_ds2_r2: row.std_ds2_r2,
        std_ds2_r3: row.std_ds2_r3,

        std_ds3_r1: row.std_ds3_r1,
        std_ds3_r2: row.std_ds3_r2,
        std_ds3_r3: row.std_ds3_r3,

        std_ds4_r1: row.std_ds4_r1,
        std_ds4_r2: row.std_ds4_r2,
        std_ds4_r3: row.std_ds4_r3,

        std_ds5_r1: row.std_ds5_r1,
        std_ds5_r2: row.std_ds5_r2,
        std_ds5_r3: row.std_ds5_r3,

        rave_ds1: row.rave_ds1,
        rave_ds2: row.rave_ds2,
        rave_ds3: row.rave_ds3,
        rave_ds4: row.rave_ds4,
        rave_ds5: row.rave_ds5,

        updated_staff: row.updated_staff,
        remark: row.remark,
        result_calibration: row.result_calibration,
      }))
    );
  };

  // const callDataTemp = async () => {
  //     const response = await axios.get(`${BASE_URLAPI}/api/getdata_calibration_tempctrl_temprec`)
  //     setTempData(response.data.data)
  // }
  // # optional to show
  // console.log("gridData", gridData)
  // console.log("filter:", tempData )
  // console.log("editing: --> " , editing)

  const column = [
    {
      title: "ID",
      dataIndex: "schedule_id",
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
            .includes(value.toLowerCase()) ||
          String(record.machine_no).toLowerCase().includes(value.toLowerCase())
        );
      },
    },

    {
      title: "Reg No",
      dataIndex: "reg_no",
      align: "center",
    },

    {
      title: "New Reg No",
      dataIndex: "new_reg_no",
      align: "center",
    },

    {
      title: "Machine No",
      dataIndex: "machine_no",
      align: "center",
    },

    {
      title: "Date Calibration",
      dataIndex: "calibration_date",
      align: "center",
    },

    {
      title: "Next Calibration",
      dataIndex: "next_calibration",
      align: "center",
    },

    {
      title: "Room Temperature",
      dataIndex: "room_temperature",
      align: "center",
    },

    {
      title: "Next Calibration",
      dataIndex: "next_calibration",
      align: "center",
    },

    // {
    // title: 'DS 1',
    // dataIndex: 'std_ds1_r1',
    // align: 'center'
    // },
    // {
    // title: 'DS 1',
    // dataIndex: 'std_ds1_r2',
    // align: 'center'
    // },
    // {
    // title: 'DS 1',
    // dataIndex: 'std_ds1_r3',
    // align: 'center'
    // },

    // {
    // title: 'DS 2',
    // dataIndex: 'std_ds2_r1',
    // align: 'center'
    // },
    // {
    // title: 'DS 2',
    // dataIndex: 'std_ds2_r2',
    // align: 'center'
    // },
    // {
    // title: 'DS 2',
    // dataIndex: 'std_ds2_r3',
    // align: 'center'
    // },
    // {
    // title: 'DS 3',
    // dataIndex: 'std_ds3_r1',
    // align: 'center'
    // },
    // {
    // title: 'DS 3',
    // dataIndex: 'std_ds3_r2',
    // align: 'center'
    // },
    // {
    // title: 'DS 3',
    // dataIndex: 'std_ds3_r3',
    // align: 'center'
    // },
    // {
    // title: 'DS 4',
    // dataIndex: 'std_ds4_r1',
    // align: 'center'
    // },
    // {
    // title: 'DS 4',
    // dataIndex: 'std_ds4_r2',
    // align: 'center'
    // },
    // {
    // title: 'DS 4',
    // dataIndex: 'std_ds4_r3',
    // align: 'center'
    // },
    // {
    // title: 'DS 5',
    // dataIndex: 'std_ds5_r1',
    // align: 'center'
    // },
    // {
    // title: 'DS 5',
    // dataIndex: 'std_ds5_r2',
    // align: 'center'
    // },
    // {
    // title: 'DS 5',
    // dataIndex: 'std_ds5_r3',
    // align: 'center'
    // },

    {
      title: "RAVE 1",
      dataIndex: "rave_ds1",
      align: "center",
    },
    {
      title: "RAVE 2",
      dataIndex: "rave_ds1",
      align: "center",
    },
    {
      title: "RAVE 3",
      dataIndex: "rave_ds1",
      align: "center",
    },
    {
      title: "RAVE 4",
      dataIndex: "rave_ds4",
      align: "center",
    },
    {
      title: "RAVE 5",
      dataIndex: "rave_ds5",
      align: "center",
    },

    {
      title: "RESULT CALIBRATION",
      dataIndex: "result_calibration",
      align: "center",
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      widht: 100,
      render: (record) => (
        <Button
          type="primary"
          onClick={() => {
            onClickButton(record);
          }}
        >
          Download
        </Button>
      ),
      align: "center",
    },
  ];

  const onClickButton = (record) => {
    setIsEditing(true);
    setGetLink(record.caltempctrl_rec_id);
  };

  const editingData = editing;

  return (
    <div>
      <h3
        style={{ fontFamily: "Segoe UI" }}
        className="mb-4 mt-4 text-center mb-4 fw-bold"
      >
        {" "}
        Download Data Temperature Recorder{" "}
      </h3>
      {/* search button */}
      <Container className="container mb-3">
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>

      {/* table */}
      <div>
        <Table
          columns={column}
          dataSource={gridData}
          bordered
          loading={loading}
          scroll={{ x: true }}
          size="small"
        ></Table>
        <Modal
          title="test tampil data : "
          open={isEditing}
          okText="Download"
          onCancel={() => {
            setIsEditing(false);
          }}
          onOk={() => {
            window.location.replace(
              `http://10.202.100.84:3003/api/download/file/calibration_tempctrl_temprec/${getlink}`
            );
            // <a href={'http://10.202.10.42:3003/api/download'} ></a>
          }}
        >
          <h4>Data : {getlink}</h4>
        </Modal>
      </div>
    </div>
  );
}

export default DownloadRecord;
