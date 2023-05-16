import React from 'react'
import { useNavigate } from 'react-router-dom'
function Form({ name, imageUrl }) {
    let navigate = useNavigate()
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imageUrl} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <form className='container my-3 mx-2' >
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Show Name</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder={name} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">User Name</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="@" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder='password' />
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary position-relative top-0  start-50" >Submit</button>
                            <button type="button" className="btn btn-primary position-absolute end-0 mx-2" onClick={() => navigate('/')}> 🏠</button>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form