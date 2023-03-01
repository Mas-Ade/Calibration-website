import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Input, Table, Modal } from "antd"
import { Col, Container, Row } from 'react-bootstrap';
import BASE_URLAPI from '../../../config/URLAPI'
import moment, { months } from 'moment'
// import Column from 'antd/es/table/Column';

function FilterToday (props) {

// const [gridData, setGridData] = useState([])
const [filterData, setFilterData] = useState([])
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")
const [tempData, setTempData] = useState([])
const [isEditing, setIsEditing] = useState(false)
const [editing, setEditing] = useState([])
const [filtermonth, setFilterMonth] = useState("")

// let filteredData = useState()

useEffect(() => {
    //loadData()
    loadData2()
    callDataTemp()
}, [])

// const loadData = async () => {
//     setLoading(true)
//     const response = await axios.get( `${BASE_URLAPI}/api/getdata_schedule_calibration`)
//     setLoading(false)
//     setGridData(
//         response.data.data.map(row => ({
//             schedule_id: row.schedule_id,
//             reg_no: row.reg_no,
//             new_reg_no: row.new_reg_no,
//             device_name: row.device_name,
//             machine_no: row.machine_no,
//             location: row.location,
//             date_calibration: moment(row.date_calibration).format("YYYY-MM-DD"),
//             last_calibration: moment(row.last_calibration).format("YYYY-MM-DD"),
//             next_calibration: moment(row.next_calibration).format("YYYY-MM-DD"),
//         })))
    
// }




const newDate = new Date()
const dates = moment(newDate).format("YYYY-MMM")
console.log('filter dates :', dates)

const loadData2 = async () => {
    setLoading(true)
    const response = await axios.get( `${BASE_URLAPI}/api/getdata_schedule_calibration`)
    setLoading(false)
    setFilterData(
    response.data.data.map(row => ({
            schedule_id: row.schedule_id,
            reg_no: row.reg_no,
            new_reg_no: row.new_reg_no,
            device_name: row.device_name,
            machine_no: row.machine_no,
            location: row.location,
            date_calibration: moment(row.date_calibration).format("YYYY-MMM"),
            last_calibration: moment(row.last_calibration).format("YYYY-MM-DD"),
            next_calibration: moment(row.next_calibration).format("YYYY-MM-DD"),
        })
    )
    )
}

const callDataTemp = async () => {
    const response = await axios.get(`${BASE_URLAPI}/api/getdata_calibration_tempctrl_temprec`)
    setTempData(response.data.data)
}

    // # optional to show (only fro checking data)
    // console.log("gridData", gridData)
    // console.log("filter:", tempData )
    // console.log("editing: --> " , editing)
    console.log("filtered data : ", filterData)
    // console.log("filtered month : ", filtermonth)

const columns = [
                {
                title: 'Reg No',
                dataIndex: 'reg_no',
                align: 'center',
                filteredValue: [searchText],
                onFilter:(value,record) => {
                return String(record.reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.new_reg_no)
                .toLowerCase()
                .includes(value.toLowerCase()) || 
                String(record.date_calibration)
                .toLowerCase()
                .includes(value.toLowerCase()) ||
                String(record.machine_no)
                .toLowerCase()
                .includes(value.toLowerCase())
                },
                },

                {
                title: 'New Reg No',
                dataIndex: "new_reg_no",
                align: 'center'
                },

                {
                title: 'Device Name',
                dataIndex: 'device_name',
                align: 'center'
                },

                {
                title: 'Machine No',
                dataIndex: 'machine_no',
                align: 'center'
                },

                {
                title: 'Location',
                dataIndex: 'location',
                align: 'center'
                },

                {
                title: 'Date Calibration',
                dataIndex: 'date_calibration',
                align: 'center',
                filteredValue: [dates],
                onFilter:(value,record) => {
                return String(record.date_calibration)
                .toLowerCase()
                .includes(value.toLowerCase())
                }
                },

                {
                title: 'Last Calibration',
                dataIndex: 'last_calibration',
                align: 'center'
                },
                
                {
                title: 'Next Calibration',
                dataIndex: 'next_calibration',
                align: 'center'
                }
            ]
            
            const onClickButton = (record) => {
                setIsEditing(true)
                setEditing(record.reg_no)
            }

            const editingData = editing


return (
    <div>
        {/* search button */}
        <Container className='container mb-3'>
                <Row>
                <Col>
                <Input.Search striped="columns" 
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
                <Col xs={2}>
                <Button onClick={ () => props.handleClick('today')} type="primary" style={{marginLeft:2}}> Today</Button>
                <Button onClick={ () => props.handleClick('all')} className='ml-3' type="primary" style={{marginLeft:12}}> All Data</Button>
                </Col>
                </Row>
                </Container>

                {/* table */}
                <div key={filterData} className='container '>
                    <Table striped="columns"
                        columns={columns}
                        dataSource={filterData}
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
                        setIsEditing(false)
                        }}
                    >
                    <h3>Data : {editingData}</h3>
                    </Modal>

                </div>
        </div>
    );
    

}

export default FilterToday;




