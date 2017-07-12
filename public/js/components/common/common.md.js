import navbarComponent from './navbar'

let commonModule = angular.module('app.common', ['angularMoment'])
    .component('navbar', navbarComponent)
    .name

export default commonModule
