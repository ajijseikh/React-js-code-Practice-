import React from 'react';

class UnmountChild extends React.Component{
  
    componentWillUnmount(){
        alert("componentWillUnmount called")
    }
  render(){
    return(
      <div className='UnmountChild'>
    <h1>UnmountChild component </h1>
   
      </div>
    )
  }
}
export default UnmountChild;