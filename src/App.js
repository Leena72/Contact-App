import React from 'react'
import Navbar from './component/navbar'
import Contact from './component/contact/Contact'
import AddContact from './component/contact/addcontact'
import Home from './Home'
import EditContact from './component/contact/editContact'
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        {/* contact app routes */}
        <Route exact path="/contact" >
          <Contact />
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
