document.addEventListener('DOMContentLoaded', function () {
	// isotope initiate
	const work = document.getElementById('work');

	if (work) {
		let $grid = $('.projects').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows',
		});

		let filters = {};

		$('.portfolio-menu').on('change', function (event) {
			var $select = $(event.target);
			// get group key
			var filterGroup = $select.attr('name');
			// set filter for group
			filters[filterGroup] = event.target.value;
			// combine filters
			var filterValue = concatValues(filters);
			// set filter for Isotope
			$grid.isotope({ filter: filterValue });
		});

		// flatten object by concatting values
		function concatValues(obj) {
			var value = '';
			for (var prop in obj) {
				value += obj[prop];
			}
			return value;
		}
	}
});
