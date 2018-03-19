import React, { Component } from 'react';
import './App.css';
import Skills from '../src/Skills.js'
import Work from '../src/Work.js'
import Edulist from '../src/Education.js'

class App extends Component {
  render() {
  const dataSkills=this.props.dataSkills
  const dataEduList= this.props.dataEduList
 console.log('----------<')
  console.log(this.props)
 console.log('----------<')
  const dataJobList= this.props.dataJobList
    return (
      <div className="App">
        <Skills data={dataSkills}/>
        <Work data={dataJobList}/>
        <Edulist data={dataEduList}/>
        
      </div>
    );
  }
}

export default App;
