import React from 'react';
import render from 'react-dom';
import $ from 'jquery';

class Sidebar extends React.Component{
	state = {
		className: 'sidebar hidden',
		fadeInClass: 'sidebar-show-in',
		defaultClass: 'sidebar'
	}
	componentDidMount(){
		var sidebar = $('.sidebar');
		if(this.props.width <= this.props.maxWidth){
			sidebar.css('visibility','hidden');
		}
	}
	showIn(){
		return new Promise((resolve, reject) => {
			if(this.props.width <= this.props.maxWidth){
				resolve();
			} else {
				this.setState({className: this.state.defaultClass + ' ' + this.state.fadeInClass});
				window.setTimeout(() => {
					resolve();
				}, 500);
			}
		});
	}
	componentWillMount(){
	}
	componentWillUpdate(data){
		var sidebar = $('.sidebar');
		if(data.width !== undefined){			
			if(data.width <= this.props.maxWidth){
				sidebar.hide();
			} else{
				sidebar.show();
			}
		}
	}
	render(){
		return (
			<aside className={this.state.className}>
			</aside>
		)
	}
}

export default Sidebar;