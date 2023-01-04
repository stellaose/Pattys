import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { 
        ContactBody, 
        ContactForm, 
        FormInput, 
        FormLabel, 
        FormTextArea, 
        InputBtn, 
        InputButton,
        NameInput,
        NameLabel, 
        NameSection,
        SubmitForm} from '../Stylesheets/Contact.styled';
import ContactModal from '../Components/Molecules/Modal/ContactModal';

const Contact = () => {
    const [show, setShow] = useState(false);

    const [state, handleSubmit] = useForm("xoqrpbbb");
    if (state.succeeded) {
        return (
            <>
                <ContactModal onClose={() => setShow(false)}
                show={show}
                />
            </>
        )
    }

    return (
        <>
        <ContactBody>
            
            <ContactForm>
                <h2>How can we help you?</h2>
            <p>For all enquiries, please use the contact form below.</p>
                
                <SubmitForm onSubmit={handleSubmit}>
                    
                    <NameSection>
                        <div>
                            <NameLabel htmlFor="">Name</NameLabel>
                            <br/>
                              <NameInput 
                                placeholder="Name"
                                type="text" 
                                name="name" 
                                required 
                              />
                        </div>
                        <div>
                            <NameLabel htmlFor="">Email</NameLabel>
                            <br/>
                            <NameInput 
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                    </NameSection>
                    <br/>
                
                    <FormLabel>Subject</FormLabel>
                    <br/>
                    <FormInput
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                    />
                   <br/>
                   <FormLabel>Message</FormLabel>
                    <br/>
                    <FormTextArea
                        placeholder="Message"
                        name="message"
                        required
                    />
                    <br/>
                    <InputBtn>
                        <InputButton type="submit" disabled={state.submitting}  value="SEND" onClick={() => setShow(true)}/>
                    </InputBtn>
                    
                   
                </SubmitForm>
            </ContactForm>
        </ContactBody>
  
      </>
    )
}

export default Contact