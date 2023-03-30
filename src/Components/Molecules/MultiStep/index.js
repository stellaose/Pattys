import React from "react";
import { Typography, Stepper, StepLabel, Step } from "@mui/material";
import { MdLocalShipping } from 'react-icons/md'
import { GiConfirmed } from 'react-icons/gi'
import { RiSecurePaymentFill } from 'react-icons/ri'

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <MdLocalShipping size={30}/>,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <GiConfirmed size={25}/>,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <RiSecurePaymentFill size={25}/>,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "#C5D86D" : "#260C1A",
              }}
              icon={item.icon}
            />
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default CheckoutSteps;