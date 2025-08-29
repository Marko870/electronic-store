import { useState } from 'react'
import {Visibility,VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../features/services/ecommerceApi';
const FormIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [login,{isLoading}  ] = useLoginMutation();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  console.log(useLoginMutation(form));
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await login(form).unwrap();
      if (res.length > 0) {
        alert("✅ تسجيل الدخول ناجح، أهلاً " + res[0].name);
        // تقدر تخزن المستخدم بالـ localStorage مثلاً
        localStorage.setItem("user", JSON.stringify(res[0]));
      } else {
        setError("❌ البريد أو كلمة المرور غير صحيحة");
      }
    } catch (err) {
      setError("حدث خطأ في الاتصال بالسيرفر");
      console.error(err);
    }
  };

    
  return (
    <div className='capitalize bg-white rounded-lg p-14'>
          <h1 className='mb-6 text-5xl font-bold text-center'>Welcome Back</h1>
          <h3 className='mb-10 text-lg font-semibold text-slate-600'>welcome back please enter your detailes</h3>
          <form className=''onSubmit={handleSubmit} >
              <div>
                <label  className='font-bold ' htmlFor="email">email</label>
                <input id='email' className='w-full p-3 mt-3 mb-4 border rounded-md shadow-sm border-slate-200 focus:outline-none' name="email" placeholder='enter your email' type="email" value={form.email} onChange={handleChange} />
              </div>
              <div className='relative'> 
                <label htmlFor="pass" className='font-bold '>password</label>
          <input id='pass' className='w-full p-3 pr-10 mt-3 border rounded-md shadow-sm border-slate-200 focus:outline-none' placeholder='enter your password'
            type={showPass ? "text" : "password"} name='password' value={form.password} onChange={handleChange} />
          <button type='button' onClick={() => { setShowPass((perv) => !perv) }}
            className="absolute right-3 top-[40%] translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPass ? <VisibilityOff/> : <Visibility/>}
          </button>
              </div>
             
              <div className='mt-8'>
          <button type='submit' disabled={isLoading} className='w-full p-3 text-white rounded-lg bg-main-blue'>{isLoading ? "...loading" : "log in"}</button>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <Link to={"/SignUp"} className='block text-center shadow-md font-medium rou p-5 mt-3'> Dont have an account?</Link>
              </div>
          </form>
    </div>
  )
}

export default FormIn
