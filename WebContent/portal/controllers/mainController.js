app.controller('mainController',function($scope,$state) {
					$scope.goTo = function() {
						 $state.transitionTo("registerContact");
					}
					
					$scope.go = function(){
						$state.transitionTo("getContacts");
					}
				});