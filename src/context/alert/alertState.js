import { useReducer } from "react"
import { AlertContext } from "./alertContext"
import { alertReducer } from "./alertReducer"
import { HIDE_ALERT, SHOW_ALERT } from './../types';

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false})

    function show(text, type='warning') {
        
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })
    }

    function hide() {
        dispatch({
            type: HIDE_ALERT,
        })
    }

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}