import { HIDE_ALERT, SHOW_ALERT } from './../types';

const handlers = {
    [HIDE_ALERT]: state =>  ({...state, visible: false}),
    [SHOW_ALERT]: (state, {payload}) =>  ({...payload, visible: true}),
    DEFAULT: state => state,
}

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return (state, action)
}