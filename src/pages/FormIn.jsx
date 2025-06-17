import { useState } from 'react'
import { Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const FormIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  return (
    <div className='capitalize bg-white rounded-lg p-14'>
          <h1 className='mb-6 text-5xl font-bold text-center'>Welcome Back</h1>
          <h3 className='mb-10 text-lg font-semibold text-slate-600'>welcome back please enter your detailes</h3>
          <form className=''>
              <div>
                <label  className='font-bold ' htmlFor="email">email</label>
                <input id='email' className='w-full p-3 mt-3 mb-4 border rounded-md shadow-sm border-slate-200 focus:outline-none' placeholder='enter your email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div> 
                <label htmlFor="pass" className='font-bold '>password</label>
                <input id='pass' className='w-full p-3 mt-3 border rounded-md shadow-sm border-slate-200 focus:outline-none' placeholder='enter your password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                  <input type="checkbox" id='check'/>
                  <label htmlFor="check">remeber for 30 days</label>
                  <a href="" className=' decoration-clone text-main-blue'>forgot password</a>
              </div>
              <div className='mt-8'>
                  <button className='w-full p-3 text-white rounded-lg bg-main-blue'>Sign In</button>
          <button className=''> <Google sx={{ color: "red" }} /> Sign in with Google</button>
          <Link to={"#"} className='block text-center shadow-md font-medium rou p-5 mt-3'> Don't have an account?</Link>
              </div>
          </form>
    </div>
  )
}

export default FormIn
