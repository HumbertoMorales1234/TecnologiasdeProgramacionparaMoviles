import { createSlice } from '@reduxjs/toolkit'
import { handleShowError } from '../helpers/showErro'

const initialState = {
    canAdd: true,
    editId: '',
    inputVal: '',
    toDos:[]
}

const getDate = () =>{
    const currentDate = new Date()
    formatedDate =  ''+currentDate.getFullYear()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getDate()+' '+currentDate.getHours()+':'+currentDate.getMinutes()    
    return formatedDate
  }

export const todoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {

    handleAddToDo: (state, action) => {
        if(state.inputVal.length >= 11)return(handleShowError('El nombre de la tarea es muy largo'))

        if (state.inputVal === '')return(handleShowError('La tarea debe tener un nombre'))

        if(state.canAdd){
            const existingTodo=state.toDos.some( todo=> todo.name.toLowerCase() === state.inputVal.toLowerCase())
            if (existingTodo) return handleShowError('La tarea ya existe')
            let date = getDate()
            state.toDos = ([
                ...state.toDos, //Spread operator, mantener lo que ya había
                {
                id: new Date().toISOString(), 
                name: state.inputVal, 
                isCompleted: false,
                isUpdating: false,
                created: date,
                updated: '',
                }
            ])
            state.inputVal = ''
        }else{

        //----------------------------------------------------------------------------------------------
        //Verificar que no exista esa Tarea
        let tareaExiste = false
        state.toDos.map(todo =>{
            if(todo.id !== state.editId && todo.name === state.inputVal) return (tareaExiste=true)
        })

        if(tareaExiste)return(handleShowError('Ya hay una tarea con ese nombre'))
        //----------------------------------------------------------------------------------------------

        //----------------------------------------------------------------------------------------------
        //Cambiar los datos editados
        const mappedTodo = state.toDos.map(todo =>{
            if (todo.id === state.editId){
            let date = getDate()
            return {
                ...state.toDos, 
                name: state.inputVal, 
                isUpdating:false, 
                updated: date
            }
            }
            return todo
        })

            state.toDos = mappedTodo
            state.canAdd = true
            state.inputVal = ''
            state.editId = ''
        }
    },
    
    handleDeleteToDo: (state, action) => {
        const filteredArray = state.toDos.filter(todo=> todo.id !== action.payload)
        state.toDos = filteredArray
    },

    handlePressEditToDo: (state, action) =>{
        //Si otro To do estaba en modo de edición, lo desactiva
        const mappedArray = state.toDos.map( todo =>{
        if( todo.id !== action.payload && todo.isUpdating){
            return {...todo, isUpdating:false}
        }
  
        //Cambia el botón a activar o desactivar el modo de edición
        if( todo.id === action.payload){
          if(todo.isUpdating){
            state.canAdd = true
            state.inputVal = ''
            return {...todo, isUpdating: false}
          }
          state.canAdd = false
          state.editId = action.payload
          state.inputVal = todo.name
          return {...todo, isUpdating:true}
        }
        return todo
      })
      state.toDos = mappedArray
    },

    handleCompleteToDo: (state, action) => {
        const mappedArray = state.toDos.map( todo =>{
            if (todo.id === action.payload){
              if(todo.isCompleted){
                return {...todo, isCompleted: false}
                }
              return {...todo, isCompleted: true}
            }
            return todo
          })
          state.toDos= mappedArray
    },

    setInputValue: (state, action) => {
        state.inputVal = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { 
    handleAddToDo,
    handleDeleteToDo,
    handlePressEditToDo,
    handleCompleteToDo, 
    setInputValue,
} = todoSlice.actions

export default todoSlice.reducer