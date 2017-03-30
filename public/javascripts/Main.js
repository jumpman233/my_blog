import React, {Component} from 'react';
import {render} from 'react-dom';
import Article from './Article.js';
import Sidebar from './Sidebar.js';
import $ from 'jquery';

class Main extends React.Component {
	state = {
		className: "main",
		defaultClass: "main",
		showInClass: "width-reduce-animate"
	}
	
	componentWillUpdate(data){
	}
	render() {
		return (
			<div className={this.state.className}>
				<Article />
				<Sidebar ref="sidebar" {...this.props}/>
			</div>
		);
	}
}
export default Main;