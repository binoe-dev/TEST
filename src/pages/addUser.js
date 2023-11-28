import { Link } from 'react-router-dom'

const addUser = () => {
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6"> 
                    <div className="container">
                        <div className="card">
                            <div className="card-title"> 
                                <h2>User Create</h2>

                            </div>
                            <div className="card-body">
                                <div className="row" style={{textAlign: 'left' }}>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>FirstName</label>
                                            <input className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>LastName</label>
                                            <input className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Age</label>
                                            <input className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to='/' className='btn btn-danger'>Back</Link>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default addUser