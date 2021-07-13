import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Contact = () => {
    const ContactList = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(">>>", ContactList)

    const deleteContact = (id) => {
        
        dispatch({type:"DELETE_CONTACT",payload:id})
        toast.success('Contact deleted successfully!!')

    }

    return (
        <div className="container  my-5">
            <div className="row">
                <div className="col-md-12 mb-4 d-flex justify-content-between">
                <Link to="/" className="btn btn-outline-secondary">BACK</Link>
                    <Link to="/add" className="btn btn-outline-info">Add Contact</Link>

                </div>
                <div className=" col-md-12 text-center">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {ContactList && ContactList.map((item, id) => {
                                return (
                                    <tr key={id}>
                                        <td scope="col">{item.id + 1}</td>
                                        <td scope="col">{item.name}</td>
                                        <td scope="col">{item.email}</td>
                                        <td scope="col">{item.phone}</td>
                                        <td scope="col">
                                            <Link to={`/edit/${item.id}`} className="btn btn-outline-primary mx-3">Edit</Link>
                                            <button onClick={() => deleteContact(item.id)} className="btn btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Contact
