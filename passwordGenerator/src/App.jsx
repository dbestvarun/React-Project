import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(()=>{
    let result = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed)  str+="0123456789";
    if(charAllowed) str+="$@&*_!*";

    for(let i=1; i<=length; i++){
      const idx = (parseInt(Math.random()*str.length + 1));
      result += str.charAt(idx);
    }
    setPassword(result);
  },[length, numAllowed, charAllowed, setPassword]);

  useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator]);

  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="main">
        <div className="generator">
          <div className="displayContainer">
          <input className="displayPassword" placeholder='password' type="text" value={password} ref={passwordRef} readOnly/>
          <button className="copy" onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className='options'>
            <input type="range" onChange={(e)=> setLength(e.target.value)} min='8' max='69'/> <label >Length: {length}</label>
            <input type="checkbox" defaultChecked={numAllowed} onChange={()=> {setNumAllowed((prev)=>!prev)}} /> Numbers
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=> {setCharAllowed((prev)=>!prev)}}/> Special Characters
          </div>
        </div>
      </div>
    </>
  )
}

export default App
