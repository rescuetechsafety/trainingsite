
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require analytics
//= require_tree .

function ready() {
  $(".button").on("click", buttonHandler);
}

function buttonHandler(e) {
  e.preventDefault();

  var button = $(this);
  var inkSize = 300;
  var style = {
    left: e.offsetX - inkSize / 2,
    top: e.offsetY - inkSize / 2
  };
  var ink = $("<div class='button--ink-container'><div class='button--ink'></div></div>");

  ink.css(style);
  button.append(ink);

  setTimeout(function() {
    window.location = button[0].href;
  }, 300);
}

$(document).ready(ready);
$(document).on("page:load", ready);
