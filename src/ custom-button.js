import React from 'react';

// import './custom-button.css';
import './ custom-button.css';

const CustomButton = ({children, isGoogleSign, ...otherProps}) => {
    
    return (
        <button className={`${isGoogleSign?'google_signin' :''}'custom__button'`} {...otherProps}>{children}</button>
    )
}
export default CustomButton;