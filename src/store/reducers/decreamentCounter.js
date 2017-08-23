import CounterAction from '../actions/counterAction.js'
const INITIAL_STATE = {
    decCounterValue: 0
}
function decreamentCounter(state = INITIAL_STATE, action) {
    console.log(action.val)
    console.log(action.type)

    switch (action.type) {
        
        case CounterAction.DECREAMENT_WITH_VALUE:
            return Object.assign({}, state, { decCounterValue: state.decCounterValue - action.val })

        default:
            return state;
    }
}
export default decreamentCounter;