class AlbumsController < ApplicationController
  before_action :find_album, only: [:upvote, :unvote]
  def index
    @lists = List.all
  end

  def upvote
    @album.liked_by current_user
    render nothing: true
  end

  def unvote
    @album.unliked_by current_user
    render nothing: true
  end

  private

  def find_album
    @album = Album.find(params[:id])
  end
end
