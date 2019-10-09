'use strict';

import 'nodelist-foreach-polyfill';
import 'babel-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';


import myModalWindows from './modules/myModalWindows';
import accordion from './modules/accordion';
import serverRequest from './modules/fetch';
import showBlocks from './modules/showBlocks';
import calculator from './modules/calculator';


// All popup windows
myModalWindows();
// accordion
accordion();
// serverRequest Fetch
serverRequest();
// show hidden blocks
showBlocks();
// calculator
calculator();



