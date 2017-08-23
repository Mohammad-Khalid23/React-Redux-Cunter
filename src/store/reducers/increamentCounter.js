import CounterAction from '../actions/counterAction.js'
const INITIAL_STATE = {
    inCounterValue: 0
}
function increamentCounter(state = INITIAL_STATE, action) {
    console.log(action.val)
    console.log(action.type)
    
    switch (action.type) {
        case CounterAction.INCREAMENT_WITH_VALUE:
            return Object.assign({}, state, { inCounterValue: state.inCounterValue + action.val })
       
            default:
            return state;
    }
}
export default increamentCounter;