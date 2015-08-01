json.extract! album, :id, :title, :cached_votes_up

json.user do
  json.extract! album.user, :id, :alias, :avatar_url
end

json.artist do
  json.extract! album.artist, :id, :name
end