/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
// navigation
$(document).ready((function () {
	$('.menu-btn').click((function () {
		if (!$(this).hasClass('close')) {
			$('.menu-btn').addClass('close');
			$('.menu, .menu-nav, .menu-branding, .nav-item').addClass('show');
		} else {
			$('.menu-btn').removeClass('close');
			$('.menu, .menu-nav, .menu-branding, .nav-item').removeClass('show');
		}
	}));
}));

// page counter
const countEl = document.getElementById('count');
console.log(countEl);

function updateVisitCount() {
	fetch(
		'https://api.countapi.xyz/update/francuskimiroslav.com/homepage/?amount=1 '
	)
		.then((res) => res.json())
		.then((res) => {
			countEl.innerHTML = `<span class="text-secondary"><i class="fas fa-hashtag"></i> ${res.value} </span>`;
		});
}

if (countEl != null) {
	updateVisitCount();
}

// isotope initiate
var $grid = $('.projects').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows',
});

var filters = {};

$('.portfolio-menu').on('change', (function (event) {
	var $select = $(event.target);
	// get group key
	var filterGroup = $select.attr('value-group');
	// set filter for group
	filters[filterGroup] = event.target.value;
	// combine filters
	var filterValue = concatValues(filters);
	// set filter for Isotope
	$grid.isotope({ filter: filterValue });
}));

// flatten object by concatting values
function concatValues(obj) {
	var value = '';
	for (var prop in obj) {
		value += obj[prop];
	}
	return value;
}

document.addEventListener('DOMContentLoaded', (event) => {
	// form validation
	const form = document.getElementById('contact-form');
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const message = document.getElementById('message');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		checkInputs();
	});

	function checkInputs() {
		const nameValue = name.value.trim();
		const emailValue = email.value.trim();
		const messageValue = message.value.trim();

		if (nameValue === '') {
			setErrorFor(name, 'Please enter your full name');
		} else {
			setSuccessFor(name);
		}

		if (emailValue === '') {
			setErrorFor(email, 'Please enter your email address');
		} else if (!emailIsValid(emailValue)) {
			setErrorFor(email, 'Email is not valid');
		} else {
			setSuccessFor(email);
		}

		if (messageValue === '') {
			setErrorFor(message, 'Please enter your message');
		} else {
			setSuccessFor(message);
		}
	}

	function setErrorFor(input, message) {
		const form = input.parentElement;
		const small = form.querySelector('small');

		small.innerText = message;
		form.className = 'form__group error';
	}

	function setSuccessFor(input) {
		const form = input.parentElement;
		form.className = 'form__group success';
	}

	function emailIsValid(email) {
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	}

	// success message page - go back button
	function goBack() {
		window.history.back();
	}
});
