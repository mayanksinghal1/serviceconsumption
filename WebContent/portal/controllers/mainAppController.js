app.controller('mainAppController',function($scope, ContactManagerService,$state) {

				
					$scope.contacts = [];
					$scope.name = "";
					$scope.email = "";
					$scope.contactNumber ="";
		
				
			
					// Register Contact
					$scope.registerContact = function(cname, gemail,gcontactNumber) {
						
						$scope.newContact = {
								name: cname, 
								email: gemail,
								contactNumber: gcontactNumber
								
						};
					
						ContactManagerService.registerContact($scope.newContact).then(function(data) {
							
							console.log(name);
							console.log(data);
							$state.go('home',{},{reload:true});
						})
					};
					
					
					
			
					//Get Contact List
					$scope.getContacts = function(){
						console.log("contact list");
						
						ContactManagerService.getContacts().then(
								function(data){
									$scope.contacts = data;
									console.log("All category "+ $scope.contacts);
								}
							)
					};
				
				});