
import './App.css';
function App() {

  return (
    <>

  <h1 className="title-main">Welcome</h1>
  <form action="">
    <input type="username" className='username' id='username' placeholder='Enter your usenrname: ' />
<input type="email" className='email' id='email' placeholder='Enter your email: ' />
<input type="password" className='password' id='password' placeholder='Enter your password: ' />
<button className='login-in'>Login-in</button>
<button className='sign-up'>Sign-up</button>
<a href="#" className='forgot'>Forgot password?
Rest password</a>
  </form>
    </>
  )
}

export default App
