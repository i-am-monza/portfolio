import React, { Component } from 'react';
// Import images
import UCTUHR from './../assets/images/uctuhr.jpg';
import Cogrammar from './../assets/images/cogrammar.jpg';
import LChoices from './../assets/images/lchoices.jpg';
import UCT from './../assets/images/uct.jpg';
import HundredUp from './../assets/images/100up.jpg';
import DjMonza from './../assets/images/djmonza.jpg';

export class Refference extends Component {

    render() {
        return (
            <section className="section refference" data-section="refference">
		        <div className="container">
			        <div className="section-heading">
			        	<h2>Education & Experience</h2>
			            <div className="line-dec"></div>
			            <span >A science expo superstar back in the day; I love learning and teaching. I'm a freelance/contract developer/code reviewer and dj available by booking.</span>
			        </div>
		          <div className="row">
		            <div className="isotope-wrapper">
		              	<form className="isotope-toolbar">
		                	<label>
			                	<input type="radio" data-type="*" defaultChecked="" name="isotope-filter"/>
			                	<span id="all">all</span>
		                	</label>
		                	<label>
		                		<input type="radio" data-type="education" name="isotope-filter"/>
		                  		<span id="education">Education</span>
		                	</label>
		                	<label>
		                		<input type="radio" data-type="experience" name="isotope-filter"/>
		                  		<span id="experience">Experience</span>
		                	</label>
		                	<label>
		                		<input type="radio" data-type="music" name="isotope-filter"/>
		                  		<span id="music">Music</span>
		                  	</label>
		              </form>

		              <div className="row isotope-box">
		                <div className="experience isotope-item col-sm-6" data-type="experience">
		                  	<figure className="snip1321">
			                    <img src={UCTUHR} alt="uctuhr"/>
			                    <figcaption>
				                    <h4>Receptionist</h4>
				                    <p>
				                    	<b>Duration:</b> February 2016 – November 2016
				                        <br/>
				                        <b>Company:</b> UCT University House Residence
				                        <br/>
				                        <b>Reference:</b> +278 4581 9727 
				                    </p>
			                    </figcaption>
		                  </figure>
		                </div>

		                <div className="education isotope-item col-sm-6" data-type="education">
			                <figure className="snip1321">
			                    <img src={Cogrammar} alt="cogrammr"/>
			                    <figcaption>
				                    <h4>CoGrammar</h4>
				                    <p>
				                        <b>Program:</b> Software Engineering, Full Stack Web Dev.
				                        <br/>
				                        <b>Duration:</b> April 2019 - October 2019 (Complete)
				                    </p>
			                    </figcaption>
			                </figure>
		                </div>

		                <div className="experience isotope-item col-sm-6" data-type="experience">
			                <figure className="snip1321">
			                    <img src={LChoices} alt="lchoices"/>
			                    <figcaption>
				                    <h4>Project Consultant</h4>
				                    <p>
				                        <b>Duration:</b> one week
				                        <br/>
				                        <b>Company:</b> *contract
				                        <br/>
				                        <b>Reference:</b> +278 4581 9727
				                    </p>
			                    </figcaption>
			                </figure>
		                </div>

		                <div className="education isotope-item col-sm-6" data-type="education">
			                <figure className="snip1321">
			                    <img src={UCT} alt="uct"/>
			                    <figcaption>
				                    <h4>University of Cape Town</h4>
				                    <p>
				                        <b>Program:</b> B.Sc
				                        <br/>
				                        <b>Majors:</b> Computer Science, Information System
				                        <br/>
				                        <b>Duration:</b> February 2014 - February 2017 (incomplete)
				                    </p>
			                    </figcaption>
			                </figure>
		                </div>

		                <div className="experience isotope-item col-sm-6" data-type="experience">
			                <figure className="snip1321">
			                    <img src={HundredUp} alt="hundredUp"/>
			                    <figcaption>
				                    <h4>Mentor</h4>
				                    <p>
				                        <b>Duration:</b> 1 June 2014 – 4 June 2014
				                        <br/>
				                        <b>Company:</b> UCT 100up Program
				                        <br/>
				                        <b>Reference:</b> +278 2702 8838
				                    </p>
			                    </figcaption>
			                </figure>
		                </div>

		                <div className="experience isotope-item col-sm-6" data-type="experience">
			                <figure className="snip1321">
			                    <img src={UCTUHR} alt="uctuhr"/>
			                    <figcaption>
				                    <h4>Information Technology Representative</h4>
				                    <p>
				                        <b>Duration:</b> September 2014 – September 2015
				                        <br/>
				                        <b>Company:</b> UCT University House Residence
				                        <br/>
				                        <b>Reference:</b> +278 4581 9727
				                    </p>
			                    </figcaption>
			                </figure>
		                </div>

		                <div className="music isotope-item col-sm-6" data-type="music">
			                <figure className="snip1321">
			                    <img src={DjMonza} alt="djmonza"/>
			                    <figcaption>
				                    <h4>A deep tech. evening I</h4>
				                    <p>
				                        <b>Duration:</b> 00:51:36
				                        <br/>
				                        <b>Genre:</b> Deep House
				                    </p>
				                    <iframe title="tape 01" width="100%" height="60" scrolling="no" frameBorder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/734316337&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
			                    </figcaption>
			                </figure>
		                </div>

		                <div className="music isotope-item col-sm-6" data-type="music">
			                <figure className="snip1321">
			                    <img src={DjMonza} alt="djmonza"/>
			                    <figcaption>
				                    <h4>A deep tech. evening II</h4>
				                    <p>
				                        <b>Duration:</b> 00:51:36
				                        <br/>
				                        <b>Genre:</b> Deep House
				                    </p>
				                    <iframe title="tape 02" width="100%" height="60" scrolling="no" frameBorder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/734316337&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
			                    </figcaption>
			                </figure>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	</section>
        );
    }
}