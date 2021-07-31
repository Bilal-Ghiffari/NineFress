import {useRef, useLayoutEffect, useCallback} from 'react';


export default function useSafeDispatch(dispatch) {
    // sebelum komponen diupdate / Didmount
    const mounted = useRef(false)

    useLayoutEffect(() => {
        // ketika sudah dicetak diDom / sudah melewati DidMount atau Didupdate
        mounted.current = true
        return () => {
            mounted.current = false
        };
    }, [])

    return useCallback((...args) => 
        (mounted.current ? dispatch(...args) : void 0),
        [dispatch],
    )
}
