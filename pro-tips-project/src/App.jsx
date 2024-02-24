import React from 'react';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import RegisterForm from './Pages/RegisterForm';
import Person from './Pages/Person';
import SingleUserView from './Pages/SingleUserView';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route exact path="/register" element={<RegisterForm />}></Route>
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/register/person" element={<Person />}></Route>
        <Route
          path="*"
          element={<h1 style={{ textAlign: 'center' }}>404 page not found</h1>}
        ></Route>
        <Route path="/register/person/:id" element={<SingleUserView />} />
      </Routes>
    </div>
  );
}

export default App;
