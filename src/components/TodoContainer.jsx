import React from "react";
import { useGlobalContext } from "../context";
import Todo from "./Todo";

const TodoContainer = () => {
  const { todo, handleToggle, toggleCreating } = useGlobalContext();

  return (
    <div className="max-w-[1100px] px-5 py-5">
      <div>
        <button
          className="bg-[#E06469] text-[#fff] px-4 py-2 rounded"
          onClick={() => {
            handleToggle();
            toggleCreating();
          }}
        >
          Add a new todo
        </button>
      </div>
      <div className="flex gap-3 flex-wrap mt-10">
        {todo.map((item) => {
          return <Todo key={item._id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
