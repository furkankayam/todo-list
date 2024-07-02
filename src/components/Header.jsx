import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";

const Header = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prevTodo) => [{
      id: nanoid(),
      title: todo
    }, ...prevTodo]);
    setTodo("");
  };

  return (
    <>
      <header>
        <nav>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 m-5 mt-10 justify-center md:flex-row"
          >
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="bg-transparent text-white border-2 border-[#01EEFB] rounded-md p-2 text-[18px] hover:border-white duration-300 cursor-text"
              placeholder="ToDo Ekle"
            />
            <button
              disabled={!todo}
              type="submit"
              className="border-2 rounded-md p-2 text-[#01EEFB] border-[#01EEFB] hover:border-white hover:text-white duration-300 w-[25%] mx-auto md:w-[100px] md:m-0 cursor-pointer"
            >
              Ekle
            </button>
          </form>

          <hr className="mt-7 mb-7 w-[33%] mx-auto" />
        </nav>
      </header>
    </>
  );
};

export default Header;
