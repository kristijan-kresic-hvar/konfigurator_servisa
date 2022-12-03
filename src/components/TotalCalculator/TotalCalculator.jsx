import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

const TotalCalculator = ({ items, discountAmount }) => {

    const calculateTotal = () => {
        let total = 0
        total = items.reduce((acc, item) => {
            return acc + item.price
        }, 0)

        if (discountAmount) {
            return total - (total * (discountAmount / 100))
        }

        return total
    }

    return (
        <div className="text-2xl uppercase">
            Ukupno: <span className='font-bold'>{calculateTotal().toFixed(2).replace('.', ',')}</span>
        </div>
    )
}

TotalCalculator.propTypes = {
    items: PropTypes.array.isRequired,
    discountAmount: PropTypes.number
}

export default TotalCalculator