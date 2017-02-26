app.controller('CourseController',function($scope,CourseService){
	CourseService.getAll().then(function(res){
		$scope.courses=res.data;
	});
	
});