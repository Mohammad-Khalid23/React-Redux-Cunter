import {createStore} from 'redux'
import increamentCounter from './reducers/increamentCounter.js'
import decreamentCounter from './reducers/decreamentCounter.js'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    increamentCounter,
    decreamentCounter
})

let store = createStore(rootReducers);
store.subscribe(()=>{
    console.log(store.getState())
})
export default store;