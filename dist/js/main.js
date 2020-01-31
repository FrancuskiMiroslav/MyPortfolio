/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
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

$(".portfolio-item").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows"
});

$(".portfolio-menu ul li").click((function() {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".projects").isotope({
    filter: selector
  });
  return false;
}));

function goBack() {
  window.history.back();
}
