import { UPDATE_PRINTER, APPEND_PRINTER } from '../actions/print'

const INITIAL_STATE = {
  printers: []
}

const print = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRINTER:
      let printers = action.printer
      if (!Array.isArray(printer)) {
        printers = [printers]
      }

      return {
        ...state,
        printers: [...state.printers, ...printers]
      }

    case APPEND_PRINTER:
      return {
        ...state,
        printers: [...printers, action.printer]
      }

    default:
      return state
  }
}

export default print
