const TodoItem = ({ todo }) => {
    if (todo.isCompleted) {
        return <li>{todo.content} {'✓'}</li>
    }

    return <li>{todo.content}</li>
}

export default TodoItem;