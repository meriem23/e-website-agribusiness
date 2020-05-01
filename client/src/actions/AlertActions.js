import { SET_ALERT, REMOVE_ALERT } from './types'

export const setAlert = (msg, type, id) => disptach => {
    disptach({
        type: SET_ALERT,
        payload: { msg, type, id }
    })
}

export const removeAlert = id => disptach => {
    disptach({
        type: REMOVE_ALERT,
        payload: id
    })
}