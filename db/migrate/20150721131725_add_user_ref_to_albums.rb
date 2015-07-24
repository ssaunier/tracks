class AddUserRefToAlbums < ActiveRecord::Migration
  def change
    add_reference :albums, :user, index: true
    add_foreign_key :albums, :users
  end
end
