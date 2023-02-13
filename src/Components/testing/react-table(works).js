import React, { useState ,  useEffect } from "react";
import axios from "axios";
import { Button, Input, Table } from "antd"

const Table2 = () =>  {
const [gridData, setGridData] = useState([])
const [loading, setLoading] = useState(false)
const [searchText, setSearchText] =useState("")
let filteredData = useState()

useEffect(() => {
    loadData()
}, [])


const loadData = async () => {
    setLoading(true)
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    setGridData(response.data)
    setLoading(false)
}

console.log("gridData", gridData)

const columns = [
    {
    title: 'ID',
    dataIndex: 'id'
    },
    {
    title: 'NAME',
    dataIndex: 'name',
    align: "center",
    ediatble:true
    },
    {
    title: 'EMAIL',
    dataIndex: 'email',
    align: "center",
    ediatble:true
    },
    {
    title: 'BODY',
    dataIndex: 'body',
    align: "center",
    ediatble:true
    },
]

const handleSearch = (e) => {
    setSearchText(e.target.value)
    if(e.target.value === "") {
        loadData()
    }
}

const globalSearch = () => {
    filteredData = gridData.filter((value) => {
        return(
            value.name.toLowerCase().includes(searchText.toLowerCase()) || 
            value.email.toLowerCase().includes(searchText.toLowerCase())  
        )
    })
    setGridData(filteredData)
}

    return(
        <div>
        <h3 className="container mt-3 text-center"> Trial data table from react table </h3>
        <div className="mt-3">
        <Input
        placeholder="cari device"
        onChange={handleSearch}
        allowClear
        type="text"
        value={searchText}
        />
        <Button type="primary" onClick={globalSearch}> Search</Button>
        <Table
            columns={columns}
            dataSource={ gridData }
            bordered
            loading={loading}
        />
        </div>
        </div>
    )

}

export default Table2