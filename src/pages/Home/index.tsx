import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        This is Home Page<br />
        <Link to = 'todos'>Go To Todos</Link>
    </div>
  )
}
