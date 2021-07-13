import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const EditContact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const ContactList = useSelector(state => state)
    const currentContact = ContactList.find((item) => item.id === parseInt(id))
    console.log("currentContact", currentContact)

    // fill the fields with matched id
    useEffect(() => {
        if (currentContact) {
            setname(currentContact.name)
            setemail(currentContact.email)
            setphone(currentContact.phone)
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        //validations 

        // 1) null valuse
        if (!email || !name || !phone) {
            return toast.warning('Please fill all fields!!')
        }

        //2) email already exist
        const emailCheck = ContactList.find(item => item.id !== parseInt(id) && item.email === email);
        if (emailCheck) {
            return toast.error('Email already exist')
        }

        //3) phone number exist
        const phoneNumberCheck = ContactList.find(item =>  item.id !== parseInt(id) && item.phone === parseInt(phone));
        if (phoneNumberCheck) {
            return toast.error('Phone number already exist')
        }


        //update action call sending payload

        const data = {
            id: parseInt(id),
            name,
            email,
            phone
        }
        console.log("data", data)

        //dispatch action
        dispatch({ type: "UPDATE_CONTACT", payload: data })
        toast.success("Contact updated successfully :)")
        history.push('/')

    }


    return (
        <div className="container">
            <div className="row">
                {currentContact ?
                    <>
                        <div className="col-md-12 text-center my-4">
                            <h1 className="display-3">EDIT CONTACT {id} </h1>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="nameField">NAME</label>
                                    <input type="text" className="form-control" id="nameField" value={name} onChange={(e) => setname(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="emailField">EMAIL</label>
                                    <input type="email" className="form-control" id="emailField" value={email} onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="numberField">PHONE NUMBER</label>
                                    <input type="number" className="form-control" id="numberField" value={phone} onChange={(e) => setphone(e.target.value)} />
                                </div>
                                <div className="form-group mb-3 text-center">
                                    <button type="submit" className="btn btn-outline-primary mx-3">Update Contact</button>
                                    <Link to="/" className="btn btn-outline-danger" >Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </>
                    :
                    <h1 className="display-4 my-5 text-center">Contact ID:{id} is not  PRESENT!! </h1>
                }
            </div>
        </div>
    )
}

export default EditContact
