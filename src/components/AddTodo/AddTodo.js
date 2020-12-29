import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const AddTodo = (props) => {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let input = event.target.userInput.value;
          console.log(input);
          props.dispatch(addTodo(input));
          event.target.userInput.value = "";
        }}
      >
        <input type="text" name="userInput" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
