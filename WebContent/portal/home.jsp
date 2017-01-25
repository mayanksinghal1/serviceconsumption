<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en" ng-app="homeApp">

<head>

				<!-- AngularJS scripts -->
				<script src="portal/js/common/angular.js"></script>
				<script src="portal/js/common/angular-ui-router.min.js"></script>
				<script src="portal/homeApp.js"></script>
				<script src="portal/services/ContactManagerService.js"></script>
				<script src="portal/controllers/mainController.js"></script>
				<script src="portal/controllers/mainAppController.js"></script>
			    <link href="portal/css/umarCustom.css" rel="stylesheet">

</head>




<body ng-controller="mainController" >
<div >

<header>
   <h1>Contact Manager</h1>
   	<div align="left">
   	<button style="height:30px; width:150px; "  ng-click="goTo()">Register Contact</button>
	<button style="height:30px; width:150px" ng-click="go()">Get Contact</button>
	</div>
</header>

							<div ui-view ></div>
							<footer></footer>
							</div>
</body>				

</html>