import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

const VehicleManufacturer = ({ formData, setFormData }) => {

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            model_vozila: e.target.value
        }))
    }

    return (
        <div className="w-full mb-5">
            <h2 className="text-2xl mb-14 mt-7">Korak 1. Odaberite proizvođača vozila</h2>
            <fieldset
                className="flex flex-wrap w-full gap-10"
                id="group1"
                onChange={handleChange}
            >
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="peugeot"
                        type="radio"
                        value="peugeot"
                        name="manufacturer"
                        checked={formData.model_vozila === 'peugeot'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="peugeot"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Peugeot
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="volkswagen"
                        type="radio"
                        value="volkswagen"
                        name="manufacturer"
                        checked={formData.model_vozila === 'volkswagen'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="volkswagen"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Volkswagen
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="citroen"
                        type="radio"
                        value="citroen"
                        name="manufacturer"
                        checked={formData.model_vozila === 'citroen'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="citroen"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Citroen
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="audi"
                        type="radio"
                        value="audi"
                        name="manufacturer"
                        checked={formData.model_vozila === 'audi'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="audi"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Audi
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="bmw"
                        type="radio"
                        value="bmw"
                        name="manufacturer"
                        checked={formData.model_vozila === 'bmw'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="bmw"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Bmw
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="seat"
                        type="radio"
                        value="seat"
                        name="manufacturer"
                        checked={formData.model_vozila === 'seat'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="seat"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Seat
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="alfa_romeo"
                        type="radio"
                        value="alfa_romeo"
                        name="manufacturer"
                        checked={formData.model_vozila === 'alfa_romeo'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="alfa_romeo"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Alfa Romeo
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="kia"
                        type="radio"
                        value="kia"
                        name="manufacturer"
                        checked={formData.model_vozila === 'kia'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="kia"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Kia
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="hyundai"
                        type="radio"
                        value="hyundai"
                        name="manufacturer"
                        checked={formData.model_vozila === 'hyundai'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="hyundai"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Hyundai
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="honda"
                        type="radio"
                        value="honda"
                        name="manufacturer"
                        checked={formData.model_vozila === 'honda'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="honda"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Honda
                    </label>
                </div>
                <div
                    className="flex items-center mb-4"
                >
                    <input
                        id="toyota"
                        type="radio"
                        value="toyota"
                        name="manufacturer"
                        checked={formData.model_vozila === 'toyota'}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                    />
                    <label
                        htmlFor="toyota"
                        className="w-max ml-2 text-sm font-medium text-gray-900"
                    >
                        Toyota
                    </label>
                </div>
            </fieldset>
        </div>
    )
}

VehicleManufacturer.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired
}

export default VehicleManufacturer