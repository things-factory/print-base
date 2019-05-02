import { UPDATE_PRINT_BASE } from '../actions/print'

const INITIAL_STATE = {
  prints: ['HP DesignJet 60 Z6610', 'CANON IR ADV C5550i II', 'EPSON aculaser-C9300N A3']
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRINT_BASE:
      return { ...state }

    default:
      return state
  }
}

export default main
