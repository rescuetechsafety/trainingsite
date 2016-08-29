
class SitemapController < ApplicationController
  layout nil
  require "courses_helper"

  def index
    @pages = CoursesHelper.get_pages
    @base_url = "#{request.protocol}#{request.host_with_port}"

    respond_to do |format|
      format.xml
    end
  end
end
