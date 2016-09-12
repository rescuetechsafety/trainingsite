
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require analytics
//= require_tree .
//= require turbolinks

document.addEventListener("turbolinks:load", track);

$(document).on("click", ".button", function (e) {
  e.preventDefault();

  var button = $(this),
      inkSize = 300;

  button.append(
    $("<div class='button--ink-container'><div class='button--ink'></div></div>")
    .css({
      left: e.offsetX - inkSize / 2,
      top: e.offsetY - inkSize / 2
    })
  );

  setTimeout(function () {
    Turbolinks.visit(button[0].href);
  }, 300);
});

function track () {
  ga("set", "page", location.pathname);
  ga("send", "pageview");
}
