import React, {useState} from 'react'

export default function BusSeat() {
      const [btncolor, setbtnColor] =useState(true)
      const handleButton= (e)=>{
            const value = e.target.value;
            console.log(value);
            window.alert(value);
            colorChange()
      const colorChange=()=>{
            setbtnColor(false)
      }
}
      return (
          
           
            <div>
            <input type="button" value="A11" className="btn-class" onClick={handleButton}></input>
            </div>
      )
}
