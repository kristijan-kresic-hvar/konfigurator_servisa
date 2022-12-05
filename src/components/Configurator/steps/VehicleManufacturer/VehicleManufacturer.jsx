import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local functions
import useMockData from '../../../../hooks/useMockData'

const VehicleManufacturer = ({ formData, setFormData }) => {

    const { getVehicleManufacturers } = useMockData()
    const vehicleManufacturers = getVehicleManufacturers()

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
            >
                {vehicleManufacturers.map(manufacturer => (
                    <div
                        className="flex items-center mb-4"
                        key={manufacturer.id}
                    >
                        <input
                            id={manufacturer.id}
                            type="radio"
                            value={manufacturer.value}
                            name="manufacturer"
                            checked={formData.model_vozila === manufacturer.value}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                        />
                        <label
                            htmlFor={manufacturer.id}
                            className="w-max ml-2 text-sm font-medium text-gray-900"
                        >
                            {manufacturer.label}
                        </label>
                    </div>
                ))}
            </fieldset>
        </div>
    )
}

VehicleManufacturer.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired
}

export default VehicleManufacturer