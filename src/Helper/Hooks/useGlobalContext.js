import React, {useContext, createContext, useReducer, useState} from 'react'


const Context = createContext()
const initialState = {
    cart:{}
}

export function useGlobalContext() {
    const [state, dispatch] = useContext(Context)

    return {state, dispatch}
}

function Reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART" :
            return {
                ...state,
                cart: state.cart ? {...state.cart, [action.item._id]: action.item} :
                {[action.item._id]: action.item}
            };

            case "REMOVE_CART":
                return {
                    ...state,
                    cart: Object.keys(state.cart).filter(key => +key !== +action.id).reduce((acc, key) => {
                        const item = state.cart[key]
                        acc[item._id] = item;
                        return acc;
                    }, {})
                }

            case "RESET":
                return {
                    ...state,
                    cart: initialState.cart
                }

        default: {
            throw new Error(`Type Action Tidak ditemukan${action.type}`)
        }
    }

}


export default function Provider(props) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return <Context.Provider value={[state, dispatch]} {...props} />
}
