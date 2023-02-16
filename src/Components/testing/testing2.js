import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Input, Table } from "antd"
import { Col, Container, Row } from 'react-bootstrap';
import BASE_URLAPI from '../../config/URLAPI'
import moment from 'moment'

function Testing2 () {

const [gridData, setGridData] = useState([])
const [filterData, setFilterData] = useState([])
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")
// let filteredData = useState()

useEffect(() => {
    // loadData()
    // loadData2()
}, [])

const loadData = async () => {
    setLoading(true)
    const response = await axios.get( `${BASE_URLAPI}/api/getdata_schedule_calibration`)
    setLoading(false)
    setGridData(
        response.data.data.map(row => ({
            schedule_id: row.schedule_id,
            reg_no: row.reg_no,
            new_reg_no: row.new_reg_no,
            device_name: row.device_name,
            machine_no: row.machine_no,
            location: row.location,
            date_calibration: moment(row.date_calibration).format("YYYY-MM-DD"),
            last_calibration: moment(row.last_calibration).format("YYYY-MM-DD"),
            next_calibration: moment(row.next_calibration).format("YYYY-MM-DD"),
        })))
    
}

const loadData2 = async () => {
    setLoading(true)
    const response = await axios.get( `${BASE_URLAPI}/api/getdata_schedule_calibration`)
    setLoading(false)
    setFilterData(
    response.data.data.filter(filter => filter.date_calibration = "2023-01-11").map(row => ({
            schedule_id: row.schedule_id,
            reg_no: row.reg_no,
            new_reg_no: row.new_reg_no,
            device_name: row.device_name,
            machine_no: row.machine_no,
            location: row.location,
            date_calibration: moment(row.date_calibration).format("YYYY-MM-DD"),
            last_calibration: moment(row.last_calibration).format("YYYY-MM-DD"),
            next_calibration: moment(row.next_calibration).format("YYYY-MM-DD"),
        })
    )
    )
}

// console.log("gridData", gridData)
console.log("filtered data : ", filterData)
const dates = moment(new Date()).format("YYYY-MM-DD")
// console.log(dates)


    return (
    <div>
        <h3 className="container mt-3 mb-3 text-center fw-bold"> Unit Testing </h3>
        {/* search button */}
        <Container className='container mb-3'>
        <Row>
        <Col>
        <Input.Search
        placeholder="cari device"
        onSearch={(value) => {
        setSearchText(value)
        }}
        allowClear
        type="text"
        />
        </Col>
        <Col xs={1}>
        <Button type="primary"> Search</Button>
        </Col>
        <Col xs={1}>
        <Button className='ml-3' type="primary"> Search</Button>
        </Col>
        </Row>
        </Container>

        {/* table */}
        <Table
        columns = {[
                {
                title: 'ID',
                dataIndex: 'schedule_id',
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
                .includes(value.toLowerCase())
                },
                },

                {
                title: 'Reg No',
                dataIndex: "reg_no",
                align: 'center'
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
                align: 'center'
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
            }

            dataSource={filterData}
            bordered
            loading={loading}
        />

        </div>
    );
    

}

export default Testing2;




