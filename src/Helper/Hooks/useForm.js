import {useState} from 'react'

export default function useForm(initialState) {
    const [state, setstate] = useState(initialState)

    function UpdateState(event) {
        setstate(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    return {state, UpdateState}
}
