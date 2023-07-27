import logo  from './assets/img/logoGitHub.png'

function App() {

  return (
    <main className="w-full h-screen flex flex-col items-center ">
      <section className='flex flex-col items-center mt-12'>
        <div className='w-[48px]' > <img src={logo} alt="Logo git" className='object-cover w-full'/> </div>
        <h2 className='text-[24px] font-light m-6'>Sign in to GitHub</h2>
        <div>
          <form className='bg-[#F6F8FA] flex flex-col p-4 gap-5 border rounded-[.4rem]'>
            <div className='flex flex-col w-[274px]'>
              <label htmlFor="userName" className='text-[14px] pb-2'>Username or email address</label>
              <input type="text" id='userName' className='rounded-[.4rem] h-8 border'/>
            </div>

            <div className='flex flex-col w-[274px]'>
              <div className='w-full flex justify-between text-[14px] pb-2'><label htmlFor="password">Password</label> <a href="#" className='text-[12px] text-[#0969da]'>Forgot password?</a></div>
              <input type="text" id='userName' className='rounded-[.4rem] h-8 border'/>
            </div>

            <div className='w-274px[]'>
              <button className='border w-full h-8 bg-[#1f883d] text-white  rounded-[.4rem] text-[14px]'>Sign in</button>
            </div>
          </form>
          <div className='flex border mt-4 rounded-[.5rem] justify-center items-center p-4 text-[14px]'>
            <p>New to GitHub? <a href="#" className='text-[#0969da]'>Create an account</a>.</p> 
          </div>
        </div>
      </section>

      <section className='flex gap-4 text-[12px] text-[#0969da] mt-20'>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#" className='text-gray-600'>Contact GitHub</a>
      </section>

      <footer className='mt-8 text-[#1f883d] text-[1.5rem] font-bold'>P.G</footer>  
    </main>
    
  )
}

export default App
