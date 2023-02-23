import React, { useState } from 'react'
import "./ManpowerCalc.css"
import *as xlsx from 'xlsx'

const ManpowerCalc = () => {

    const [manpowerdata, setManpowerdata] = useState("")

    const readfile = async (e) => {
        const file = e.target.files[0]
        const data = await file.arrayBuffer(file)
        const excelfile = xlsx.read(data)
        const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]]
        const exceljson = xlsx.utils.sheet_to_json(excelsheet)
        const sewingopt = exceljson.filter(function (el) {
            return el["Department"] === "PRODUCTION" &&
                el["Sub-department"] === "SEWING" &&
                el["Designation"] === "OPERATOR" ||
                el["Designation"] === "FLOATER" ||
                el["Designation"] === "ASSISTANT" ||
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
            "Sewing Operator": sewingopt.length + kajopt.length,
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
            "Total": sewingopt.length + kajopt.length +
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

    return (
        <>
            <div className='container'>
                <div className='row py-2'>
                    <form>
                        <div className='col-lg-3 col-sm-12 py-3 lebelupload text-white'>
                            Upload File Here
                        </div>
                        <div className='col-lg-3 col-sm-12 py-2'>
                            <input type="file" className='text-white' name='igotafile' onChange={(e) => readfile(e)} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                        </div>
                        <div className='col-lg-3 col-sm-12 py-2'>
                            <button className="btn btn-primary mb-3 px-3" type="submit">Check</button>
                        </div>
                    </form>
                </div>
                <div className='row'>
                    {Object.entries(manpowerdata).map(([key, val], i) => (
                        <h6 key={i} className="manpowerdata">
                            {key}: {val}
                        </h6>
                    ))}
                </div>
            </div>
        </>
    )

}

export default ManpowerCalc
