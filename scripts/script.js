function validateAddCourse() {

	var valid = true;

	//x = document.getElementById("sid").value.search(/^[a-zA-Z]{10,}$/);

//----------------------------------course name validate-------------------------------------------------
	if(document.getElementById("cname").value.search(/^[A-Za-z]{10,}$/) >= 0){
		document.getElementById("errCname").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errCname").style.display = "block";
	}
//--------------------------------course code validate----------------------------------------------
	if(document.getElementById("ccode").value.search(/^140[0-9]{5}-[0-9]{1}$/) >= 0){
		document.getElementById("errCcode").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errCcode").style.display = "block";
	}
//--------------------------------menu level validate----------------------------------------------
	if(document.getElementById("level-menu").value != "Please select the course level"){
		document.getElementById("errLevel").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errLevel").style.display = "block";
	}
//--------------------------------credit hours menu validate----------------------------------------------
	if(document.getElementById("credit-menu").value != "Please select the course credit hours"){
		document.getElementById("errCredit").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errCredit").style.display = "block";
	}
//--------------------------------course description validate----------------------------------------------
	if(document.getElementById("cdescription").value.search(/^[A-Za-z\s]{30,}$/) >= 0){
		document.getElementById("errCdescription").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errCdescription").style.display = "block";
	}
//--------------------------------prerequeiste course validate----------------------------------------------
	var x = document.getElementById("precourse").value;
	if(x.search(/^140[0-9]{5}-[0-9]{1}$/) >= 0 || x == ""){
		document.getElementById("errPrecourse").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errPrecourse").style.display = "block";
	}
	return valid;
}

function validateAddCourseStudents() {
	var valid = true;

//----------------------------------student id validate-------------------------------------------------
	if(document.getElementById("sid").value.search(/^[0-9]{9}$/) >= 0){
		document.getElementById("errSid").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errSid").style.display = "block";
	}
//----------------------------------student name validate-------------------------------------------------
	if(document.getElementById("sname").value.search(/^[A-Za-z]{10,}$/) >= 0){
		document.getElementById("errSname").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errSname").style.display = "block";
	}
//----------------------------------student email validate-------------------------------------------------
	if(document.getElementById("semail").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == 0){
		document.getElementById("errSemail").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errSemail").style.display = "block";
	}
//----------------------------------course menu 1 validate-------------------------------------------------
	if(document.getElementById("course-menu1").value != "Please select the course code 1..."){
		document.getElementById("errCourse-menu1").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errCourse-menu1").style.display = "block";
	}
//----------------------------------course menu 2 validate-------------------------------------------------
	if(document.getElementById("course-menu2").value != "Please select the course code 2..."){
		document.getElementById("errCourse-menu2").style.display = "none";
	}else {
		valid = false;
		document.getElementById("errCourse-menu2").style.display = "block";
	}


	return valid;

}

