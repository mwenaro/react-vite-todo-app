

export default function useLocalStorage(){
  
  //stringify b4 storingbthe value into local localStorage
  const set = (key, value)=>window.localStorage.setItem(key, JSON.stringify(value))
  
  //Get stored items . return null if founfs nothing
  const get =(key)=>{
    let val = window.localStorage.getItem(key) ?? null
    return val == null ? null : JSON.parse(val)
    
  }
  //This method pushes onto an array of existing values
  const addTo = (key, value) =>{
    let values = get(key);
    let valueToBeStored = values == null? [value] : values.push(valu)
    set(key, valueToBeStored);
  }
  
  //Remove value
  const remove = (key)=>window.localStorage.removeItem(key)
  //Clear localStorage
  const clear = ()=>window.localStorage.clear()
  
  return {
    set,
    get,
    clear,
    remove,
    addTo
  }
}