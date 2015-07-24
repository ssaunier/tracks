class AddTaglineToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :tagline, :string
  end
end
