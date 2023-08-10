import {useLocalStorage as Store} from "./hooks"

function App() {
  
  const {
    set, get, 
    
  } = Store()
set("user", "Mwero Abdalla")
  return (
    
      <div className ="w-full flex-1 px-2 py-2 min-h-fit h-screen md:px-16 bg-slate-200">
      <h1 className="text-center text-bold ">Welcome To Advanced Todo List {get("user")}</h1>
        </div>
    
  )
}

export default App
