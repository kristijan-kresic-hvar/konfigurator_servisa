import React from 'react'

// third party libraries
import PropTypes from 'prop-types'

const ContactData = ({ formData, setFormData }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            kontakt_podatci: {
                ...prevState.kontakt_podatci,
                [name]: value
            }
        }))
    }

    return (
        <div className="w-full mb-3">
            <h2 className="text-2xl mb-7 mt-7">Korak 3. Vaši kontakt podatci</h2>
            <fieldset
                className="flex flex-wrap w-[90%] md:w-[80%] mx-auto"
                id="contactData"
            >
                <div class="flex flex-wrap w-full mb-3">
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="ime_i_prezime"
                        >
                            Ime i prezime *
                        </label>
                        <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            id="ime_i_prezime"
                            type="text"
                            name="puno_ime"
                            value={formData.kontakt_podatci.puno_ime}
                            onChange={handleChange}
                            placeholder="Ime i prezime *"
                        />
                    </div>
                    <div class="w-full md:w-1/2 mb-3 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email_adresa"
                        >
                            Email adresa *
                        </label>
                        <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            id="email_adresa"
                            type="text"
                            name="email_adresa"
                            value={formData.kontakt_podatci.email_adresa}
                            onChange={handleChange}
                            placeholder="Email adresa *"
                        />
                    </div>
                </div>
                <div class="flex flex-wrap w-full mb-3">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="broj_telefona"
                        >
                            Broj telefona *
                        </label>
                        <input
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            id="broj_telefona"
                            type="text"
                            name="broj_telefona"
                            value={formData.kontakt_podatci.broj_telefona}
                            onChange={handleChange}
                            placeholder="Broj telefona *"
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="napomena">
                            Napomena
                        </label>
                        <textarea
                            id="napomena"
                            rows="4"
                            name="napomena"
                            value={formData.kontakt_podatci.napomena}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Napomena (opcionalno)"
                        />
                    </div>
                </div>
            </fieldset>
        </div >
    )
}

ContactData.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired
}

export default ContactData