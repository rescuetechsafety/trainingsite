
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require fastclick
//= require analytics
//= require_tree .
//= require turbolinks

document.addEventListener("turbolinks:load", function () {
  track();

  // init fastclick
  new FastClick(document.body);
});

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

  if (button[0].href) {
    setTimeout(function () {
      Turbolinks.visit(button[0].href);
    }, 300);
  }
});

$(document).on("click", "[js-modal-toggle]", function (e) {
  if ($(this)[0] === e.target) {
    var name = $(this).attr("js-modal-toggle");
    toggleModal(name);
  }
});

function track () {
  ga("set", "page", location.pathname);
  ga("send", "pageview");
}

function toggleModal (name) {
  var el = $("[js-modal=" + name +"]"),
      active = el.is(".s-active"),
      modalItems = el.find(".modal--content").children();
  
  if (active) {
    modalItems.each(function (i, child) {
      $(child).toggleClass("s-active");
    });

    toggleBlur();
    el.toggleClass("s-active");

    setTimeout(function () {
      // Don't toggle in CSS - must be set first for CSS
      // animations to work right
      el.css({
        "display": "none",
        "bottom": "100%"
      });
    }, modalItems.length * 50 + 400);

    $("html, body").css({ "overflow-y": "" });
    
  } else {
    toggleBlur();
    el.css({
      "display": "flex",
      "bottom": 0
    });
    el.toggleClass("s-active");

    setTimeout(function () {
      modalItems.each(function (i, child) {
        setTimeout(function () {
          $(child).toggleClass("s-active");
        }, 50 * (i + 1))
      });
    }, 100);

    $("html, body").css({ "overflow-y": "hidden" });
  }
}

function toggleBlur () {
  $(".wrapper").toggleClass("s-blurred");
}
