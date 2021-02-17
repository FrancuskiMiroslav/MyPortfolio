document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');

	if (btnScrollToTop) {
		btnScrollToTop.addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
	}

	// navigation
	const menuBtn = document.querySelector('.menu-btn');
	const menu = document.querySelector('.menu');
	const menuBranding = document.querySelector('.menu-branding');
	const menuNav = document.querySelector('.menu-nav');
	const navItem = Array.from(document.querySelectorAll('.nav-item'));

	menuBtn.addEventListener('click', (e) => {
		if (e.currentTarget.className != 'menu-btn close') {
			menuBtn.classList.add('close');
			menu.classList.add('show');
			menuBranding.classList.add('show');
			menuNav.classList.add('show');
			navItem.forEach((item) => {
				item.classList.add('show');
			});
		} else {
			menuBtn.classList.remove('close');
			menu.classList.remove('show');
			menuBranding.classList.remove('show');
			menuNav.classList.remove('show');
			navItem.forEach((item) => {
				item.classList.remove('show');
			});
		}
	});

	// page counter
	const countEl = document.getElementById('count');

	if (countEl) {
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
	}
});
