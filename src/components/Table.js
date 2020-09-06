import React,{useEffect, useState} from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { URL } from '../constants';

const Table = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(`${URL}/brokers`,requestOptions)
    .then(response => response.json())
    .then(data => {data && setData(data.brokers);setLoading(false)})
    .catch(err=>console.log(err))

    },[]);
   
    const columns = [{
        Header: 'Title',
        accessor: 'title' // String-based value accessors!
      },{
        Header: 'Domain',
        accessor: 'domain' // String-based value accessors!
      },{
        Header: 'Firstname',
        accessor: 'firstname' // String-based value accessors!
      }, {
        Header: 'Lastname',
        accessor: 'lastname' // String-based value accessors!
      }, {
        Header: 'Email',
        accessor: 'email' // String-based value accessors!
      }, {
        Header: 'Address',
        accessor: 'address' // String-based value accessors!
      }
    ]
    return(
      <div style={{marginRight:100,marginLeft:100}}>
        <ReactTable
        loading= {loading}
        data={data}
        columns={columns}
        />
      </div>
    )
}

export default Table;