import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import MyComponents from './hoc';

class App extends Component{
  constructor(){
    super();
    this.state = {
      age: 30,
      count: 0,
      color: "Orange",
      data: [
        {
          name: "Gnanasekar",
          age:22,
          role:"Co-ordinator"
        },
        {
          name: "Srikanth",
          age:23,
          role:"Co-ordinator"
        },
        {
          name: "Moorthy",
          age:22,
          role:"Co-ordinator"
        }

      ]
    }
  }

  myClick = () =>{
    this.setState({
      age: this.state.age + 1,
      color: "green"
    })
  }

  render(){
    
    const {age, count, color} = this.state;
    const {name, course} = this.props;
    return(
      <div>
        <h1 style={{color}} className="title">Hi {name} your learing {course}</h1>
        <button onClick={this.myClick}>Click</button>
        <ul>
          {
            this.state.data.map(e => <li>Name: {e.name}<br/> Age: {e.age}<br/> Role: {e.role}</li>)
          }
        </ul>
      </div>
    )
  }
}


export default MyComponents(App);
