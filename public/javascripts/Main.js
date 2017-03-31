import React, {Component} from 'react';
import {render} from 'react-dom';
import Home from'./Home.js';
import Article from './Article.js';
import Sidebar from './Sidebar.js';
import $ from 'jquery';
import {Route} from 'react-router-dom';

class Main extends React.Component {
	state = {
		className: "main",
		defaultClass: "main",
		showInClass: "width-reduce-animate"
	}
	
	componentWillUpdate(data){
		
	}
	componentDidMount(){

	}
	render() {
		return (
			<div className={this.state.className}>
				<Route path='/article/:artId' render={() => 
					<Article {...this.props}/>}/>
				<Route path='/home' component={Home}/>
			</div>
		);
	}
}
export default Main;