import React from "react";
import { useGlobalContext } from "../context";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Todo = ({ _id, title, description }) => {
  const { deleteItem, handleToggle, setItemId, toggleIsNotCreating } =
    useGlobalContext();
  return (
    <div className="w-[300px] rounded px-3 py-5 bg-[#408E91] text-white">
      <div>
        <h2 className="mb-3 flex items-center justify-between">
          {title}
          <div className="flex gap-1">
            <AiFillDelete
              size={20}
              cursor="pointer"
              className="text-[#E76161]"
              onClick={() => deleteItem(_id)}
            ></AiFillDelete>
            <AiFillEdit
              size={20}
              cursor="pointer"
              className="text-[#6DA9E4]"
              onClick={() => {
                handleToggle();
                toggleIsNotCreating();
                setItemId(_id);
              }}
            ></AiFillEdit>
          </div>
        </h2>
      </div>
      <hr />
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Todo;
