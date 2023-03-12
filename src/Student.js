
// Props with functional component: 

 function Student(props){
     console.log(props.name)
     return(
        <div style={{backgroundColor:"skyblue",margin:10}}>
            <h1>Name: {props.name}</h1>
            {/* <h1>{props.email}</h1>
            <h1>{props.class}</h1> */}


        </div>
     )
 }
   
  export default Student;