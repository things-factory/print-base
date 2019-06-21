import { UPDATE_PRINTER, APPEND_PRINTER, REGISTER_PRINTER_TYPE } from '../actions/print'
import { paperPrinterHandler } from '../handlers/paper-printer-handler'
import { previewPrinterHandler } from '../handlers/preview-printer-handler'

const INITIAL_STATE = {
  printerTypes: {
    paper: paperPrinterHandler,
    preview: previewPrinterHandler
  },
  printers: [
    {
      type: 'preview',
      name: 'Preview'
    }
  ]
}

const print = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_PRINTER_TYPE:
      return {
        ...state,
        printerTypes: {
          ...state.printerTypes,
          [action.printerType]: action.handler
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
