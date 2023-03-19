// import React,{Component} from "react"

import "./App.css";

// import React,{useState} from 'react';
// import Student from './Student';
// import ClassStudent from './ClassProps'

 // TODO: Delete Method with API Call:

import React,{useEffect,useState} from 'react';

 function App() {
     useEffect(()=>{
        fetch("http://localhost:4000/todo")
     },[])
    return(
        <div className="App">
            <h1>Delete data with API call</h1>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
 }
 export default App;






// TODO: Post Method API :

// import React, { useState } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   function submitButton() {
//     console.log(name, email, mobile);
//     let data = { name, email, mobile };
//     fetch("url", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log("response:", resp);
//       });
//     });
//   }
//   return (
//     <div className="App">
//       <h1>Post API Example</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//         name="name"
//       />{" "}
//       <br /> <br />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//         name="email"
//       />{" "}
//       <br /> <br />
//       <input
//         type="text"
//         value={mobile}
//         onChange={(e) => {
//           setMobile(e.target.value);
//         }}
//         name="mobile"
//       />
//       <br />
//       <br />
//       <button type="button" onClick={submitButton}>
//         Save new user
//       </button>
//     </div>
//   );
// }
// export default App;

// TODO: Call Get Method API:
//* call API
//* Get API data in State :

// import {useEffect,useState} from 'react';
// function App() {
//   const [data,setData]=useState([])
//   // for  get API call:
//   useEffect(()=>{
//     fetch("put the url").then((result)=>{
//       result.json().then((response)=>{
//       //  console.log("output:",response)
//       setData(response)
//       })
//     })
//   },[])
//   console.log(data)
//   return(
//     <div className="App">
//       <h1>Call Get Method API</h1>
//       <table border='1'>
//         <tr>
//           <td>Id</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tr>
//         {
//           data.map((items)=>
//           <tr>
//           <td>{items.userId}</td>
//           <td>{items.name}</td>
//           <td>{items.email}</td>
//           <td>{items.mobile}</td>
//         </tr>
//           )
//         }
//       </table>
//     </div>
//   )
// }
// export default App;

// TODO: Dynamic Routing with Params:
//* What is Dynamic Routing:

// ! not completed new version:

// import React from "react";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import DynamicUser from "./DynamicUser";
// function App() {
//   let users = [
//     { id: 1, name: "ajij", email: "ajij@gmail.com" },
//     { id: 2, name: "jony", email: "jony@gmail.com" },
//     { id: 3, name: "sk", email: "sk@gmail.com" },
//     { id: 4, name: "ali", email: "ali@gmail.com" },
//     { id: 5, name: "khan", email: "khan@gmail.com" },
//   ];
//   return (
//     <div className="App">
//       <Router>
//         <h1>Dynamic Routing</h1>
//         {users.map((item) => (
//           <div>
//             <Link to={"/users/" + item.id}>
//               <h3>{item.name}</h3>
//             </Link>
//           </div>
//         ))}
//         <Routes>
//         <Route path="/users/:id" element={<DynamicUser />}>

//         </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// TODO: 404 Pag- Page Not Found:
// * import React Router:
// * Add 404 Page :

//  import React from 'react';
//  import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'

//   function App() {
//      return(
//       <BrowserRouter>
//       <div className='App'>
//         <Link to='/'>Home</Link>
//         <br></br>
//         <Link to='/contact'>Contact</Link>
//         <Routes>

//           <Route path='/' element={<HomePage />}></Route>
//           <Route path='/contact' element={<Contact />}></Route>

//           <Route path='*' element={<PageNotFound />}></Route>

//         </Routes>

//       </div>
//       </BrowserRouter>
//      )
//   }
//      function HomePage() {
//       return(
//         <>
//           <h1>HomePage</h1>
//           <p>This is Home Page</p>
//         </>
//       )
//      }
//      function Contact() {
//       return(
//       <>
//       <h1>Contact Page</h1>
//       <p> In This here Contact details</p>
//       </>
//       )
//      }

//      function PageNotFound() {
//       return(
//       <>
//       <h1>404 Page</h1>
//       <p>Page Not Found</p>
//       </>
//       )
//      }

// export default App;

// TODO : Routing Example with Best Practices:
//* Use React wrapper in index.js
//* Navbar file for Link
//* Component is Separate Files

// TODO : Routing Setup :

// import React from "react";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import Nav from './Nav';
// import Home from './Home';
// import About from './About';

// function App() {
//   return (
//     // <Router>
//       <div className="App">
//         <h1>Routing Setup</h1>

//        <Nav />

//         <Routes>

//           <Route path="/about" element={<>
//           <h1>About Page</h1> <p>this is Abount Page</p> </>}/>
//           <Route path="/" exact={true} element={<Home />} />
//         </Routes>
//       </div>
//     // </Router>
//   );
// }

// export default App;

// TODO : HOC(Hight order component) :

// import React,{useRef,useState} from 'react'
// function App(){
//   return(
//     <div className='App'>
//       <h1>HOC</h1>

//       <HOCRed cmp={Counter}/>
//       <HOCGreen cmp={Counter}/>
//     </div>
//   )
// }
// function HOCRed(props){
//   return <h2 style={{backgroundColor:'red',width:"100px"}}><props.cmp /></h2>
// }
// function HOCGreen(props){
//   return <h2 style={{backgroundColor:'green',width:"100px"}}><props.cmp /></h2>
// }
// function Counter(){
//   const [count,setCount]=useState(0)
//   return(
//     <div>
//       <h3>{count}</h3>
//       <button onClick={()=>setCount(count+1)}>update</button>
//     </div>
//   )
// }

// export default App;

// TODO : Uncontrolled Component :

// import React,{useRef} from 'react'
// function App(){
//   let inputRef=useRef(null)
//   let inputRef2=useRef(null)
//   // this function stop the From page reload
//   function submitForm(e){
//     e.preventDefault()
//     console.log("field 1 value :", inputRef.current.value)
//     console.log("field 2 value :", inputRef2.current.value)
//     let input3=document.getElementById('input3').value
//     console.log("field 2 value : ",input3)
//   }
//   return(
//     <div className='App'>
//       <h1>UnControlled Component</h1>
//        <form onSubmit={submitForm}>
//        <input type='text' ref={inputRef}/> <br/> <br/>
//        <input type='text' ref={inputRef2}/> <br/> <br/>
//        <input id="input3" type='text' /> <br/> <br/>
//        <button>Submit</button>
//        </form>
//     </div>
//   )
// }
// export default App;

// TODO : Controlled Component:
//* What is controlled component:

// import React,{useState} from 'react'
// function App(){
//   const [val, setVal]=useState("")
//   const [item, setItem]=useState("")
//   return(
//     <div className='App'>
//       <h1>Controlled Component</h1>
//       <input type='text' value= {val} onChange={(e)=>setVal(e.target.value)}/>
//       <input type='text' defaultValue='1245' onChange={(e)=>setItem(e.target.value)}/>
//     </div>
//   )
// }
// export default App;

// TODO : ForwardRef in React in js;
// ** why use forwardRef :

// import React,{useRef} from 'react'
// import ForwardRefChild from './forwardRefChild';
// function App(){
//    let inputRef=useRef(null)
//     function updateInput(){
//       inputRef.current.value="102"
//       inputRef.current.style.color="red"
//       inputRef.current.focus();

//     }
//   return(
//     <div className='App'>
//       <h1>forwardRef use</h1>
//        <ForwardRefChild ref={inputRef} />
//       <button onClick={updateInput}>update inputBox</button>
//     </div>
//   )
// }
// export default App;

// TODO: useRef Hook :
//* why use useRef :

// import React,{useRef} from 'react'
// function App(){
//   let inputRef=useRef(null)
//   function GetVal(){
//     console.log("Ajij")
//     inputRef.current.value='1223'
//     inputRef.current.focus();
//     inputRef.current.style.color='red'

//   }
//   return(
//     <dev className='App'>
//       <h1>useRef in React</h1>
//       <input type='text' ref={inputRef}></input>
//       <button onClick={GetVal}>Get value</button>
//     </dev>
//   )
// }
//  export default App;

// TODO: Ref in React js : Ref directly manipulate
// * Ref use in Class Component :

//  import React,{createRef} from 'react';
//   class App extends React.Component{

//        constructor(){
//         super();
//         this.inputRef=createRef()

//        }
//        componentDidMount(){
//         console.log(this.inputRef.current.value='100')
//        }
//        getVal(){
//          console.log(this.inputRef+1)
//          // get inputBox value:
//          console.log(this.inputRef.current.value)
//          this.inputRef.current.style.color='red'
//          this.inputRef.current.style.backgroundColor='black'
//        }
//        render(){
//       return(
//         <div className='App'>
//         <h1>Ref uses</h1>
//         <input type='text' ref={this.inputRef}></input>
//         <button onClick={()=>this.getVal()}>check Ref</button>
//         </div>
//       )
//     }
//   }
//   export default App;

// TODO : useMemo Hook : it like pure component method in class.
//  import {useState,useMemo} from 'react'
// function App(){
//   const [count,setCount]=useState(0);
//   const [item,setItem]=useState(10);
//  const multiCountMemo= useMemo(function multiCount(){
//   console.log("check update")
//   return count*5
// },[count])
//   // function multiCount(){
//   //   console.log("check update")
//   //   return count*5
//   // }
//    return (
//     <div className='App'>
//       <h1>useMemo</h1>
//       <h2>count:{count} item:{item}</h2>
//       {/* <h2>{multiCount}</h2> */}
//       <h2>{multiCountMemo}</h2>
//       <button onClick={()=>setCount(count+1)}>update count</button>
//       <button onClick={()=>setItem(item*10)}>update item</button>
//     </div>
//    )
// }
// export default App;

// TODO : Pure Component :  PureComponent is similar to Component but it skips re-renders for same props and state. Class components are still supported by React, but we don’t recommend using them in new code.
// * Pure component with State and Props :

// import React from 'react';
//   class App extends React.PureComponent{
//      constructor(){
//       super();
//       this.state={
//         count:1
//       }
//      }
//     render(){
//       console.log("check reRendering")
//       return(

//         <div className='App'>
//           <h1>Pure Component {this.state.count}</h1>
//           <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
//           </div>
//       )
//     }
//   }
//    export default App;

// TODO : send Data Child to Parent Component: in React we can "Lifting State Up"
// *: how to pass Props parent to a child component or (Lifting State Up):

//  import LiftingStateUp from './LifttingStateUp';
//  function App(){

//   function Parentalert(valuefromChild){
//     alert(valuefromChild)
// }
//  //
//   let data="Ajij Seikh"
//   return(
//     <div className='App'>
//       <h1>Lifting State Up</h1>

//       <LiftingStateUp name={data}  alert={Parentalert}/>
//     </div>
//   )
//  }
//  export default App;

// TODO : React Fragment :
// * use it with child component :

//  import React,{Fragment} from 'react';
//  import Fragment1 from './Fragment'

//   function App(){
//     return(
//       // <Fragment >
//       //<> .. this empty tag also Fragment .
//       <div>
//         <h1>React Rragment ?</h1>
//          <table>
//           <tbody>
//             <tr>
//             <Fragment1 />
//             </tr>
//           </tbody>
//          </table>
//         </div>
//        // </>
//         // </Fragment>
//     )
//   }
//   export default App;

// TODO :  Reuse Component :
// ! Make a component :
// * make list from the Array
// ? Use component inside map function

//   import React from 'react'
// import ReuseComponent from './ReuseComponent'
//   function App(){
// const users=[
// {name:'Ajij',email:'ajij@test.com',mob:"111"},
// {name:'Seikh',email:'seik@test.com',mob:"222"},
// {name:'Aj',email:'aj@test.com',mob:"333"},
// {name:'Ajm',email:'ajm@test.com',mob:"333"},

//         ]
//     return(
//       <div className='App'>
//         <h1>Reuse Component</h1>

//         {
//           users.map((item)=>
//           <ReuseComponent  propsDataSent={item} />
//           // <h1>{item.name}</h1>
//           )
//         }
//       </div>
//     )
//   }
// export default App;

// TODO : // / Nested List with Nested Array :

// import React from 'react'
// import {Table} from 'react-bootstrap'
// function App(){
//     const users=[
//           {name:'Ajij',email:'ajij@test.com',address:[
//             {hn:"10",city:"mld",country:"ind"},
//             {hn:"1",city:"kol",country:"uae"},
//             {hn:"760",city:"mud",country:"ind"},
//             {hn:"7",city:"ben",country:"den"},

//           ]},
//           {name:'Seikh',email:'seikh@test.com',address:[
//             {hn:"10",city:"mld",country:"ind"},
//             {hn:"1",city:"kol",country:"uae"},
//             {hn:"760",city:"mud",country:"ind"},
//             {hn:"7",city:"ben",country:"den"},

//           ]},
//           {name:'Aj',email:'aj@test.com',address:[
//             {hn:"10",city:"mld",country:"ind"},
//             {hn:"1",city:"kol",country:"uae"},
//             {hn:"760",city:"mud",country:"ind"},
//             {hn:"7",city:"ben",country:"den"},

//           ]}
//     ]
//   return (
//     <div className='App'>
//       <h1> Nested List with Nested Array</h1>
//       <Table >
//         <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Address
//             <Table >
//               <tbody>
//                 <tr>
//                   <td>home no</td>
//                   <td>city</td>
//                   <td>country</td>

//                 </tr>
//               </tbody>
//             </Table>
//           </td>
//         </tr>
//         </tbody>
//         {
//           users.map((item)=>

//           <tr>

//             <td>{item.name}</td>
//             <td>{item.email}</td>

//             <td>

//               <Table variant='dark' striped>
//                 <tbody>{
//                   item.address.map((data)=>
//                   <tr>
//                     <td>{data.hn}</td>
//                     <td>{data.city}</td>
//                     <td>{data.country}</td>

//                   </tr>
//                )}
//                 </tbody>

//               </Table>
//             </td>
//           </tr>
//           )
//         }
//       </Table>
//     </div>
//   )
// }
// export default App;

// TODO :/// List with Bootstrap and Unique key :
// TODO : // what is unique key in loop :

//  import {Table} from 'react-bootstrap'
//  function App(){
//   const users=[
//           {name:'Ajij',email:'ajij@test.com',mob:111},
//           {name:'Seikh',email:'seikh@test.com',mob:111},
//           {name:'Aj',email:'aj@test.com',mob:222},
//           {name:"Jony",email:"jony@test.com",mob:444}

//          ]

//   return(
//     <div className='App'>
//       <h1>List with Bootstrap Table</h1>
//       <Table striped variant='dark'>
//         <tbody>
//         {/* // for heading */}
//       <tr>
//          <td>Id</td>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Mob</td>

//     </tr>
//     {
//       users.map((item,i)=>
//       // condition out:
//       item.mob=="111" ?
//       <tr key={i}>
//         <td>{i+1}</td>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.mob}</td>

//       </tr> : null
//       )
//     }
//     </tbody>
//     </Table>
//     </div>
//   )
//  }
//  export default App;

//<================================start  =>
// TODO :///  Handle Array with List :
// TODO :   // make an array:
// TODO : // why use map function, not for loop: return statement a 'for loop' kaj kore na |
// TODO :   // make List with an array of Objects:

//   function App(){

//      const studentDetails=[
//       {name:'Ajij',Email:'ajij@test.com',Mob:555},
//       {name:'Seikh',Email:'seikh@test.com',Mob:111},
//       {name:'Aj',Email:'aj@test.com',Mob:222}

//      ]
//     // const students=['Ajij','Seikh','Jony','Nasrin','Luffara']

//     // // map function: using for looping
//     // students.map((item)=>{
//     // console.log(item)
//     // })
//     // // for Loop : in this here working but inside return statement not working:
//     // for(let i=0;i<students.length;i++){
//     //   console.log('my name is :',students[i])
//     // }
//      return (
//       <div className='App'>
//         <h1> Handle Array with List</h1>
//         <table border="1">
//         <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contact</td>
//           </tr>
//        {
//         studentDetails.map((items)=>
//           <tr>
//             <td>{items.name}</td>
//             <td>{items.Email}</td>
//             <td>{items.Mob}</td>
//           </tr>
//         )
//        }
//        </table>

//         {/* {
//           students.map((data)=>
//           <h1>{data}</h1>
//           )
//         } */}

//         {/* {
//           for(let i=0;i<students.length;i++){
//             <h1>{strudents[i]}</h1>
//           }
//         } */}
//         {/* // for loop not support in return statement thats why we have not use for loop. */}
//       </div>
//      )
//   }
//     export default App;

//<++++++++++++++++++++++++================>

// TODO :// what is Bootstrap:Bootstrap is a giant collection of handy, reusable bits of code written in HTML, CSS, and JavaScript. It’s also a frontend development framework that enables developers and designers to quickly build fully responsive websites.

// TODO : // use and register bootstrap library:
// TODO : // example with bootstrap component:

// import {Button} from 'react-bootstrap'
// function App(){
//   return(
//     <div className='App'>
//      <h1>Bootstrap using</h1>
//      <Button onClick={()=>alert('Hello Aj')}>Click me</Button>
//      <Button variant="primary">Primary</Button>{' '}

//     </div>
//   )
// }
// export default App;

// TODO : //  style type in react :
// TODO :// three type of style :1>normal css      2>inline style  . 3> module css style

// import './style.css'
// import style from './custom.module.css'
// function App(){
//    return(
//     <div className='App'>
//       <h1 className='primary'>Style type 1 in React</h1>

//       <h1 style={{color:'red',backgroundColor:'black'}}>Style type 2 in React</h1>

//       <h1 className={style.success}>Style type 3 in React</h1>
//     </div>
//    )
// }
// export default App;

/// useEffect Hooks :
// what is useEffect:
// how to use useEffect:
// useEffect with State and props:

// useEffect Hooks with specific State and props :

// import React,{useEffect,useState} from 'react'
// import UseEffctChild from './UseEffectChild';
//  function App(){
//   const [data,setData]=useState(10)
//   const [count,setCount]=useState(100)

// //  useEffect(()=>{
// //   console.warn('called with data state ')
// //  },[data])  // inside array we have sent the state that means whenever called data state then only this useEffect will be called.
//     return(
//     <div className='App'>
//       {/* <h1>useEffect count: {count}</h1>
//       <h1> data : {data}</h1> */}
//       <UseEffctChild count={count} data={data}/> {/* props passing to child */}
//        <button onClick={()=>setCount(count+1)}>update count</button>
//        <button onClick={()=>setData(data+1)}>update data</button>
//     </div>
//   )
//  }
//  export default App;

// TODO : / useEffect Hooks normal:

//  import React,{useState} from 'react'
//  function App(){
//   const [count,setCount]=useState(0)
//   React.useEffect(()=>{
//     console.log("useEffect")
//   })
//   return(
//     <div className='App'>
//       <h1>useEffect {count}</h1>
//       <button onClick={()=>{setCount(count +1)}}>update constructor</button>
//     </div>
//   )
//  }
//  export default App;

/// Hooks : example : useState,,useCallback,useContext,useEffect,useRef,useReducer , etc.

//   import React,{useState} from 'react'
// function App(){
//   const [data,setData]=useState("Ajij")
//   return(
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={()=>setData("Seikh")}>update Name</button>
//     </div>
//   )
// }
//  export default App;

// TODO : // componentwillUnmount

// import React from 'react';
// import UnmountChild from './UnmountChild';

// class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       show:true
//     }
//   }

//   render(){
//     return(
//       <div className='App'>
//     <h1>component will Unmount</h1>
// {
//   this.state.show ? <UnmountChild /> :<h1>UnmountChild remove</h1>
// }
//     <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle child Component</button>
//       </div>
//     )
//   }
// }
// export default App;

// TODO :// shouldComponentUpdate life Cycle Method :
// //
// import React from 'react'

// class App extends React.Component{
//    constructor(){
//     super();
//     this.state={
//       count:0
//     }
//    }
//    shouldComponentUpdate(){
//     console.log("shouldComponentUpdate",this.state.count);
//     if(this.state.count>5 && this.state.count<10){ // specific condition for stop rendering
//       return true;
//     }

//    }
//   render(){

//     return(
//       <div className='App'>
//       <h1>shouldComponentUpdate{this.state.count}</h1>
//       <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
//       </div>
//     )
//   }
// }
// export default App;

// TODO :// componentDidUpdate:
// import React from 'react';

// class App extends React.Component{
//    constructor(){
//     super();
//      console.log("constructor")
//      this.state={
//      count:0
//      }
//    }
//    componentDidUpdate(preProps,preState,snapshot){
//     console.log("componentDidUpdate:","preState:",{preState},"preProps",{preProps})
//    }
//   render(){
//     console.log("render")

//     return(
//       <div className='App'>
//       <h1> Component Did Update:{this.state.count}</h1>
//       <button onClick={()=>{this.setState({count:this.state.count+1})}}>update count</button>

//       </div>
//     )
//   }
// }
// export default App;

// TODO :// ComponentDidMount, life cycle method :
// *) use of componentDidMount
// **) make class component.
// ***) No Effect of state and props.

// import React from 'react'
//  class App extends React.Component{

//    constructor(){
//     super();
//     this.state={
//       name:"Ajij"
//     }
//     console.log("constructor automatically called at first in the class")
//    }
//    componentDidMount(){
//     console.log("componentDidMount")
//    }
//    render(){
//     console.log("render")
//   return (
//     <div className='App'>
//       <h1>Component Did Mount {this.state.name}</h1>
//       <button onClick={()=>{this.setState({name:"Seikh"})}}>update name</button>
//     </div>
//   )
//  }
// }
//    export default App;

// TODO :// Render , Life cycle Method :
// * use of render method
// ** make class component
// *** use state and props with render.
// props , create component and update state aii time a render update hoy:

// import React from 'react'
// import Renderlifecycle from './Renderlifecycle';

//  function  App (){
//   const [name,setName]=React.useState("Ajij")

//     return(
//       <div className='App'>
//       <h1> my name is :{name}</h1>
//       <Renderlifecycle name={name} />
//       <button onClick={()=>setName("Seikh")}>update name</button>
//       </div>
//     )
//   }

//  export default App;

// TODO :// Constructor Life cycle Method :
// Q: is constructor life cycle method : Yes
// import React from 'react'

// class App extends React.Component{
//   constructor()
//   {
//     super();
//     console.log(this.props)
//   }

//   render(){
//       console.log("render")
//     return(
//     <div className='App'>
//       <h1>ajij</h1>
//     </div>
//     )
//   }
// }

// export default App;

// TODO ://  pass function as Props :
// import PassFunAsProps from './PassFunAsProps';
//    function App(){
//       function getData(){
//         alert("Hello From App")
//       };

//     return (
//       <div className='App'>

//       <tr>
//       <td>Malda </td>

//       <td>murshidabad</td>
//       </tr>

//         <h1>Hell Ajij</h1>
//         <PassFunAsProps  data={getData}/>
//       </div>
//     )
//    }
//    export default App;

// TODO :// basic Form validation :
// import Login from './Loggin'
// function App(){

//   return (
//     <div className='App'>
//          <h1>welcome Ajij</h1>
//          {/* < Login /> */}
//     </div>
//   )
// }
//  export default App;

// TODO // Conditional rendering | in condition:

// import Profile from './Profile'
// function App(){

//   return (
//     <div className='App'>

//    <h1>Conditional Rendering</h1>
//    <Profile />
//     </div>
//   )
// }
//  export default App;

// TODO // Basic Form : get Data
//   import React,{useState} from 'react';
//  function App(){
//   const [name,setName]=useState("")

//   const [tnc,setTnc]=useState(false)
//   const [interest,setInterest]=useState("")

//   function getFormData(e){
//     console.log(name,tnc,interest)
//     e.preventDefault()
//    }

//   return (
//     <div className='App'>
//     <h1>Handle form in React</h1>
//    <form onSubmit={getFormData}>
//     <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}></input> <br /> <br />
//     <select  onChange={(e)=>setInterest(e.target.value)}>
//       <option>Select Options</option>
//       <option>Ajij</option>
//       <option>Seikh</option>
//  </select><br /> <br />
//   <input type='checkbox'  onChange={(e)=>setTnc(e.target.checked)} /><span> Accept terms And Conditions</span>
//   <br /> <br />
//   <button type='submit'>Submit</button>
//    </form>
//     </div>
//   )
//  }
//  export default App;

// TODO /// data show and hide method:

// import React from 'react';
//  function App (){
//   let [status,setStatus]=React.useState(true)

//    return (
//     <div className='App'>
//       {
//         status ? <h1> Hello Ajij</h1> : null
//       }
//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//          <button onClick={()=>setStatus(true)}>Show</button> */}
//          <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//    )
//  }
//   export default App ;

// TODO /// get Input box value . like - input
//  import React,{useState} from 'react'

//  function App (){
//   const [data,setData]=useState(null)
//   const [print,setPrint]=useState(false)

//   function getData(val){
//     console.log(val.target.value)
//     setData(val.target.value);
//     setPrint(false)
//   }
//   return (
//     <div className='App'>

//      <h1>Get Input box Value !</h1>
//    {
//     print ?   <h1>{data}</h1> :null
//    }
//  <input type="text" onChange={getData}/>
//  <button onClick={()=>setPrint(true)}> Print Data</button>
//     </div>
//   )
//  }
//   export default App ;

// TODO // class in props
// import React from 'react';

// class App extends React.Component{
//    constructor(){
//     super();
//     this.state={
//       name:"Aj"
//     }
//    }

//   render(){

//     return(
//       <div className='App'>

//       <h1>(React in Class Props):</h1>
//       <ClassStudent name={this.state.name} email="aj@gmail.com" />
//       <button onClick={()=>this.setState({name:"Seikh"})}>update Name</button>
//       {/* <Student name={"Seikh"} class="B-tech"/> */}
//     </div>
//     )
//   }
// }
// export default App

// TODO // Functional Props :

// function App (){
//     const [name,setName]=useState("Ajij");
//    return (
//     <div className='App'>
//       <h1>(React in Functional Props):</h1>
//       <Student name={name} email="ajij@gmail.com"></Student>
//       <button onClick={()=>{setName("Seikh")}}>update name</button>

//       <h1>(React in Class Props):</h1>
//       <ClassStudent name="Aj" email="aj@gmail.com" />
//       {/* <Student name={"Seikh"} class="B-tech"/> */}
//     </div>
//    )
// }
// export default App;

// TODO // class state
// class App extends Component{
//    constructor()
//    {
//         super();
//         this.state={
//           data:"ajij"
//         }
//    }
//      classState(){
//          this.setState({data:"Seikh"})
//      }

//    render(){
//      return (
//     <div className="App">
//       <h1>{this.state.data}</h1>
//      <button onClick={()=>this.classState()}>class state</button>
//     </div>
//      )
//    }
// }

// export default App;

// TODO   // functional state:
//import {User,UserClass} from "./User"
//import React,{component} from 'react';

// import { useState } from 'react';

//  function App() {
// functional state :
// const [data,setData]= useState("ajij");
// function States(){

//   setData("Seikh");
//   alert(setData)
// };

// function event1(){

//   alert("event using process")

// }

// function apple(){
//   return(
//     <div>inside function using a function </div>
//   )
// }
//   return (
//     <div className="App">
//       {/* <h1>{data}</h1>
//      */}

//       {/* <User />

//       <UserClass />  */}

//       {/* <button onClick={States}>use of State</button>
//       <button onClick={event1}> Click Me </button>
//       <button onClick={event1()}> Click Me </button>
//       <button onClick={()=>event1()}> Click Me </button> */}

//       {/* {apple()} */}

//     </div>
//   );
// }

// class State :

// export default App;
