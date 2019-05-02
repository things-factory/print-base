import { TOGGLE_PRINT_LIST } from '../actions/print'

const INITIAL_STATE = {
  show: false,
  prints: ['HP DesignJet 60 Z6610', 'CANON IR ADV C5550i II', 'EPSON aculaser-C9300N A3']
}

const main = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PRINT_LIST:
      return { ...state, show: !state.show }

    default:
      return state
  }
}

export default main
