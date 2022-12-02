import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

const Modal = ({ children, title, isOpen, onClose }) => {

    const handleModalClick = (e) => {
        if (e.target.getAttribute('data-type') === 'modal-overlay') {
            onClose()
        }
    }

    if (!isOpen) return null
    return (
        <div
            className="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60"
            data-type='modal-overlay'
            onClick={handleModalClick}
        >
            <div
                className="bg-white w-5/6 h-5/6 md:w-4/6 md:h-4/6 relative animate-fade min-h-[500px]"
            >
                <h2
                    className="mt-3 text-center text-xl"
                >
                    {title}
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="absolute top-3 right-3 w-8 h-8 cursor-pointer ml-auto"
                    onClick={onClose}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal