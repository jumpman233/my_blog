import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import Container from './javascripts/Container.js';

//css
import './stylesheets/style.css';

render(<Container />, document.getElementsByClassName('container')[0])