app.factory("CourseService",function($http){
	var obj={};

	obj.getAll=function(){
		return $http.get("http://localhost:8080/.........");
	}

	return obj;

});