class LandingController < ApplicationController
  def index
    @img_path_array = Dir.entries("public/slider_images").select{ |i| i[/\.jpe?g$/] }.sort.collect {|i| "/slider_images/" + i }
  end
end
