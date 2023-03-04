import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Input, Table, Modal} from "antd"
import { Col, Container, Row } from 'react-bootstrap';
import BASE_URLAPI from '../../config/URLAPI'
import moment from 'moment'

function DownloadPress () {

const [gridData, setGridData] = useState([])
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")
// const [tempData, setTempData] = useState([])
const [isEditing, setIsEditing] = useState(false)
const [editing, setEditing] = useState([])
const [getlink, setGetLink] =useState("")
// let filteredData = useState()

useEffect(() => {
    loadData()
}, [])

const loadData = async () => {
    setLoading(true)
    const response = await axios.get( `${BASE_URLAPI}/api/getdata_calibration_pressgauge`)
    setLoading(false)
    setGridData(
        response.data.data.map(row => ({
            calpressgauge_id: row.calpressgauge_id,
            reg_no: row.reg_no,
            new_reg_no: row.new_reg_no,
            machine_no: row.machine_no,
            calibration_date: moment(row.calibration_date).format("YYYY-MM-DD"),
            next_calibration: moment(row.next_calibration).format("YYYY-MM-DD"),
            room_temperature: row.room_temperature,

            // std_ds1_r1: row.std_ds1_r1,
            // std_ds1_r2: row.std_ds1_r2,
            // std_ds1_r3: row.std_ds1_r3,

            // std_ds2_r1: row.std_ds2_r1,
            // std_ds2_r2: row.std_ds2_r2,
            // std_ds2_r3: row.std_ds2_r3,

            // std_ds3_r1: row.std_ds3_r1,
            // std_ds3_r2: row.std_ds3_r2,
            // std_ds3_r3: row.std_ds3_r3,

            // std_ds4_r1: row.std_ds4_r1,
            // std_ds4_r2: row.std_ds4_r2,
            // std_ds4_r3: row.std_ds4_r3,

            // std_ds5_r1: row.std_ds5_r1,
            // std_ds5_r2: row.std_ds5_r2,
            // std_ds5_r3: row.std_ds5_r3,

            raveup_ds1: row.raveup_ds1,
            raveup_ds2: row.raveup_ds2,
            raveup_ds3: row.raveup_ds3,
            raveup_ds4: row.raveup_ds4,
            raveup_ds5: row.raveup_ds5,
            ravedwn_ds1: row.ravedwn_ds1,
            ravedwn_ds2: row.ravedwn_ds2,
            ravedwn_ds3: row.ravedwn_ds3,
            ravedwn_ds4: row.ravedwn_ds4,
            ravedwn_ds5: row.ravedwn_ds5,

            updated_staff: row.updated_staff,
            remark: row.remark,
            result_calibration: row.result_calibration
        

        })))
}

    // # optional to show
    // console.log("gridData", gridData)
    // console.log("filter:", tempData )
    console.log("getlink : ", getlink)
    // console.log("editing: --> " , editing)
    
    const column  = [
                {
                title: 'ID',
                dataIndex: 'calpressgauge_id',
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
                .includes(value.toLowerCase()) ||
                String(record.machine_no)
                .toLowerCase()
                .includes(value.toLowerCase())
                },
                },

                {
                title: 'Reg No',
                dataIndex: "reg_no",
                align: 'center',
                
                },

                {
                title: 'New Reg No',
                dataIndex: 'new_reg_no',
                align: 'center',
                
                },

                {
                title: 'Machine No',
                dataIndex: 'machine_no',
                align: 'center'
                },

                {
                title: 'Date Calibration',
                dataIndex: 'calibration_date',
                align: 'center'
                },

                {
                title: 'Next Calibration',
                dataIndex: 'next_calibration',
                align: 'center'
                },

                {
                title: 'Room Temperature',
                dataIndex: 'room_temperature',
                align: 'center'
                },
                
                {
                title: 'Next Calibration',
                dataIndex: 'next_calibration',
                align: 'center'
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
                title: 'RAVE 1 UP',
                dataIndex: 'raveup_ds1',
                align: 'center'
                },
                {
                title: 'RAVE 2 UP',
                dataIndex: 'raveup_ds1',
                align: 'center'
                },
                {
                title: 'RAVE 3 UP',
                dataIndex: 'raveup_ds1',
                align: 'center'
                },
                {
                title: 'RAVE 4 UP',
                dataIndex: 'raveup_ds4',
                align: 'center'
                },
                {
                title: 'RAVE 5 UP',
                dataIndex: 'raveup_ds5',
                align: 'center'
                },

                {
                title: 'RAVE 1 DOWN',
                dataIndex: 'ravedwn_ds1',
                align: 'center'
                },
                {
                title: 'RAVE 2 DOWN',
                dataIndex: 'ravedwn_ds1',
                align: 'center'
                },
                {
                title: 'RAVE 3 DOWN',
                dataIndex: 'ravedwn_ds1',
                align: 'center'
                },
                {
                title: 'RAVE 4 DOWN',
                dataIndex: 'ravedwn_ds4',
                align: 'center'
                },
                {
                title: 'RAVE 5 DOWN',
                dataIndex: 'ravedwn_ds5',
                align: 'center'
                },

                {
                title: 'RESULT CALIBRATION',
                dataIndex: 'result_calibration',
                align: 'center'
                },

                {
                title: 'Action',
                key:'action',
                fixed: 'right',
                widht: 100 ,
                render: (record) => (
                <Button onClick={() => {
                    onClickButton(record)
                }} >test button 
                </Button>),
                align: 'center'
                }
            ]
        
            const onClickButton = (record) => {
                setIsEditing(true)
                setEditing(record.reg_no)
                setGetLink(record.calpressgauge_id)
            }

            

    return (
            <div>
                <h3 style={{fontFamily: 'Segoe UI'}} className='mb-4 mt-4 text-center mb-4 fw-bold'> Download Data Pressure Gauge </h3>
                {/* search button */}
                <Container className='container mb-3'>
                <Row>
                <Col>
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
                        size= "small"
                    ></Table>
                    <Modal 
                        title="test tampil data : "
                        open={isEditing}
                        okText='Download'
                        onCancel={() => {
                        setIsEditing(false)
                        }}
                        onOk= {()=> {
                        window.location.replace(`http://10.202.100.84:3003/api/download/file/calibration_pressgauge/${getlink}`);
                        }}
                    >
                    <h3>Data : {getlink}</h3>
                    <h3>Data : {editing}</h3>
                    </Modal>

                </div>

            </div>
    );

}

export default DownloadPress;




