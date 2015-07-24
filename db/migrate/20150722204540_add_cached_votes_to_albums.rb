class AddCachedVotesToAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :cached_votes_up, :integer, :default => 0
    Album.find_each(&:update_cached_votes)
  end

end