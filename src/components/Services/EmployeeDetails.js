
import React, { useState } from 'react'
import "./EmployeeDetails.css"

const EmployeeDetails = () => {

    const [data, setData] = useState('')
    const [employee, setEmployee] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/services/employeedetails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ data })
        })
        const result = await response.json()
        console.log(result)
        setEmployee(result)
    }

    const handleChange = (e) => {
        setData(e.target.value)
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

                </div>
            </div>
        </>
    )
}

export default EmployeeDetails
