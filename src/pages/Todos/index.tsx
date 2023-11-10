import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Todoitem {
    id: number,
    text: string,
    done: boolean
}

export const Todos = () => {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<Todoitem[]>([])
    
    const handleChange = (value: any) => setValue(value.target.value)

    const onAdd = () => {

        if(value.trim()) {

            setTodos((todos) => [...todos,
              { id: Date.now(), text: value.trim(), done: false }
        ])

        setValue('')

     }
    }

    useEffect(() => {

        const data = localStorage.getItem("todos");
        if (typeof data === 'string') {
            setTodos(JSON.parse(data));
        }
        
    }, []);

    console.log(todos);
    

    useEffect(() => {

        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])

    return (
        <div>
            This is Todos Page<br />
            <Link to='/'>Go To Home</Link> <br />

           
                <input
                    className="input__style"
                    type="text"
                    placeholder= "Write your Todo text ..."
                    onChange={handleChange}
                    value={value}
                 />
    
            <button
                className="btn"
                onClick={onAdd}>
                    Click
            </button>


            {todos.map((todo) => {

                return (
                    <div>
                        <input type="checkbox"  />
                        <Link to={`${todo.id}`}>{todo.text}</Link>
                    </div>
                )
            })}

        </div>
    )
}
