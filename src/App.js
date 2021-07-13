import React from 'react'
import Navbar from './component/navbar'
import Home from './component/home'
import AddContact from './component/addcontact'
import EditContact from './component/editContact'
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" >
         <Home/>
        </Route>
        <Route path="/add" >
          <AddContact />
        </Route>
        <Route path="/edit/:id" >
          <EditContact />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
