
$(document).ready(coursesReady);
$(document).on("page:load", coursesReady);

var coursesReady = function() {
  $("[js-course]").each(function() {
    var course = $(this);
    course.find("[js-expand]").on("click", function() {
      course.toggleClass("s-expanded")
    });
  });
};
