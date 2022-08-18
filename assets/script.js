$(function () {
	$("#sod").on("click", function () {
		$("#sod").addClass("active");
		$("#en").removeClass("active");
		$("#pn").removeClass("active");
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
		$("#pn").removeClass("active");
		$(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Even or Odd Numbers </h3>" +
				"<p class='text-md'>Write a PHP program to check if a number is an odd or an even number." +
				"If it is an odd number the program should print; <strong>Odd number</strong> otherwise it" +
				"should print; <strong>Even number</strong>" +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 23 <br>" +
				"Output: odd number<br>" +
				"<strong>Example 2: </strong><br>" +
				"Input: 12<br>" +
				"Output: even number</p>"
		);
	});

	$("#pn").on("click", function () {
		$("#pn").addClass("active");
		$("#on").removeClass("active");
		$("#sod").removeClass("active");
		$("#en").removeClass("active");
		$(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Prime number</h3>" +
				"<p class='text-md'>Write a PHP program to check if a number is a prime number." +
				"If it is a prime number the program should print; <strong>prime number</strong>" +
				"otherwise it should print; <strong>not a prime number</strong>" +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 23 <br>" +
				"Output: odd number<br>" +
				"<strong>Example 2: </strong><br>" +
				"Input: 12<br>" +
				"Output: even number</p>"
		);
	});

	$("#tn").on("click", function () {
		$("#tn").addClass("active");
		$("#pn").removeClass("active");
		$("#on").removeClass("active");
		$("#sod").removeClass("active");
		$("#en").removeClass("active");
		$(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Times Table of Numbers</h3>" +
				"<p class='text-md'>Write a PHP program to print a number's first ten multiplication" +
				"table values." +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 2 <br>" +
				"Output: 2 4 6 8 10 12 14 16 18 20<br>" +
				"<strong>Example 2: </strong><br>" +
				"Input: 5<br>" +
				"Output: 5 10 15 20 25 30 35 40 45 50</p>"
		);
	});

	$("#fact").on("click", function () {
		$("#fact").addClass("active");
		$("#tn").removeClass("active");
		$("#pn").removeClass("active");
		$("#on").removeClass("active");
		$("#en").removeClass("active");
		$("#sod").removeClass("active");
		$(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Factorial</h3>" +
				"<p class='text-md'>Write a PHP program to print the factorial of a number." +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 5 <br>" +
				"Output: 120<br>" +
				"<strong>Example 2: </strong><br>" +
				"Input: 6<br>" +
				"Output: 720</p>"
		);
	});

	$("#armn").on("click", function () {
		$("#armn").addClass("active");
		$("#fact").removeClass("active");
		$("#tn").removeClass("active");
		$("#pn").removeClass("active");
		$("#on").removeClass("active");
		$("#sod").removeClass("active");
		$("#en").removeClass("active");
		$(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Armstrong number</h3>" +
				"<p class='text-md'>Write a PHP program to check for an armstrong number. " +
				"If it is an armstrong number the program should print; <strong>armstrong</strong>" +
				"otherwise it should print; <strong>not armstrong</strong>" +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 371 <br>" +
				"Output: Armstrong<br>" +
				"<strong>Example 3: </strong><br>" +
				"Input: 342<br>" +
				"Output: not Armstrong</p>"
		);
	});

	$("#pln").on("click", function () {
		$("#pln").addClass("active");
		$("#armn").removeClass("active");
		$("#fact").removeClass("active");
		$("#tn").removeClass("active");
		$("#pn").removeClass("active");
		$("#on").removeClass("active");
		$("#en").removeClass("active");
		$("#sod").removeClass("active");
		$(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Palindrom Number</h3>" +
				"<p class='text-md'>Write a PHP program to check for a palindrom number. " +
				"If it is a palindrom number the program should print; <strong>palindrom number</strong>" +
				"otherwise it should print; <strong>not palindrom number</strong>" +
				"<strong><br>Example 1: </strong>" +
				"<br>Input: 121 <br>" +
				"Output: Not palindrom number<br>" +
				"<strong>Example 3: </strong><br>" +
				"Input: 113<br>" +
				"Output: palindrom number</p>"
		);
	});

	$("#fibos").on("click", function () {
		$("#fibos").addClass("active");
		$("#pln").removeClass("active");
		$("#armn").removeClass("active");
		$("#fact").removeClass("active");
		$("#tn").removeClass("active");
		$("#pn").removeClass("active");
		$("#on").removeClass("active");
		$("#en").removeClass("active");
		$("#sod").removeClass("active");
		$(".container").empty();
		$(".container").append(
			" <h3 class='text-success'>Fibonacci Series</h3>" +
				"<p class='text-md'>Write a PHP program to print Fibonacci series of any given length. " +
				"<ol type='a'> <li>without using recursion</li>" +
				"<li>Using recursion.</li></ul>" +
				"<strong><br>Example: </strong>" +
				"<br>Input: 10 <br>" +
				"Output: 0 1 1 2 3 5 8 13 21 34</p>"
		);
	});
});
