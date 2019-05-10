import { UPDATE_PRINTER } from '../actions/print'

const INITIAL_STATE = {
  printers: []
}

const print = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRINTER:
      if (Array.isArray(action.printer)) {
        state.printers = state.printers.concat(action.printer)
      } else {
        state.printers.push(action.printer)
      }
      return { ...state }

    default:
      return state
  }
}

export default print
