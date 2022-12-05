import React from 'react'

// local components
import Button from '../../..//Button/Button'

const Success = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl mb-5">Vaša prijava je uspješno poslana</h2>
            <p className="max-w-[55ch] mb-16">
                Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo
                vas u najkraćem mogućem roku. Hvala vam.
            </p>
            <Button
                variant="outline"
                data-role="closeModal"
            >
                Zatvori
            </Button>
        </div>
    )
}

export default Success