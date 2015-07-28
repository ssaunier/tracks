class AlbumsController < ApplicationController
  before_action :find_album, only: [:upvote, :unvote, :get_album]
  respond_to :json, only: [:get_album]

  def upvote
    @album.liked_by current_user
    render nothing: true
  end

  def unvote
    @album.unliked_by current_user
    render nothing: true
  end

  def upcoming
    @albums = Album.where(featured: false)
  end

  def get_album

  end

  private

  def find_album
    @album = Album.find(params[:id])
  end
end
