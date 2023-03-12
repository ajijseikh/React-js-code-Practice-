import React from "react";
 export default class ClassStudent extends React.Component{

    render(){
        return (
            <div style={{backgroundColor:"royalblue",margin:15}}>
                <h1>Student {this.props.name}</h1>
                <h2>Email: {this.props.email}</h2>
                </div>
        )
    }
 }