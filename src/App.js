import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import CustomModal from './components/CustomModal';
import { Button } from 'react-bootstrap';

import { useState } from 'react';

function App() {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="App">
      <CustomModal show={showModal} handleClose={handleClose} title="Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼">
        
      </CustomModal>
      <Navbar handleShow={handleShow}/>
      <Hero />
      <Main />
    </div>
  );
}

export default App;
