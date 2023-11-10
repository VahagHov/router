import {  useParams } from 'react-router-dom'
import { Todoitem } from '../Todos';

export const TodosItem = ({setTodos}: any) => {
    const params = useParams ()

const todos: Todoitem[] | null = localStorage.getItem("todos") &&
       JSON.parse(localStorage.getItem("todos")as string);

    const todo = todos?.find((t) => t.id === +(params.id || 0))
  return todo ? <div>{todo.text}</div> : <div>id: {params.id} is not valid </div>
}
