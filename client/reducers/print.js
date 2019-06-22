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
      /*
       * print handler는 디바이스 특성을 가지므로, 비동기 함수를 전제로 한다.
       * print handler : async function handler(printer, { accept, content, name, options })
       */
      return {
        ...state,
        printerTypes: {
          ...state.printerTypes,
          [action.printerType]: action.handler
        }
      }

    case UPDATE_PRINTER:
      /*
       * printer : { type, name }
       */
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
