import React, {Component} from 'react';

export class Contact extends Component {

	url_ = process.env.url_ || "http://localhost:3008";

	constructor() {
		super();

		this.state = {};
	}

	makeRequest = async (path, init) => {
		let request = await fetch(this.url_.concat(path), init);
		let response = await request.json();

		return response;
	}

	sendMessage = action => {

		if(Object.keys(this.state) !== 0 && action.target.id === "sendMessage")
		{
			if( this.state.name && this.state.email && this.state.subject && this.state.message)
			{	
				let message = {
					name: this.state.name,
					email: this.state.email,
					subject: this.state.subject,
					message: this.state.message
				};

				let init = {method: 'POST', headers: {"Copntent-Type": "application/json"}, body: JSON.stringify(message)};
				let path = "/portfolio/sendmessage";

				this.makeRequest(path, init)
					.then(data => {
						alert(data.json());
						console.log(data.json());
					}, err => {
						alert(err.json());
						console.log(err.json())
					});

				alert("Email sent to Monza.");
			}
		}
	}

	captureInputs = e => {
		switch(e.target.id)
		{
			case 'name':
			{
				this.setState({name: e.target.value});
				break;
			}

			case 'email':
			{
				this.setState({email: e.target.value});
				break;
			}

			case 'subject':
			{
				this.setState({subject: e.target.value});
				break;
			}

			case 'message':
			{
				this.setState({message: e.target.value});
				break;
			}

			default: 
			{
				console.error("Unexpected error.");
				break;
			}
		}
	}

	render() {
		return (
			<section className="section contact" data-section="contact">
				<div className="container">
				    <div className="section-heading">
					    <h2>Contact Me</h2>
					    <div className="line-dec"></div>
					    <span>
					    	<i className="fa fa-phone"></i><a href="tel:+27842807666"> +278 4280 7666</a>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-envelope"></i><a href="mailto:monwabisidingane@gmail.com"> monwabisidingane@gmail.com</a>
					    </span>
					    <br/>
					    <span>
					        Bookings: <i className="fa fa-envelope"></i><a href="mailto:lllconceptsa@gmail.com"> lllconceptsa@gmail.com</a> &nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-facebook"></i><a href="https://www.facebook.com/MonzaDingane" target="_blank"  rel="noopener noreferrer"> Monza Dingane</a>
					    </span>
				    </div>
				    <div className="row">
					    <div className="right-content">
					        <div className="container">
						        <form id="contact">
						            <div className="row">
							            <div className="col-md-6">
							                <fieldset>
								                <label>Name:</label>
								                <input
								                	onChange={event => this.captureInputs(event)}
								                    name="name"
								                    type="text"
								                    className="form-control"
								                    id="name"
								                    placeholder="Your name..."
								                    required=""/>
							                </fieldset>
							            </div>
						              	<div className="col-md-6">
						                	<fieldset>
						                  		<label>Email:</label>
						                  		<input
						                  			onChange={event => this.captureInputs(event)}
						                    		name="email"
						                    		type="text"
						                    		className="form-control"
						                    		id="email"
						                    		placeholder="Your email..."
						                    		required=""
						                  		/>
						                	</fieldset>
						              	</div>
						              	<div className="col-md-12">
						                	<fieldset>
						                  		<label>Subject:</label>
						                  		<input
						                  			onChange={event => this.captureInputs(event)}
						                    		name="subject"
						                    		type="text"
						                    		className="form-control"
						                    		id="subject"
						                    		placeholder="Subject..."
						                    		required=""
						                  		/>
						                	</fieldset>
						              	</div>
						             	<div className="col-md-12">
						                	<fieldset>
						                  		<label>Message:</label>
						                  		<textarea
						                  			onChange={event => this.captureInputs(event)}
						                    		name="message"
						                    		rows="6"
						                    		className="form-control"
						                    		id="message"
						                    		placeholder="Your message..."
						                    		required=""
						                  		></textarea>
						                	</fieldset>
						              	</div>
						              	<div className="col-md-12">
						                	<fieldset>
						                  		<button onClick={event => this.sendMessage(event)} id="sendMessage" className="button">
						                    		Send Message
						                  		</button>
						                	</fieldset>
						             	</div>
						            </div>
						        </form>
					        </div>
					    </div>
				    </div>
				</div>
			</section>
		);
	}
}