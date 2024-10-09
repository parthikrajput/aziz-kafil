window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 130);
});

jQuery(".count").each(function ($) {
  jQuery(this)
    .prop("count", 0)
    .animate(
      {
        count: jQuery(this).text(),
      },
      {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          jQuery(this).text(Math.ceil(now));
        },
      }
    );
});

jQuery(document).ready(function () {
  jQuery(".at-tab:first").slideDown();
  jQuery(".at-title:first").addClass("active");
  jQuery(".at-item:first").addClass("active-bg");
});

jQuery(".at-title").click(function () {
  var wasActive = jQuery(this).hasClass("active");

  jQuery(".at-tab").slideUp();
  jQuery(".at-title").removeClass("active");
  jQuery(".at-item").removeClass("active-bg");

  if (!wasActive) {
    jQuery(this).addClass("active");
    jQuery(this).next(".at-tab").slideDown();
    jQuery(this).parent(".at-item").addClass("active-bg");
  }
});

jQuery(document).ready(function ($) {
  $("#btt").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
