import React from 'react'
import { NavLink } from 'react-router-dom'

function EditUser() {
    return (
        <>
            {/* breadcrumb */}
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Edit Users</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to={"/"}><i className="feather icon-home"></i></NavLink></li>
                                <li className="breadcrumb-item"><NavLink to={"/users"}>Users</NavLink></li>
                                <li className="breadcrumb-item"><NavLink to={"/edit-user"}>Edit User</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className="main-body">
                <div className="page-wrapper">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Edit Users</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div class="form-group mb-3">
                                                    <label htmlFor='name'>Name</label>
                                                    <input type="text" class="form-control mt-2" name='name' placeholder="Enter The Name" required/>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label htmlFor='phone'>Phone No</label>
                                                    <input type="tel" class="form-control mt-2" name='phone' placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{4}" required/>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label htmlFor='role'>Role of User</label>
                                                    <select class="form-control" id="roleSelect" name='userRole'>
                                                                <option value={"user"}>User</option>
                                                                <option value={"admin"}>Admin</option>
                                                            </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div class="form-group mb-3">
                                                    <label htmlFor='email'>Email Address</label>
                                                    <input type="email" class="form-control mt-2" name='email' placeholder="Email Address" required/>
                                                </div>
                                            <div class="form-group mb-3">
                                                    <label htmlFor='email'>Password</label>
                                                    <input type="text" class="form-control mt-2" name='password' placeholder="Password" required/>
                                                </div>
                                            <div class="form-group mb-3">
                                                    <label htmlFor='image'>Image</label>
                                                    <input type="file" class="form-control mt-2" name='image' placeholder="Password" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default EditUser
