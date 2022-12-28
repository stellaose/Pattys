/* eslint-disable no-unused-expressions */
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ModalBody, ModalContainer, ModalOverlay } from '../../../Stylesheets/Modal.styled';


const ContactModal = (props) => {
    const navigate = useNavigate()
    if(!props.show){
        return null;
    }
    
    const handleRedirect = () => {
        props.onClose
        navigate(-1)
    }
    
    return (
        <>
              <ModalOverlay>
                <ModalContainer>
                    <ModalBody>
                        <h1>Successful!</h1>
                        <h3>Your message has be received. We&apos;ll get in touch with you shortly.</h3>
                        
                        <button onClick={handleRedirect}>Continue</button>
                    </ModalBody>
                </ModalContainer>
            </ModalOverlay>
        </>
        
    )
}

export default ContactModal