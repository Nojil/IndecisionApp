import React from 'react';
import ReactDOM from 'react-dom';

//Browser style resets
import '../node_modules/normalize.css/normalize.css';
//Indecision Styles
import './styles/styles.scss';

//app import
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));