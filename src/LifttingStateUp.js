  function LiftingStateUp(props){
     const val="nasrin sultana"
    return (
        <div>
            <h2>Child component: {props.name}</h2>
            <button onClick={()=>props.alert(val)}>Click me</button>
        </div>
    )
  }
  export default LiftingStateUp;