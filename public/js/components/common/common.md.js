import navbarComponent from './navbar'
import * as moment from 'moment';
import 'moment/locale/fr';
var moment = require('moment');
moment().format();

let commonModule = angular.module('app.common', [])
    .component('navbar', navbarComponent)
    .name

export default commonModule
