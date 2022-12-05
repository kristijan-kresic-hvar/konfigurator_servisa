import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local components
import Button from '../Button/Button'

const OverviewItem = ({ children, title, onEditClick }) => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between lg:justify-start items-center">
                <h3 className="text-xl lg:text-2xl uppercase mr-5">{title}</h3>
                <Button
                    onClick={onEditClick}
                >
                    Uredi
                </Button>
            </div>
            {children}
        </div>
    )
}

OverviewItem.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    onEditClick: PropTypes.func.isRequired,
}

export default OverviewItem