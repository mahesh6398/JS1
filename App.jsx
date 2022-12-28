import React,{Component} from 'react'
import Table from './components/Table'
import './App.css'

class App extends Component{

  constructor(props){
    super()
    this.state={
      name:"",
  address:"",
  phone:"",
  email:"",
    count:0

    }

    this.handleClick=e=>{
      if(this.state.name==""){
        alert("Enter name")
        this.setState({count:0})
      }else if(this.state.address==""){
        alert("Enter address")
        this.setState({count:0})
      }else if(this.state.phone==""){
        alert("Enter phone number")
        this.setState({count:0})
      }else if(this.state.email==""){
        alert("Enter email address")
        this.setState({count:0})
      }else{
        this.setState({count:1})
      }
    }

  }

  render(){
    return(
      <>
      <input type="text" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
      <input type="text" placeholder="Address" value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})} />
      <input type="text" placeholder="Phone" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} />
      <input type="text" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
      <button onClick={this.handleClick}>Register</button>

      <span>
     {this.state.count==1 ?  <Table data={this.state} /> : null}
      </span>
     

      </>
    )
  }
}


export default App
