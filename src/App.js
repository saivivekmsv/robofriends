import React, {Component} from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component
{
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>
    {
      return response.json();

    }).then(users=>{
      this.setState({robots:users})
    });
    this.setState({robots:robots})
  }
  OnSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})


  }
  render(){
    const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return(

    <div className='tc'>

     <h1 className='f2'>Robo Friends</h1>
     <SearchBox searchChange={this.OnSearchChange}/>
     <Scroll>
     <Cardlist robots={filteredRobots}/>
     </Scroll>
    </div>
  );
}
}
export default App;
