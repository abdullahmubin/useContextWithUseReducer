import React, { useContext } from "react";
import TodoContext from "./todoContext";
import Todo from "./Todo";
const TodoList = () => {
    const [state] = useContext(TodoContext);
    return (
        <div className="todos">
            {state.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};
export default TodoList;