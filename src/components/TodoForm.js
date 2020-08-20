import React , {useStae, useContext, useState} from "react"
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import {ADD_TODO} from "../context/action.types"

const TodoForm = () => {
    const [todoString, setTodoString] = useState("")
    //create a dispatch

    const {dispatch} = useContext(TodoContext);
//firing this dispatch
//crateing onclick method when someone clicks on add_todo
const handleSubmit = e => {
    e.preventDefault();
    if (todoString === "") {
        return alert("please enter a todo")
    }
    const todo = {
        todoString,
        id: v4()
    }
    dispatch({
        type: ADD_TODO,
        payload: todo
    })
    setTodoString("")
}

    return (
        <Form onSubmit = {handleSubmit}>
        <FormGroup>
        <InputGroup>
        <Input
        type = "text"
        name = "todo"
        id = "todo"//TODO: value, onChange
        placeholder = "Your next Todo"
        value = {todoString} 
        onChange = {e => setTodoString(e.target.value)}

        />
        <InputGroupAddon addonType = "prepend">
        <Button
        color = "warning"
        //todo: ONCLICK
        >Add
        </Button>
        </InputGroupAddon>
        </InputGroup>
       
        </FormGroup>
        </Form>
    )

}

export default TodoForm;