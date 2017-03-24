import React from 'react';
import render from 'react-dom';

class Article extends React.Component{
	render(){
		return(
			<section className="article padding-left">
					<article id="main">
						<h1 className="article-title">title</h1>
						<time></time>
						<p>this is a page??</p>
					</article>
			</section>
		)
	}
}

export default Article;