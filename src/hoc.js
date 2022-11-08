import React, {Component} from "react";

const MyComponents = ImplementComponent => {
    class NewComponent extends Component{
        constructor(){
            super();
            this.state = {
                name: "Vinoth",
                course: "React"
            }
        }
        render(){
            return <ImplementComponent name={this.state.name} course={this.state.course}/>
        }
    }
    return NewComponent;
}

export default MyComponents;