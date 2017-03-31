import React from 'react';
import render from 'react-dom';
import Util from './Util.js';
import $ from 'jquery';

class Sidebar extends React.Component{
	state = {
		className: 'sidebar',
		fadeInClass: 'sidebar-show-in',
		defaultClass: 'sidebar',
		rightClass: 'sidebar-right',
		normalClass: 'sidebar-normal',
		classes: ['sidebar', 'sidebar-right']
	}

	showIn(curWidth, maxWidth){
		if(curWidth === undefined || maxWidth === undefined){
			throw Error('Sidebar showIn(): param error!');
		}
		return new Promise((resolve, reject) => {
			let sidebar = $('.sidebar');
			if(curWidth <= maxWidth){
				resolve();
			} else {
				let classes = this.state.classes;
				if(!Util.haveClass(classes, this.state.fadeInClass)){
					Util.addClass(classes, this.state.fadeInClass);
				}
				if(Util.haveClass(classes, this.state.normalClass)){
					Util.replaceClass(classes, this.state.normalClass, this.state.rightClass);
				}
				this.setState({classes: classes});
				window.setTimeout(() => {
					Util.replaceClass(classes, this.state.rightClass, this.state.normalClass);
					this.setState({classes: classes});
					resolve();
				}, 500);
			}
		});
	}

	componentDidMount(){
		this.showIn(this.props.width, this.props.sidebarMaxWidth);
	}


	componentWillUpdate(data){
		let sidebar = $('.sidebar');
		if(data.width !== undefined){		
			if(data.width <= data.sidebarMaxWidth){
				sidebar.css('visibility', 'hidden');
			} else{
				sidebar.css('visibility', 'visible');
			}
		}
	}
	render(){
		return (
			<aside className={Util.getClassStr(this.state.classes)}>
			</aside>
		)
	}
}

export default Sidebar;