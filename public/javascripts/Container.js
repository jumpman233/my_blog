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
		aniFinish: false,
		screenData: {
			width: window.innerWidth,
			sidebarMaxWidth: 700
		},
		className: 'container',
		defaultClass: 'container',
		showInClass: 'width-reduce-animate'
	}
	showIn(){
		return new Promise((resolve, reject) => {
			let str = this.state.defaultClass +" "+ this.state.showInClass;
			this.setState({className: str});
			window.setTimeout(() => {
				resolve();
			}, 500);
		})
	}
	componentWillMount(){
		$(window).resize(event =>{
			this.setState({
				screenData:{
					width: window.innerWidth
				}
			});
		});
	}
	mainComponentShowIn(){
		return new Promise((resolve, reject) => {
			this.showIn.call(this);
			$('.container').css('margin-right', '200px');
		})
	}
	componentDidMount(){
		this.refs.header.titleShowIn()
			.then(() => this.refs.main.refs.sidebar.showIn())
			.then(() => {
				this.mainComponentShowIn();
			})
	}
	render(){
		return(
			<div className={this.state.className}>
				<Header ref="header" showIn={this.showIn}/>
				<Main ref="main" {...this.state.screenData} aniFinish={this.state.aniFinish}/>
				<Footer />
			</div>
		)
	};
}

export default Container;