
$(document).on("click", "[js-expand]", function () {
  $(this).closest("[js-course]").toggleClass("s-expanded");
});
