
$(document).ready ready
$(document).on "page:load", ready

ready = ->
  $("[js-course]").each ->
    course = $(this)
    $(this).find("[js-expand]").on "click", ->
      course.toggleClass "s-expanded"
