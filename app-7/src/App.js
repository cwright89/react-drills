import React, {Component} from 'react';
import NewTask from "./NewTask";
import List from "./List";
import './App.css';
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();

    this.state ={
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>My To-do List:</h1>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.list} />

      
    </div>
    )
  }
}



export default App;
