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
