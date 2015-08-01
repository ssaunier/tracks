class RemoveTaglineFromAlbum < ActiveRecord::Migration
  def change
    remove_column :albums, :tagline, :string
  end
end
