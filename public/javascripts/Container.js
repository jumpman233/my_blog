import React from'react';
import {render} from 'react-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import $ from 'jquery';
import {Route} from 'react-router-dom';

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

	ifNotShowSidebar(){
		return !(this.state.screenData.width >= this.state.screenData.sidebarMaxWidth &&
				this.props.location.pathname.indexOf('article') >= 0);
	}

	showIn(){
		return new Promise((resolve, reject) => {
			if(this.ifNotShowSidebar()){
				resolve();
			} else{
				let str = this.state.defaultClass +" "+ this.state.showInClass;
				this.setState({className: str});
				window.setTimeout(() => {
					resolve();
				}, 500);
				$('.container').css('margin-right', '200px');
			}
		})
	}

	componentWillMount(){
		$(window).resize(event =>{
			this.setState({
				screenData:{
					width: window.innerWidth,
					sidebarMaxWidth: this.state.screenData.sidebarMaxWidth
				}
			});
			if(this.ifNotShowSidebar()){
				$('.container').css('margin-right', '0');
			} else{
				$('.container').css('margin-right', '200px');
			}
		});
	}

	mainComponentShowIn(){
		return new Promise((resolve, reject) => {
			this.showIn.call(this);
		})
	}

	componentDidMount(){
		this.showIn();
	}

	render(){
		return(
			<div className={this.state.className}>
				<Header ref="header"/>
				<Main ref="main" {...this.state.screenData}/>
				<Footer />
			</div>
		)
	}
}

export default Container;