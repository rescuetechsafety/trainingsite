// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(ready);
$(document).on("page:load", ready);

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
