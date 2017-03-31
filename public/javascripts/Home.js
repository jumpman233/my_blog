import React, {Component} from 'react';
import $ from 'jquery';

import '../stylesheets/home.scss';

class Home extends React.Component{
	state = {
		className: 'home fade-in'
	}
	componentDidMount(){
		
	}
	click(){
		console.log("?");
	}
	render (){
		return (
			<div className={this.state.className}>
				<div className='summary' onClick={this.click}>
					<h1>article1</h1>
					<p>this is a article summary</p>
					<a className='readAll' href='#'>阅读全文</a>
				</div>
				<div className='summary' onClick={this.click}>
					<h1>article2</h1>
					<p>this is a article summary</p>
				</div>
			</div>
		)
	}
}

export default Home;