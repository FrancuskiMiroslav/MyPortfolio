// navigation
$(document).ready(function() {
  $(".menu-btn").click(function() {
    if (!$(this).hasClass("close")) {
      $(".menu-btn").addClass("close");
      $(".menu, .menu-nav, .menu-branding, .nav-item").addClass("show");
    } else {
      $(".menu-btn").removeClass("close");
      $(".menu, .menu-nav, .menu-branding, .nav-item").removeClass("show");
    }
  });
});

// isotope initiate
var $grid = $(".projects").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows"
});

var filters = {};

$(".portfolio-menu").on("change", function(event) {
  var $select = $(event.target);
  // get group key
  var filterGroup = $select.attr("value-group");
  // set filter for group
  filters[filterGroup] = event.target.value;
  // combine filters
  var filterValue = concatValues(filters);
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// flatten object by concatting values
function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

// success message page - go back button
function goBack() {
  window.history.back();
}
