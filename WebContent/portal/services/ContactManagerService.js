app.factory('ContactManagerService',
				function($http,$state) {
					return {
					
					
					
						registerContact : function( contactFormObject) {
							return $http({
								url : 'http://server-contactmanager.44fs.preview.openshiftapps.com//registerContact',
								method : 'POST',
								header : {
									accept : 'application/json'
								},
								data: contactFormObject								
								
							});
						},
						
			
					
						getContacts : function() {
							return $http({
								url : 'http://server-contactmanager.44fs.preview.openshiftapps.com//getContacts',
								method : 'GET',
								header : {
									accept : 'application/json'
								}
							});
						}

					}
				});




