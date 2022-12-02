import React, { useState } from 'react'

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

    const renderStep = () => {
        switch (activeStep) {
            case 1:
                return <VehicleManufacturer />
            case 2:
                return <ServicePackages />
            case 3:
                return <ContactData />
            case 4:
                return <Overview />
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
                            type="outline"
                        >
                            Nazad
                        </Button>
                        <Button
                            style={{ marginLeft: '1rem' }}
                            onClick={nextStep}
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
                            type="outline"
                        >
                            Nazad
                        </Button>
                        <Button
                            type="submit"
                            onClick={handleSubmit}
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