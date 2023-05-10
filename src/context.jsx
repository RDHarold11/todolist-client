import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [isCreating, setIsCreating] = useState(true);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });

  const handleToggle = () => {
    setToggleSidebar(true);
  };
  const closeSidebar = () => {
    setToggleSidebar(false);
  };
  const toggleCreating = () => {
    setIsCreating(true);
  };
  const toggleIsNotCreating = () => {
    setIsCreating(false);
  };

  const handleChange = (e) => {
    setNewTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://api-todolist.up.railway.app/todo/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = async (e) => {
    e.preventDefault();
    if (!isCreating) {
      try {
        await axios.patch(
          `https://api-todolist.up.railway.app/todo/${itemId}`,
          newTodo
        );
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    setItemId(null);
  };

  const createNewItem = async (e) => {
    e.preventDefault();
    if (isCreating) {
      try {
        await axios.post("https://api-todolist.up.railway.app/todo", newTodo);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api-todolist.up.railway.app/todo");
      setTodo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        todo,
        toggleSidebar,
        isCreating,
        itemId,
        setItemId,
        handleToggle,
        closeSidebar,
        deleteItem,
        updateItem,
        createNewItem,
        handleChange,
        toggleCreating,
        toggleIsNotCreating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
