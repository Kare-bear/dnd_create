import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Card from './Card.js';

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      name:"", 
      classes: [],
      races: [],
      skills: [],
      createChar:"",
      selectedClass: "",
      selectedRace: "",
      selectedSkill1: "",
      selectedSkill2: "",
      selectedSkill3: "",
      startingHealth: "",
      startingGold: "",
      beginPlay: false,

        
    };

    this.createRace = this.createRace.bind(this);
    // this.updateRace = this.updateRace.bind(this);

    this.createRace = this.createRace.bind(this);
    // this.updateRace = this.updateRace.bind(this);
    
    this.createClass = this.createClass.bind(this);
    // this.updateClass = this.updateClass.bind(this);
    
    this.charDeath = this.charDeath.bind(this);
    
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.handleSkill1 = this.handleSkill1.bind(this);
    this.handleSkill2 = this.handleSkill2.bind(this);
    this.handleSkill3 = this.handleSkill3.bind(this);
    this.startingHealth = this.startingHealth.bind(this);
    this.startingGold = this.startingGold.bind(this);
    this.createChar = this.createChar.bind(this);
    // this.beginPlay =this.beginPlay.bind(this);


    

    
    
  }
  componentDidMount(){
      
    axios.get("/api/classes").then(response => {
      this.setState({ classes: response.data.results });
    });

    axios.get("/api/races").then(response => {
      this.setState({ races: response.data.results});
    });
    
    axios.get("/api/skills").then(response => {
      this.setState({ skills: response.data.results });
    });
  }

  createSkills(){
    const skills = {
      skills: this.state.skills,
    };

    axios
      .post("/api/skills", skills )
      .then(response => {
        this.setState({ skills: response.data});
      })
      .catch(e => alert(e));
  }
  // updateSkills(id, name) {
  //   const updateSkills = {      
  //   };
  //   axios
  //     .put("/api/skills/" + id)
  //     .then(response => {
  //       this.setState({ skills: response.data});
  //     })
  //     .catch(console.log);
  // }


  createClass(){
    const classes = {
      classes: this.state.classes,
    };

    axios
      .post("/api/classes", classes )
      .then(response => {
        this.setState({ classes: response.data});
      })
      .catch(e => alert(e));
  }
  // updateClass(id, name) {
  //   const updateClass = {
  //     // classes
  //   };
  //   axios
  //     .put("/api/classes/" + id)
  //     .then(response => {
  //       this.setState({ classes: response.data});
  //     })
  //     .catch(console.log);
  // }
  


  createRace(){
    const races = {
      races: this.state.races,
    };
    axios
      .post("/api/races", races )
      .then(response => {
        this.setState({ races: response.data});
      })
      .catch(e => alert(e));
  }
  // updateRace(id, name) {
  //   const updateRace = {      
  //   };
  //   axios
  //     .put("/api/races/" + id)
  //     .then(response => {
  //       this.setState({ races: response.data});
  //     })
  //     .catch(console.log);
  // }


  charDeath(id){
    axios
     .delete("/api/classes/" + id)
     .then(response => {
       this.setState({ classes: response.data});
     })
     .catch(console.log);


     
  }
  startingHealth(){
    let startingHealth=Math.ceil(Math.random()*20);
    console.log(startingHealth)
    this.setState({ startingHealth })
  }

  startingGold(){
    let startingGold=Math.ceil(Math.random()*20);
    console.log(startingGold)
    this.setState({ startingGold })
  }

  createChar() {this.setState({beginPlay:true})
  console.log(`This is your new Character ${this.state.name}, you are a ${this.state.selectedRace} ${this.state.selectedClass} and your skills are ${this.state.selectedSkill1}, ${this.state.selectedSkill2} and ${this.state.selectedSkill3}. You start with ${this.state.startingHealth} health points and ${this.state.startingGold} pieces of Gold. Prepare for Adventure!!`)
  }

  handleNameInput(e){
    this.setState({ name: e.target.value});
  }

  handleRace(e){
    this.setState({selectedRace:e.target.value});
  }
  handleClass(e){
    this.setState({selectedClass:e.target.value});
  }
  handleSkill1(e){console.log(e.target.value)
    this.setState({selectedSkill1:e.target.value});
  }
  handleSkill2(e){
    this.setState({selectedSkill2:e.target.value});
  }
  handleSkill3(e){
    this.setState({selectedSkill3:e.target.value});
  }
  beginPlay(e){
    this.setState({beginPlay:true})
  }

  render() {
    // console.log(this.state.classes.id);
    // console.log(this.state.races.id);
    // console.log(this.state.skills.id);
    // console.log(this.state.startingHealth);
    //{characterAnnpuncement = <div>Your name is {this.state.name}</div>
    const beginPlayText= <div> <h1>This is your new Character {this.state.name}, you are a {this.state.selectedRace} {this.state.selectedClass} and your skills are {this.state.selectedSkill1}, {this.state.selectedSkill2} and {this.state.selectedSkill3}. You start with {this.state.startingHealth} health points and {this.state.startingGold} pieces of Gold. Prepare for Adventure!!`</h1> </div>

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://lh6.ggpht.com/8FdNS3sPno9AWcnV2tirsVa8qE9_cI-k84DslWNBAfQtZ9UEE-euxpkFhB74Xp95ZdiF=w300" className="App-logo1" alt="logo1" />
          <img src="http://www.vectorfreak.com/images/preview/thumb/ten-sided-dice" className="App-logo2" alt="logo2" />
          <img src="https://lh6.ggpht.com/8FdNS3sPno9AWcnV2tirsVa8qE9_cI-k84DslWNBAfQtZ9UEE-euxpkFhB74Xp95ZdiF=w300" className="App-logo3" alt="logo3" />
          
        </header>

      <div className = "Identity">
        <h1>Character Name</h1>
          <input value={this.state.name} onChange={this.handleNameInput} />
      </div>

          <div className= "Clas">
            <h2>Select Character Class</h2>
            <select onChange={this.handleClass}>
            <option>Choose a Class </option>
          {this.state.classes && this.state.classes.map((curr, index) => {
            return <option key={index} value={curr.name}>{curr.name}</option>
          })} 
          </select>
         </div>


          <div className= "Rac">
            <h2>Select Character Race</h2>
            <select onChange={this.handleRace}>
            <option> Choose a Race </option>
            {this.state.races.map((curr, index) => {
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}
              </select>
          </div>


          <div className= "Skil">
              <h2>Select Character Skills</h2>
              <select onChange={this.handleSkill1}>
              <option> Choose a Skill </option>
              {this.state.skills.map((curr, index) => {
                return <option key={index} value={curr.name}>{curr.name}</option>
              })}            
            </select><br /> 

            <select onChange={this.handleSkill2}>
            <option> Choose a Skill </option>
              {this.state.skills.map((curr, index) => {
                return <option key={index} value={curr.name}>{curr.name}</option>
              })}            
            </select><br /> 

            <select onChange={this.handleSkill3}>
            <option> Choose a Skill </option>
              {this.state.skills.map((curr, index) => {
                return <option key={index} value={curr.name}>{curr.name}</option>
              })}            
            </select><br />

          </div>

          <div className = "HP">
            <h2>Starting Health</h2>
            <button onClick={this.startingHealth}> Roll for your Health </button>
          </div>

          <div className = "Money">
            <h2>Starting Gold</h2>
            <button onClick={this.startingGold}> Roll for your Gold </button>
          </div>

          <div className = "Begin">
            <h2>Let's get started</h2>
            <button onClick={this.createChar}>Create Character</button>
          </div>

          <div>            
            {this.state.beginPlay && beginPlayText}
          </div>
          

          <footer className ="App-footer">
            <img src ="http://media.wizards.com/2015/images/dnd/articles/UA_2015_04_06_3.png" className = "Footer-img" alt = "bottom"/>
          </footer>

        
      </div>
    );
  }
}

export default App;
