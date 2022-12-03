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
                id="servicePackages"
            >
                <div
                    className="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="zamjena_ulja_i_filtera"
                        type="checkbox"
                        data-label="Zamjena ulja i filtera"
                        value={500}
                        onChange={handleChange}
                        checked={formData.paket_usluga.some(item => item.label === 'Zamjena ulja i filtera')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="zamjena_ulja_i_filtera"
                        className="ml-2 text-sm font-medium text-gray-900">
                        Zamjena ulja i filtera (500kn)
                    </label>
                </div>
                <div
                    className="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="promjena_pakni"
                        type="checkbox"
                        value={450}
                        data-label="Promjena pakni"
                        onChange={handleChange}
                        checked={formData.paket_usluga.some(item => item.label === 'Promjena pakni')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                        htmlFor="promjena_pakni"
                        className="ml-2 text-sm font-medium text-gray-900">
                        Promjena pakni (450kn)
                    </label>
                </div>
                <div
                    className="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="promjena_guma"
                        type="checkbox"
                        value={100}
                        data-label="Promjena guma"
                        onChange={handleChange}
                        checked={formData.paket_usluga.some(item => item.label === 'Promjena guma')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                        htmlFor="promjena_guma"
                        className="ml-2 text-sm font-medium text-gray-900">
                        Promjena guma (100kn)
                    </label>
                </div>
                <div
                    className="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="servis_klima_uredaja"
                        type="checkbox"
                        value={299}
                        data-label="Servis klima uređaja"
                        onChange={handleChange}
                        checked={formData.paket_usluga.some(item => item.label === 'Servis klima uređaja')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                        htmlFor="servis_klima_uredaja"
                        className="ml-2 text-sm font-medium text-gray-900">
                        Servis klima uređaja (299kn)
                    </label>
                </div>
                <div
                    className="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="balansiranje_guma"
                        type="checkbox"
                        value={50}
                        data-label="Balansiranje guma"
                        onChange={handleChange}
                        checked={formData.paket_usluga.some(item => item.label === 'Balansiranje guma')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                        htmlFor="balansiranje_guma"
                        className="ml-2 text-sm font-medium text-gray-900">
                        Balansiranje guma (50kn)
                    </label>
                </div>
                <div
                    className="flex items-center mb-4 basis-full md:basis-3/6 lg:basis-1/3">
                    <input
                        id="zamjena_ulja_u_kocnicama"
                        type="checkbox"
                        value={229}
                        data-label="Zamjena ulja u kočnicama"
                        onChange={handleChange}
                        checked={formData.paket_usluga.some(item => item.label === 'Zamjena ulja u kočnicama')}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                        htmlFor="zamjena_ulja_u_kocnicama"
                        className="ml-2 text-sm font-medium text-gray-900">
                        Zamjena ulja u kočnicama (229kn)
                    </label>
                </div>
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
                        {couponStatus && <p className={`text-xs py-1 ${discountAmount ? 'text-green-600' : 'text-red-600'}`}>{couponStatus}</p>}
                    </>
                }
                <div className="ml-auto mt-3">
                    <TotalCalculator
                        items={formData.paket_usluga}
                        discountAmount={discountAmount}
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