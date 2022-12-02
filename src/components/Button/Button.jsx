import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

const buttonStyles = {
    default: 'bg-blue-500 hover:bg-blue-700 hover:shadow-lg text-white font-bold py-2 px-4 rounded',
    outline: 'bg-transparent hover:bg-blue-500 hover:shadow-lg text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded',
    disabled: 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 pointer-events-none'
}

const Button = ({ children, ...props }) => {
    return (
        <button
            className={buttonStyles[props.variant] || buttonStyles.default}
            {...props}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'outline', 'disabled'])
}

export default Button