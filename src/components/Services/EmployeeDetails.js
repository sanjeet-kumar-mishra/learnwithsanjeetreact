
import React, { useState } from 'react'
import "./EmployeeDetails.css"

const EmployeeDetails = () => {

    // For Sending Data to Server
    const [data, setData] = useState({})

    const [employee, setEmployee] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch('/services/employeedetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result)
        setEmployee(result)
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="col-sm-12 col-md-3 col-4-lg py-2">
                            <label className="col-form-label text-white"><strong>Check Employee Status</strong></label>
                        </div>
                        <div className="col-sm-12 col-md-3 col-4-lg py-2">
                            <input className="form-control" id="searchemployee" name="searchemployee" value={data.searchemployee} placeholder="Search Here" onChange={handleChange} required
                                type="text" />
                        </div>
                        <div className="col-sm-12 col-md-3 col-4-lg py-2">
                            <button className="btn btn-primary mb-3 px-3" type="submit">Check Here</button>
                        </div>
                    </form>
                </div>
                
                <div className="row">

                    <h5 className="py-1">Name:<span> {employee.NAME}</span></h5>
                    <h5 className="py-1">Emp Code:<span> {employee.Emp_Code}</span></h5>
                    <h5 className="py-1">Card No:<span> {employee.CARDNO}</span></h5>
                    <h5 className="py-1">DOJ:<span> {employee.DOJ}</span></h5>
                    <h5 className="py-1">UAN No:<span> {employee.PF_UAN_NO}</span></h5>
                    <h5 className="py-1">ESIC No:<span> {employee.ESINO}</span></h5>
                    <h5 className="py-1">Department:<span> {employee.DEPARTMENT}</span></h5>
                    <h5 className="py-1">Sub-Department:<span> {employee.SUBDEPT}</span></h5>
                    <h5 className="py-1">Designation:<span> {employee.DEISG}</span></h5>
                    <h5 className="py-1">Unit:<span> {employee.UNIT}</span></h5>
                    <h5 className="py-1">Line No:<span> {employee.Line}</span></h5>

                </div>
            </div>
        </>
    )
}

export default EmployeeDetails
