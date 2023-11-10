import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, Todos, TodosItem } from './pages';

function App() {
    const router = createBrowserRouter ( [
      {path:'/' , element: <Home />} ,
      {path:'todos' , element: <Todos />} ,
      {path:'todos/:id' , element: <TodosItem />} ,
    ]

  )
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App;
