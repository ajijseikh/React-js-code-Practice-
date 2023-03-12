
/// Basic Form Validation : 
// import React,{useState} from 'react';
// function Login(){
// const [user,setUser]=useState("");
// const [password,setPassword]=useState("");
// const [userError,setUserError]=useState(false);
// const [passwordError,setPasswordError]=useState(false);

//     // this loguinHandler function handle to reload our page : 
//    function loginHandler(e)
//    {
//      if(user.length<5 || password.length<8){
//         alert("provide correct value")
//      }else{
//         alert("all Good : ")
//      }
//     e.preventDefault()
//  }
//  function useHandler(e){
//     let item=e.target.value
//      if(item.length<4)
//      {
//       setUserError(true)
//      }
//      else{
//         setUserError(false)
//      }
//      setUser(item)
//     //  console.warn(e.target.value.length)
//  }
//  function passwordHandler(e){
//     let item=e.target.value
//      if(item.length<4)
//      {
//       setPasswordError(true)
//      }
//      else{
//         setPasswordError(false)
//      }
//      setPassword(item)
//     //  console.warn(e.target.value.length)
//  }
//     return (
//        <div>
//        <form onSubmit={loginHandler}>
//        <h1>Login</h1>
//         <input type='text' placeholder='Enter User Id' onChange={useHandler}></input>{userError?<span>User Not Valid</span>:""} 
//         <br /> <br />
//         < input type='password' placeholder='Enter User PassWord' onChange={passwordHandler} />{passwordError?<span>Password Not Valid</span>:""} 
//         <br /> <br />
//         <button type='submit'>Longin</button>
//        </form>
//        </div> 
//     )
// }
//   export default Login