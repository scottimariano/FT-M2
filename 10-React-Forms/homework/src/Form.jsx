import React, { useState } from 'react';

export function validate(obj){
  let errors = {};
  if (!obj.username){
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(obj.username)){
    errors.username = 'Username is invalid';
  }

  if(!obj.password){
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(obj.password)){
    errors.password = 'Password is invalid';
  }

  return errors
}


export default function  Form() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [input, setInput] = useState({username: '', password: ''});
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
    setErrors(validate({...input, [e.target.name]: e.target.value}))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'} type="text" name='username' value={input.username} onChange={handleInputChange}/>
        {errors.username && (<p className='danger'>{errors.username}</p>)}
        <label>Password:</label>
        <input className={errors.password && 'danger'} type="password" name='password' value={input.password} onChange={handleInputChange}/>
        {errors.password && (<p className='danger'>{errors.password}</p>)}
      </div>
      <input type="submit" value="Submit" />
    </form>
  )
}
