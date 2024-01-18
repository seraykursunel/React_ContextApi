import { useContext } from "react";
import "./todo-results.scss";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const calculateChecked = () => {
    const calculate = todos.reduce((sum, todoItem) => {
      if (todoItem.checked === true) {
        return sum + 1;
      }
      return sum;
    }, 0);

    return calculate;
    // Tamamlanan görevleri hesaplama yeteneğini düzeltin
  };

  return (
    <div className="todo-results">
      Yapılanlar:
      {calculateChecked()}
    </div>
  );
};
