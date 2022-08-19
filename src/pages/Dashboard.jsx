import React from 'react'
import { NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className="main-body">
        <div className="page-wrapper">
        <div className="row">
          {/* users */}
          <div className="col-md-6 col-xl-4">
            <NavLink to={"users"}>
              <div className="card daily-sales">
                <div className="card-block">
                  <h4 className="mb-2">Users</h4>
                  <div className="row d-flex align-items-center">
                    <div className="col-12">
                      <h5 className="f-w-300 m-b-0">Total User: 48</h5>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          {/* customers */}
          <div className="col-md-6 col-xl-4">
            <NavLink to={"customers"}>
              <div className="card daily-sales">
                <div className="card-block">
                  <h4 className="mb-2">Customers</h4>
                  <div className="row d-flex align-items-center">
                    <div className="col-12">
                      <h5 className="f-w-300 m-b-0">Total Customers: 19517</h5>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          {/* ro models */}
          <div className="col-md-6 col-xl-4">
            <NavLink to={"ro-models"}>
              <div className="card daily-sales">
                <div className="card-block">
                  <h4 className="mb-2">RO Models</h4>
                  <div className="row d-flex align-items-center">
                    <div className="col-12">
                      <h5 className="f-w-300 m-b-0">Total NO of Models: 43</h5>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          {/* configure map pins */}
          <div className="col-md-12 col-xl-12">
            <NavLink to={"map-marker"}>
              <div className="card daily-sales">
                <div className="card-block">
                  <h4 className="mb-2">Configure Map Pins</h4>
                  <div className="row d-flex align-items-center">
                    <div className="col-12">
                      <h5 className="f-w-300 m-b-0">Map Markers</h5>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          {/* map optional */}
          {/* <div className="col-md-12 col-xl-12">
          
        </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
