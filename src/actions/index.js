const ADD_TODO = 'ADD_TODO'
const addTodo = (message) =>({
    type:ADD_TODO,
    message,
    id:Math.random(),
})

const DELETE_TODO = 'DELETE_TODO'
const deleteTodo = (id) =>({
    type:DELETE_TODO,
    id,
})