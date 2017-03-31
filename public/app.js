import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import Container from './javascripts/Container.js';
import {Link, Route, HashRouter} from 'react-router-dom';

//css
import './stylesheets/style.scss';
import './stylesheets/header.scss';
import './stylesheets/footer.scss';
import './stylesheets/sidebar.scss';
import './stylesheets/main.scss';

render((
		<HashRouter>
			<Route path="/" component={Container}/>
		</HashRouter>
	), $('#container')[0]);