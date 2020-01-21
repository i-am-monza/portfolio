import React, {Component} from 'react';
// Import stylesheets
import './assets/css/main-style.css';
//Import queries
import './assets/js/queries.js';
//Import components
import {Menu} from './components/Menu.js';
import {MyWork} from './components/MyWork';
import {Skills} from './components/Skills.js';
import {Refference} from './components/Refference.js';
import {Contact} from './components/Contact.js';

// Main application component
export class Portfolio extends Component {

    render() {
        return (
            <div id="page-wraper">
				{/* Sidebar Menu */}
				<Menu />
				{/*Single-page rendered components*/}
				<MyWork />
				<Skills />
				<Refference />
				<Contact />
		    </div>
        );
    }
}