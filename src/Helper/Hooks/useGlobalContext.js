import React, {useContext, createContext, useReducer} from 'react'

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
    }
}



export default function Provider(props) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return <Context.Provider value={[state, dispatch]} {...props} />
}
