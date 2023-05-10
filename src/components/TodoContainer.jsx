import React from "react";
import { useGlobalContext } from "../context";
import { IoMdAddCircleOutline } from "react-icons/io";
import Todo from "./Todo";

const TodoContainer = () => {
  const { todo, handleToggle, toggleCreating } = useGlobalContext();

  return (
    <div className="max-w-[1100px] px-5 py-5">
      <div>
        <button
          className=" text-[#E06469] px-2 py-2 rounded"
          onClick={() => {
            handleToggle();
            toggleCreating();
          }}
        >
          <IoMdAddCircleOutline size={40} />
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
