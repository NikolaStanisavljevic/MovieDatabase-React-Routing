import React, { Component } from 'react';
import './ComingSoon.css';
import Logo from '../../../assets/images/logo.png';
import NavBar from '../../../components/Navbar/Navbar';



class ComingSoon extends Component {

  state = {
    days : '',
    hours : '',
    mins : '',
    seconds: ''
  }


  render() {

  const launchDate = new Date('Feb 14,2019 12:00:00').getTime();

  setInterval( () => {
     const now = new Date().getTime();
     const distance = launchDate - now;

      // Time calculation
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000 );

      this.setState({
        distance: distance,
        days : days,
        hours : hours,
        mins : mins,
        seconds: seconds
      });
 
},1000); 

if(this.state.distance > 0) {
    var countdown = 
      <div className='countdown'>
        <div>{this.state.days} <span className='span'>Days</span></div>
        <div>{this.state.hours} <span className='span'>Hours</span></div>
        <div>{this.state.mins} <span className='span'>Mins</span></div>
        <div>{this.state.seconds} <span className='span'>Seconds</span></div>
      </div>
  } else {
     countdown = (
      <div className='countdown'>
          <p>Movie is in Cinemas!</p>
      </div>
    )
  }

  
   
  return (
    <div className='landing'>
    <NavBar toggle={this.props.toggle} isOpen={this.props.isOpen}/>
      <div className="landing-inner">
          <img src={Logo} alt="logo" className='img'/>
          <p>I am fire and life incarnate! Now and forever — I am Phoenix!</p>
          <h1 className="comingSoon">Time until release:</h1>
          <div>{countdown}</div>   
      </div>
    </div>
  )}
}

export default ComingSoon;
