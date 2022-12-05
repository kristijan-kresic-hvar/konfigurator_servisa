import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local functions
import useHelpers from '../../../../hooks/useHelpers'

// local components
import OverviewItem from '../../../OverviewItem/OverviewItem'
import TotalCalculator from '../../../TotalCalculator/TotalCalculator'

const Overview = ({ formData, setActiveStep }) => {

    const { capitalizeFirstLetter, formatPrice } = useHelpers()

    return (
        <div className="w-full mb-5">
            <h2 className="text-2xl mb-3 mt-7">Korak 4. Pregled i potvrda vašeg odabira</h2>
            <p className="mb-5">
                Molimo vas da još jednom pregledate i potvrdite unesene podatke.
                Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za uređivanje
                pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka
                pritisnite gumb pošalji na dnu, za slanje upita za servis.
            </p>
            <div className="flex w-full mt-5 flex-wrap">
                <div className="w-full lg:w-1/2 mb-5">
                    <OverviewItem
                        onEditClick={() => setActiveStep(1)}
                        title="Model vozila"
                    >
                        <p className="mt-2">{capitalizeFirstLetter(formData.model_vozila.replace('_', ' '))}</p>
                    </OverviewItem>
                </div>
                <div className="w-full lg:w-1/2 mb-5">
                    <OverviewItem
                        onEditClick={() => setActiveStep(2)}
                        title="Odabrane usluge"
                    >
                        <div className="mt-3 flex flex-col h-full">
                            <div>
                                {formData.paket_usluga.map(item => (
                                    <div key={item.id} className="flex justify-between mb-1">
                                        <p>{item.label}</p>
                                        <p>{formatPrice(item.price)} KN</p>
                                    </div>
                                ))}
                            </div>
                            <div className="ml-auto">
                                <TotalCalculator
                                    size="medium"
                                    discountInfo
                                    items={formData.paket_usluga}
                                    discountAmount={formData.popust}
                                />
                            </div>
                        </div>
                    </OverviewItem>
                </div>
                <div className="w-full h-1 mb-10 bg-gray-200"></div>
                <div className="w-full mb-5">
                    <OverviewItem
                        onEditClick={() => setActiveStep(3)}
                        title="Kontakt podatci"
                    >
                        <div className="flex w-full justify-between flex-wrap mt-3">
                            <div className="flex flex-col sm:flex-row justify-between w-full lg:w-[45%] mb-2">
                                <p>Ime i prezime:</p>
                                <p>{formData.kontakt_podatci.puno_ime}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between w-full lg:w-[45%] mb-2">
                                <p>Email adresa:</p>
                                <p>{formData.kontakt_podatci.email_adresa}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between w-full lg:w-[45%] mb-2">
                                <p>Broj telefona:</p>
                                <p>{formData.kontakt_podatci.broj_telefona}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between w-full lg:w-[45%] mb-2">
                                <p>Napomena:</p>
                                <p className="text-left md:text-right max-w-[30ch] break-all">{formData.kontakt_podatci.napomena}</p>
                            </div>
                        </div>
                    </OverviewItem>
                </div>
            </div>
        </div>
    )
}

Overview.propTypes = {
    formData: PropTypes.object.isRequired,
    setActiveStep: PropTypes.func.isRequired,
}

export default Overview