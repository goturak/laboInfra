$(function() {
	console.log("loading students");
	
	function loadStudents(){
		$.getJSON("/api/students/", function(students){
			console.log(students);
			var mess = "nobody is here";
			if(students.length>0){
				message=students[0].firstName+" "+ students[0].lastName;
			}
			$(".text-white-50 mx-auto mt-2 mb-5").text(message);
		});
	};

	loadStudents();
	setInterval(loadStudents,2000);
});
