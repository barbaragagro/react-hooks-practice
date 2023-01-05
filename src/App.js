
import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import ContextComponent from './ContextComponent';

export  const Context = React.createContext(); 

function App() {

  const [darkTheme, setdarkTheme] = useState(true);
  const renderCount = useRef(1);
  const inputRef = useRef();

  const [name, setname] = useState('')
  const prevName =useRef('')
  

 const toggleTheme = () => {
      setdarkTheme((prevDarkTheme)=>!prevDarkTheme)
  }

  useEffect(() => {
    renderCount.current = renderCount.current +1; 
    console.log("rendered")
  },)

  useEffect(()=>{
    prevName.current = name
  }, [name])

  const focus = () => {
    inputRef.current.focus()
  }
  
  return (
    <div className={darkTheme?'darkStyle App':' App lightStyle'}>
   
     
      <h1 className='h1c'>React Hooks Practice Project</h1>
      <br/>
      <Context.Provider value={darkTheme}>
     
        <button className='button' onClick={toggleTheme}>Toggle</button>
        <ContextComponent/>
      </Context.Provider>
<br/>
      <div className='second'>
        <h3>My name is {name}</h3>
        <h3>My name used to be {prevName.current}</h3>

        <input className='inputc' ref={inputRef} value={name} onChange={e=>setname(e.target.value)}/>
        <br/>
        <button className='button' onClick={focus}>Focus</button>
        <p className='p'> Click on focus button to focus on input and type in your name.</p>

        <h3>I rendered {renderCount.current} times.</h3>
        <br/>
      </div>
    
    </div>
  );
}

export default App;
