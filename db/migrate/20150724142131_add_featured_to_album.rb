class AddFeaturedToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :featured, :boolean
  end
end
