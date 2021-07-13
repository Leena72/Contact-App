import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'



const AddContact = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')

    const ContactList = useSelector(state => state) // console.log("contactlist",ContactList)
    const dispatch = useDispatch()
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault();

        //validations 

        // 1) null valuse
        if (!email || !name || !phone) {
            return toast.warning('Please fill all fields!!')
        }

        //2) email already exist
        const emailCheck = ContactList.find(item => item.email === email);
        if (emailCheck) {
            return toast.error('Email already exist')
        }

        //3) phone number exist
        const phoneNumberCheck = ContactList.find(item => item.phone === parseInt(phone));
        if (phoneNumberCheck) {
            return toast.error('Phone number already exist')
        }


        //add action call sending payload

        const data = {
            id: ContactList[ContactList.length - 1].id + 1,
            name,
            email,
            phone
        }
        console.log("data", data)

        //dispatch action
        dispatch({ type: "ADD_CONTACT", payload: data })
        toast.success("Contact added successfully :)")
        history.push('/')

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center my-4">
                    <h1 className="display-3">ADD CONTACT</h1>
                </div>
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="nameField">NAME</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="nameField" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="emailField">EMAIL</label>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="emailField" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="numberField">PHONE NUMBER</label>
                            <input type="number" value={phone} onChange={(e) => setphone(e.target.value)} className="form-control" id="numberField" />
                        </div>
                        <div className="form-group mb-3 text-center">
                            <input type="submit" value="ADD CONTACT" className="btn btn-outline-primary mx-3" />
                            <Link to="/" className="btn btn-outline-danger" >Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
