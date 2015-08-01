lists_file = 'db/support/lists.yml'

YAML.load_file(lists_file).map do |q|
  list = List.new
  list.save
end

30.times do
  data = JSON.load(open("http://uifaces.com/api/v1/random"))
  user = User.new
  user.email = "#{data['username']}@gmail.com"
  user.avatar_url = data['image_urls']['epic']
  user.alias = data['username']
  user.save
  puts "welcome #{user.alias}"
end

artists_file = 'db/support/artists.yml'
YAML.load_file(artists_file).map do |q|
  artist = Artist.new
  artist.name = q['name']
  artist.save
end

albums_file = 'db/support/albums.yml'
YAML.load_file(albums_file).map do |q|
  album = Album.new
  album.title = q['title']
  album.user_id = rand(User.count)
  album.list_id = q['list_id']
  album.artist_id = q['artist_id']
  album.featured = q['featured']
  album.save
end