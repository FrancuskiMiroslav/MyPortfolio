$(document).ready(function(){$(".menu-btn").click(function(){$(this).hasClass("close")?($(".menu-btn").removeClass("close"),$(".menu, .menu-nav, .menu-branding, .nav-item").removeClass("show")):($(".menu-btn").addClass("close"),$(".menu, .menu-nav, .menu-branding, .nav-item").addClass("show"))})});