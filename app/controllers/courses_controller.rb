class CoursesController < ApplicationController
  require "courses_helper"
  require "uri"
  require "metadown"

  def index
    @pages = CoursesHelper.get_pages
  end

  def course_page
    @current_page = CoursesHelper.get_current_page request

    @url = "#{request.protocol}#{request.host_with_port}/courses/#{@current_page}"
    @pages = CoursesHelper.get_pages
    @page = @pages[@current_page]

    @content = @page["content"].html_safe
  end
end
