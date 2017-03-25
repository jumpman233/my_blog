import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			className : "header-main",
			fadeInClass: "fade-in"
		}
	}
	static defaultProps = {
	};
	componentDidMount(){
		let str = this.state.className +" "+ this.state.fadeInClass;
		this.setState({className: str});
	}
	render(){
		return(
			<header className={this.state.className}>
				<h1>浪客</h1>
				<nav className="header-nav">
					<li><a href="#">首页</a></li>
					<li><a href="#">归档</a></li>
					<li><a href="#">关于</a></li>
				</nav>
			</header>
		)
	}
}
export default Header;