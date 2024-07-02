
import { useAutoAnimate } from "@formkit/auto-animate/react";
import React from "react";

const List = ({ todos, setTodos }) => {
    const [animationParent] = useAutoAnimate();

  const deleteTodo = id => {
    setTodos((todos) => todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <ul className="flex flex-col gap-3 w-[95%] mx-auto" ref={animationParent}>
        {todos.map(todo => (
          <li
            className="bg-transparent text-white p-2 text-[17px] border-2 border-[#01EEFB] rounded-md overflow-auto selection:bg-[#01EEFB] selection:text-[#091C2A] md:w-[45%] md:mx-auto flex justify-between items-center"
            key={todo.id}
          >
            {todo.title}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="border-2 p-2 rounded-md border-red-400 text-red-400"
            >
              Sil
            </button>
          </li>
        ))}
        {!todos.length && (
          <li className="bg-transparent text-white p-2 text-[17px] border-2 border-yellow-700 rounded-md overflow-auto selection:bg-[#01EEFB] selection:text-[#091C2A] md:w-[45%] md:mx-auto flex justify-between items-center">
            ToDo yok
          </li>
        )}
      </ul>
    </>
  );
};

export default List;
