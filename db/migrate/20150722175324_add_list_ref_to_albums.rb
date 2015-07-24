class AddListRefToAlbums < ActiveRecord::Migration
  def change
    add_reference :albums, :list, index: true
    add_foreign_key :albums, :lists
  end
end
