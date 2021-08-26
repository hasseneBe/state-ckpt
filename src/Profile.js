import { Component } from "react";
import { Button, Badge } from 'react-bootstrap';

class Profile extends Component{
    state={counter:0}
    componentDidMount(){
         setInterval(() => {this.setState({counter:this.state.counter+1})}, 1000);
    }
    componentWillUnmount(){ }

    render(){
        return(
            <div style={{display:"flex"}}>
               
               <div style={{padding:"20px 10px"}}>
                <h1> {this.props.profileDetails.fullName}</h1>
                <h5>{this.props.profileDetails.profession}</h5>
                <p>{this.props.profileDetails.bio}</p>
                <h1> <Badge bg="secondary">{this.state.counter}</Badge>  </h1>
                </div>
                <img style={{padding:"20px 10px", maxWidth:"360px"}} src={this.props.profileDetails.imgSrc} alt=''></img>
             </div>     
             )
    }
}
export default Profile