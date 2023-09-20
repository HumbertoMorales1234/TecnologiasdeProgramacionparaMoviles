import { useState } from "react"
import { handleShowError } from "../helpers/showErro"

export const useTodos= () =>{
    
  const [todos, setTodo] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [canAdd, setCanAdd] = useState(true)
  const [editId, setEditId] = useState('')



  const getDate = () =>{
    const currentDate = new Date()
    formatedDate =  ''+currentDate.getFullYear()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getDate()+' '+currentDate.getHours()+':'+currentDate.getMinutes()    
    return formatedDate
  }
    
  //Agregar una tarea
  const handelAddTodo = () => {
    if(inputVal.length >= 11)return(handleShowError('El nombre de la tarea es muy largo'))

    if (inputVal === '')return(handleShowError('La tarea debe tener un nombre'))

    if(canAdd){
      const existingTodo=todos.some( todo=> todo.name.toLowerCase() === inputVal.toLowerCase())
      if (existingTodo) return handleShowError('La tarea ya existe')
      let date = getDate()
      setTodo([
        ...todos, //Spread operator, mantener lo que ya había
        {
          id: new Date().toISOString(), 
          name:inputVal, 
          isCompleted: false,
          isUpdating: false,
          created: date,
          updated: '',
        }
      ])
      setInputVal('')
    }else{

      //----------------------------------------------------------------------------------------------
      //Verificar que no exista esa Tarea
      let tareaExiste= false
      todos.map(todo =>{
        if(todo.id !== editId && todo.name === inputVal) return (tareaExiste=true)
      })

      if(tareaExiste)return(handleShowError('Ya hay una tarea con ese nombre'))
      //----------------------------------------------------------------------------------------------

      //----------------------------------------------------------------------------------------------
      //Cambiar los datos editados
      const mappedTodo = todos.map(todo =>{
        if (todo.id === editId){
          let date = getDate()
          return {
            ...todo, 
            name:inputVal, 
            isUpdating:false, 
            updated: date
          }
        }
        return todo
      })

      setTodo(mappedTodo)
      setCanAdd(true)
      setInputVal('')
      setEditId('')
    }
  }
  
  // Eliminar una tarea
  const handleDeleteTodo = (todoId) => {
    const filteredArray = todos.filter(todo=> todo.id !== todoId)
    setTodo(filteredArray)
  }

  // Marcar o Desmarcar una tarea como completada
  const handleCompleteTodo = (todoId) => {
    const mappedArray = todos.map( todo =>{
      if (todo.id === todoId){
        if(todo.isCompleted){
          return {...todo, isCompleted: false}
          }
        return {...todo, isCompleted: true}
      }
      return todo
    })
    setTodo(mappedArray)
  }
  
  const handleUpdateButton = (todoId) => {
     
    //Si otro To do estaba en modo de edición, lo desactiva
    const mappedArray = todos.map( todo =>{
      if( todo.id !== todoId && todo.isUpdating){
        return {...todo, isUpdating:false}
      }

      //Cambia el botón a activar o desactivar el modo de edición
      if( todo.id === todoId){
        if(todo.isUpdating){
          setCanAdd(true)
          setInputVal('')
          return {...todo, isUpdating: false}
        }
        setCanAdd(false)
        setEditId(todoId)
        setInputVal(todo.name)
        return {...todo, isUpdating:true}
      }
      return todo
    })
    setTodo(mappedArray)
  }
  return {
    inputVal,
    canAdd,
    setInputVal,
    todos, 
    handelAddTodo,
    handleCompleteTodo,
    handleUpdateButton,
    handleDeleteTodo,
  }
}