json.lists do
  json.array! @lists do |list|
    json.albums do
      json.array! list.albums.order(cached_votes_up: :desc) do |album|
        json.partial! 'albums/album', album: album
      end
    end
  end
end