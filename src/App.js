import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react'
 import Profile from './Profile.js'

const profileDetails={
  fullName:'Mark Zuckerberg',
  bio:'Mark Elliot Zuckerberg, né le 14 mai 1984 à White Plains dans l État de New York, est un informaticien, chef d entreprise et milliardaire américain.', 
  imgSrc:'image.jpg', 
  profession:'Président-directeur général de Facebook', 
}

  class App extends Component {
    constructor(props){
      super(props);
      }

  state ={
    fullName:'Mark Zuckerberg',
    bio:'Mark Elliot Zuckerberg, né le 14 mai 1984 à White Plains dans l État de New York, est un informaticien, chef d entreprise et milliardaire américain.', 
    imgSrc:'image.jpg', 
    profession:'Président-directeur général de Facebook', 
    shows:false,
 
    
  }
  handelClic=()=>{this.setState({shows:!this.state.shows})}


  render(){
   return (

   <div className="App">

   <Button style={{margin: "10px", padding:"20px 250px"}} variant="primary" size="lg" onClick={this.handelClic}>    Clic here!   </Button>
   {this.state.shows && <Profile profileDetails={profileDetails}></Profile>}
  </div>
   )}
}

export default App;
