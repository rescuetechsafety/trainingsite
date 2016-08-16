module CoursesHelper
  require 'pry'

  def self.get_current_page(request)
    split_url = URI(request.fullpath).path.split('/')
    page = split_url.last

    page
  end

  def self.get_page_data(path)
    markdown_file = File.read path
    html_content = Metadown.render markdown_file
    metadata = html_content.metadata

    data = {"html" => html_content, "metadata" => metadata}

    data
  end

  def self.get_pages
    pages = Hash.new()

    pages_path = "#{Dir.pwd}/app/views/courses/"
    not_valid_file = [".", "..", ".DS_Store", "index.html.haml", "course_page.html.haml"]

    Dir.open pages_path do |dir|
      dir.each do |page|
        if not not_valid_file.include? page
          basename = File.basename page, '.md'
          file = get_page_data "#{pages_path}#{page}"

          page = Hash.new()
          page["file_name"] = page
          page["basename"] = basename
          page["metadata"] = file["metadata"]
          page["content"] = file["html"]["output"]

          pages[page["basename"]] = page
        end
      end
    end

    pages
      .sort_by {|name, page_data| page_data["metadata"]["order"]}
      .to_h
  end
end
