import { UPDATE_PRINTER } from '../actions/print'

const INITIAL_STATE = {
  printers: []
}

const print = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRINTER:
      let printers = state.printers.slice()
      if (Array.isArray(action.printer)) {
        printers = printers.concat(action.printer)
      } else {
        printers.push(action.printer)
      }

      return {
        ...state,
        printers: printers
      }

    default:
      return state
  }
}

export default print
