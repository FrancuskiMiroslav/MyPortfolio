/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
// navigation
$(document).ready((function() {
  $(".menu-btn").click((function() {
    if (!$(this).hasClass("close")) {
      $(".menu-btn").addClass("close");
      $(".menu, .menu-nav, .menu-branding, .nav-item").addClass("show");
    } else {
      $(".menu-btn").removeClass("close");
      $(".menu, .menu-nav, .menu-branding, .nav-item").removeClass("show");
    }
  }));
}));

// page counter
const countEl = document.getElementById("count");
console.log(countEl);

function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/francuskimiroslav.com/homepage/?amount=1 ")
    .then(res => res.json())
    .then(res => {
      countEl.innerHTML = `<span class="text-secondary"><i class="fas fa-hashtag"></i> ${res.value} </span>`;
    });
}

if (countEl != null) {
  updateVisitCount();
}

// isotope initiate
var $grid = $(".projects").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows"
});

var filters = {};

$(".portfolio-menu").on("change", (function(event) {
  var $select = $(event.target);
  // get group key
  var filterGroup = $select.attr("value-group");
  // set filter for group
  filters[filterGroup] = event.target.value;
  // combine filters
  var filterValue = concatValues(filters);
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
}));

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
