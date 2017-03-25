import React from'react';
import {render} from 'react-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import $ from 'jquery';

class Container extends React.Component {
	constructor(){
		super();
	}
	state = {
		isLoad: "true",
		a: 'b'
	}
	render(){
		return(
			<div className="container">
				<Header a={this.state.a} />
				<Main ref="main" />
				<Footer />
			</div>
		)
	};
}

export default Container;