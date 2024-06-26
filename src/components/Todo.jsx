import { useState } from 'react'
import { FaPlus, FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  }

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  }

  // console.log(newTodoText);
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <h1 className='mt-3 mb-6 text-2xl font-bold text-center'>Todo App</h1>

      <div className='flex items-center mb-4'>
        <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name='addTodo' id='addTodoInput' placeholder='Add Todo' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
        <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none' onClick={handleAddTodoClick}>
          <FaPlus />
        </button>
      </div>

      {/* search */}
      <div className='flex items-center justify-between'>
        <FilterButton />
        <div className='flex items-center mb-4'>
          <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name='search' id='addTodoInput' placeholder='Search' className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
          <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none' onClick={handleAddTodoClick}>
            <FaSearch />
          </button>
        </div>
      </div>

      <TodoList>
        
      </TodoList>
    </div>
  )
}

export default Todo