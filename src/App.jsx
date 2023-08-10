import {useLocalStorage as Store} from "./hooks"
import {Auth} from "./pages"

function App() {
  
  const {
    set, get, 
    
  } = Store()
set("user", "Mwero Abdalla")
  return (
    
      <div className ="w-full flex flex-col px-2 py-2 min-h-fit h-screen md:px-16 bg-slate-200">
      
     { get("user") ? 
      
      <Auth />  : <h2> Welcome Home </h2>
      
     }
      
      
        </div>
    
  )
}

export default App
