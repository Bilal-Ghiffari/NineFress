import React, {useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import {useGlobalContext} from 'Helper/Hooks/useGlobalContext';
import fetch from 'Helper/Fetch';
import useForm from 'Helper/Hooks/useForm';


export default function ShippingDetails() {
    const history = useHistory()
    const {dispatch} = useGlobalContext();
    // const {run, data} = useAsnyc()

    const {state: payload, UpdateState} = useForm({
        fullName: "",
        emailAddress: "",
        address: "",
        postalCode: "",
        phoneNumber: "",
        courier: "",
        paymentMethod: "",
    })

    console.log(payload)
    // data payload tidak boleh kosong
    const isSumbitDisabled = Object.keys(payload).filter(key => {
        return payload[key] !== ""
    }).length === Object.keys(payload).length

    // Post Data API
    async function Submit(event) {
        event.preventDefault();
        try {
            const response = await fetch({
                url : `https://ninefresh.herokuapp.com/api/market/user`,
                method: 'POST',
                body: JSON.stringify(payload)
            })
            if(response){
                history.push("/success")
                dispatch({
                    type: "RESET"
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full mt-10 md:w-4/12">
            <div className="bg-gray-100 px-4 py-10 md:p-8 md:rounded-3xl">
                <form onSubmit={Submit}>
                    <div className="flex flex-start mb-6">
                        <h3 className="text-2xl text-green-500">Shipping Details</h3>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="fullName" className="text-sm mb-2">
                            Full Name
                        </label>
                        <input type="text"
                            onChange={UpdateState}
                            value={payload.fullName}
                            name="fullName"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:outline-blue-200 focus:outline-none"
                            placeholder="Input Your Name"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="emailAddress" className="text-sm mb-2">
                            EmailAddress
                        </label>
                        <input type="email"
                            onChange={UpdateState}
                            value={payload.emailAddress}
                            name="emailAddress"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:outline-blue-200 focus:outline-none"
                            placeholder="Input Your Name"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="address" className="text-sm mb-2">
                            Address
                        </label>
                        <input type="text"
                            onChange={UpdateState}
                            value={payload.address}
                            name="address"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:outline-blue-200 focus:outline-none"
                            placeholder="Input Your Address"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="postalCode" className="text-sm mb-2">
                            postalCode
                        </label>
                        <input type="number"
                            onChange={UpdateState}
                            value={payload.postalCode}
                            name="postalCode"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:outline-blue-200 focus:outline-none"
                            placeholder="Input Your PostalCode"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="phoneNumber" className="text-sm mb-2">
                            phoneNumber
                        </label>
                        <input type="tel"
                            onChange={UpdateState}
                            value={payload.phoneNumber}
                            name="phoneNumber"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:outline-blue-200 focus:outline-none"
                            placeholder="Input Your PhoneNumber"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="courier">
                            Choose Courier
                        </label>
                        <div className="flex -mx-2">
                            <div className="px-2 w-full h-24 mb-4">
                                <button
                                    type="button"
                                    onClick={() => UpdateState({
                                        target: {
                                            name: "courier",
                                            value: "gojek"
                                        }
                                    })}
                                    className="border border-gray-200 focus:border-red-400 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img src="/images/content/logo-gojek.svg" alt="Logo-gojek" className="object-contain max-h-full" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="paymentMethod">
                            Choose paymentMethod
                        </label>
                        <div className="flex -mx-2">
                            <div className="px-2 w-full h-24 mb-4">
                                <button
                                    type="button"
                                    onClick={() => UpdateState({
                                        target: {
                                            name: "paymentMethod",
                                            value:  "COD"
                                        }
                                    })}
                                    className="border border-gray-200 focus:border-red-400 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img src="/images/content/logo-cod.svg" alt="Logo-gojek" className="object-contain max-h-full" />
                                </button>
                            </div>
                        </div>
                    </div>
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={!isSumbitDisabled}
                        className="bg-green-300 text-white hover:bg-green-500 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-300 px-6"
                    >
                        Check Now
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}
