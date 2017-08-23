export default class CounterAction {
    static INCREAMENT = "INCREAMENT"
    static DECREAMENT = "DECREAMENT"
    static INCREAMENT_WITH_VALUE = "INCREAMENT_WITH_VALUE"
    static DECREAMENT_WITH_VALUE = "DECREAMENT_WITH_VALUE"

    static increament(){
        return{
            type:"INCREAMENT",
            val : 1
        }
    }
    static decreament(){
        return{
            type:"DECREAMENT",
            val : 1
        }
    }
    static increamentWithValue(value){
        return{
            type:"INCREAMENT_WITH_VALUE",
            val : value
        }
    }
    static decreamentWithValue(value){
        return{
            type:"DECREAMENT_WITH_VALUE",
            val :value
        }
    }


}