import { UPDATE_PRINTER, APPEND_PRINTER, REGISTER_PRINTER_TYPE } from '../actions/print'
import { paperPrinterHandler } from '../handlers/paper-printer-handler'

const INITIAL_STATE = {
  types: {
    paper: paperPrinterHandler
  },
  printers: []
}

const print = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_PRINTER_TYPE:
      return {
        ...state,
        types: {
          ...state.types,
          [action.type]: action.handler
        }
      }

    case UPDATE_PRINTER:
      let printers = action.printer
      if (!Array.isArray(printers)) {
        printers = [printers]
      }

      return {
        ...state,
        printers: [...state.printers, ...printers]
      }

    case APPEND_PRINTER:
      return {
        ...state,
        printers: [...state.printers, action.printer]
      }

    default:
      return state
  }
}

export default print
