import React from 'react'
import { NavLink } from 'react-router-dom'
import userimg from '../images/avatar-1.jpg';
import { FaPlusCircle } from 'react-icons/fa';
import '../styles/fonts/fontawesome/css/fontawesome-all.min.css'

function UserPage() {
  return (
    <>
      {/* breadcrumbs */}
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-10">
              <div className="page-header-title">
                <h5 className="m-b-10">Users</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to={"/dashboard"}><i className="feather icon-home"></i></NavLink></li>
                <li className="breadcrumb-item"><a href="#!">Users</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <NavLink to={"/add-user"} className="btn btn-primary d-block"><FaPlusCircle /> &nbsp;Add User</NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="main-body">
        <div className="page-wrapper">
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="card Recent-Users">
                <div className="card-header">
                  <h5>Recent Users</h5>
                </div>
                <div className="card-block px-0 py-3">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Username</th>
                          <th>Status</th>
                          <th colSpan={2}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 class="m-0">
                              <img class="rounded-circle m-r-10" style={{ width: "40px" }} src={userimg} alt="activity-user"/>
                                Ida Jorgensen
                            </h6>
                          </td>
                          <td>
                            <h6 class="m-0">test@123</h6>
                          </td>
                          <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>

                          <td>
                            <NavLink to={"/edit-user"} className="label theme-bg text-white f-12">Edit User</NavLink>
                            <NavLink to={"/"} className="label theme-bg2 text-white f-12">Delete User</NavLink>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 class="m-0">
                              <img class="rounded-circle m-r-10" style={{ width: "40px" }} src={userimg} alt="activity-user"/>
                                Ida Jorgensen
                            </h6>
                          </td>
                          <td>
                            <h6 class="m-0">test@123</h6>
                          </td>
                          <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>

                          <td>
                            <NavLink to={"/edit-user"} className="label theme-bg text-white f-12">Edit User</NavLink>
                            <NavLink to={"/"} className="label theme-bg2 text-white f-12">Delete User</NavLink>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 class="m-0">
                              <img class="rounded-circle m-r-10" style={{ width: "40px" }} src={userimg} alt="activity-user"/>
                                Ida Jorgensen
                            </h6>
                          </td>
                          <td>
                            <h6 class="m-0">test@123</h6>
                          </td>
                          <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>

                          <td>
                            <NavLink to={"/edit-user"} className="label theme-bg text-white f-12">Edit User</NavLink>
                            <NavLink to={"/"} className="label theme-bg2 text-white f-12">Delete User</NavLink>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 class="m-0">
                              <img class="rounded-circle m-r-10" style={{ width: "40px" }} src={userimg} alt="activity-user"/>
                                Ida Jorgensen
                            </h6>
                          </td>
                          <td>
                            <h6 class="m-0">test@123</h6>
                          </td>
                          <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>

                          <td>
                            <NavLink to={"/edit-user"} className="label theme-bg text-white f-12">Edit User</NavLink>
                            <NavLink to={"/"} className="label theme-bg2 text-white f-12">Delete User</NavLink>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 class="m-0">
                              <img class="rounded-circle m-r-10" style={{ width: "40px" }} src={userimg} alt="activity-user"/>
                                Ida Jorgensen
                            </h6>
                          </td>
                          <td>
                            <h6 class="m-0">test@123</h6>
                          </td>
                          <td class="text-right"><i class="fas fa-circle text-c-green f-10"></i></td>

                          <td>
                            <NavLink to={"/edit-user"} className="label theme-bg text-white f-12">Edit User</NavLink>
                            <NavLink to={"/"} className="label theme-bg2 text-white f-12">Delete User</NavLink>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 class="m-0">
                              <img class="rounded-circle m-r-10" style={{ width: "40px" }} src={userimg} alt="activity-user"/>
                                Ida Jorgensen
                            </h6>
                          </td>
                          <td>
                            <h6 class="m-0">test@123</h6>
                          </td>
                          <td class="text-right"><i class="fas fa-circle text-c-red f-10"></i></td>

                          <td>
                            <NavLink to={"/edit-user"} className="label theme-bg text-white f-12">Edit User</NavLink>
                            <NavLink to={"/"} className="label theme-bg2 text-white f-12">Delete User</NavLink>
                          </td>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPage
