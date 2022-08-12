$(function () {
	$("#sod").on("click", function () {
		$("#sod").addClass("active");
        $("#en").removeClass("active");
        $(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Sum Of Digits </h3>" +
				"<p class='text-md'>Write a PHP program to print the sum of digits in a given integer." +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 23 <br>" +
				"Output: 5<br>" +
				"<strong>Example 2: </strong><br>" +
				"Input: 624<br>" +
				"Output: 12</p>"
		);
	});

    $("#en").on("click", function () {
		$("#en").addClass("active");
        $("#sod").removeClass("active");
        $(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Even Numbers </h3>" +
				"<p class='text-md'>Write a PHP program to check if a number is an odd or an even number."+
                "If it is an odd number the program should print; <strong>Odd number</strong> otherwise it should print; <strong>Even number</strong>" +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 23 <br>" +
				"Output: odd number<br>" +
				"<strong>Example 2: </strong><br>" +
				"Input: 12<br>" +
				"Output: even number</p>"
		);
	});
});
