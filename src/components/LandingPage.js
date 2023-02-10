import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col hero-heading">
            <h1>General Purpose X</h1>
            <h1>Multiple Management</h1>
            <p className="py-3">General Purpose & Multiple Management Presenting</p>
          </div>
          <div className="row">
            <div className="col hero-page-buttons justify-content-center">
              <button className="btn-prime">Get Started</button>
              <button className="btn-second">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
