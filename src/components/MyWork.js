import React, {Component} from 'react';
// Import images
import Locker from './../assets/images/locker.PNG';
import Lotto from './../assets/images/lotto.jpg';
import Management from './../assets/images/management.jpg';
import ShishaDot from './../assets/images/shishadot.png';
import Estratweni from './../assets/images/estratweni.jpg';

export class MyWork extends Component {

	render() {
		return (
			<section className="section my-work" data-section="work">
			  <div className="container">
			    <div className="section-heading">
			      <h2>My Work</h2>
			      <div className="line-dec"></div>
			      <span>Welcome to my portfolio. I am a Sofware Engineer experienced in python and java and also develop full stack javascript applications, experienced with the MERN stack. Started coding in high school, worked with c#, assembly language, android studio and scratch, I'm also a DJ and a lover of deep house music. Sweet right!?</span>
			    </div>
			    
			    <div className="right-image-post">
			      <div className="row">
			        <div className="col-md-6">
			          <div className="left-text">
			            <h4>Estratweni M.F.</h4>
			            <p>
			              Estratweni Mobile Foods is a food, catering and hiring business from Philippi with an impactful growth. This project was developed as a demonstration of a potential online platform - and is still in development. The project goal is an eCommerce website for customers to access Estratweni's products via online media. Do follow the projects development on my github or view the UI on the button below.
			            </p>
			            <div className="white-button">
			              <a href="https://warm-eyrie-96045.herokuapp.com/" target="_blank"  rel="noopener noreferrer">Open App</a>
			            </div>
			          </div>
			        </div>
			        <div className="col-md-6">
			          <div className="right-image">
			            <img src={Estratweni} alt="Estratweni" />
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="left-image-post">
			      <div className="row">
			        <div className="col-md-6">
			          <div className="left-image">
			            <img src={ShishaDot} alt="ShishaDot" />
			          </div>
			        </div>
			        <div className="col-md-6">
			          <div className="right-text">
			            <h4>ShishaDot</h4>
			            <p>
			              ShishaDot is an existing hookah rental business that offers their services in various occassion. This project was inspired by the brand and developed under 24 hours completely disconnected from the internet as a self-test, then turned out to be worthy of including on my portfolio. The website is responsive, and ready to be viewed at the click of 'Open App.'
			            </p>
			            <div className="white-button">
			              <a href="https://i-am-monza.github.io/ShishaDot" target="_blank"  rel="noopener noreferrer">Open App</a>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="right-image-post">
			      <div className="row">
			        <div className="col-md-6">
			          <div className="left-text">
			            <h4>Lotto Go</h4>
			            <p>
			              Lotto Go is a demo application that allows users to play lotto where ever they are, when ever they want. The application idealy requires the user to login in order to submit a ticket for a draw. Tickets are the same as the physical tickets, numbers 1 to 49, but shortened in for simplicity in this application demonstration. A demo is live on the button 'Open App.'
			            </p>
			            <div className="white-button">
			              <a href="https://warm-eyrie-96045.herokuapp.com/" target="_blank"  rel="noopener noreferrer">Open App</a>
			            </div>
			          </div>
			        </div>
			        <div className="col-md-6">
			          <div className="right-image">
			            <img src={Lotto} alt="Lotto" />
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="right-image-post">
			      <div className="row">
			        <div className="col-md-6">
			          <div className="left-image">
			            <img src={Management} alt="Management" />
			          </div>
			        </div>
			        <div className="col-md-6">
			          <div className="right-text">
			            <h4>Project Management System</h4>
			            <p>
			              The Project Management System is my first full stack application, using json files for storage instead of a database. The application allows the user to insert, edit, remove or simply read information about the users registered projects they have worked on. Took me over three nights to configer him properly for heroku lol! 
			            </p>
			            <div className="white-button">
			              <a href="https://boiling-sea-65393.herokuapp.com/" target="_blank"  rel="noopener noreferrer">Open App</a>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="right-image-post">
			      <div className="row">
			        <div className="col-md-6">
			          <div className="left-text">
			            <h4>Locker</h4>
			            <p>
			              Locker is an enterprise inspired project that takes various web application projects and runs them under one application. The perpose is idealy to share server resources amongs those applications, and improve functionality of the initially basic applications. And users can request the source code of the applications on the locker. Why not check it out?
			            </p>
			            <div className="white-button">
			              <a href="https://warm-eyrie-96045.herokuapp.com/" target="_blank"  rel="noopener noreferrer">Open App</a>
			            </div>
			          </div>
			        </div>
			        <div className="col-md-6">
			          <div className="right-image">
			            <img src={Locker} alt="Locker" />
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
		);
	}
}