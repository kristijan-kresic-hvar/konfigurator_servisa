import React, { useState, memo } from 'react'

// local components
import Button from '../Button/Button'
// steps
import VehicleManufacturer from './steps/VehicleManufacturer/VehicleManufacturer'
import ServicePackages from './steps/ServicePackages/ServicePackages'
import ContactData from './steps/ContactData/ContactData'
import Overview from './steps/Overview/Overview'
import Success from './steps/Success/Success'

const Configurator = () => {

    const [activeStep, setActiveStep] = useState(1)
    const [formData, setFormData] = useState({
        model_vozila: '',
        paket_usluga: [],
        kontakt_podaci: {
            puno_ime: '',
            broj_telefona: '',
            email: '',
            napomena: ''
        }
    })

    const renderStep = () => {
        switch (activeStep) {
            case 1:
                return <VehicleManufacturer
                    formData={formData}
                    setFormData={setFormData}
                />
            case 2:
                return <ServicePackages
                    formData={formData}
                    setFormData={setFormData}
                />
            case 3:
                return <ContactData
                    formData={formData}
                    setFormData={setFormData}
                />
            case 4:
                return <Overview
                    formData={formData}
                />
            case 5:
                return <Success />
        }
    }

    const renderActions = () => {
        switch (activeStep) {
            case 1:
                return (
                    <Button
                        onClick={nextStep}
                        type="button"
                    >
                        Dalje
                    </Button>
                )
            case 2:
            case 3:
                return (
                    <>
                        <Button
                            onClick={prevStep}
                            variant="outline"
                            type="button"
                        >
                            Nazad
                        </Button>
                        <Button
                            style={{ marginLeft: '1rem' }}
                            onClick={(e) => { e.preventDefault(); nextStep() }}
                            type="button"
                        >
                            Dalje
                        </Button>
                    </>
                )
            case 4:
                return (
                    <>
                        <Button
                            onClick={prevStep}
                            variant="outline"
                            type="button"
                        >
                            Nazad
                        </Button>
                        <Button
                            type="submit"
                            style={{ marginLeft: '1rem' }}
                        >
                            Pošalji
                        </Button>
                    </>
                )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        nextStep()
    }

    const nextStep = () => {
        setActiveStep(prevState => prevState + 1)
    }

    const prevStep = () => {
        setActiveStep(prevState => prevState - 1)
    }

    return (
        <div className="w-11/12 h-5/6 mx-auto mt-3">
            <form className="flex h-full flex-col w-full" onSubmit={handleSubmit}>
                {renderStep()}

                {activeStep < 5 &&
                    <div className="w-full mt-auto flex justify-end border-t-4 pt-3">
                        {renderActions()}
                    </div>
                }
            </form>
        </div>
    )
}

export default Configurator