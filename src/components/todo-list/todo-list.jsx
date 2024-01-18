import { useContext, useState } from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todoItem) => {
      return todoItem.id !== id;
    });
    setTodos(updatedTodos);
    // Görevi silme özelliğini düzeltin
  };

  const toggleCheck = (id) => {
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem.checked
          ? (todoItem.checked = false)
          : (todoItem.checked = true);
        return todoItem;
      }
      return todoItem;
    });
    setTodos(updatedTodos);
    // Görevi değiştirme yeteneğini düzeltin
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Yapılacak Görevler:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Görünüşe göre bugün özgürsün</div>
      )}
    </div>
  );
};
