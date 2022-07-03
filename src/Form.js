import React, { useState } from 'react'

function Form() {
    
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setFnumber] = useState('');
   
  return (
    <>
        
        <div className="main-div text-center">
        <h2>{fname} {lname}</h2>
        <p>{email}</p>
        <p>{number}</p>
            <form action=" ">
                <input type="text" className='form-control input' name='fname' placeholder='Enter your fname' onChange={(e)=>setFname(e.target.value)} /><br />
                
                <input type="text" className='form-control'  onChange={(e)=>setLname(e.target.value)} name='lname' placeholder='Enter your lname' /><br />
                <input type="text" className='form-control' name='' placeholder='Enter your Number' onChange={(e)=>setFnumber(e.target.value)} /><br />
                <textarea name="" className='form-control' placeholder='Leave a comment' onChange={(e)=>setEmail(e.target.value)} id="" cols="73" rows="5"></textarea><br />
                <button className='btn btn-primary ' type='submit' >Submit</button>
            </form>
        </div>
         
    </>
  )
}

export default Form