import { store } from '@things-factory/shell'
import print from './reducers/print'

export default function bootstrap() {
  store.addReducers({
    print
  })
}
