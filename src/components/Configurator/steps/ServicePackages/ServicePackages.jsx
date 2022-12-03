import React, { useState, useRef } from 'react'

// third party libraries
import PropTypes from 'prop-types'

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
    const [discountAmount, setDiscountAmount] = useState(0)
    const [couponStatus, setCouponStatus] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            model_vozila: e.target.value
        })
    }

    const handleApplyCoupon = () => {
        if (couponCodeRef.current) {
            if (couponCodeRef.current.value === coupon_code_allowed.code) {
                setDiscountAmount(coupon_code_allowed.amount)
                setCouponStatus('Kupon je uspješno primjenjen')
                return
            }
        }

        setCouponStatus('Kupon nije validan')
        setDiscountAmount(0)
    }

    return (
        <div className="flex flex-col w-full h-full mb-3">
            <h2 className="text-2xl mb-14 mt-7">Korak 2. Odaberite jednu ili više usluga za koje ste</h2>
            <fieldset
                className="flex flex-wrap w-full"
                id="group1"
                onChange={handleChange}
            >
                <div
                    class="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900">
                        Zamjena ulja i filtera (500kn)
                    </label>
                </div>
                <div
                    class="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Promjena pakni (450kn)
                    </label>
                </div>
                <div
                    class="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Promjena guma (100kn)
                    </label>
                </div>
                <div
                    class="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Servis klima uređaja (299kn)
                    </label>
                </div>
                <div
                    class="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Balansiranje guma (50kn)
                    </label>
                </div>
                <div
                    class="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Zamjena ulja u kočnicama (229kn)
                    </label>
                </div>
            </fieldset>
            <div
                className="ml-auto mt-auto pt-5"
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
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Unesite kod kupona ovdje"
                            />
                            <Button
                                type="button"
                                onClick={handleApplyCoupon}
                            >
                                Primjeni
                            </Button>
                        </div>
                        {couponStatus && <p className={`text-xs py-1 ${discountAmount ? 'text-green-600' : 'text-red-600'}`}>{couponStatus}</p>}
                    </>
                }
                <TotalCalculator />
            </div>
        </div>
    )
}

ServicePackages.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired
}

export default ServicePackages