document.getElementById("submit-button").onclick = function(event) {
	var pwd = document.forms["my_form"]["password"].value
	var usrname = document.forms["my_form"]["username"].value

	var uval = false
	var pval = false
	
	if(usrname.length > 0) {
		uval = true
	}

	if(pwd != "12345") {
		alert("invalid password")
	}
	else {
		pval = true
	}

	if (uval == true && pval == true) {
		alert("yay")
	}
}

document.onkeypress = function(event) {
	if (event.charCode >= 48 && event.charCode <= 57) {
		document.getElementById("keypresstype").innerText = "number"
	}
	else if (event.charCode >= 97 && event.charCode <= 122) {
		document.getElementById("keypresstype").innerText = "letter"
	}
}