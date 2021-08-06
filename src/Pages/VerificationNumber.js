import React from 'react';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import useFrom from 'Helper/Hooks/useForm';
import Fetch from 'Helper/Fetch';
import { useHistory } from 'react-router-dom';
import {useGlobalContext} from 'Helper/Hooks/useGlobalContext'




export default function VerificationNumber() {

    const {state: payload, UpdateState} = useFrom({
        fullName: "",
        codeNumber: "",
        date: ""
    })

    const history = useHistory();
    const {dispatch} = useGlobalContext();
    async function Send(event) {
        event.preventDefault()
        try {
            const response = await Fetch({
                url: 'https://ninefresh.herokuapp.com/api/market/verif',
                method: 'POST',
                body: JSON.stringify(payload)
            })
            if (response) {
                history.push("/success")
                    dispatch({
                        type: "RESET"
                    })
            }
        }
        catch(error) {
            console.log(error)
        }
    }

    const SubmitDisabled = Object.keys(payload).filter(key => {
        return payload[key] !== ""
    }).length === Object.keys(payload).length

    return (
        <section className="mt-10">
            <div className="container mx-auto bg-gray-100 rounded-lg md:w-2/6 w-full">
                <div className="p-10">
                    <form onSubmit={Send}>
                        <div className="flex flex-start mb-6 font-bold">
                            <h3 className="text-2xl text-green-500">Verification</h3>
                        </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="fullName" className="text-sm mb-4 font-semibold">
                            Name
                        </label>
                        <input type="text"
                            onChange={UpdateState}
                            value={payload.fullName}
                            name="fullName"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:outline-blue-200 focus:outline-none"
                            placeholder="sutioso"
                        />
                    </div>

                    <div className="flex flex-col mb-5">
                        <label htmlFor="codeNumber" className="text-sm mb-4">
                            <p className="font-semibold pb-3">CodeNumber</p>
                            Let's make sure it's really you. We've just sent a text message<br/> 
                            with a fresh verification code to the phone number ending in ********2393
                        </label>
                        <input type="number"
                            onChange={UpdateState}
                            value={payload.codeNumber}
                            name="codeNumber"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:outline-blue-200 focus:outline-none"
                            placeholder="123454"
                        />
                    </div>
                    
                    <div className="flex flex-col mb-5">
                        <label htmlFor="date" className="text-sm mb-4 font-semibold">
                            Date
                        </label>
                        <DateTimePickerComponent placeholder="Choose a date and time" format="dd-MMM-yy HH:mm" name="date" onChange={UpdateState} value={payload.date}/>
                    </div>
                    <div className="text-center">
                    <button
                        type="submit"
                        disabled={!SubmitDisabled}
                        className="bg-green-500 text-white focus:bg-black focus:text-white focus:outline-none w-full py-3 rounded-full text-lg transition-all duration-300 px-6 font-big"
                    >
                        Send
                    </button>
                </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
