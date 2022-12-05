import React from 'react'

// third party libraries
import Lottie from 'react-lottie'

// local assets
import confettiAnimation from '../../../../lotties/confetti.json'

// local components
import Button from '../../..//Button/Button'

const defaultAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: confettiAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Success = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-center relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                <Lottie
                    isClickToPauseDisabled={true}
                    options={defaultAnimationOptions}
                    height={"100%"}
                    width={"100%"}
                />
            </div>
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