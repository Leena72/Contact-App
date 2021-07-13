import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Home = () => {
    const date=Date()
    return (
        <div className="container">
            
                <div className="row my-3">
                    <div className="col-md-6 mx-auto">
                        <div class="list-group">
                            <Link to="/contact" class="list-group-item list-group-item-action " aria-current="true">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">CONTACT APP</h5>
                                    <small>{moment(date).format('DD MMMM YYYY')}</small>
                             
                                </div>
                                <p class="mb-1"><b>DESCRIPTION:</b> CRUD operation implemenation</p>
                                <small>React, Redux, Bootstrap</small>
                            </Link>

                        </div>
                    </div>
                </div>

            
        </div>
            )
}

            export default Home
