
import React, { useState } from 'react'
import "./EmployeeDetails.css"

const EmployeeDetails = () => {

    const [data, setData] = useState("")
    const [employee, setEmployee] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("/services/employeedetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
        setEmployee(result)
    }

    const onChangeHandler = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="col-sm-12 col-md-3 col-4-lg py-2">
                            <label className="col-form-label text-white"><strong>Check Employee Details</strong></label>
                        </div>
                        <div className="col-sm-12 col-md-3 col-4-lg py-2">
                            <input className="form-control" id="searchemployee" name="searchemployee" value={data.searchemployee} placeholder="Search Here" onChange={onChangeHandler} required
                                type="text" />
                        </div>
                        <div className="col-sm-12 col-md-3 col-4-lg py-2">
                            <button className="btn btn-primary mb-3 px-3" type="submit">Check Here</button>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <div className="col-auto">
                            {Object.entries(employee).map(([key, value], i) => (
                                    <h6 key={i}>{key} : {value}</h6>
                                ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeDetails
