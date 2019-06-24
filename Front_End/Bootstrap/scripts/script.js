function msg() {
	alert("Hello World");
}

function example_submit() {
	var name = document.forms["RegForm"]["Name"];
	var email = document.forms["RegForm"]["Email"];

	if (name.value == "") {
		window.alert("Enter your name");
		name.focus();
	}
	if (email.value.indexOf("@", 0) < 0) {
		window.alert("Please enter a valid email");
		email.focus()
	}
}

$(document).ready(function() {
	$("myButton").click(function(event){;
		this.innerHYML = "button clicked"
	})
})