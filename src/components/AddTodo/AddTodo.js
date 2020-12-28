import React from 'react'
import {connect} from "react-redux"
import {addTodo} from "../../actions"


const AddTodo = (props) => {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            let input = event.target.userInput.value;
            props.dispatch(addTodo(input));
        }}>
            <input type="text" name="userInput" />
            <button type="submit">submit</button>
        </form>
    )
}

export default connect()(AddTodo)
