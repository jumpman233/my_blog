import React, {Component} from 'react';
import {render} from 'react-dom';
import Article from './Article.js';
import Sidebar from './Sidebar.js';

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<Article />
				<Sidebar />
			</div>
		);
	}
}
export default Main;