import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CustomModal.css'; 

const CustomModal = ({ show, handleClose, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>


      <div className='d-flex'>

      <div className='d-flex flex-column'>
        <h3>Create Account</h3>

        <div className='d-flex flex-column'>

        <span>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </span>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm Password' />
        </div>

        <button className='bg-royal-blue border-0 outline-none p-2 text-white rounded-5 my-3'>Create Account</button>
        <button className='border p-2 bg-white my-2'><img src='/images/icons/facebook.svg' /> Sign up with Facebook</button>
        <button className='border p-2 bg-white my-2'><img src='/images/icons/google.svg' /> Sign up with Google</button>

      </div>

      <div className='w-50'>
      <p style={{textAlign:"end"}}>Already have an account? <span className='text-royal-blue'>Sign In</span></p>
      <img src='/images/icons/signup.svg' alt='img' />
      <p className='m-2 mx-3' style={{fontSize:"12px"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
      </div>

      </div>
      </Modal.Body>
      
    </Modal>
  );
};

export default CustomModal;
