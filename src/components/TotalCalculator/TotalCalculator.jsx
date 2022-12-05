import React, { useEffect, useState } from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local functions
import useHelpers from '../../hooks/useHelpers'

const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
}

const TotalCalculator = ({ items, discountAmount, size, discountInfo }) => {

    const { formatPrice } = useHelpers()

    const [calculatedDiscount, setCalculatedDiscount] = useState(0)

    const calculateTotal = (includeDiscount = true) => {
        let total = 0
        total = items.reduce((acc, item) => {
            return acc + item.price
        }, 0)

        if (includeDiscount && discountAmount) {
            return total - (total * (discountAmount / 100))
        }

        return total
    }

    useEffect(() => {
        setCalculatedDiscount(calculateTotal(false) * (discountAmount / 100))
    }, [discountAmount])

    return (
        <div className={`${sizeClasses[size] || 'text-2xl'}`}>
            {discountInfo && discountAmount > 0 &&
                <div>Popust ({discountAmount}%): -{formatPrice(calculatedDiscount)} KN</div>
            }
            <p className="uppercase text-right mt-1">Ukupno: <span className='font-bold'>{formatPrice(calculateTotal())} KN</span></p>
        </div>
    )
}

TotalCalculator.propTypes = {
    items: PropTypes.array.isRequired,
    discountAmount: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    discountInfo: PropTypes.bool,
}

export default TotalCalculator