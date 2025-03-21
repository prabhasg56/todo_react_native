import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../../components/Common/CustomButton';
import CustomTextInput from '../../components/Common/CustomTextInput';
import ScreenWrapper from '../../components/ScreenWrapper';
import TodoItem from '../../components/ToDo/TodoItem';
import Toast from 'react-native-toast-message';

const TodoScreen = () => {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState({
    taskName: {
      label: "New Task*",
      value: "",
      required: true,
      error_msg: "",
      error: false,
      maxLength: 250,
      disabled: false,
      placeholder: 'Enter Task Name',
    },
  });

  useEffect(() => {
    const loadTodos = async () => {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos) setTodos(JSON.parse(savedTodos));
    };
    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInput = (label,value) => {
    if(!label) return;

    setTaskInput((prevTaskInput) => ({
      ...prevTaskInput,
      [label]:{
        ...prevTaskInput[label],
        value
      }
    }))
  }

  const addTodo = () => {
    const {taskName} = taskInput;

    if (!taskName.value) {
      Toast.show({
        type: 'info',
        text1: 'Please Enter The Task Name',
      });
      return;
    };
    setTodos([...todos, { id: Date.now(), title: taskName.value, completed: false }]);

    setTaskInput((prevTask) => ({
      ...prevTask,
      taskName: {
        ...prevTask.taskName,
        value: "", // Reset the value
      },
    }));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const {taskName} = taskInput;

  return (
    <ScreenWrapper title="Todo List">
      <CustomTextInput labelName={taskName.label} name={'taskName'} placeholder={taskName.placeholder} value={taskName.value} handleInput={handleInput} />
      <CustomButton label="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem item={item} onToggle={toggleComplete} onDelete={deleteTodo} />}
      />
    </ScreenWrapper>
  );
};

export default TodoScreen;
