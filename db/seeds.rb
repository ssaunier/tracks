# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

lists_file = 'db/support/lists.yml'

YAML.load_file(lists_file).map do |q|
  list = List.new
  list.save
end


users_file = 'db/support/users.yml'
YAML.load_file(users_file).map do |q|
  data = JSON.load(open("http://uifaces.com/api/v1/random"))
  user = User.new
  user.email = "#{data['username']}@gmail.com"
  user.avatar_url = data['image_urls']['epic']
  user.alias = data['username']
  user.save
  puts "welcome #{user.alias}"
end

albums_file = 'db/support/albums.yml'
YAML.load_file(albums_file).map do |q|
  album = Album.new
  album.title = q['title']
  album.user_id = q['user_id']
  album.list_id = q['list_id']
  album.tagline = q['tagline']
  album.save
end