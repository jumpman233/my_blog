import React from'react';
import {render} from 'react-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

class Container extends React.Component {
	click(e){
		console.log(e);
	}
	render(){
		React.Children.map(this.prop, function (a) {
			console.log(a);
		});
		return(
			<div onClick={this.click} className="container">
				<Header />
				<Main />
				<Footer />
			</div>
		)
	};
}

export default Container;