import {ADD_TODO, REMOVE_TODO} from "./action.types"

export default (state, action) => {
    switch (action.type) { //these actions are transferrer\d thru dispatch
        case ADD_TODO:
            return [...state,action.payload] //payload carries information but in our case it is going to carry string of our todos
            
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
    
        default:
            return state;
    }
}