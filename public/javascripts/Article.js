import React from 'react';
import render from 'react-dom';
import Sidebar from './Sidebar.js';

class Article extends React.Component{

	render(){
		return(
			<section className="article padding-left">
					<article className="main">
						<h1 className="article-title">title</h1>
						<time></time>
						<p>this is a page??</p>
					</article>
					<Sidebar ref="sidebar" {...this.props}/>
			</section>
		)
	}
}

export default Article;