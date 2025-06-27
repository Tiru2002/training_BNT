import React from 'react'
import './App.css'
import Counter from './components/Counter'
import ToggleMessage from './components/toggle'
import ParentComponent from './components/ParentComponent'
import GrandParent from './components/GrandParent'
import NameList from './components/NameList'
import CheckboxMessage from './components/Checkbox'
import ControlledInput from './components/ControlledInput'
import LoginForm from './components/LoginForm'
import ClickCounter from './components/ClickCounter'
import InputFieldUsed from './components/inputFieldused'
import TodoApp from './components/TodoApp'
import ItemList from './components/ItemListI'
function App() {
  return (
    <>
    <Counter/>
    <ToggleMessage/>
    <ParentComponent />
     <GrandParent /> 
     <NameList/>
     <CheckboxMessage/> 
     <ControlledInput/>
     <InputFieldUsed/>
     <LoginForm/>
     <ItemList/>
     <TodoApp/>
     <ClickCounter/>
     </>
      
  )
}

export default App
