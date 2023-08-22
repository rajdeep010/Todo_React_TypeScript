import AddToDo from "./components/addtodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"


const App = () => {
  return (
    <>
      <main>
        <Navbar/>
        <h1>TODO REACT + TYPESCRIPT</h1>
        <AddToDo />
        <Todos/>
      </main>
    </>
  )
}

export default App