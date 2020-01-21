import React, { Component } from 'react';
// Import images
import Author from './../assets/images/author-image.jpg';

export class Menu extends Component {

    render() {
        return (
            <div className="responsive-nav">
			  <i className="fa fa-bars" id="menu-toggle"></i>
			  <div id="menu" className="menu">
			    <i className="fa fa-times" id="menu-close"></i>
			    <div className="container">
			      <div className="image">
			        <a href="https://www.linkedin.com/in/monwabisi-dingane-4287028b/"  rel="noopener noreferrer"><img id="author" src={Author} alt="author" /></a>
			      </div>
			      <div className="author-content">
			        <h4>Monza Dingane</h4>
			        <span>Full Stack Dev. - Software Engineer</span>
			        <br/>
			        <span>Code Reviewer - Entrepreneur</span>
			        <br/>
			        <span>Resonant Leader - Deejay</span>
			      </div>
			      <nav className="main-nav" role="navigation">
			        <ul className="main-menu">
			          <li><a href="#work">My Work</a></li>
			          <li><a href="#skills">What I’m good at</a></li>
			          <li><a href="#refference">Education & Experience</a></li>
			          <li><a href="#contact">Contact Me</a></li>
			        </ul>
			      </nav>
			      <div className="social-network">
			        <ul className="soial-icons">
			          <li>
			            <a href="https://github.com/i-am-monza/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
			          </li>
			          <li>
			            <a href="https://www.linkedin.com/in/monwabisi-dingane-4287028b/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
			          </li>
			          <li>
			            <a href="https://join.slack.com/t/monzadingane/shared_invite/enQtODg4NTYwMzYwNDIzLWVmMGU2ZjY0ZTYxMGUwZWRiOWZkYjBiMzk1NzFjZDAzZTI4OTk3MmJhOGFkZmI1ZWI4NzRmY2M5MWViNzFjNmE" target="_blank" rel="noopener noreferrer"><i className="fa fa-slack"></i></a>
			          </li>
			          <li>
			            <a href="https://twitter.com/IAmMonza" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
			          </li>
			          <li>
			            <a href="https://www.instagram.com/iammonza/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
			          </li>
			          <li>
			            <a href="https://www.facebook.com/monwabisi.dingane.7" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
			          </li>
			        </ul>
			      </div>
			      <div className="copyright-text">
			        <p>&copy; Copyrights by <a href="https://www.linkedin.com/in/monwabisi-dingane-4287028b/" target="_blank"  rel="noopener noreferrer">Monza Dingane</a></p>
			      </div>
			    </div>
			  </div>
			</div>
        );
    }
}