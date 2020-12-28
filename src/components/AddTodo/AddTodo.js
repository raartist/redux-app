import React from 'react'
import {connect} from "react-redux"
import { showAlert} from "../../actions/index"


const AddTodo = (props) => {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            let input = event.target.userInput.value;
            console.log(input);
            event.target.userInput.value= ""
        }}>
            <input type="text" name="userInput" />
            <button type="submit">submit</button>
        </form>
    )
}

export default connect()(AddTodo)
