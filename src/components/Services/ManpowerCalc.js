import React, { useState } from 'react'
import "./ManpowerCalc.css"
import *as xlsx from 'xlsx'

const ManpowerCalc = () => {

    const [manpowerdata, setManpowerdata] = useState("")

    const [state, setState] = useState({
        "sopt": 0,
        "shelper": 0,
        "schecker": 0,
        "sironer": 0,
        "sfeeder": 0,
        "cutt": 0,
        "finish": 0,
        "pack": 0,
        "disp": 0,
        "wash": 0,
        "fstore": 0,
        "gstore": 0,
        "sampl": 0,
        "needlekeep": 0,
        "prwork": 0,
        "worksp": 0,
        "maintenance": 0,
        "hri": 0,
        "admini": 0,
        "acc": 0,
        "sewaopt": 0,
        "sewahelp": 0,
        "staff": 0,
    })

    const onthisChangeHandler = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const readfile = async (e) => {
        const file = e.target.files[0]
        const data = await file.arrayBuffer(file)
        const excelfile = xlsx.read(data)
        const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]]
        const exceljson = xlsx.utils.sheet_to_json(excelsheet)
        const sewingopt = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "OPERATOR"
        }
        )
        const sewingopt2 = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "FLOATER"
        }
        )
        const sewingopt3 = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "ASSISTANT"
        }
        )
        const sewingopt4 = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "TAILOR GRADE 1"
        }
        )
        const kajopt = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "KAJBUTTON" &&
                el["Designation"] === "OPERATOR"
        }
        )
        const sewinghelper = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "HELPER"
        }
        )
        const kajhelper = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "KAJBUTTON" &&
                el["Designation"] === "HELPER" ||
                el["Designation"] === "MARKER"
        }
        )
        const sewingicheck = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "IN LINE CHECKER"
        }
        )
        const sewingfcheck = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "FINAL CHECKER"
        }
        )
        const sewingironer = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "IRONER"
        }
        )
        const sewingfeeder = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "FEEDER"
        }
        )
        const cutting = exceljson.filter(function (el) {
            return el["Department"] === "CUTTING"
        }
        )
        const finishing = exceljson.filter(function (el) {
            return el["Sub-department"] === "FINISHING"
        }
        )
        const packing = exceljson.filter(function (el) {
            return el["Sub-department"] === "PACKING"
        }
        )
        const dispatch = exceljson.filter(function (el) {
            return el["Sub-department"] === "DISPATCH"
        }
        )
        const washing = exceljson.filter(function (el) {
            return el["Department"] === "NON DENIM WASHING"
        }
        )
        const fabric = exceljson.filter(function (el) {
            return el["Sub-department"] === "FABRIC STORES"
        }
        )
        const genstore = exceljson.filter(function (el) {
            return el["Sub-department"] === "GENERAL STORES"
        }
        )
        const sampling = exceljson.filter(function (el) {
            return el["Department"] === "SAMPLING"
        }
        )
        const needlekpr = exceljson.filter(function (el) {
            return el["Designation"] === "NEEDLE KEEPER"
        }
        )
        const prodwr = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "PRODUCTION"
        }
        )
        const worksup = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "PRODUCTION"
        }
        )
        const maint = exceljson.filter(function (el) {
            return el["Department"] === "MAINTENANCE"
        }
        )
        const facthr = exceljson.filter(function (el) {
            return el["Department"] === "FACTORY HR" &&
                el["Designation"] === "WRITER"
        }
        )
        const transp = exceljson.filter(function (el) {
            return el["Sub-department"] === "TRANSPORTATION"
        }
        )
        const hurticul = exceljson.filter(function (el) {
            return el["Sub-department"] === "HORTICULTURE"
        }
        )
        const creche = exceljson.filter(function (el) {
            return el["Sub-department"] === "CRECHE"
        }
        )
        const officeboy = exceljson.filter(function (el) {
            return el["Designation"] === "OFFICE BOY"
        }
        )
        const account = exceljson.filter(function (el) {
            return el["Department"] === "FINANCE & ACCOUNTS"
        }
        )
        const shiftdata = {
            "Sewing Operator": sewingopt.length + sewingopt2.length + sewingopt3.length + sewingopt4.length + kajopt.length,
            "Sewing Helper": sewinghelper.length + kajhelper.length,
            "Sewing Checker": sewingicheck.length + sewingfcheck.length,
            "Sewing Ironer": sewingironer.length,
            "Sewing Feeder": sewingfeeder.length,
            "Cutting": cutting.length,
            "Finishing": finishing.length,
            "Packing": packing.length,
            "Dispatch": dispatch.length,
            "Washing": washing.length,
            "Fabric Store": fabric.length,
            "Store": genstore.length,
            "Sampling": sampling.length,
            "Needle Keeper": needlekpr.length,
            "Production Writer": prodwr.length,
            "Worker Supervisor": worksup.length,
            "Maintenance": maint.length,
            "HR": facthr.length,
            "Admin": transp.length + hurticul.length + officeboy.length + creche.length,
            "Account": account.length,
            "Total": sewingopt.length + sewingopt2.length + sewingopt3.length + sewingopt4.length + + kajopt.length +
                sewinghelper.length + kajhelper.length +
                sewingicheck.length + sewingfcheck.length +
                sewingironer.length +
                sewingfeeder.length +
                cutting.length +
                finishing.length +
                packing.length +
                dispatch.length +
                washing.length +
                fabric.length +
                genstore.length +
                sampling.length +
                needlekpr.length +
                prodwr.length +
                worksup.length +
                maint.length +
                facthr.length +
                transp.length + hurticul.length + officeboy.length + creche.length +
                account.length,
        }
        setManpowerdata(shiftdata)
    }

    const plusnewdata = {
        "Sewing Operator": parseInt(manpowerdata["Sewing Operator"]) + parseInt(state["sopt"]),
        "Sewing Helper": parseInt(manpowerdata["Sewing Helper"]) + parseInt(state["shelper"]),
        "Sewing Checker": parseInt(manpowerdata["Sewing Checker"]) + parseInt(state["schecker"]),
        "Sewing Ironer": parseInt(manpowerdata["Sewing Ironer"]) + parseInt(state["sironer"]),
        "Sewing Feeder": parseInt(manpowerdata["Sewing Feeder"]) + parseInt(state["sfeeder"]),
        "Cutting": parseInt(manpowerdata["Cutting"]) + parseInt(state["cutt"]),
        "Finishing": parseInt(manpowerdata["Finishing"]) + parseInt(state["finish"]),
        "Packing": parseInt(manpowerdata["Packing"]) + parseInt(state["pack"]),
        "Dispatch": parseInt(manpowerdata["Dispatch"]) + parseInt(state["disp"]),
        "Washing": parseInt(manpowerdata["Washing"]) + parseInt(state["wash"]),
        "Fabric Store": parseInt(manpowerdata["Fabric Store"]) + parseInt(state["fstore"]),
        "Store": parseInt(manpowerdata["Store"]) + parseInt(state["gstore"]),
        "Sampling": parseInt(manpowerdata["Sampling"]) + parseInt(state["sampl"]),
        "Needle Keeper": parseInt(manpowerdata["Needle Keeper"]) + parseInt(state["needlekeep"]),
        "Production Writer": parseInt(manpowerdata["Production Writer"]) + parseInt(state["prwork"]),
        "Worker Supervisor": parseInt(manpowerdata["Worker Supervisor"]) + parseInt(state["worksp"]),
        "Maintenance": parseInt(manpowerdata["Maintenance"]) + parseInt(state["maintenance"]),
        "HR": parseInt(manpowerdata["HR"]) + parseInt(state["hri"]),
        "Admin": parseInt(manpowerdata["Admin"]) + parseInt(state["admini"]),
        "Account": parseInt(manpowerdata["Account"]) + parseInt(state["acc"]),
        "Total": parseInt(manpowerdata["Sewing Operator"]) + parseInt(state["sopt"]) +
            parseInt(manpowerdata["Sewing Helper"]) + parseInt(state["shelper"]) +
            parseInt(manpowerdata["Sewing Checker"]) + parseInt(state["schecker"]) +
            parseInt(manpowerdata["Sewing Ironer"]) + parseInt(state["sironer"]) +
            parseInt(manpowerdata["Sewing Feeder"]) + parseInt(state["sfeeder"]) +
            parseInt(manpowerdata["Cutting"]) + parseInt(state["cutt"]) +
            parseInt(manpowerdata["Finishing"]) + parseInt(state["finish"]) +
            parseInt(manpowerdata["Packing"]) + parseInt(state["pack"]) +
            parseInt(manpowerdata["Dispatch"]) + parseInt(state["disp"]) +
            parseInt(manpowerdata["Washing"]) + parseInt(state["wash"]) +
            parseInt(manpowerdata["Fabric Store"]) + parseInt(state["fstore"]) +
            parseInt(manpowerdata["Store"]) + parseInt(state["gstore"]) +
            parseInt(manpowerdata["Sampling"]) + parseInt(state["sampl"]) +
            parseInt(manpowerdata["Needle Keeper"]) + parseInt(state["needlekeep"]) +
            parseInt(manpowerdata["Production Writer"]) + parseInt(state["prwork"]) +
            parseInt(manpowerdata["Worker Supervisor"]) + parseInt(state["worksp"]) +
            parseInt(manpowerdata["Maintenance"]) + parseInt(state["maintenance"]) +
            parseInt(manpowerdata["HR"]) + parseInt(state["hri"]) +
            parseInt(manpowerdata["Admin"]) + parseInt(state["admini"]) +
            parseInt(manpowerdata["Account"]) + parseInt(state["acc"])
    }
    const sewingadata = {
        "Sewing-A Operator": parseInt(state["sewaopt"]),
        "Sewing-A Helper": parseInt(state["sewahelp"]),
        "Total": parseInt(state["sewaopt"]) + parseInt(state["sewahelp"]),
    }
    const staffdata = {
        "Staff": parseInt(state["staff"]),
    }
    const grandtotal = {
        "Grand Total": parseInt(plusnewdata["Total"]) + parseInt(sewingadata["Total"]) + parseInt(staffdata["Staff"]),
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-6 col-sm-12">
                        <form>
                            <div className='col-lg-6 col-sm-12 py-1 lebelupload text-white'>
                                Upload File Here
                            </div>
                            <div className='col-lg-6 col-sm-12 py-1'>
                                <input type="file" className='text-white' name='igotafile' onChange={(e) => readfile(e)} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                            </div>
                            <div className='col-lg-6 col-sm-12 py-1'>
                                {/* <button className="btn btn-primary mb-3 px-3" type="submit">Check</button> */}
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="sopt" className="col-form-label text-white">Sewing Operator</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="sopt" value={state.sopt} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="shelper" className="col-form-label text-white">Sewing Helper</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="shelper" value={state.shelper} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="schecker" className="col-form-label text-white">Sewing Checker</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="schecker" value={state.schecker} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="sironer" className="col-form-label text-white">Sewing Ironer</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="sironer" value={state.sironer} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="sfeeder" className="col-form-label text-white">Sewing Feeder</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="sfeeder" value={state.sfeeder} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="cutt" className="col-form-label text-white">Cutting</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="cutt" value={state.cutt} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="finish" className="col-form-label text-white">Finishing</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="finish" value={state.finish} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="pack" className="col-form-label text-white">Packing</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="pack" value={state.pack} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="disp" className="col-form-label text-white">Dispatch</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="disp" value={state.disp} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="wash" className="col-form-label text-white">Washing</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="wash" value={state.wash} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="fstore" className="col-form-label text-white">Fabric Store</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="fstore" value={state.fstore} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="gstore" className="col-form-label text-white">Store</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="gstore" value={state.gstore} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="sampl" className="col-form-label text-white">Sampling</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="sampl" value={state.sampl} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="needlekeep" className="col-form-label text-white">Needle Keeper</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="needlekeep" value={state.needlekeep} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="prwork" className="col-form-label text-white">Production Writer</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="prwork" value={state.prwork} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="worksp" className="col-form-label text-white">Worker Supervisor</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="worksp" value={state.worksp} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="maintenance" className="col-form-label text-white">Maintenance</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="maintenance" value={state.maintenance} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="hri" className="col-form-label text-white">HR</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="hri" value={state.hri} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="admini" className="col-form-label text-white">Admin</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="admini" value={state.admini} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="acc" className="col-form-label text-white">Account</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="acc" value={state.acc} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="sewaopt" className="col-form-label text-white">Sewing-A Operator</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="sewaopt" value={state.sewaopt} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="sewahelp" className="col-form-label text-white">Sewing-A Helper</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="sewahelp" value={state.sewahelp} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center py-1">
                                <div className="col-6">
                                    <label htmlFor="staff" className="col-form-label text-white">Staff</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" name="staff" value={state.staff} onChange={onthisChangeHandler} className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className='row'>
                            <h2 className="py-4">Result Here</h2>
                            {Object.entries(plusnewdata).map(([key, val], i) => (
                                <h6 key={i} className="manpowerdata">
                                    {key}: {val}
                                </h6>
                            ))}
                            <br />
                            {Object.entries(sewingadata).map(([key, val], i) => (
                                <h6 key={i} className="manpowerdata">
                                    {key}: {val}
                                </h6>
                            ))}
                            <br />
                            {Object.entries(staffdata).map(([key, val], i) => (
                                <h6 key={i} className="manpowerdata">
                                    {key}: {val}
                                </h6>
                            ))}
                            <br />
                            {Object.entries(grandtotal).map(([key, val], i) => (
                                <h6 key={i} className="manpowerdata">
                                    {key}: {val}
                                </h6>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ManpowerCalc
