'use client';
import React from "react"
import PropTypes from 'prop-types';

const Button =  ({label, onClick, type = 'button', className = 'button'}) => {

    return (

        <button className= {`${className}`} type={type} onClick={onClick}>
            {label}
        </button>

    )

}

Button.prototype = {

    label: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string

}

export default Button