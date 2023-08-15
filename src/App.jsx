
import {useState}  from "react"
import './App.css'

function App() {
  const [counter, setCounter] = useState(1)
const suma = ( ) => {
setCounter(counter + 1 )
}
const resta = () => {
  if(counter >= 1){

    setCounter(counter -1)
  }
}
const reset = () => {
  setCounter(0)
}

  return (
    <>
    
  <h1>{counter}</h1>
  <button onClick={suma}>+</button>
  <button onClick={resta}>-</button>
  <button onClick={reset}>reset</button>
    </>
  )
}

export default App

// git init = inicia el repositorio 
// git add . = 
// git commit -m "nombre"
// git branch = te muestra el menú de las ramas creadas 
// git checkout -b nombre rama = crear una nueva rama 
// git checkout nombre rama existente = para moverse entre ramas 