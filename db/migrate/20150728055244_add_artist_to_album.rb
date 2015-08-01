class AddArtistToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :artist, :string
  end
end
