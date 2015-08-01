class AddArtistRefToAlbums < ActiveRecord::Migration
  def change
    add_reference :albums, :artist, index: true
    add_foreign_key :albums, :artists
  end
end
