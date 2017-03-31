import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			className : "header-main",
			defaultClass: "header-main",
			fadeInClass: "fade-in",
			showInClass: "width-reduce-animate"
		}
	}

	titleShowIn(){
		return new Promise((resolve, reject) => {
			let str = this.state.defaultClass +" "+ this.state.fadeInClass;
			this.setState({className: str});
			window.setTimeout(() => {
				resolve();
			}, 500);
		});
	}

	componentWillMount(){
	}
	componentDidMount(){
		this.titleShowIn();
	}
	render(){
		return(
			<header className={this.state.className}>
				<h1>浪客</h1>
				<nav className="header-nav">
					<li><Link to='/home'>首页</Link></li>
					<li><Link to='/files'>归档</Link></li>
					<li><Link to='/about'>关于</Link></li>
				</nav>
			</header>
		)
	}
}
export default Header;