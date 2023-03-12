import React,{useEffect} from 'react'
 function UseEffctChild(props){
  

 useEffect(()=>{
  console.warn('useEffect ')
  alert("data count is :" + props.data)
 },[props.data,props.count]) // specific props condition :   
 
    return(
    <div className='App'>
      <h1> count props: {props.count}</h1>
      <h1> data props : {props.data}</h1>
      
    </div>
  )
 }
 export default UseEffctChild;