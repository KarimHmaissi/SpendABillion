import '../scss/index.scss';
import cluster from 'clusterize.js';
import React from 'react';
import reactDom from 'react-dom';
import App from './app';

console.log('Running');
console.log(cluster);
reactDom.render(<App />, document.getElementById('app'));
