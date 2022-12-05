import React, { useState, useRef } from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local functions
import useMockData from '../../../../hooks/useMockData'

// local components
import Button from '../../../Button/Button'
import TotalCalculator from '../../../TotalCalculator/TotalCalculator'

const coupon_code_allowed = {
    code: "Tokić123",
    amount: 30
}

const ServicePackages = ({ formData, setFormData }) => {

    const couponCodeRef = useRef(null)

    const [showCouponInput, setShowCouponInput] = useState(false)
    const [couponStatus, setCouponStatus] = useState('')

    const { getServicePackages } = useMockData()
    const servicePackages = getServicePackages()

    const handleChange = (e) => {

        // check if service is already selected, if it is, remove it from the array
        if (formData.paket_usluga.some(item => item.id === e.target.id)) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    paket_usluga: prevState.paket_usluga.filter(item => item.id !== e.target.id)
                }
            })

            return
        }

        // if service is not selected, add it to the array
        setFormData(prevState => {
            return {
                ...prevState,
                paket_usluga: [
                    ...prevState.paket_usluga,
                    {
                        id: e.target.id,
                        label: e.target.getAttribute('data-label'),
                        price: Number(e.target.value)
                    }
                ]
            }
        })
    }

    const handleApplyCoupon = () => {
        if (couponCodeRef.current) {
            if (couponCodeRef.current.value === coupon_code_allowed.code) {
                setFormData(prevState => ({
                    ...prevState,
                    popust: coupon_code_allowed.amount
                }))
                setCouponStatus('Kupon je uspješno primjenjen')
                return
            }
        }

        setCouponStatus('Kupon nije validan')
        setFormData(prevState => ({
            ...prevState,
            popust: 0
        }))
    }

    return (
        <div className="flex flex-col w-full h-full mb-5">
            <h2 className="text-2xl mb-14 mt-7">Korak 2. Odaberite jednu ili više usluga za koje ste</h2>
            <fieldset
                className="flex flex-wrap w-full"
                id="servicePackages"
            >
                {servicePackages.map(servicePackage => (
                    <div
                        className="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3"
                        key={servicePackage.id}
                    >
                        <input
                            id={servicePackage.id}
                            type="checkbox"
                            data-label={servicePackage.name}
                            value={servicePackage.price}
                            onChange={handleChange}
                            checked={formData.paket_usluga.some(item => Number(item.id) === servicePackage.id)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                        />
                        <label
                            htmlFor={servicePackage.id}
                            className="ml-2 text-sm font-medium text-gray-900">
                            {servicePackage.name} ({servicePackage.price}kn)
                        </label>
                    </div>
                ))}
            </fieldset>
            <div
                className="flex flex-col justify-end ml-auto mt-auto pt-5"
            >
                {!showCouponInput &&
                    <p
                        className="text-blue-500 cursor-pointer underline"
                        onClick={() => setShowCouponInput(true)}
                    >
                        Imam kupon
                    </p>
                }
                {showCouponInput &&
                    <>
                        <div className="flex align-center">
                            <input
                                ref={couponCodeRef}
                                type="text"
                                id="couponCode"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Unesite kod kupona ovdje"
                            />
                            <Button
                                type="button"
                                onClick={handleApplyCoupon}
                            >
                                Primjeni
                            </Button>
                        </div>
                        {couponStatus && <p className={`text-xs py-1 ${formData.popust ? 'text-green-600' : 'text-red-600'}`}>{couponStatus}</p>}
                    </>
                }
                <div className="ml-auto mt-3">
                    <TotalCalculator
                        items={formData.paket_usluga}
                        discountAmount={formData.popust}
                    />
                </div>
            </div>
        </div>
    )
}

ServicePackages.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired
}

export default ServicePackages