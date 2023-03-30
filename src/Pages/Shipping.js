import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Country, State } from 'country-state-city'
import { 
          BtnInput,
          ButtonDiv,
          CheckoutBody, 
          CheckoutContainer,
          DivInput,
          FormContent,
          Input,
          Select} from '../Stylesheets/Checkout.styled'
import MetaData from '../Components/Layout/MetaData'
import { saveShippingInfoAction } from '../Redux/Actions/CartActions'
import CheckoutSteps from '../Components/Molecules/MultiStep'

const Shipping = () => {
  const { shippingInfo } = useSelector((state) => state.cart)
  const [country, setCountry] = useState(shippingInfo?.country)
  const [state, setState] = useState(shippingInfo?.state)
  const [address, setAddress] = useState(shippingInfo?.address)
  const [city, setCity] = useState(shippingInfo?.city)
  const [pinCode, setPinCode] = useState(shippingInfo?.pinCode)
  const [phoneNo, setPhoneNo] = useState(shippingInfo?.phoneNo)
  
  const navigate= useNavigate()
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(phoneNo.length < 11 || phoneNo.length > 11){
      alert('Phone number must be equal to 11 digits')
    }
    
    dispatch(
      saveShippingInfoAction({country, state, address, city, pinCode, phoneNo})
    )
    navigate('/checkout/confirm-order')
    window.scroll(0, 0)
  }
  return (
    <>
      <MetaData title={'Shipping || Pattys E-Commerce'}/>
      <CheckoutBody>
        <CheckoutSteps activeStep={0}/>
        <CheckoutContainer>
          <h1>Shipping</h1>
          <FormContent 
            onSubmit={handleSubmit}
            encType= 'multipart/form-data'
          >
            <DivInput>
              <div>
                <h4>Country</h4>
                <Select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  {Country && Country.getAllCountries().map((item) =>(
                    <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                  ))}
                </Select>
              </div>
              <div>
                <h4>State</h4>
                <Select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                      {State && State.getStatesOfCountry(country).map((item) =>(
                    <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                  ))}
                </Select>
              </div>
              
            
            </DivInput>
          
            <DivInput>
              <div>
                <h4>City</h4>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  required
                /> 
              </div>
              <div>
              <h4>Address</h4>
              <Input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                required
              />
              </div>
            </DivInput>
            
            <DivInput>
            <div>
              <h4>Pin Code</h4>
              <Input
                type="number"
                placeholder="Pin code"
                value={pinCode}
                onChange={(e) =>
                  setPinCode(e.target.value)
                }
                required
              />
            </div>
            <div>
              <h4>Phone Number</h4>
              <Input
                type="number"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) =>
                  setPhoneNo(e.target.value)
                }
                required
              />
            </div>
              
            </DivInput>
            
            <ButtonDiv>
              <BtnInput 
                type="submit"
                value='Continue'
              />
            </ButtonDiv>
          </FormContent>
        </CheckoutContainer>
      </CheckoutBody>
    </>
  )
}

export default Shipping