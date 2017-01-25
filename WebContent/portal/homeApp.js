'use strict';
var app=angular.module("homeApp",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$stateProvider.state('registerContact',{
		url:'/registerContact',
		templateUrl:'portal/partials/ContactsPartials/registerContact.html',
		controller:'mainAppController'
	}).state('getContacts',{
		url:'/getContacts',
		templateUrl:'portal/partials/ContactsPartials/getContacts.html',
		controller:'mainAppController'
	});
	$urlRouterProvider.otherwise('/home');
	
});