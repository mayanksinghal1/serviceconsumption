app.factory('ContactManagerService',
				function($http,$state) {
					return {
					
					
					
						registerContact : function( contactFormObject) {
							return $http({
								url : 'http://localhost:8083/contactManager/registerContact',
								method : 'POST',
								header : {
									accept : 'application/json'
								},
								data: contactFormObject								
								
							});
						},
						
			
					
						getContacts : function() {
							return $http({
								url : 'http://localhost:8083/contactManager/getContacts',
								method : 'GET',
								header : {
									accept : 'application/json'
								}
							});
						}

					}
				});



