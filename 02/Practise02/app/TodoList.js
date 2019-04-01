import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ type, todos, deleteTodo, toggleComplete }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos
      case 'Complete':
        return todos.filter((t) => t.complete)
      case 'Active':
        return todos.filter((t) => !t.complete)
    }
  }

  todos = getVisibleTodos(todos, type)

  todos = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        todo={todo} />
    )
  })

  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList
