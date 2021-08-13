import React from 'react';
import './button.css';

const Button: React.FC<any> = ({ children,...rest}) => {
    return(
        <button className="button" {...rest}>
            {children}
        </button>
    )
}

export default Button;