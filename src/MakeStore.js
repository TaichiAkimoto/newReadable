import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import localForage from "localforage"
import {
  Posts,
  Category,
} from './reducers/Posts'

const config = {
  key: 'primary',
  storage: localForage,
  blacklist: ['routing']
}
    
const reducers = persistCombineReducers(config, {
  Posts,
  Category,
})
      
export const configureStore = () => {
  const store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(logger, thunk)
    )
  )
  const persistor = persistStore(store)
                                    
  return { persistor, store }
}
                                      
