import React from 'react';

class SignupForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.email + " " + this.state.password)
  }

  render(){
    return(
    <form onSubmit = {this.handleSubmit}>
    <input name = 'email' value = {this.state.email} type = 'text' onChange = {this.handleChange}/>
    <br/>
    <input name = 'password' value = {this.state.password} type = 'text' onChange = {this.handleChange}/>
    <button> Sign up </button>
    </form>)
  }
}

export default SignupForm;
