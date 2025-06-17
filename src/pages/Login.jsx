import FormIn from './FormIn';
const Login = () => {
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <div className='flex items-center justify-center w-full h-full lg:w-1/2 bg-gray-50'>
        <FormIn />
      </div>
      <div className='relative flex items-center justify-center w-1/2 h-full bg-gray-200 max-lg:hidden'>
        <div className='rounded-full w-44 h-44 bg-gradient-to-r animate-bounce from-sky-300 to-main-blue'></div>
        <div className='absolute bottom-0 w-full h-1/2 backdrop-blur-lg'></div>
      </div>
    </main>  
  )
}

export default Login
