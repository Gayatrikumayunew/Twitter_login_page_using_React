import logo from './logo.svg';
import './App.css';
import tw from './tw (1).png'
import go from './go (1).png'
import ap from './ap (1).png'


function App() {
  return (
    <div className='flex justify-center items-center '>
      <div className='  bg-white py-4 px-20  absolute top-36 rounded flex flex-col items-center custom-class  '>
  <img src={tw} className='h-6' alt='Twitter Logo' />
  <h2 className='font-bold mt-5 '>Sign In to Twitter</h2>

  <button className='w-full px-9 py-3 flex items-center justify-center gap-2  my-3 rounded-3xl border border-customColor1 cursor-pointer font-bold text-sm'>
    <img src={go} className='h-6' alt='google.png'/>
    Sign in with Google
  </button>
  <button className='w-full px-9 py-3 flex items-center justify-center gap-2  my-1 rounded-3xl border border-customColor1 cursor-pointer font-bold text-sm'>
    <img src={ap} className='h-6' alt='google.png'/>
    Sign in with Apple
  </button>
  <hr className="mt-3 w-full border border-gray-500" />
  <span>or</span>
  <form >
    <input className='w-full  bg-transparent border border-customColor1 outline-0 px-3 py-2 mx-auto mt-2 rounded' type='text'placeholder='Phone email or username'/>
    <button className=' w-full  rounded-3xl bg-black text-white mt-5 h-8 mb-2'>Next</button>
    <button className='m-0 p-0 w-full  rounded-3xl bg-transparent text-black border border-black outline-0  h-8 '>Forgot Password</button>


    <p className='text-center mt-2'>Don't have an account <a className='text-blue-600 underline'>Sign Up</a></p>
  </form>


</div>

     </div>
  );
}

export default App;
